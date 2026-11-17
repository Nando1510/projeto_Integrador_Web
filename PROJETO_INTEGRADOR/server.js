const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');

require('dotenv').config();

// Importando os Models
const Cadastro = require('./models/cadastro');
const Administrador = require('./models/Administrador');
const Igreja = require('./models/Igreja');

const app = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// MIDDLEWARES
// ==========================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// CONFIGURAÇÃO DA SESSÃO
// ==========================================

app.use(session({
  name: 'ipb.sid',
  secret: process.env.SESSION_SECRET || 'chaveSecretaDoAdministrador',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Desenvolvimento local com HTTP
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 // 1 hora
  }
}));

// ==========================================
// CONEXÃO COM O MONGODB
// ==========================================

mongoose.connect('mongodb://localhost:27017/igreja')
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro na conexão:', err));

// ==========================================
// ARQUIVOS ESTÁTICOS
// ==========================================

app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// PÁGINAS
// ==========================================

// ==========================================
// PÁGINAS (ROTA RAIZ E ESTÁTICOS)
// ==========================================

// Força o index.html da raiz da pasta public a abrir em localhost:3000
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'inicio', 'inicio.html')
  );
});

app.get('/cadastro', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'public', 'cadastro', 'cadastro.html')
  );
}); */

// ==========================================
// CADASTRO DE MEMBROS
// ==========================================

async function gerarCustomIdMembro() {
  const ultimo = await Cadastro.findOne().sort({ customId: -1 });
  if (ultimo && typeof ultimo.customId === 'number' && !isNaN(ultimo.customId)) {
    return ultimo.customId + 1;
  }
  return 1;
}

app.post('/api/cadastro', async (req, res) => {
  try {
    const customId = await gerarCustomIdMembro();

    const novoCadastro = new Cadastro({
      ...req.body,
      church: req.body.church || 'IPB Sapucaia do Sul',
      customId
    });

    const membroSalvo = await novoCadastro.save();

    res.status(201).json({
      success: true,
      message: 'Cadastro salvo com sucesso!',
      data: membroSalvo
    });

  } catch (err) {
    console.error('Erro ao salvar cadastro:', err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// ==========================================
// LISTAR MEMBROS
// ==========================================

app.get('/api/membros', async (req, res) => {
  try {
    const { church } = req.query;
    const filtro = (church && church !== 'Geral Presbiterial') ? { church } : {};

    const membros = await Cadastro.find(filtro).sort({ customId: 1 });
    res.json(membros);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// ATUALIZAR MEMBRO
// ==========================================

app.put('/api/membros/:id', async (req, res) => {
  const id = req.params.id;
  const { name, phone, church, ministry, gifts, status, statusText, history } = req.body;

  try {
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (phone !== undefined) updateData.phone = phone;
    if (church !== undefined) updateData.church = church;
    if (ministry !== undefined) updateData.ministry = ministry;
    if (gifts !== undefined) updateData.gifts = gifts;
    if (status !== undefined) updateData.status = status;
    if (statusText !== undefined) updateData.statusText = statusText;
    if (history !== undefined) updateData.history = history;

    const membroAtualizado = await Cadastro.findOneAndUpdate(
      { $or: [{ _id: id.length === 24 ? id : null }, { customId: Number(id) || 0 }] },
      { $set: updateData },
      { new: true }
    );

    if (!membroAtualizado) {
      return res.status(404).json({ success: false, error: 'Membro não encontrado' });
    }

    res.json({
      success: true,
      data: membroAtualizado
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// ==========================================
// EXCLUIR MEMBRO
// ==========================================

app.delete('/api/membros/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await Cadastro.findOneAndDelete({ customId: id });

    res.json({
      success: true,
      message: 'Membro excluído com sucesso!'
    });

  } catch (err) {
    console.error('Erro ao excluir membro:', err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// ==========================================
// ADMINISTRADOR
// ==========================================

async function gerarCustomId() {
  const ultima = await Administrador.findOne()
    .sort({ customId: -1 });

  return ultima ? ultima.customId + 1 : 1;
}

app.post('/salvar_Administrador', async (req, res) => {
  try {
    const { nome, senha } = req.body;

    const existente = await Administrador.findOne({ nome });

    if (existente) {
      return res.status(409).json({
        message: 'Este nome de administrador já está em uso.'
      });
    }

    const customId = await gerarCustomId();

    // Cria o objeto apenas com nome e senha (celular assume o default do schema)
    const administrador = new Administrador({
      customId,
      nome,
      senha
    });

    await administrador.save();

    res.status(201).json({
      message: 'Dados salvos com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao cadastrar administrador:', error);
    res.status(500).json({
      message: 'Erro ao salvar dados'
    });
  }
});

app.get('/registros_Administrador', async (req, res) => {
  try {
    const registros = await Administrador.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar registros'
    });
  }
});

app.put('/atualizar_Administrador/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, senha } = req.body;

  try {
    await Administrador.updateOne(
      { customId: id },
      { $set: { nome, senha } }
    );

    res.json({ success: true, message: 'Atualizado com sucesso!' });

  } catch (err) {
    res.status(500).json({ success: false, error: 'Erro ao atualizar registro' });
  }
});

app.delete('/excluir_Administrador/:customId', async (req, res) => {
  try {
    await Administrador.findOneAndDelete({
      customId: req.params.customId
    });

    res.json({ success: true, message: 'Registro excluído!' });

  } catch (error) {
    console.error('Erro ao excluir administrador:', error);
    res.status(500).json({ success: false, message: 'Erro ao excluir registro.' });
  }
});

// ==========================================
// LOGIN DO ADMINISTRADOR
// ==========================================

async function processarLoginAdmin(req, res) {
  const usuario = String(
    req.body.usuario ?? req.body.nome ?? ''
  ).trim();

  const senha = String(req.body.senha ?? '');

  if (!usuario || !senha) {
    return res.status(400).json({
      message: 'Informe o usuário e a senha.'
    });
  }

  try {
    const administrador = await Administrador.findOne({
      nome: usuario
    });

    if (!administrador || administrador.senha !== senha) {
      return res.status(401).json({
        message: 'Usuário ou senha inválidos!'
      });
    }

    req.session.regenerate((erro) => {
      if (erro) {
        console.error('Erro ao criar sessão:', erro);
        return res.status(500).json({
          message: 'Erro ao iniciar a sessão.'
        });
      }

      req.session.adminId = administrador.customId;
      req.session.adminNome = administrador.nome;

      req.session.save((erroSalvar) => {
        if (erroSalvar) {
          console.error('Erro ao salvar sessão:', erroSalvar);
          return res.status(500).json({
            message: 'Erro ao salvar a sessão.'
          });
        }

        return res.status(200).json({
          autenticado: true,
          logado: true,
          nome: administrador.nome,
          message: 'Login realizado com sucesso!'
        });
      });
    });

  } catch (error) {
    console.error('Erro no login do administrador:', error);
    res.status(500).json({
      message: 'Erro interno no servidor.'
    });
  }
}

app.post('/login', processarLoginAdmin);
app.post('/Administrador_Login', processarLoginAdmin);

function verificarSessaoAdministrador(req, res) {
  const logado = Boolean(
    req.session && req.session.adminId
  );

  return res.status(200).json({
    logado: logado,
    nome: logado ? req.session.adminNome : null
  });
}

app.get('/verificar_sessao_administrador', verificarSessaoAdministrador);
app.get('/verificar_sessao_admin', verificarSessaoAdministrador);

app.get('/logout_Administrador', (req, res) => {
  req.session.destroy((erro) => {
    if (erro) {
      console.error('Erro ao encerrar sessão:', erro);
      return res.status(500).send('Erro ao encerrar a sessão.');
    }

    res.clearCookie('ipb.sid');
    return res.redirect('/administrador_Login/administrador_Login.html');
  });
});

// ==========================================
// ROTAS DE IGREJAS
// ==========================================

app.get('/api/igrejas', async (req, res) => {
  try {
    const igrejas = await Igreja.find().sort({ nome: 1 });
    res.json(igrejas);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/igrejas', async (req, res) => {
  try {
    const { nome, cidade } = req.body;
    const nomeCompleto = cidade ? `${nome} - ${cidade}` : nome;

    const igrejaExistente = await Igreja.findOne({ nome: nomeCompleto });
    if (igrejaExistente) {
      return res.status(409).json({ success: false, error: 'Esta igreja já está cadastrada.' });
    }

    const novaIgreja = new Igreja({
      nome: nomeCompleto,
      cidade: cidade || 'Geral'
    });

    const salva = await novaIgreja.save();
    res.status(201).json({ success: true, data: salva });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('=================================');
  console.log('Servidor IPB rodando com sucesso!');
  console.log(`Início:   http://localhost:${PORT}/index/index.html`);
  console.log(`Cadastro: http://localhost:${PORT}/cadastro`);
  console.log(`Login-inicial: http://localhost:${PORT}/login_Inicio/login.html`)
  console.log('=================================');
});

const nodemailer = require('nodemailer');

// Configure o transportador de e-mail (Exemplo com Gmail)
// Dica: Se usar Gmail, você precisará gerar uma "Senha de App" (App Password) nas configurações da sua Conta Google.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cristaodejesus33@gmail.com',      // Coloque o seu e-mail aqui
    pass: 'ipbbrasil'    // Coloque a sua senha de aplicativo do Gmail
  }
});

// Rota para disparar o e-mail do formulário
app.post('/api/enviar-email', async (req, res) => {
  const { email, subject, message, link } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'E-mail do destinatário não informado.' });
  }

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: email,
    subject: subject,
    text: `${message}\n\nLink de acesso:\n${link}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #04664d;">Avaliação de Dons Espirituais - IPB</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p style="margin: 20px 0;">
          <a href="${link}" style="background-color: #04664d; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Acessar Formulário</a>
        </p>
        <p style="font-size: 12px; color: #666;">Se o botão não funcionar, copie e cole o link abaixo no seu navegador:<br>${link}</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ success: false, error: 'Erro ao conectar ou enviar o e-mail pelo servidor.' });
  }
});