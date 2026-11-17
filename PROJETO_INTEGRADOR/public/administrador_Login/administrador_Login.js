const botao_Enviar = document.getElementById('form-login');

// SEMPRE QUE FOR FORMULÁRIO O EVENTO É SUBMIT
botao_Enviar.addEventListener('submit', logar_Administrador); 

// PREVINE O ENVIO PADRÃO DO FORMULÁRIO
async function logar_Administrador(event) {
  event.preventDefault(); 

  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  try {
    const resposta = await fetch('/Administrador_Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha })
    });

    const resultado = await resposta.json();

    if (resposta.ok) {
      // Redireciona para a tela protegida
      window.location.href = '../fiel_Cadastro/fiel_cadastro.html'; 
    } else {
      alert(resultado.message || 'Usuário ou senha incorretos!');
    }

  } catch (error) {
    console.error('Erro no login:', error);
    alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
  }
}
