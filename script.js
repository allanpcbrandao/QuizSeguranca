/**
 * Banco de Questões (30 perguntas no total)
 */
const questions = {
    escola: [
        {
            question: "Ao notar uma poça de água no corredor, o que você deve fazer?",
            options: [
                "Pular sobre ela",
                "Ignorar e continuar andando",
                "Avisar a limpeza ou algum funcionário da escola",
                "Correr para não escorregar"
            ],
            correct: 2
        },
        {
            question: "Onde devem ser armazenados os produtos químicos em uma escola?",
            options: [
                "Em qualquer prateleira disponível na sala de aula",
                "Em local ventilado, identificado e de acesso restrito aos alunos",
                "Dentro da mochila do professor para maior controle",
                "No banheiro da escola"
            ],
            correct: 1
        },
        {
            question: "Como você deve carregar sua mochila para evitar problemas de coluna?",
            options: [
                "Apoiada em um ombro só",
                "Com as alças bem soltas para baixo",
                "Carregando nas mãos",
                "Usando as duas alças bem ajustadas nas costas"
            ],
            correct: 3
        },
        {
            question: "O que fazer se um colega se machucar durante o recreio?",
            options: [
                "Dar um remédio por conta própria",
                "Chamar um professor ou inspetor imediatamente",
                "Fingir que não viu para não se envolver",
                "Rir da situação"
            ],
            correct: 1
        },
        {
            question: "Qual é a forma correta de descer as escadas na escola?",
            options: [
                "Correndo muito rápido",
                "Pulando de dois em dois degraus",
                "Andando devagar e segurando no corrimão",
                "Escorregando pelo corrimão"
            ],
            correct: 2
        },
        {
            question: "Por que é importante não correr nos corredores?",
            options: [
                "Para evitar colisões e quedas graves",
                "Para não cansar rápido antes da aula",
                "Para não fazer barulho",
                "Não há problema algum em correr"
            ],
            correct: 0
        },
        {
            question: "Qual é a forma mais eficaz de prevenir a transmissão de doenças infecciosas no ambiente escolar?",
            options: [
                "Tomar vitaminas todos os dias",
                "Evitar contato com qualquer colega",
                "Lavar as mãos com água e sabão frequentemente",
                "Usar luvas em todas as atividades escolares"
            ],
            correct: 2
        },
        {
            question: "Em caso de incêndio, qual deve ser a sua atitude ao ouvir o alarme?",
            options: [
                "Gritar e correr sem direção",
                "Esconder-se dentro do banheiro",
                "Manter a calma e seguir a rota de fuga orientada",
                "Tentar apagar o fogo sozinho com água"
            ],
            correct: 2
        },
        {
            question: "Por que não devemos balançar nas cadeiras da sala de aula?",
            options: [
                "Porque faz barulho e atrapalha a aula",
                "Pois a cadeira pode virar e causar um ferimento grave",
                "Porque arranha o piso da escola",
                "Para não incomodar o colega de trás"
            ],
            correct: 1
        },
        {
            question: "Por que não se deve compartilhar itens como garrafas d'água, talheres e lápis labial entre colegas na escola?",
            options: [
                "Porque é falta de educação emprestar objetos pessoais",
                "Porque esses objetos podem transmitir vírus e bactérias pela saliva ou contato direto",
                "Porque os objetos podem ser danificados",
                "Porque o colégio proíbe por questões de higiene pessoal"
            ],
            correct: 1
        }
    ],
    fabrica: [
        {
            question: "Qual é o equipamento de proteção essencial para proteger a audição em áreas ruidosas?",
            options: [
                "Fones de ouvido tocando música",
                "Bolas de algodão nos ouvidos",
                "Protetor auricular adequado",
                "Tapa-orelhas de lã"
            ],
            correct: 2
        },
        {
            question: "O que significa a cor vermelha na sinalização de segurança de uma fábrica?",
            options: [
                "Equipamentos de combate a incêndio",
                "Atenção, área de risco",
                "Área totalmente segura",
                "Obrigatoriedade do uso de EPI"
            ],
            correct: 0
        },
        {
            question: "Antes de realizar a manutenção de uma máquina, qual procedimento é obrigatório?",
            options: [
                "Avisar o colega do lado",
                "Desligar a máquina e aplicar o bloqueio/etiquetagem (LOTO)",
                "Limpar a máquina com água",
                "Deixar a máquina ligada no modo mais fraco"
            ],
            correct: 1
        },
        {
            question: "Se você presenciar um vazamento de produto químico desconhecido, o que deve fazer?",
            options: [
                "Tentar limpar usando um pano",
                "Cheirar para descobrir o que é",
                "Jogar bastante água por cima",
                "Evacuar a área imediatamente e acionar a emergência"
            ],
            correct: 3
        },
        {
            question: "Qual EPI é fundamental para proteger os pés contra queda de objetos pesados?",
            options: [
                "Tênis esportivo confortável",
                "Bota de segurança com biqueira (aço ou composite)",
                "Sandália de borracha grossa",
                "Bota de cano longo de tecido"
            ],
            correct: 1
        },
        {
            question: "Qual a postura correta para levantar uma caixa pesada do chão?",
            options: [
                "Dobrar a coluna sem dobrar os joelhos",
                "Dobrar os joelhos, manter a coluna reta e usar a força das pernas",
                "Levantar a caixa com uma mão só",
                "Puxar a caixa arrastando pelo chão"
            ],
            correct: 1
        },
        {
            question: "O que você deve fazer se o seu EPI estiver danificado?",
            options: [
                "Continuar usando até ele quebrar de vez",
                "Tentar consertar com fita adesiva",
                "Solicitar a troca imediata ao supervisor ou segurança",
                "Trabalhar sem o EPI naquele dia"
            ],
            correct: 2
        },
        {
            question: "Qual a função dos óculos de segurança em um ambiente de usinagem?",
            options: [
                "Melhorar a visão para detalhes",
                "Proteger do sol que entra pela janela",
                "Proteger apenas contra poeira fina",
                "Proteger os olhos contra projeção de partículas e fagulhas"
            ],
            correct: 3
        },
        {
            question: "Quando é permitido operar uma empilhadeira?",
            options: [
                "Sempre que precisar transportar algo pesado",
                "Apenas se você for treinado, certificado e autorizado",
                "Se o operador oficial estiver de folga",
                "Se você souber dirigir carro comum"
            ],
            correct: 1
        },
        {
            question: "O que significa um ambiente confinado na indústria?",
            options: [
                "Qualquer área muito pequena e apertada",
                "Área não projetada para ocupação humana contínua e com ventilação deficiente",
                "O refeitório durante a hora do almoço",
                "A sala de descanso dos funcionários"
            ],
            correct: 1
        }
    ],
    empresa: [
        {
            question: "O que você deve fazer ao sair da sua mesa por um período prolongado?",
            options: [
                "Deixar o monitor ligado e a mesa arrumada",
                "Bloquear a tela do computador (Ex: Win+L)",
                "Desligar o computador da tomada",
                "Avisar todos no andar que você saiu"
            ],
            correct: 1
        },
        {
            question: "Qual a atitude correta ao receber um e-mail suspeito pedindo sua senha corporativa?",
            options: [
                "Responder com uma senha falsa para testar",
                "Clicar no link para investigar a origem",
                "Encaminhar para todos os colegas avisando",
                "Não clicar em nada e reportar à equipe de TI"
            ],
            correct: 3
        },
        {
            question: "Como evitar lesões por esforço repetitivo (LER) no trabalho de escritório?",
            options: [
                "Trabalhar 8 horas seguidas sem pausas para terminar logo",
                "Fazer pausas regulares e manter a postura correta na cadeira",
                "Digitar o mais rápido possível para cansar menos",
                "Trabalhar deitado no sofá"
            ],
            correct: 1
        },
        {
            question: "O que não se deve fazer com senhas corporativas?",
            options: [
                "Anotar em post-its colados no monitor ou teclado",
                "Usar gerenciadores de senha aprovados pela empresa",
                "Memorizá-las e não compartilhar",
                "Criar senhas longas misturando letras e números"
            ],
            correct: 0
        },
        {
            question: "Ao derramar líquido perto de cabos e tomadas no escritório, qual a primeira ação?",
            options: [
                "Limpar imediatamente com um pano bem molhado",
                "Soprar para secar mais rápido",
                "Avisar a manutenção e não tocar nos equipamentos molhados",
                "Jogar os cabos no lixo"
            ],
            correct: 2
        },
        {
            question: "O que fazer se o alarme de incêndio do prédio tocar durante o expediente?",
            options: [
                "Usar as escadas para evacuar o prédio de forma ordenada",
                "Usar o elevador para descer mais rápido",
                "Ficar na mesa terminando de enviar um e-mail importante",
                "Procurar a origem do fogo para tirar fotos"
            ],
            correct: 0
        },
        {
            question: "Para a segurança da informação, como devem ser descartados documentos impressos confidenciais?",
            options: [
                "Amassar e jogar no cesto de lixo comum",
                "Levar para casa para jogar no lixo da rua",
                "Deixar em cima da mesa para o pessoal da limpeza jogar fora",
                "Triturados em máquinas específicas antes de ir para o lixo"
            ],
            correct: 3
        },
        {
            question: "Ao encontrar um visitante sem crachá circulando sozinho no andar, o que fazer?",
            options: [
                "Ignorar, pois não é problema seu",
                "Segui-lo escondido para ver o que ele faz",
                "Abordá-lo educadamente e direcioná-lo à recepção",
                "Gritar por segurança"
            ],
            correct: 2
        },
        {
            question: "Qual é a posição ergonômica correta do monitor do computador?",
            options: [
                "Bem abaixo da linha dos olhos",
                "Na altura dos olhos, a uma distância de aproximadamente um braço",
                "De lado, forçando você a virar o pescoço",
                "Muito perto do rosto para enxergar melhor"
            ],
            correct: 1
        },
        {
            question: "Por que é importante manter as gavetas dos arquivos fechadas após o uso?",
            options: [
                "Para evitar que as pessoas tropecem ou se machuquem ao passar",
                "Para esconder os documentos bagunçados",
                "Para não deixar o ar condicionado entrar nas gavetas",
                "Porque é uma regra sem motivo aparente"
            ],
            correct: 0
        }
    ]
};

/**
 * Configurações de Cores das Categorias
 */
const themeConfig = {
    escola: { 
        main: 'var(--escola-primary)', 
        grad: 'linear-gradient(135deg, var(--escola-primary), var(--escola-secondary))' 
    },
    fabrica: { 
        main: 'var(--fabrica-primary)', 
        grad: 'linear-gradient(135deg, var(--fabrica-primary), var(--fabrica-secondary))' 
    },
    empresa: { 
        main: 'var(--empresa-primary)', 
        grad: 'linear-gradient(135deg, var(--empresa-primary), var(--empresa-secondary))' 
    }
};

// Estado Global
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

/**
 * Função para alternar entre as telas
 */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

/**
 * Inicia o Quiz de acordo com a categoria selecionada
 */
function startQuiz(category) {
    currentCategory = category;
    selectedQuestions = [...questions[category]];
    currentQuestionIndex = 0;
    score = 0;
    
    // Personaliza o layout com as cores da categoria
    const badge = document.getElementById('cat-badge');
    badge.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    badge.style.background = themeConfig[category].grad;
    
    document.getElementById('progress-bar-fill').style.background = themeConfig[category].grad;
    
    showScreen('screen-quiz');
    loadQuestion();
}

/**
 * Carrega a pergunta atual na tela
 */
function loadQuestion() {
    // Verifica se as perguntas acabaram
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult();
        return;
    }
    
    const q = selectedQuestions[currentQuestionIndex];
    
    // Atualiza progresso textual e barra visual
    document.getElementById('progress-text').innerText = `${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    
    // A barra enche baseada na pergunta atual (antes de responder)
    const progressPercentage = (currentQuestionIndex / selectedQuestions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progressPercentage}%`;
    
    // Renderiza texto da pergunta
    document.getElementById('question-text').innerText = q.question;
    
    // Renderiza botões de opção
    const letters = ['A', 'B', 'C', 'D'];
    const optionsHtml = q.options.map((opt, index) => {
        return `
            <button class="option-btn" onclick="selectOption(${index}, this)">
                <span class="option-letter" style="color: ${themeConfig[currentCategory].main}">${letters[index]}</span>
                ${opt}
            </button>
        `;
    }).join('');
    
    document.getElementById('options-container').innerHTML = optionsHtml;
}

/**
 * Ação ao clicar em uma opção de resposta
 */
function selectOption(selectedIndex, btnElement) {
    // Desabilita os botões para evitar múltiplos cliques
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');
    
    // Estiliza o botão selecionado com as cores da categoria
    btnElement.classList.add('selected');
    btnElement.style.background = themeConfig[currentCategory].main;
    
    const letterSpan = btnElement.querySelector('.option-letter');
    letterSpan.style.background = 'rgba(255,255,255,0.2)';
    letterSpan.style.color = 'white';
    
    // Verifica pontuação
    const correctIndex = selectedQuestions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    // Avança após 0.8s para criar um efeito agradável de transição
    setTimeout(() => {
        currentQuestionIndex++;
        
        // Se foi a última pergunta, preenche a barra até 100% antes de ir pro resultado
        if (currentQuestionIndex >= selectedQuestions.length) {
            document.getElementById('progress-bar-fill').style.width = `100%`;
            setTimeout(showResult, 400); // pequeno atraso para ver a barra cheia
        } else {
            loadQuestion();
        }
    }, 800);
}

/**
 * Mostra a tela final com a pontuação e mensagem motivacional
 */
function showResult() {
    showScreen('screen-result');
    
    const total = selectedQuestions.length;
    
    // Atualiza círculo de pontuação
    const circle = document.getElementById('score-circle');
    circle.style.background = themeConfig[currentCategory].grad;
    circle.innerText = `${score}/${total}`;
    
    // Atualiza título principal
    document.getElementById('score-text').innerText = `Você acertou ${score} de ${total} perguntas!`;
    
    // Lógica para a mensagem motivacional baseada na faixa de acertos
    let msg = '';
    if (score <= 4) {
        msg = "Não desanime! A segurança é um aprendizado contínuo. Revise os conceitos, preste mais atenção no seu dia a dia e tente novamente para melhorar!";
    } else if (score <= 7) {
        msg = "Bom trabalho! Você tem uma boa noção de segurança, mas ainda há espaço para melhorar. Continue se esforçando para atingir a excelência!";
    } else {
        msg = "Excelente! Você demonstrou um ótimo conhecimento sobre práticas de segurança. Parabéns por ser um grande exemplo no seu ambiente!";
    }
    document.getElementById('result-message-text').innerText = msg;
    
    // Atualiza botão de reiniciar com a cor temática
    const btnRestart = document.getElementById('btn-restart');
    btnRestart.style.background = themeConfig[currentCategory].grad;
}

/**
 * Reinicia o quiz com a mesma categoria
 */
function restartQuiz() {
    startQuiz(currentCategory);
}

/**
 * Volta para a tela inicial de seleção de categorias
 */
function goHome() {
    showScreen('screen-selection');
}
