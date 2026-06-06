// 1. Lista oficial com as 10 perguntas
const perguntas = [
    "Você está feliz com seu aniversário?", 
    "Você gosta de jogar jogos comigo?", 
    "Você ainda se lembra dos momentos bons?",
    "Eu ainda é importante para você?",
    "Você tem algum sentimento por mim?",
    "Você me ama ainda?",
    "Você pretende ter algo comigo ainda?",
    "Você pretende morar comigo?",
    "Você ainda quer se casar comigo?",
    "Você pretende ter um filho comigo?"
];

// Controles de estado na memória da página
let perguntaAtual = 0;
let historicoRespostas = [];

// Elementos da tela
const txtContador = document.getElementById('question-counter');
const txtPergunta = document.getElementById('question-text');
const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');

// Função para atualizar o texto da tela
function atualizarTela() {
    if (perguntaAtual < perguntas.length) {
        // Aqui o JavaScript calcula dinamicamente o total (ex: 1 de 10)
        txtContador.innerText = `PERGUNTA ${perguntaAtual + 1} DE ${perguntas.length}`;
        txtPergunta.innerText = perguntas[perguntaAtual];
    } else {
        redirecionarParaResultado();
    }
}

// Configura os cliques dos botões
btnSim.addEventListener('click', () => computarResposta("SIM"));
btnNao.addEventListener('click', () => computarResposta("NÃO"));

function computarResposta(resposta) {
    historicoRespostas.push(resposta);
    perguntaAtual++;
    atualizarTela();
}

function redirecionarParaResultado() {
    // Conta a quantidade total de SIMs para aplicar as regras de 10 perguntas
    const qtdSim = historicoRespostas.filter(r => r === "SIM").length;

    // REGRA 1: Tudo SIM (10 SIMs) -> Resultado 1
    if (qtdSim === 10) {
        window.location.href = "resultado1.html";
    } 
    // REGRA 2: Tudo NÃO (0 SIMs) -> Resultado 2
    else if (qtdSim === 0) {
        window.location.href = "resultado2.html";
    } 
    // REGRA 3: Quantidade de SIM entre 6 e 9 -> Resultado 3
    else if (qtdSim >= 6 && qtdSim <= 9) {
        window.location.href = "resultado3.html";
    } 
    // REGRA 4: Quantidade de SIM entre 1 e 5 -> Resultado 4
    else if (qtdSim >= 1 && qtdSim <= 5) {
        window.location.href = "resultado4.html";
    }
}

// Inicializa o quiz
atualizarTela();