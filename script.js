const questions = [
    {
        question: "Czym jest 'Poufność' (Confidentiality) w kontekście modelu CIA?",
        answers: [
            { text: "Zapewnieniem dostępności danych", correct: false },
            { text: "Gwarancją prawdziwości danych", correct: false },
            { text: "Ochroną przed ujawnieniem nieuprawnionym osobom", correct: true },
            { text: "Regularną aktualizacją systemu", correct: false }
        ]
    },
    {
        question: "Który filar modelu CIA gwarantuje, że dane są 'prawdziwe i niezmienione'?",
        answers: [
            { text: "Poufność", correct: false },
            { text: "Dostępność", correct: false },
            { text: "Integralność", correct: true },
            { text: "Ryzyko", correct: false }
        ]
    },
    {
        question: "Pracownik kopiuje dane klientów na prywatny pendrive. To zagrożenie...",
        answers: [
            { text: "Naturalne", correct: false },
            { text: "Techniczne", correct: false },
            { text: "Zewnętrzne", correct: false },
            { text: "Wewnętrzne", correct: true }
        ]
    },
    {
        question: "Pożar serwerowni to przykład zagrożenia...",
        answers: [
            { text: "Fizycznego / Naturalnego", correct: true },
            { text: "Technicznego", correct: false },
            { text: "Celowego ludzkiego", correct: false },
            { text: "Sieciowego", correct: false }
        ]
    },
    {
        question: "Co jest źródłem ponad 60% incydentów bezpieczeństwa (wg Lidermana)?",
        answers: [
            { text: "Błędy techniczne", correct: false },
            { text: "Siły natury", correct: false },
            { text: "Czynnik ludzki", correct: true },
            { text: "Ataki 0-day", correct: false }
        ]
    },
    {
        question: "Atak DDoS blokujący stronę uczelni narusza:",
        answers: [
            { text: "Poufność", correct: false },
            { text: "Integralność", correct: false },
            { text: "Dostępność", correct: true },
            { text: "Tylko RODO", correct: false }
        ]
    },
    {
        question: "Malware, który szyfruje dane i żąda okupu to:",
        answers: [
            { text: "Wirus", correct: false },
            { text: "Trojan", correct: false },
            { text: "Ransomware", correct: true },
            { text: "Spyware", correct: false }
        ]
    },
    {
        question: "Trojan to program, który:",
        answers: [
            { text: "Sam kopiuje się przez sieć", correct: false },
            { text: "Udaje legalny program, ale szkodzi w tle", correct: true },
            { text: "Szyfruje dane", correct: false },
            { text: "Dołącza się do plików", correct: false }
        ]
    },
    {
        question: "Podszywanie się pod bank w celu wyłudzenia hasła to:",
        answers: [
            { text: "DDoS", correct: false },
            { text: "Sniffing", correct: false },
            { text: "Phishing", correct: true },
            { text: "Spoofing", correct: false }
        ]
    },
    {
        question: "Zagrożenie '0-day' (dzień zerowy) wykorzystuje:",
        answers: [
            { text: "Lukę jeszcze nieznaną producentowi", correct: true },
            { text: "Lukę już załataną", correct: false },
            { text: "Wirusa usuwającego dane", correct: false },
            { text: "Brak zasilania", correct: false }
        ]
    },
    {
        question: "Jaka jest różnica między zagrożeniem a ryzykiem?",
        answers: [
            { text: "To to samo", correct: false },
            { text: "Zagrożenie to możliwość, ryzyko to prawdopodobieństwo x skutek", correct: true },
            { text: "Zagrożenie jest wewnętrzne, ryzyko zewnętrzne", correct: false },
            { text: "Ryzyko dotyczy tylko sprzętu", correct: false }
        ]
    },
    {
        question: "Outsourcing usług lub ubezpieczenie cybernetyczne to strategia:",
        answers: [
            { text: "Unikania ryzyka", correct: false },
            { text: "Mitygacji ryzyka", correct: false },
            { text: "Przeniesienia ryzyka", correct: true },
            { text: "Akceptacji ryzyka", correct: false }
        ]
    },
    {
        question: "Ile czasu ma administrator na zgłoszenie wycieku danych do UODO (RODO)?",
        answers: [
            { text: "24 godziny", correct: false },
            { text: "48 godzin", correct: false },
            { text: "72 godziny", correct: true },
            { text: "7 dni", correct: false }
        ]
    },
    {
        question: "Zasada 'minimum privilege' oznacza:",
        answers: [
            { text: "Dostęp admina dla każdego", correct: false },
            { text: "Nadawanie tylko niezbędnych uprawnień", correct: true },
            { text: "Brak haseł", correct: false },
            { text: "Kto pierwszy ten lepszy", correct: false }
        ]
    },
    {
        question: "Wysłanie maila z danymi do złej osoby to błąd:",
        answers: [
            { text: "Techniczny", correct: false },
            { text: "Naturalny", correct: false },
            { text: "Ludzki (przypadkowy)", correct: true },
            { text: "Celowy", correct: false }
        ]
    }
];

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