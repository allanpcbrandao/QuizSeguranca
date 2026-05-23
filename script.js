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
    // RISCO DE ACIDENTES
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
    // RISCO ERGONÔMICO
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
    // RISCO FÍSICO (elétrico)
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
    // RISCO ERGONÔMICO
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
    // RISCO QUÍMICO
    {
        question: "Qual cuidado deve ser tomado ao usar produtos de limpeza no ambiente de trabalho?",
        options: [
            "Misturar produtos diferentes para limpar mais rápido",
            "Usar em ambientes fechados para o cheiro não incomodar os outros andares",
            "Ler o rótulo, usar em local ventilado e nunca misturar produtos",
            "Guardar os produtos em garrafas de água para facilitar o transporte"
        ],
        correct: 2
    },
    // RISCO BIOLÓGICO
    {
        question: "Um colega apresenta sintomas de gripe no escritório. Qual a atitude correta?",
        options: [
            "Ignorar, pois gripe não é perigosa em ambiente fechado",
            "Compartilhar os mesmos utensílios normalmente",
            "Orientar o colega a procurar o serviço médico e higienizar as mãos com frequência",
            "Ventilação do ambiente não interfere na transmissão de doenças"
        ],
        correct: 2
    },
    // RISCO FÍSICO (ruído/iluminação)
    {
        question: "A iluminação insuficiente no posto de trabalho pode causar qual problema de saúde?",
        options: [
            "Nenhum, desde que o monitor esteja brilhante",
            "Apenas dores de cabeça ocasionais sem consequências",
            "Fadiga visual, dores de cabeça e queda de produtividade",
            "Somente prejudica trabalhadores mais velhos"
        ],
        correct: 2
    },
    // RISCO DE ACIDENTES
    {
        question: "Por que fios e cabos não devem ficar soltos pelo chão do escritório?",
        options: [
            "Apenas por questão de organização visual",
            "Porque podem causar tropeços, quedas e acidentes graves",
            "Para facilitar a limpeza do chão",
            "Porque a norma exige, mas não há risco real"
        ],
        correct: 1
    },
    // RISCO ERGONÔMICO
    {
        question: "Qual é a altura correta para ajustar a cadeira de escritório?",
        options: [
            "A mais alta possível para ter visão do ambiente",
            "A mais baixa para apoiar melhor os pés no chão",
            "Com os joelhos em ângulo de 90° e os pés apoiados no chão ou descanso",
            "Não importa a altura, desde que seja confortável no momento"
        ],
        correct: 2
    },
    // RISCO QUÍMICO
    {
        question: "Impressoras a laser e fotocopiadoras podem emitir qual substância prejudicial à saúde em ambientes mal ventilados?",
        options: [
            "Gás carbônico em quantidade letal",
            "Partículas de toner e ozônio, que irritam as vias respiratórias",
            "Vapor d'água quente",
            "Nenhuma substância, pois são equipamentos homologados"
        ],
        correct: 1
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
