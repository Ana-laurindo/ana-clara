const questions = [
    {
        question: "Qual é o meu filme favorito da Disney ?",
        options: ["Alladin", "Enrolados", "Cinderela", "Rei Leão"],
        answer: "Alladin"
    },
    {
        question: "Qual minha cor favorita ?",
        options: ["Roxo", "Verde", "Rosa", "Azul"],
        answer: "Roxo"
    },
    {
        question: "Qual o nome da minha cadela?",
        options: ["Letícia", "Dori", "Mell", "Luna"],
        answer: "Dori"
    },
    {
        question: "Onde eu nasci?",
        options: ["Palmares", "Recife", "Macéio", "Fortaleza"],
        answer: "Macéio"
    },
    {
        question: "Qual dia do meu aniversário?",
        options: ["18/08", "02/07", "07/03", "16/04"],
        answer: "16/04"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para carregar a próxima pergunta
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = ""; // Limpar feedback anterior

    questionContainer.innerHTML = "";  // Limpar o conteúdo anterior

    let questionObj = questions[currentQuestionIndex];
    let questionText = `<h2>${questionObj.question}</h2>`;
    questionContainer.innerHTML += questionText;

    // Criar os botões para as opções de resposta
    questionObj.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        questionContainer.appendChild(button);
    });

    // Mostrar o botão de próxima pergunta
    document.getElementById("next-button").style.display = "none";
}

// Função para verificar a resposta selecionada
function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");

    if (selected === questions[currentQuestionIndex].answer) {
        score++;
        feedback.innerHTML = `<p style="color: green;">Resposta Correta!</p>`;
    } else {
        feedback.innerHTML = `<p style="color: red;">Resposta Errada! A resposta correta é: ${questions[currentQuestionIndex].answer}</p>`;
    }

    // Mostrar o botão para ir à próxima pergunta
    document.getElementById("next-button").style.display = "block";
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Exibir a pontuação final ao terminar todas as perguntas
        const quizDiv = document.getElementById("quiz");
        quizDiv.innerHTML = "<h2>Quiz Finalizado!</h2>";

        // Exibir pontuação
        const scoreDiv = document.createElement('div');
        scoreDiv.innerHTML = `Sua pontuação: ${score} de ${questions.length}`;
        quizDiv.appendChild(scoreDiv);

        // Remover botão "Próxima Pergunta"
        document.getElementById("next-button").style.display = "none";
    }
}

// Carregar a primeira questão ao iniciar
loadQuestion();
