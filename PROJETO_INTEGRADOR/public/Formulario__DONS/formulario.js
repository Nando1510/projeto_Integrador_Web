tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    600: '#059669',
                    700: '#047857',
                }
            }
        }
    }
}

const GIFTS_MAP = {
    'A': { name: 'Administração / Governo', icon: 'fa-sitemap' },
    'B': { name: 'Artesanato / Habilidade Manual', icon: 'fa-hammer' },
    'C': { name: 'Comunicação / Música', icon: 'fa-music' },
    'D': { name: 'Contribuição / Liberalidade', icon: 'fa-hand-holding-dollar' },
    'E': { name: 'Discernimento de Espíritos', icon: 'fa-eye' },
    'F': { name: 'Ensino / Mestre', icon: 'fa-book-open' },
    'G': { name: 'Evangelismo', icon: 'fa-bullhorn' },
    'H': { name: 'Exortação / Aconselhamento', icon: 'fa-comments' },
    'I': { name: 'Fé', icon: 'fa-mountain' },
    'J': { name: 'Hospitalidade', icon: 'fa-door-open' },
    'L': { name: 'Intercessão / Oração', icon: 'fa-hands-praying' },
    'M': { name: 'Liderança / Presidir', icon: 'fa-user-tie' },
    'N': { name: 'Misericórdia / Compaixão', icon: 'fa-heart' },
    'O': { name: 'Pastoral / Cuidado', icon: 'fa-hands-holding' },
    'P': { name: 'Palavra de Conhecimento', icon: 'fa-brain' },
    'Q': { name: 'Palavra de Sabedoria', icon: 'fa-compass' },
    'R': { name: 'Serviço / Diaconia', icon: 'fa-hand-holding-heart' },
    'S': { name: 'Socorro / Ajuda Prática', icon: 'fa-hands-helping' },
    'T': { name: 'Mundo / Missionário / Apóstolo', icon: 'fa-globe' }
};

const QUESTIONS_DATA = [
    { id: 1, gift: 'A', text: 'Tenho facilidade para organizar tarefas, alinhar horários e estruturar planos para alcançar metas da igreja.' },
    { id: 2, gift: 'J', text: 'Sinto prazer em abrir minha casa e acolher pessoas de fora ou da igreja com carinho e boa comida.' },
    { id: 3, gift: 'N', text: 'Consigo me compadecer profundamente dos necessitados e enfermos, buscando maneiras de consolá-los.' },
    { id: 4, gift: 'D', text: 'Contribuo financeiramente com alegria para obras e projetos missionários além do meu dízimo habitual.' },
    { id: 5, gift: 'F', text: 'Gosto de estudar e pesquisar a Bíblia minuciosamente para explicar verdades bíblicas com clareza aos outros.' },
    { id: 6, gift: 'G', text: 'Tenho facilidade e desejo constante de iniciar conversas sobre Jesus com pessoas não crentes.' },
    { id: 7, gift: 'H', text: 'Costumo encorajar e aconselhar pessoas que estão passando por momentos de dúvida, dor ou fraqueza espiritual.' },
    { id: 8, gift: 'I', text: 'Mesmo em situações aparentemente impossíveis, mantenho uma confiança inabalável nas promessas de Deus.' },
    { id: 9, gift: 'E', text: 'Consigo perceber rapidamente se o ensino ou o comportamento de alguém é genuíno ou se há intenções falsas.' },
    { id: 10, gift: 'L', text: 'Tenho o hábito diário de orar e interceder prolongadamente por pessoas, pela igreja e por causas específicas.' },
    { id: 11, gift: 'M', text: 'Sinto-me à vontade ao liderar grupos, direcionar pessoas e assumir responsabilidades em projetos.' },
    { id: 12, gift: 'O', text: 'Gosto de acompanhar o crescimento espiritual de outras pessoas e cuidar do bem-estar delas ao longo do tempo.' },
    { id: 13, gift: 'P', text: 'Sinto que Deus me concede compreensões profundas de verdades bíblicas que trazem clareza a temas difíceis.' },
    { id: 14, gift: 'Q', text: 'Consigo aplicar princípios bíblicos práticos para resolver problemas e conflitos complexos no dia a dia.' },
    { id: 15, gift: 'R', text: 'Prefiro trabalhar nos bastidores realizando tarefas práticas do que estar em evidência na frente do público.' },
    { id: 16, gift: 'S', text: 'Sempre identifico necessidades práticas ao meu redor e prontamente me disponho a ajudar a supri-las.' },
    { id: 17, gift: 'B', text: 'Tenho habilidade e gosto em trabalhar com trabalhos manuais, artes, carpintaria, som ou manutenção.' },
    { id: 18, gift: 'C', text: 'Uso a música, o louvor ou expressões artísticas de forma fluida para conduzir a igreja à adoração.' },
    { id: 19, gift: 'T', text: 'Tenho um forte desejo de alcançar pessoas de diferentes culturas, cidades ou grupos sociais marginalizados.' },
    { id: 20, gift: 'A', text: 'Gosto de delegar tarefas, organizar comissões e garantir que os eventos aconteçam com ordem e eficiência.' },
    { id: 21, gift: 'J', text: 'Minha casa costuma ser um ponto de encontro onde as pessoas se sentem aceitas, confortáveis e amadas.' },
    { id: 22, gift: 'N', text: 'Visitar hospitais, asilos ou pessoas em situação de vulnerabilidade é uma atividade que enche meu coração.' },
    { id: 23, gift: 'D', text: 'Sinto satisfação em ofertar recursos expressivos para apoiar pessoas em crise financeira ou ministérios.' },
    { id: 24, gift: 'F', text: 'Dedico bastante tempo preparando estudos bíblicos, verificando o contexto e o significado original do texto.' },
    { id: 25, gift: 'G', text: 'Busco ativamente criar pontes e amizades com pessoas afastadas da fé para apresentar o Evangelho.' },
    { id: 26, gift: 'H', text: 'Pessoas costumam me procurar buscando orientação, conselho e consolo em momentos difíceis de suas vidas.' },
    { id: 27, gift: 'I', text: 'Consigo ver o potencial de Deus na vida das pessoas e em projetos, mesmo quando tudo parece incerto.' },
    { id: 28, gift: 'E', text: 'Sinto uma sensibilidade interna rápida para discernir quando algo não vem do Espírito de Deus.' },
    { id: 29, gift: 'L', text: 'Frequentemente coloco os problemas e sofrimentos dos outros em minhas orações secretas.' },
    { id: 30, gift: 'M', text: 'As pessoas tendem a me seguir e confiar nas orientações que dou para o andamento de um grupo.' },
    { id: 31, gift: 'O', text: 'Preocupo-me verdadeiramente quando alguém se afasta da comunidade e busco trazer essa pessoa de volta.' },
    { id: 32, gift: 'P', text: 'Gosto de estudar a teologia e a doutrina bíblica para organizar o conhecimento de forma lógica.' },
    { id: 33, gift: 'Q', text: 'Consigo dar soluções simples e sábias para impasse éticos, espirituais ou práticos das pessoas.' },
    { id: 34, gift: 'R', text: 'Fico feliz em realizar trabalhos simples e práticos na igreja, sem necessidade de reconhecimento público.' },
    { id: 35, gift: 'S', text: 'Estou sempre pronto para aliviar a carga de outras pessoas assumindo afazeres práticos do dia a dia.' },
    { id: 36, gift: 'B', text: 'Sinto prazer em desenhar, construir, consertar ou ornamentar espaços para o culto e reuniões.' },
    { id: 37, gift: 'C', text: 'Tenho aptidão técnica ou artística para edificar a igreja através do louvor.' },
    { id: 38, gift: 'T', text: 'Sinto uma inquietação e paixão no coração por ver igrejas plantadas ou comunidades não alcançadas.' },
    { id: 39, gift: 'A', text: 'Consigo estruturar etapas, cronogramas e orçamentos para grandes iniciativas ou departamentos.' },
    { id: 40, gift: 'J', text: 'Não me importo de alterar minha rotina para acolher visitantes ou hospedar pregadores e missionários.' },
    { id: 41, gift: 'N', text: 'Sinto dor no coração ao ver alguém sofrendo e não sossego enquanto não ajudo a diminuir essa dor.' },
    { id: 42, gift: 'D', text: 'Administro meu dinheiro com rigor para poder ter sempre uma reserva para doar aos necessitados.' },
    { id: 43, gift: 'F', text: 'Fico empolgado quando vejo pessoas aprendendo e compreendendo a Palavra através do meu ensino.' },
    { id: 44, gift: 'G', text: 'Consigo explicar o plano de salvação de maneira simples, impactante e compreensível para qualquer pessoa.' },
    { id: 45, gift: 'H', text: 'Minhas palavras costumam desafiar as pessoas a mudarem de vida e se reaproximarem de Deus.' },
    { id: 46, gift: 'I', text: 'Em momentos de crise na igreja, sou o primeiro a incentivar todos a continuarem crendo na intervenção divina.' },
    { id: 47, gift: 'E', text: 'Identifico facilmente motivações egocêntricas ou segundas intenções por trás de atitudes aparentemente religiosas.' },
    { id: 48, gift: 'L', text: 'Tenho convicção de respostas claras de Deus para as orações diárias que faço pela vida de outros.' },
    { id: 49, gift: 'M', text: 'Tenho facilidade para motivar equipes e manter o entusiasmo de todos para alcançar objetivos em comum.' },
    { id: 50, gift: 'O', text: 'Assumo espontaneamente o papel de cuidar, aconselhar e proteger espiritualmente pessoas mais novas na fé.' },
    { id: 51, gift: 'P', text: 'Tenho facilidade para lembrar de passagens bíblicas e correlacioná-las em situações do cotidiano.' },
    { id: 52, gift: 'Q', text: 'Diante de decisões difíceis, costumo receber orientações bíblicas muito lúcidas para a direção certa.' },
    { id: 53, gift: 'R', text: 'Prefiro servir na organização de mesas, limpeza ou recepção a ter que falar em público.' },
    { id: 54, gift: 'S', text: 'Gosto de dar suporte prático aos líderes da igreja para que eles tenham tempo livre para orar e ensinar.' },
    { id: 55, gift: 'B', text: 'Tenho interesse em aprender e operar equipamentos de transmissão, informática, iluminação ou artes visuais.' },
    { id: 56, gift: 'C', text: 'Sinto a presença de Deus ao usar dons musicais ou poéticos para comunicar a mensagem do Evangelho.' },
    { id: 57, gift: 'T', text: 'Consigo me adaptar muito facilmente a novos costumes, culturas e estilos de vida sem julgar o próximo.' },
    { id: 58, gift: 'A', text: 'Percebo rapidamente quando um evento da igreja está desorganizado e sei exatamente como corrigi-lo.' },
    { id: 59, gift: 'J', text: 'Gosto de planejar momentos de integração e comunhão para que os recém-chegados se sintam em família.' },
    { id: 60, gift: 'N', text: 'Trato pessoas marginalizadas com respeito, dignidade e afeto quando muitos tendem a ignorá-las.' },
    { id: 61, gift: 'D', text: 'Considero meus bens materiais e recursos financeiros como instrumentos pertencentes a Deus para Abençoar.' },
    { id: 62, gift: 'F', text: 'Incomoda-me ver doutrinas ou textos bíblicos sendo ensinados de forma incorreta ou fora de contexto.' },
    { id: 63, gift: 'G', text: 'Alegro-me profundamente ao ver uma pessoa entregando sua vida a Cristo através do meu testemunho.' },
    { id: 64, gift: 'H', text: 'Sei como exortar e corrigir uma pessoa em erro com amor sem fazê-la desistir ou se irritar.' },
    { id: 65, gift: 'I', text: 'Costumo arriscar e tomar iniciativas ousadas para Deus quando outros hesitam por medo do insucesso.' },
    { id: 66, gift: 'E', text: 'Tenho percepção apurada sobre se um ambiente espiritual está sob opressão ou debaixo da paz de Deus.' },
    { id: 67, gift: 'L', text: 'A oração não é um dever pesado para mim, mas uma fonte de descanso e comunhão real com o Pai.' },
    { id: 68, gift: 'M', text: 'Consigo enxergar o quadro geral de um projeto e direcionar as pessoas com sabedoria para atingir a meta.' },
    { id: 69, gift: 'O', text: 'Disponho do meu tempo para ouvir, aconselhar e caminhar junto com pessoas angustiadas.' },
    { id: 70, gift: 'P', text: 'Dedico-me com afinco ao estudo da Bíblia para obter conhecimentos sólidos sobre a teologia cristã.' },
    { id: 71, gift: 'Q', text: 'Diante de dilemas interpessoais complexos, trago perspectivas simples que trazem paz e alinhamento.' },
    { id: 72, gift: 'R', text: 'Sirvo voluntariamente em tarefas braçais ou simples sem esperar elogios ou posições de destaque.' },
    { id: 73, gift: 'S', text: 'Estou sempre atento para auxiliar líderes e irmãos no suporte logístico de reuniões e eventos.' },
    { id: 74, gift: 'B', text: 'Gosto de preparar materiais visuais, cenários ou estruturas físicas para melhorar a experiência do culto.' },
    { id: 75, gift: 'C', text: 'Acredito que a música e as artes são canais poderosos para tocar a alma e revelar a beleza de Deus.' },
    { id: 76, gift: 'T', text: 'Sinto compaixão e amor fervoroso por povos e comunidades que ainda não têm a Bíblia em sua língua.' },
    { id: 77, gift: 'A', text: 'Consigo gerenciar eficientemente relatórios, cadastros e a parte administrativa das atividades da igreja.' },
    { id: 78, gift: 'J', text: 'Sinto enorme alegria quando faço refeições para grupos e vejo pessoas desfrutando da comunhão.' },
    { id: 79, gift: 'N', text: 'Tenho paciência para cuidar e estar ao lado de pessoas idosas, doentes ou acamadas por longos períodos.' },
    { id: 80, gift: 'D', text: 'Sinto urgência em ajudar com doações sigilosas para atender necessidades urgentes de famílias.' },
    { id: 81, gift: 'F', text: 'Gosto de transformar temas difíceis da Teologia em lições práticas e simples de assimilar.' },
    { id: 82, gift: 'G', text: 'Tenho facilidade para conectar passagens do cotidiano ao Evangelho em conversas informais com conhecidos.' },
    { id: 83, gift: 'H', text: 'Consigo incentivar pessoas desanimadas a descobrirem seus próprios dons e voltarem a servir.' },
    { id: 84, gift: 'I', text: 'Não me abalo diante de escassez de recursos quando estou certo de que um projeto vem da vontade de Deus.' },
    { id: 85, gift: 'E', text: 'Identifico com facilidade a diferença entre um problema puramente emocional e um combate espiritual.' },
    { id: 86, gift: 'L', text: 'Gosto de participar de vigílias e relógios de oração, mantendo foco contínuo na intercessão.' },
    { id: 87, gift: 'M', text: 'Sei como organizar pessoas, distribuir funções e inspirá-las para que trabalhem em unidade.' },
    { id: 88, gift: 'O', text: 'Gosto de ligar, visitar ou mandar mensagens regulares para saber como estão os irmãos do meu grupo.' },
    { id: 89, gift: 'P', text: 'Tenho um desejo ardente de buscar a verdade das Escrituras e tirar dúvidas teológicas difíceis.' },
    { id: 90, gift: 'Q', text: 'Sinto que o Espírito me dá palavras de sabedoria nos momentos em que preciso responder a perguntas difíceis.' },
    { id: 91, gift: 'R', text: 'Estou pronto para ajudar nas tarefas diárias da igreja, como lavar louça, arrumar cadeiras ou organizar pastas.' },
    { id: 92, gift: 'S', text: 'Gosto de dar suporte a outras pessoas para que elas desempenhem melhor seus dons na liderança.' },
    { id: 93, gift: 'B', text: 'Sinto satisfação ao criar artes gráficas, vídeos ou elementos decorativos para divulgar a igreja.' },
    { id: 94, gift: 'C', text: 'Sinto facilidade para expressar louvor a Deus e edificar as pessoas através do canto ou de instrumentos.' },
    { id: 95, gift: 'T', text: 'Gostaria de participar ativamente da abertura de novas frentes de trabalho ou congregações em locais distantes.' },
    { id: 96, gift: 'A', text: 'Prefiro seguir uma rotina bem planejada e organizada a atuar de forma improvisada ou sem estrutura.' },
    { id: 97, gift: 'J', text: 'Preocupo-me em fazer com que os recém-chegados no culto sejam bem recebidos na porta da igreja.' },
    { id: 98, gift: 'N', text: 'Tenho uma empatia natural para acolher e escutar sem julgar pessoas com problemas e vícios.' },
    { id: 99, gift: 'D', text: 'Gosto de dar presentes ou ofertas generosas sem que ninguém saiba quem foi o doador.' },
    { id: 100, gift: 'F', text: 'Sinto grande satisfação quando preparo apostilas, resumos ou materiais didáticos de estudo bíblico.' },
    { id: 101, gift: 'G', text: 'Tenho facilidade em responder objeções comuns que pessoas não crentes têm sobre a fé cristã.' },
    { id: 102, gift: 'H', text: 'Consigo impulsionar os irmãos a colocarem sua fé em prática através de palavras motivadoras e firmes.' },
    { id: 103, gift: 'I', text: 'Tenho grande facilidade para transmitir segurança e paz para o grupo quando atravessamos provações.' },
    { id: 104, gift: 'E', text: 'Consigo perceber quando ensinamentos e teorias humanas tentam se esgueirar no meio da igreja.' },
    { id: 105, gift: 'L', text: 'Costumo receber pedidos de oração constantes dos meus amigos e irmãos por saberem do meu compromisso em orar.' },
    { id: 106, gift: 'M', text: 'Fico confortável ao assumir a liderança em momentos de confusão para dar direção clara a todos.' },
    { id: 107, gift: 'O', text: 'Tenho paciência para caminhar no ritmo dos mais fracos espiritualmente, orientando-os com amor.' },
    { id: 108, gift: 'P', text: 'Sinto alegria em passar horas lendo livros teológicos e passagens bíblicas para aprofundar minha fé.' },
    { id: 109, gift: 'Q', text: 'As pessoas frequentemente me dizem que minhas respostas as ajudaram a tomar a decisão correta.' },
    { id: 110, gift: 'R', text: 'Acho satisfatório preparar a infraestrutura física de um evento para que tudo funcione perfeitamente.' },
    { id: 111, gift: 'S', text: 'Sinto prazer em resolver pendências práticas cotidianas dos líderes para que eles foquem no ministério.' },
    { id: 112, gift: 'B', text: 'Gosto de manusear ferramentas, arrumar instalações elétricas, som ou cuidar do espaço da igreja.' },
    { id: 113, gift: 'C', text: 'Uso a música e as artes não para me projetar, mas exclusivamente para glorificar a Deus e edificar.' },
    { id: 114, gift: 'T', text: 'Sinto atração por trabalhos de evangelização em praças, presídios, ruas ou outras nações.' },
    { id: 115, gift: 'A', text: 'Consigo coordenar com facilidade os horários, escalas e atribuições de voluntários em um projeto.' },
    { id: 116, gift: 'J', text: 'Gosto de transformar ambientes frios em locais acolhedores onde as pessoas desejam permanecer.' },
    { id: 117, gift: 'N', text: 'Sinto forte inclinação para apoiar financeiramente ou voluntariamente orfanatos, asilos e abrigos.' },
    { id: 118, gift: 'D', text: 'Ofereço meus recursos com desprendimento, sabendo que tudo quanto tenho pertence a Deus.' },
    { id: 119, gift: 'F', text: 'Consigo identificar quando a aplicação de um texto bíblico está sendo distorcida e corrigir educadamente.' },
    { id: 120, gift: 'G', text: 'Sinto alegria imensa ao ver pessoas se reconciliando com Deus por meio de conversas pessoais.' },
    { id: 121, gift: 'H', text: 'Consigo exortar irmãos em falta amorosamente para que eles voltem ao caminho da comunhão.' },
    { id: 122, gift: 'I', text: 'Deus costuma responder minhas orações com livramentos e providências visíveis em momentos decisivos.' },
    { id: 123, gift: 'E', text: 'Consigo discernir com clareza a diferença entre o que é fruto da carne e o que é mover genuíno do Espírito.' },
    { id: 124, gift: 'L', text: 'Dedico momentos de intercessão específicos pelas lideranças da igreja e autoridade constituidas.' },
    { id: 125, gift: 'M', text: 'Gosto de ver o crescimento do trabalho em equipe e incentivar cada membro a dar o seu melhor.' },
    { id: 126, gift: 'O', text: 'Tenho compaixão e tempo para acompanhar o restauração de pessoas machucadas emocionalmente.' },
    { id: 127, gift: 'P', text: 'Sinto satisfação em encontrar pérolas doutrinárias nas Escrituras e compartilhá-las no momento oportuno.' },
    { id: 128, gift: 'Q', text: 'Sinto a direção do Espírito Santo me mostrando qual o melhor conselho a dar em situações extremas.' },
    { id: 129, gift: 'R', text: 'Sinto prazer em realizar tarefas simples e práticas sem necessidade de aplausos ou gratificação.' },
    { id: 130, gift: 'S', text: 'Estou sempre disposto a dar carona, carregar pesos ou ajudar irmãos em tarefas físicas urgentes.' },
    { id: 131, gift: 'B', text: 'Consigo utilizar minhas habilidades manuais/técnicas para economizar recursos e apoiar a igreja.' },
    { id: 132, gift: 'C', text: 'Dedico-me com disciplina ao ensaio musical/artístico com o objetivo único de servir ao Senhor com excelência.' },
    { id: 133, gift: 'T', text: 'Sinto paixão por pregar ou ensinar o Evangelho em locais onde a Igreja ainda não foi established.' }
];

const QUESTIONS_PER_PAGE = 10;
const TOTAL_QUESTIONS = QUESTIONS_DATA.length;
const TOTAL_PAGES = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_PAGE);

let currentPage = 1;
let userAnswers = {};

const OPTIONS = [
    { text: '(A) Constantemente; definitivamente certo.', value: '3' },
    { text: '(B) A maioria das vezes; normalmente certo.', value: '2' },
    { text: '(C) Algumas vezes, de vez em quando.', value: '1' },
    { text: '(D) Nunca, jamais.', value: '0' }
];

document.addEventListener('DOMContentLoaded', () => {
    const cpfInput = document.getElementById('user-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
        });
    }
    renderPage(currentPage);
});

function renderPage(page) {
    const wrapper = document.getElementById('questions-wrapper');
    wrapper.innerHTML = '';

    const startIndex = (page - 1) * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, TOTAL_QUESTIONS);
    const pageQuestions = QUESTIONS_DATA.slice(startIndex, endIndex);

    pageQuestions.forEach((q, idx) => {
        const globalIndex = startIndex + idx + 1;
        const questionCard = document.createElement('div');
        // Cartão com fundo #ab3535 e texto em branco
        questionCard.className = 'rounded-2xl shadow-sm border border-red-900/30 p-5';
        questionCard.style.backgroundColor = '#04664d';
        questionCard.style.color = '#ffffff';
        questionCard.id = `q-card-${q.id}`;

        let optionsHTML = '';
        OPTIONS.forEach((opt, optIdx) => {
            const optionId = `q_${q.id}_opt_${optIdx}`;
            const isChecked = userAnswers[q.id] === opt.value ? 'checked' : '';

            optionsHTML += `
                <div class="relative flex items-center">
                    <input type="radio" id="${optionId}" name="q_${q.id}" value="${opt.value}" class="custom-radio sr-only" ${isChecked} onchange="handleSelectAnswer(${q.id}, '${opt.value}')">
                    <label for="${optionId}" class="w-full flex items-center p-3 rounded-xl border border-white/20 cursor-pointer text-white text-xs sm:text-sm font-medium transition hover:bg-white/10">
                        <span class="radio-indicator flex-shrink-0 w-4 h-4 rounded-full border-2 border-white/60 mr-3 flex items-center justify-center"></span>
                        <span class="select-none">${opt.text}</span>
                    </label>
                </div>
            `;
        });

        questionCard.innerHTML = `
            <div class="flex items-start space-x-3 mb-3">
                <span class="bg-white/20 text-white font-bold text-xs px-2 py-1 rounded">#${globalIndex}</span>
                <h3 class="text-sm sm:text-base font-semibold text-white">${q.text}</h3>
            </div>
            <div class="grid grid-cols-1 gap-2 pt-1">
                ${optionsHTML}
            </div>
        `;

        wrapper.appendChild(questionCard);
    });

    updateNavigationUI();
    hideValidationAlert();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSelectAnswer(questionId, value) {
    userAnswers[questionId] = value;
    const card = document.getElementById(`q-card-${questionId}`);
    if (card) card.classList.remove('border-yellow-300', 'ring-2', 'ring-yellow-300');
    hideValidationAlert();
}

function updateNavigationUI() {
    document.getElementById('progress-bar').style.width = `${(currentPage / TOTAL_PAGES) * 100}%`;
    document.getElementById('page-indicator').innerText = `Página ${currentPage} de ${TOTAL_PAGES}`;

    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * QUESTIONS_PER_PAGE, TOTAL_QUESTIONS);
    document.getElementById('questions-range').innerText = `Perguntas ${startIndex} a ${endIndex}`;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');

    if (currentPage === 1) btnPrev.classList.add('hidden');
    else btnPrev.classList.remove('hidden');

    if (currentPage === TOTAL_PAGES) {
        btnNext.classList.add('hidden');
        btnSubmit.classList.remove('hidden');
    } else {
        btnNext.classList.remove('hidden');
        btnSubmit.classList.add('hidden');
    }
}

function validateCurrentPage() {
    const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, TOTAL_QUESTIONS);
    const pageQuestions = QUESTIONS_DATA.slice(startIndex, endIndex);

    let firstUnansweredId = null;
    pageQuestions.forEach(q => {
        const card = document.getElementById(`q-card-${q.id}`);
        if (userAnswers[q.id] === undefined) {
            if (!firstUnansweredId) firstUnansweredId = q.id;
            if (card) card.classList.add('border-yellow-300', 'ring-2', 'ring-yellow-300');
        } else {
            if (card) card.classList.remove('border-yellow-300', 'ring-2', 'ring-yellow-300');
        }
    });

    if (firstUnansweredId !== null) {
        showValidationAlert('Por favor, responda todas as perguntas destacadas nesta página para continuar.');
        const targetCard = document.getElementById(`q-card-${firstUnansweredId}`);
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return false;
    }

    return true;
}

function showValidationAlert(msg) {
    document.getElementById('validation-message').innerText = msg;
    document.getElementById('validation-alert').classList.remove('hidden');
}

function hideValidationAlert() {
    document.getElementById('validation-alert').classList.add('hidden');
}

function goToNextPage() {
    if (validateCurrentPage() && currentPage < TOTAL_PAGES) {
        currentPage++;
        renderPage(currentPage);
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}

function submitQuiz() {
    const userName = document.getElementById('user-name').value.trim();
    const userCpf = document.getElementById('user-cpf').value.trim();
    const userChurch = document.getElementById('user-church').value.trim();

    if (!userName) {
        showValidationAlert('Por favor, digite seu nome completo no início da página.');
        document.getElementById('intro-card').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    if (!userCpf || userCpf.length !== 11) {
        showValidationAlert('Por favor, digite um CPF válido contendo exatamente 11 dígitos.');
        document.getElementById('intro-card').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    if (!userChurch) {
        showValidationAlert('Por favor, digite o nome da igreja no início da página.');
        document.getElementById('intro-card').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    if (!validateCurrentPage()) return;

    const giftScores = {};
    Object.keys(GIFTS_MAP).forEach(k => giftScores[k] = 0);

    QUESTIONS_DATA.forEach(q => {
        const val = parseInt(userAnswers[q.id] || '0', 10);
        if (GIFTS_MAP[q.gift]) giftScores[q.gift] += val;
    });

    const sortedGifts = Object.keys(giftScores).map(k => ({
        id: k,
        name: GIFTS_MAP[k].name,
        icon: GIFTS_MAP[k].icon,
        score: giftScores[k]
    })).sort((a, b) => b.score - a.score);

    displayResults(sortedGifts, userName, userChurch);
}

function displayResults(sortedGifts, userName, userChurch) {
    alert('Formulário enviado com Sucesso!!!');
    document.getElementById('quiz-form').classList.add('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('intro-card').classList.add('hidden');

    document.getElementById('res-name').innerText = userName;
    document.getElementById('res-church').innerText = userChurch;

    const topContainer = document.getElementById('top-gifts-container');
    topContainer.innerHTML = '';

    const top3 = sortedGifts.slice(0, 3);
    const rankLabels = ['1º Dom Principal', '2º Dom Secundário', '3º Dom Terciário'];

    top3.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'p-4 rounded-xl border bg-brand-50 border-brand-100 flex flex-col justify-between';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold uppercase text-brand-700">${rankLabels[index]}</span>
                <span class="text-lg font-bold">${item.score} pts</span>
            </div>
            <div class="flex items-center space-x-2">
                <i class="fa-solid ${item.icon} text-brand-600 text-lg"></i>
                <h4 class="font-bold text-slate-900 text-sm">${item.name}</h4>
            </div>
        `;
        topContainer.appendChild(card);
    });

    const chartContainer = document.getElementById('all-gifts-chart');
    chartContainer.innerHTML = '';

    sortedGifts.forEach((item) => {
        const percentage = Math.min(Math.round((item.score / 21) * 100), 100);
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between gap-2 text-xs sm:text-sm';
        row.innerHTML = `
            <div class="w-1/3 truncate font-medium text-slate-700">
                <i class="fa-solid ${item.icon} text-slate-400 w-4"></i> ${item.name}
            </div>
            <div class="w-2/3 flex items-center space-x-2">
                <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div class="bg-brand-600 h-full" style="width: ${percentage}%"></div>
                </div>
                <span class="font-bold w-8 text-right">${item.score}</span>
            </div>
        `;
        chartContainer.appendChild(row);
    });

    document.getElementById('results-card').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
    if (confirm('Deseja refazer o teste? Suas respostas atuais serão apagas.')) {
        userAnswers = {};
        currentPage = 1;
        document.getElementById('user-name').value = '';
        document.getElementById('user-cpf').value = '';
        document.getElementById('user-church').value = '';
        document.getElementById('quiz-form').classList.remove('hidden');
        document.getElementById('progress-container').classList.remove('hidden');
        document.getElementById('intro-card').classList.remove('hidden');
        document.getElementById('results-card').classList.add('hidden');
        renderPage(currentPage);
    }
}