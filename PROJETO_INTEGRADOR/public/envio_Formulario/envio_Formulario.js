tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Pega a URL base atual (ex: http://localhost:3000) e aponta direto para a pasta correta do formulário
    const baseUrl = window.location.origin;
    const formUrl = `${baseUrl}/Formulario__DONS/formulario.html`;
    
    document.getElementById('form-link').value = formUrl;
});
async function handleSendEmail(event) {
    event.preventDefault();

    const email = document.getElementById('destinatario-email').value.trim();
    const subject = document.getElementById('email-subject').value.trim();
    const link = document.getElementById('form-link').value.trim();
    const message = document.getElementById('email-message').value.trim();

    if (!email) {
        showFeedback('Por favor, informe o e-mail do destinatário.', 'error');
        return;
    }

    showFeedback('Enviando e-mail, por favor aguarde...', 'success');

    try {
        const response = await fetch('/api/enviar-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message, link })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            showFeedback(`Sucesso! O link do formulário foi disparado por e-mail para ${email}.`, 'success');
            document.getElementById('destinatario-email').value = ''; // Limpa o campo
        } else {
            showFeedback('Erro ao enviar: ' + (data.error || 'Erro desconhecido'), 'error');
        }
    } catch (err) {
        console.error('Erro de conexão:', err);
        showFeedback('Erro de conexão com o servidor ao tentar enviar o e-mail.', 'error');
    }
}

function openMailClient() {
    const email = document.getElementById('destinatario-email').value.trim() || '';
    const subject = encodeURIComponent(document.getElementById('email-subject').value);
    const link = document.getElementById('form-link').value;
    const customMsg = document.getElementById('email-message').value;

    const body = encodeURIComponent(`${customMsg}\n\nLink de acesso:\n${link}`);
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function copyLinkForm() {
    const linkInput = document.getElementById('form-link');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(linkInput.value).then(() => {
        showFeedback('Link copiado com sucesso para a área de transferência!', 'success');
    }).catch(() => {
        showFeedback('Erro ao tentar copiar o link.', 'error');
    });
}

function showFeedback(msg, type) {
    const alertBox = document.getElementById('feedback-alert');
    const msgSpan = document.getElementById('feedback-message');

    msgSpan.innerText = msg;
    
    if (type === 'success') {
        alertBox.className = 'mb-6 p-4 rounded-xl text-sm flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800';
    } else {
        alertBox.className = 'mb-6 p-4 rounded-xl text-sm flex items-center justify-between bg-red-50 border border-red-200 text-red-700';
    }

    alertBox.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideFeedbackAlert() {
    document.getElementById('feedback-alert').classList.add('hidden');
}