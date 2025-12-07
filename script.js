const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressFill = document.getElementById('progress');
const questionNumberElement = document.getElementById('question-number');
const scoreCounterElement = document.getElementById('score-counter');

const finalScoreElement = document.getElementById('final-score');
const totalQuestionsElement = document.getElementById('total-questions');
const resultMessageElement = document.getElementById('result-message');
const reviewContainer = document.getElementById('review-container');
const reviewList = document.getElementById('review-list');

const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const backToMenuButton = document.getElementById('back-to-menu-btn');
const reviewButton = document.getElementById('review-btn');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', startQuiz);
backToMenuButton.addEventListener('click', showStartScreen);
reviewButton.addEventListener('click', toggleReview);

function startQuiz() {

    questions.sort(() => Math.random() - 0.5);

    showScreen(quizScreen);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    scoreCounterElement.innerText = `Wynik: 0`;
    reviewContainer.classList.add('hidden');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    questionNumberElement.innerText = `Pytanie ${currentQuestionIndex + 1}/${questions.length}`;
    
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const selectedText = selectedBtn.innerText;

    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selected: selectedText,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        scoreCounterElement.innerText = `Wynik: ${score}`;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.disabled = false;
}

function endQuiz() {
    showScreen(resultScreen);
    finalScoreElement.innerText = score;
    totalQuestionsElement.innerText = questions.length;
    
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
        resultMessageElement.innerText = "Perfekcyjnie! Jesteś ekspertem cyberbezpieczeństwa! 🏆";
    } else if (percentage >= 70) {
        resultMessageElement.innerText = "Świetny wynik! Dobrze znasz zasady ochrony danych. 👍";
    } else {
        resultMessageElement.innerText = "Warto powtórzyć materiał. Bezpieczeństwo jest ważne! ⚠️";
    }

    generateReview();
}

function generateReview() {
    reviewList.innerHTML = '';
    
    userAnswers.forEach((answerData, index) => {
        const questionData = questions[answerData.questionIndex];
        const correctAns = questionData.answers.find(a => a.correct).text;
        
        const item = document.createElement('div');
        item.classList.add('review-item');
        item.classList.add(answerData.isCorrect ? 'correct' : 'wrong');

        let html = `
            <p class="q-text">${index + 1}. ${questionData.question}</p>
            <p class="user-ans ${answerData.isCorrect ? 'good' : 'bad'}">
                Twoja odpowiedź: <span>${answerData.selected}</span>
            </p>
        `;

        if (!answerData.isCorrect) {
            html += `<p class="correct-ans">Poprawna: ${correctAns}</p>`;
        }

        item.innerHTML = html;
        reviewList.appendChild(item);
    });
}

function toggleReview() {
    reviewContainer.classList.toggle('hidden');
    const isHidden = reviewContainer.classList.contains('hidden');
    reviewButton.innerHTML = isHidden 
        ? 'Sprawdź odpowiedzi <i class="fa-solid fa-list-check"></i>' 
        : 'Ukryj odpowiedzi <i class="fa-solid fa-chevron-up"></i>';
}

function showScreen(screenToShow) {
    [startScreen, quizScreen, resultScreen].forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active');
}

function showStartScreen() {
    showScreen(startScreen);
}

showStartScreen();