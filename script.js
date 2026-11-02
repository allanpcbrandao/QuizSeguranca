/**
 * Banco de Questões (45 perguntas no total: 15 por categoria; a cada tentativa são sorteadas 10)
 * Cada questão tem enunciado, 4 alternativas, o índice da correta
 * e uma explicação mostrada ao usuário depois de responder.
 */
const questions = {
    escola: [
        {
            question: "Ao notar uma poça de água no corredor, o que você deve fazer?",
            options: [
                "Passar rápido pela borda da poça",
                "Ignorar e continuar andando",
                "Avisar a limpeza ou algum funcionário da escola",
                "Tentar secar com o próprio casaco e seguir"
            ],
            correct: 2,
            explanation: "Avise a limpeza ou um funcionário: eles podem sinalizar e secar o local. Passar pela poça, ignorar ou correr aumenta o risco de queda para você e para os outros."
        },
        {
            question: "Onde devem ser armazenados os produtos químicos em uma escola?",
            options: [
                "Em qualquer prateleira disponível na sala de aula",
                "Em local ventilado, identificado e de acesso restrito aos alunos",
                "Dentro da mochila do professor para maior controle",
                "No banheiro da escola"
            ],
            correct: 1,
            explanation: "Produtos químicos devem ficar em local ventilado, identificado e de acesso restrito, para evitar intoxicação, mistura indevida e contato dos alunos."
        },
        {
            question: "Como você deve carregar sua mochila para evitar problemas de coluna?",
            options: [
                "Apoiada em um ombro só",
                "Com as alças bem soltas para baixo",
                "Carregando nas mãos",
                "Usando as duas alças bem ajustadas nas costas"
            ],
            correct: 3,
            explanation: "Usar as duas alças bem ajustadas distribui o peso pelas costas e reduz a sobrecarga na coluna. Carregar o peso de um lado só pode causar dor e sobrecarga."
        },
        {
            question: "O que fazer se um colega se machucar durante o recreio?",
            options: [
                "Dar um remédio por conta própria",
                "Chamar um professor ou inspetor imediatamente",
                "Esperar o colega melhorar sozinho",
                "Mandar o colega levantar e andar para ver se dói"
            ],
            correct: 1,
            explanation: "Chame um adulto responsável imediatamente. Dar remédio por conta própria é perigoso, e ignorar a situação ou movimentar o colega pode agravar a lesão."
        },
        {
            question: "Qual é a forma correta de descer as escadas na escola?",
            options: [
                "Descendo rápido para chegar antes da fila",
                "Pulando de dois em dois degraus",
                "Andando devagar e segurando no corrimão",
                "Descendo de costas para conversar com os colegas"
            ],
            correct: 2,
            explanation: "Descer devagar e segurando no corrimão evita escorregões e quedas."
        },
        {
            question: "Por que é importante não correr nos corredores?",
            options: [
                "Para evitar colisões e quedas graves",
                "Para não atrapalhar as aulas nas salas ao lado",
                "Porque a regra é apenas uma questão de disciplina",
                "Porque só é permitido correr no horário do recreio"
            ],
            correct: 0,
            explanation: "Correr nos corredores aumenta o risco de colisões e quedas, que podem causar ferimentos sérios."
        },
        {
            question: "Qual é a forma mais eficaz de prevenir a transmissão de doenças infecciosas no ambiente escolar?",
            options: [
                "Tomar vitaminas todos os dias",
                "Evitar contato com qualquer colega",
                "Lavar as mãos com água e sabão frequentemente",
                "Usar luvas em todas as atividades escolares"
            ],
            correct: 2,
            explanation: "Lavar as mãos com água e sabão com frequência é uma das formas mais eficazes de reduzir a transmissão de doenças infecciosas."
        },
        {
            question: "Em caso de incêndio, qual deve ser a sua atitude ao ouvir o alarme?",
            options: [
                "Gritar e correr sem direção",
                "Esconder-se dentro do banheiro",
                "Manter a calma e seguir a rota de fuga orientada",
                "Tentar apagar o fogo sozinho com água"
            ],
            correct: 2,
            explanation: "Mantenha a calma e siga a rota de fuga indicada. Correr sem direção, se esconder ou tentar apagar o fogo sozinho aumenta o perigo."
        },
        {
            question: "Por que não devemos balançar nas cadeiras da sala de aula?",
            options: [
                "Porque faz barulho e atrapalha a aula",
                "Pois a cadeira pode virar e causar um ferimento grave",
                "Porque arranha o piso da escola",
                "Para não incomodar o colega de trás"
            ],
            correct: 1,
            explanation: "A cadeira pode perder o equilíbrio e virar, e a queda pode causar ferimentos graves."
        },
        {
            question: "Por que não se deve compartilhar itens como garrafas d'água, talheres e lápis labial entre colegas na escola?",
            options: [
                "Porque é falta de educação emprestar objetos pessoais",
                "Porque esses objetos podem transmitir vírus e bactérias pela saliva ou contato direto",
                "Porque os objetos podem ser danificados",
                "Porque o colégio proíbe por questões de higiene pessoal"
            ],
            correct: 1,
            explanation: "Garrafas, talheres e outros itens de uso pessoal podem transmitir vírus e bactérias pela saliva e pelo contato direto."
        },
        {
            question: "Antes de uma atividade intensa na quadra, o que ajuda a prevenir lesões musculares?",
            options: [
                "Aquecer e alongar o corpo",
                "Começar direto no ritmo máximo para aquecer rápido",
                "Ficar parado até o professor chamar",
                "Fazer só um alongamento do pescoço"
            ],
            correct: 0,
            explanation: "Aquecer e alongar prepara músculos e articulações e reduz o risco de distensões e outras lesões. Começar direto em ritmo máximo aumenta esse risco."
        },
        {
            question: "O que você deve fazer ao ver uma tomada quebrada ou um fio desencapado na sala de aula?",
            options: [
                "Tentar consertar com fita adesiva",
                "Avisar o professor ou a direção e não encostar",
                "Cobrir com um papel e continuar usando a sala",
                "Encostar só para ver se ainda funciona"
            ],
            correct: 1,
            explanation: "Fios expostos e tomadas quebradas podem causar choque elétrico e incêndio. O correto é não encostar e avisar um adulto responsável para providenciar o reparo."
        },
        {
            question: "Por que é perigoso conversar, rir ou correr enquanto se come o lanche?",
            options: [
                "Porque a comida esfria mais rápido",
                "Porque pode causar engasgo",
                "Porque gasta a energia do lanche",
                "Porque a comida suja o uniforme"
            ],
            correct: 1,
            explanation: "Falar, rir ou correr com comida na boca aumenta o risco de engasgo, que pode obstruir a respiração. Coma sentado e com calma."
        },
        {
            question: "Qual cuidado é importante ao brincar no pátio em dias de sol forte?",
            options: [
                "Evitar beber água para não ter que ir ao banheiro",
                "Hidratar-se e procurar sombra nos intervalos",
                "Brincar o tempo todo no ponto mais quente do pátio",
                "Usar roupas bem escuras e fechadas, sem beber água"
            ],
            correct: 1,
            explanation: "Em dias quentes é preciso beber água com frequência e descansar na sombra para evitar desidratação e insolação. Protetor solar e boné também ajudam."
        },
        {
            question: "Qual é a forma mais segura de passar uma tesoura para um colega?",
            options: [
                "Jogando de longe, com cuidado",
                "Com a ponta voltada para ele, para que pegue pelo cabo",
                "Segurando pela lâmina, com o cabo voltado para ele",
                "Deixando-a aberta sobre a mesa para ele pegar"
            ],
            correct: 2,
            explanation: "Entregue a tesoura fechada, segurando pela parte da lâmina e oferecendo o cabo ao colega. Assim a ponta fica longe das mãos e do rosto dele."
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
            correct: 2,
            explanation: "Em áreas ruidosas é preciso usar protetor auricular adequado. Fones de música, algodão ou tapa-orelhas de lã não protegem de forma adequada e ainda podem atrapalhar a percepção de alertas."
        },
        {
            question: "O que significa a cor vermelha na sinalização de segurança de uma fábrica?",
            options: [
                "Equipamentos de combate a incêndio",
                "Atenção, área de risco",
                "Área totalmente segura",
                "Obrigatoriedade do uso de EPI"
            ],
            correct: 0,
            explanation: "Na sinalização de segurança, o vermelho indica equipamentos de combate a incêndio. O alerta de atenção e risco é feito com a cor amarela, e a obrigação de usar EPI, com sinais azuis."
        },
        {
            question: "Antes de realizar a manutenção de uma máquina, qual procedimento é obrigatório?",
            options: [
                "Avisar o colega do lado",
                "Desligar a máquina e aplicar o bloqueio/etiquetagem (LOTO)",
                "Reduzir a velocidade da máquina",
                "Usar luvas grossas e trabalhar com cuidado"
            ],
            correct: 1,
            explanation: "Antes da manutenção, a máquina deve ser desligada e ter a energia isolada com bloqueio e etiquetagem (LOTO), para evitar uma partida acidental."
        },
        {
            question: "Se você presenciar um vazamento de produto químico desconhecido, o que deve fazer?",
            options: [
                "Tentar limpar usando um pano",
                "Isolar o local com fita e continuar trabalhando ao lado",
                "Jogar bastante água por cima",
                "Evacuar a área imediatamente e acionar a emergência"
            ],
            correct: 3,
            explanation: "Diante de um produto químico desconhecido, evacue a área e acione a emergência. Não cheire, não toque e não tente limpar sem orientação, pois o produto pode ser tóxico."
        },
        {
            question: "Qual EPI é fundamental para proteger os pés contra queda de objetos pesados?",
            options: [
                "Tênis esportivo confortável",
                "Bota de segurança com biqueira (aço ou composite)",
                "Sandália de borracha grossa",
                "Bota de cano longo de tecido"
            ],
            correct: 1,
            explanation: "A bota de segurança com biqueira de aço ou composite protege os pés contra queda de objetos pesados. Calçados comuns não oferecem essa proteção."
        },
        {
            question: "Qual a postura correta para levantar uma caixa pesada do chão?",
            options: [
                "Dobrar a coluna sem dobrar os joelhos",
                "Dobrar os joelhos, manter a coluna reta e usar a força das pernas",
                "Girar o tronco enquanto levanta para ganhar tempo",
                "Levantar rápido, com impulso, para usar menos força"
            ],
            correct: 1,
            explanation: "Dobre os joelhos, mantenha a coluna reta e use a força das pernas. Curvar só a coluna ou levantar com impulso sobrecarrega as costas."
        },
        {
            question: "O que você deve fazer se o seu EPI estiver danificado?",
            options: [
                "Continuar usando, pois ainda protege em parte",
                "Tentar consertar com fita adesiva",
                "Solicitar a troca imediata ao supervisor ou segurança",
                "Trabalhar sem o EPI naquele dia"
            ],
            correct: 2,
            explanation: "EPI danificado não protege adequadamente. Solicite a troca imediata ao supervisor ou à segurança e não trabalhe sem proteção."
        },
        {
            question: "Qual a função dos óculos de segurança em um ambiente de usinagem?",
            options: [
                "Melhorar a visão para detalhes",
                "Reduzir o cansaço visual no fim do turno",
                "Proteger apenas contra poeira fina",
                "Proteger os olhos contra projeção de partículas e fagulhas"
            ],
            correct: 3,
            explanation: "Os óculos de segurança protegem os olhos contra projeção de partículas e fagulhas, comuns em ambientes de usinagem."
        },
        {
            question: "Quando é permitido operar uma empilhadeira?",
            options: [
                "Sempre que precisar transportar algo pesado",
                "Apenas se você for treinado, certificado e autorizado",
                "Se o supervisor pedir com urgência",
                "Se você souber dirigir carro comum"
            ],
            correct: 1,
            explanation: "Só opera empilhadeira quem foi treinado, certificado e autorizado. Saber dirigir carro, ou receber um pedido urgente, não habilita para esse equipamento."
        },
        {
            question: "O que significa um ambiente confinado na indústria?",
            options: [
                "Qualquer área muito pequena e apertada",
                "Área não projetada para ocupação humana contínua e com ventilação deficiente",
                "O refeitório durante a hora do almoço",
                "A sala de descanso dos funcionários"
            ],
            correct: 1,
            explanation: "Ambiente confinado é um espaço não projetado para ocupação humana contínua e com ventilação deficiente, o que pode causar falta de oxigênio ou acúmulo de gases. A entrada exige procedimentos específicos."
        },
        {
            question: "Qual proteção é indispensável para os olhos e o rosto durante a soldagem?",
            options: [
                "Óculos de sol comuns",
                "Máscara de solda com lente de filtro adequado",
                "Óculos de grau",
                "Viseira de acrílico transparente"
            ],
            correct: 1,
            explanation: "A soldagem emite radiação intensa e faíscas. É necessária máscara de solda com lente de filtro adequado: óculos comuns ou viseira transparente não protegem contra esse brilho."
        },
        {
            question: "Qual agente NÃO deve ser usado para apagar um incêndio em equipamento elétrico energizado?",
            options: [
                "Água",
                "Extintor de CO2",
                "Extintor de pó químico",
                "Cobertor abafador seco, sem tocar nos fios"
            ],
            correct: 0,
            explanation: "A água conduz eletricidade e pode causar choque em quem combate o fogo. Em equipamento energizado usa-se extintor adequado, como CO2 ou pó químico, e, se possível, desliga-se a energia."
        },
        {
            question: "Por que as proteções (guardas) das máquinas não devem ser retiradas pelo operador?",
            options: [
                "Porque deixam a máquina mais lenta",
                "Porque impedem o contato com partes móveis e evitam acidentes",
                "Porque servem só para manter a máquina limpa",
                "Porque a retirada só é proibida em máquinas novas"
            ],
            correct: 1,
            explanation: "As proteções impedem que mãos, roupas e cabelos alcancem engrenagens, correias e lâminas. Retirá-las expõe o operador ao risco de amputações e outros acidentes graves."
        },
        {
            question: "Segundo a NR-35, a partir de qual altura o trabalho é considerado 'trabalho em altura'?",
            options: [
                "Acima de 2 metros do nível inferior, com risco de queda",
                "Acima de 5 metros",
                "Acima de 10 metros",
                "Somente acima de 20 metros"
            ],
            correct: 0,
            explanation: "A NR-35 considera trabalho em altura toda atividade acima de 2 metros do nível inferior em que haja risco de queda, exigindo treinamento, planejamento e proteção contra queda."
        },
        {
            question: "Por que anéis, pulseiras e cabelos soltos são proibidos perto de máquinas com partes giratórias?",
            options: [
                "Por uma questão apenas de aparência",
                "Porque podem ser enroscados e arrastar a pessoa para a máquina",
                "Porque atrapalham o uso do celular",
                "Porque só atrapalham o uso do crachá"
            ],
            correct: 1,
            explanation: "Peças giratórias podem prender adornos, roupas largas e cabelos soltos e puxar a mão ou o corpo para dentro da máquina. Por isso devem ser retirados ou presos."
        }
    ],
    empresa: [
        {
            question: "O que fazer se o alarme de incêndio do prédio tocar durante o expediente?",
            options: [
                "Usar as escadas para evacuar o prédio de forma ordenada",
                "Voltar para pegar seus pertences antes de sair",
                "Esperar na sala para ver se o alarme é falso",
                "Usar o elevador para descer mais rápido"
            ],
            correct: 0,
            explanation: "Em caso de alarme, evacue de forma ordenada pelas escadas. Não use o elevador, que pode parar por falta de energia ou ser atingido pela fumaça."
        },
        {
            question: "Qual é a posição ergonômica correta do monitor do computador?",
            options: [
                "Bem abaixo da linha dos olhos",
                "Na altura dos olhos, a uma distância de aproximadamente um braço",
                "De lado, forçando você a virar o pescoço",
                "Muito perto do rosto para enxergar melhor"
            ],
            correct: 1,
            explanation: "O monitor deve ficar na altura dos olhos, a cerca de um braço de distância, para evitar flexão do pescoço e cansaço visual."
        },
        {
            question: "Ao derramar líquido perto de cabos e tomadas no escritório, qual a primeira ação?",
            options: [
                "Limpar imediatamente com um pano bem molhado",
                "Soprar para secar mais rápido",
                "Avisar a manutenção e não tocar nos equipamentos molhados",
                "Desligar da tomada com a mão úmida para proteger o equipamento"
            ],
            correct: 2,
            explanation: "Líquido perto de cabos e tomadas pode causar choque elétrico e curto-circuito. Não toque nos equipamentos molhados e avise a manutenção."
        },
        {
            question: "Como evitar lesões por esforço repetitivo (LER) no trabalho de escritório?",
            options: [
                "Trabalhar 8 horas seguidas sem pausas para terminar logo",
                "Fazer pausas regulares e manter a postura correta na cadeira",
                "Digitar o mais rápido possível para cansar menos",
                "Apoiar os punhos dobrados sobre a mesa enquanto digita"
            ],
            correct: 1,
            explanation: "Pausas regulares e postura correta ajudam a prevenir lesões por esforço repetitivo (LER). Longas jornadas sem pausa, ou punhos dobrados ao digitar, aumentam o risco."
        },
        {
            question: "Qual cuidado deve ser tomado ao usar produtos de limpeza no ambiente de trabalho?",
            options: [
                "Misturar produtos diferentes para limpar mais rápido",
                "Usar em ambientes fechados para o cheiro não incomodar os outros andares",
                "Ler o rótulo, usar em local ventilado e nunca misturar produtos",
                "Guardar os produtos em garrafas de água para facilitar o transporte"
            ],
            correct: 2,
            explanation: "Leia o rótulo, use em local ventilado e nunca misture produtos, pois algumas misturas liberam gases tóxicos."
        },
        {
            question: "Um colega apresenta sintomas de gripe no escritório. Qual a atitude correta?",
            options: [
                "Ignorar, pois gripe não é perigosa em ambiente fechado",
                "Compartilhar os mesmos utensílios normalmente",
                "Orientar o colega a procurar o serviço médico e higienizar as mãos com frequência",
                "Manter o ambiente fechado para o colega não incomodar os outros"
            ],
            correct: 2,
            explanation: "Oriente o colega a procurar atendimento médico e reforce a higiene das mãos. Ambientes fechados e mal ventilados favorecem a transmissão de doenças respiratórias."
        },
        {
            question: "A iluminação insuficiente no posto de trabalho pode causar qual problema de saúde?",
            options: [
                "Nenhum, desde que o monitor esteja brilhante",
                "Apenas dores de cabeça ocasionais sem consequências",
                "Fadiga visual, dores de cabeça e queda de produtividade",
                "Somente prejudica trabalhadores mais velhos"
            ],
            correct: 2,
            explanation: "Iluminação insuficiente causa fadiga visual, dor de cabeça e queda de produtividade, em trabalhadores de qualquer idade."
        },
        {
            question: "Por que fios e cabos não devem ficar soltos pelo chão do escritório?",
            options: [
                "Apenas por questão de organização visual",
                "Porque podem causar tropeços, quedas e acidentes graves",
                "Para facilitar a limpeza do chão",
                "Porque a norma exige, mas não há risco real"
            ],
            correct: 1,
            explanation: "Fios e cabos soltos no chão podem causar tropeços e quedas, inclusive com lesões graves."
        },
        {
            question: "Qual é a altura correta para ajustar a cadeira de escritório?",
            options: [
                "A mais alta possível para ter visão do ambiente",
                "A mais baixa para apoiar melhor os pés no chão",
                "Com os joelhos em ângulo de 90° e os pés apoiados no chão ou descanso",
                "Não importa a altura, desde que seja confortável no momento"
            ],
            correct: 2,
            explanation: "Com os joelhos em ângulo de cerca de 90° e os pés apoiados, a postura e a circulação ficam melhores. Uma cadeira muito alta ou muito baixa gera sobrecarga."
        },
        {
            question: "Impressoras a laser e fotocopiadoras podem emitir qual substância prejudicial à saúde em ambientes mal ventilados?",
            options: [
                "Gás carbônico em quantidade letal",
                "Partículas de toner e ozônio, que irritam as vias respiratórias",
                "Vapor d'água quente",
                "Nenhuma substância, pois são equipamentos homologados"
            ],
            correct: 1,
            explanation: "Impressoras a laser e copiadoras podem emitir partículas de toner e ozônio, que irritam as vias respiratórias em ambientes mal ventilados."
        },
        {
            question: "Qual hábito ajuda a proteger a saúde de quem passa muitas horas sentado no escritório?",
            options: [
                "Ficar na mesma posição para não perder o foco",
                "Fazer pausas curtas para levantar, andar e alongar",
                "Trabalhar sem pausas para terminar mais cedo",
                "Apoiar o corpo só em um lado da cadeira"
            ],
            correct: 1,
            explanation: "Pausas curtas para levantar e alongar aliviam a tensão muscular e a pressão na coluna e na circulação, ajudando a prevenir dores e lesões por esforço."
        },
        {
            question: "Qual é o cuidado correto com saídas de emergência e corredores de circulação?",
            options: [
                "Usá-los como depósito temporário de caixas",
                "Mantê-los sempre livres e desobstruídos",
                "Trancá-los para evitar entradas indevidas",
                "Deixar objetos leves encostados, desde que sobre algum espaço"
            ],
            correct: 1,
            explanation: "Em uma emergência, qualquer obstáculo nas rotas de fuga atrasa a saída das pessoas e pode causar tropeços e aglomeração. Elas devem ficar sempre livres e sinalizadas."
        },
        {
            question: "Por que é perigoso ligar muitos aparelhos em uma mesma extensão ou benjamim?",
            options: [
                "Porque os aparelhos duram menos",
                "Porque pode sobrecarregar a rede elétrica e causar superaquecimento e incêndio",
                "Porque deixa a internet mais lenta",
                "Porque só atrapalha o uso da tomada ao lado"
            ],
            correct: 1,
            explanation: "Ligar muitos aparelhos em um mesmo ponto pode ultrapassar a capacidade do circuito, aquecer fios e conexões e iniciar um incêndio."
        },
        {
            question: "Por que não se deve abrir mais de uma gaveta do arquivo ao mesmo tempo?",
            options: [
                "Porque o arquivo pode tombar",
                "Porque os documentos se misturam",
                "Porque a chave pode quebrar",
                "Porque a gaveta de baixo trava"
            ],
            correct: 0,
            explanation: "Com várias gavetas abertas, o peso se desloca para a frente e o arquivo pode tombar, causando acidentes graves. Abra uma gaveta por vez e feche-a em seguida."
        },
        {
            question: "O que fazer quando precisar alcançar um objeto em uma prateleira alta?",
            options: [
                "Subir em uma cadeira giratória",
                "Usar uma escada ou banqueta apropriada e estável",
                "Ficar na ponta dos pés, esticando o corpo",
                "Pedir para um colega segurar a cadeira, que dá para alcançar"
            ],
            correct: 1,
            explanation: "Cadeiras giratórias se movem e viram, causando quedas. Use sempre escada ou banqueta apropriada, estável e em bom estado."
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
const QUESTOES_POR_PARTIDA = 10;

/**
 * Embaralha uma lista (Fisher-Yates) sem alterar a original
 */
function shuffle(list) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

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
    // Embaralha a ordem das perguntas e das alternativas a cada tentativa
    selectedQuestions = shuffle(questions[category]).slice(0, QUESTOES_POR_PARTIDA).map(q => {
        const opts = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }));
        const mixed = shuffle(opts);
        return {
            question: q.question,
            options: mixed.map(o => o.text),
            correct: mixed.findIndex(o => o.isCorrect),
            explanation: q.explanation
        };
    });
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
 * Ação ao clicar em uma opção de resposta:
 * mostra se acertou, qual era a correta e a explicação, e espera o usuário clicar em "Próxima".
 */
function selectOption(selectedIndex, btnElement) {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');

    const q = selectedQuestions[currentQuestionIndex];
    const correctIndex = q.correct;
    const acertou = selectedIndex === correctIndex;
    if (acertou) {
        score++;
    }

    // Marca a alternativa correta (verde) e, se errou, a escolhida (vermelho)
    allButtons.forEach((btn, i) => {
        if (i === correctIndex) {
            btn.classList.add('correct');
        } else if (i === selectedIndex) {
            btn.classList.add('incorrect');
        } else {
            btn.classList.add('dimmed');
        }
    });

    // Caixa de feedback com a explicação
    const isLast = currentQuestionIndex === selectedQuestions.length - 1;
    const feedback = document.createElement('div');
    feedback.className = 'feedback ' + (acertou ? 'feedback-ok' : 'feedback-bad');
    feedback.setAttribute('role', 'status');
    feedback.innerHTML = `<strong>${acertou ? 'Resposta correta!' : 'Resposta incorreta.'}</strong> ${q.explanation}`;
    document.getElementById('options-container').appendChild(feedback);

    // Botão para avançar
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary next-btn';
    nextBtn.style.background = themeConfig[currentCategory].grad;
    nextBtn.innerText = isLast ? 'Ver resultado' : 'Próxima pergunta →';
    nextBtn.onclick = nextQuestion;
    document.getElementById('options-container').appendChild(nextBtn);
    nextBtn.focus();
}

/**
 * Avança para a próxima pergunta (ou para o resultado, depois da última)
 */
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= selectedQuestions.length) {
        document.getElementById('progress-bar-fill').style.width = '100%';
        setTimeout(showResult, 400); // pequeno atraso para ver a barra cheia
    } else {
        loadQuestion();
    }
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
