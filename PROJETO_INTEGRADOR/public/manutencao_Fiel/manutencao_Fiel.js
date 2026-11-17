// ==========================================
// 1. ESTADO GLOBAL E CACHE DE USUÁRIOS
// ==========================================
let listaUsuariosCache = [];
let usuarioSelecionadoId = null;

// ==========================================
// 2. CARREGAR DADOS DA TABELA
// ==========================================
async function carregarDados() {
    try {
        const resposta = await fetch('/registros_Administrador');
        const dados = await resposta.json();
        listaUsuariosCache = dados; // Salva no cache

        const corpo = document.getElementById('corpo-tabela');
        corpo.innerHTML = '';

        dados.forEach(item => {
            const tr = document.createElement('tr');
            const id = item.customId; // ID Numérico Sequencial
            const nome = item.nome || '';
            const senha = item.senha || '';
            const criadoEm = item.createdAt ? new Date(item.createdAt).toLocaleString('pt-BR') : '';

            tr.innerHTML = `
                <td>${id}</td>
                <td>${nome}</td>
                <td>${senha}</td>
                <td>${criadoEm}</td>
                <td>
                    <span class="icon" onclick="iniciarEdicao(this, ${id})" title="Editar">✏️</span>
                    <span class="icon" onclick="excluirRegistro(${id})" title="Excluir">🗑️</span>
                </td>
            `;
            corpo.appendChild(tr);
        });
    } catch (err) {
        console.error('Erro ao carregar dados:', err);
    }
}

// ==========================================
// 3. EDIÇÃO INLINE E EXCLUSÃO NA TABELA
// ==========================================
function iniciarEdicao(el, id) {
    const tr = el.closest('tr');
    const cells = tr.querySelectorAll('td');
    
    // Alinha com as colunas Nome (índice 1) e Senha (índice 2)
    ['nome', 'senha'].forEach((field, idx) => {
        const td = cells[idx + 1];
        const valor = td.textContent;
        td.innerHTML = `<input class="edit-field" id="edit-${field}-${id}" value="${valor}">`;
    });

    el.textContent = '💾';
    el.onclick = () => salvarEdicao(id);
}

async function salvarEdicao(id) {
    const nome = document.getElementById(`edit-nome-${id}`).value.trim();
    const senha = document.getElementById(`edit-senha-${id}`).value.trim();

    try {
        // Rota correta alinhada com o server.js
        const res = await fetch(`/atualizar_Administrador/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, senha })
        });

        const resultado = await res.json();

        if (res.ok && resultado.success) {
            alert('Usuário atualizado com sucesso!');
            carregarDados();
        } else {
            alert('Erro ao salvar edição.');
        }
    } catch (err) {
        console.error(err);
        alert('Erro de conexão ao salvar.');
    }
}

async function excluirRegistro(id) {
    if (!confirm('Deseja realmente excluir este usuário?')) return;

    try {
        // Rota correta alinhada com o server.js
        const res = await fetch(`/excluir_Administrador/${id}`, { method: 'DELETE' });
        const resultado = await res.json();

        if (res.ok && resultado.success) {
            alert('Usuário excluído com sucesso!');
            carregarDados();
        } else {
            alert('Erro ao excluir registro: ' + (resultado.message || resultado.error || 'Erro desconhecido'));
        }
    } catch (err) {
        console.error(err);
        alert('Erro de conexão ao excluir.');
    }
}

// ==========================================
// 4. PESQUISA FILTRADA NA TABELA
// ==========================================
function pesquisando_Dados() {
    const inputPesquisaEl = document.getElementById('pesquisar');
    if (!inputPesquisaEl) return;

    const filtro = inputPesquisaEl.value.toLowerCase();
    const linhas = document.querySelectorAll('#corpo-tabela tr');

    const linhaMensagem = document.getElementById('linha-vazia');
    if (linhaMensagem) linhaMensagem.remove();

    let encontrou = false;

    linhas.forEach(tr => {
        if (tr.id === 'linha-vazia') return;
        
        const nome = tr.cells[1] ? tr.cells[1].textContent.toLowerCase() : '';
        const senha = tr.cells[2] ? tr.cells[2].textContent.toLowerCase() : '';
        const corresponde = nome.includes(filtro) || senha.includes(filtro);
        
        tr.style.display = corresponde ? '' : 'none';
        if (corresponde) encontrou = true;
    });

    if (!encontrou) {
        const tbody = document.getElementById('corpo-tabela');
        const tr = document.createElement('tr');
        tr.id = 'linha-vazia';
        tr.classList.add('mensagem-vazia');
        tr.innerHTML = `<td colspan="5">Nenhum registro encontrado.</td>`;
        tbody.appendChild(tr);
    }
}

const inputPesquisa = document.getElementById('pesquisar');
if (inputPesquisa) {
    inputPesquisa.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            pesquisando_Dados();
        }
    });
    inputPesquisa.addEventListener('input', pesquisando_Dados);
}

// ==========================================
// 5. VERIFICAÇÃO DE SESSÃO E LOGOUT
// ==========================================
// Rota correta de verificação de sessão de administrador
fetch('/verificar_sessao_administrador')
    .then(res => res.json())
    .then(data => {
        if (!data.logado) {
            alert('Você precisa estar logado!');
            window.location.href = '../login/login.html';
        } else {
            const nav = document.querySelector('.navbar .container-fluid');
            if (nav && !nav.querySelector('.navbar-text')) {
                const bemVindo = document.createElement('span');
                bemVindo.classList.add('navbar-text', 'ms-3');
                bemVindo.textContent = `Bem-vindo(a), ${data.nome}`;
                nav.appendChild(bemVindo);
            }
        }
    })
    .catch(err => console.error('Erro ao verificar sessão:', err));

function cadastro() {
    
       window.location.href = '../cadastro/cadastro.html';
}
    

function voltar() {
    const confirmar = confirm('Deseja realmente sair?');
    if (confirmar) {
       window.location.href = '../login/login.html';
    }
    return false;
}


// Inicializa o carregamento dos dados
carregarDados();