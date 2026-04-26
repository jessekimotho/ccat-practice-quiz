let currentQuestionIndex = 0;
let score = 0;
let answered = 0;
let userAnswers = new Array(questions.length).fill(null);
let timerInterval;
let seconds = 0;

// Category scores tracking
let categoryScores = {
    Math: { correct: 0, total: 0 },
    Verbal: { correct: 0, total: 0 },
    Logic: { correct: 0, total: 0 },
    Spatial: { correct: 0, total: 0 }
};

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle questions at the start
const shuffledQuestions = shuffleArray(questions);

function initQuiz() {
    document.getElementById('totalQ').textContent = shuffledQuestions.length;
    loadQuestion(0);
    startTimer();
}

function loadQuestion(index) {
    const question = shuffledQuestions[index];
    
    document.getElementById('currentQ').textContent = index + 1;
    document.getElementById('categoryBadge').textContent = question.category;
    document.getElementById('questionText').textContent = question.question;
    
    // Update progress bar
    const progress = ((index + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Clear and create options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'option-btn w-full text-left p-4 border-2 border-gray-200 rounded-xl font-medium text-gray-700 hover:border-blue-400';
        button.innerHTML = `
            <span class="inline-block w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-center leading-8 mr-3 font-bold">${letters[i]}</span>
            ${option}
        `;
        button.onclick = () => selectAnswer(i);
        
        // If already answered, show the selection
        if (userAnswers[index] === i) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });
    
    // Hide feedback
    document.getElementById('feedback').classList.add('hidden');
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').textContent = index === shuffledQuestions.length - 1 ? 'Finish' : 'Next →';
    
    // Show feedback if already answered
    if (userAnswers[index] !== null) {
        showFeedback(index);
    }
}

function selectAnswer(optionIndex) {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Don't allow changing answer if already answered
    if (userAnswers[currentQuestionIndex] !== null) {
        return;
    }
    
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update category scores
    categoryScores[question.category].total++;
    
    const isCorrect = optionIndex === question.correct;
    if (isCorrect) {
        score++;
        categoryScores[question.category].correct++;
    }
    answered++;
    
    // Update score display
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = answered;
    
    // Update button styles
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === optionIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (i === question.correct && optionIndex !== question.correct) {
            btn.classList.add('correct');
        }
    });
    
    showFeedback(currentQuestionIndex);
}

function showFeedback(index) {
    const question = shuffledQuestions[index];
    const userAnswer = userAnswers[index];
    const isCorrect = userAnswer === question.correct;
    
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedbackText');
    const explanation = document.getElementById('explanation');
    
    feedback.classList.remove('hidden');
    feedback.classList.remove('bg-green-100', 'bg-red-100');
    
    if (isCorrect) {
        feedback.classList.add('bg-green-100');
        feedbackText.textContent = '✓ Correct!';
        feedbackText.className = 'font-semibold text-green-800';
    } else {
        feedback.classList.add('bg-red-100');
        feedbackText.textContent = '✗ Incorrect';
        feedbackText.className = 'font-semibold text-red-800';
    }
    
    explanation.textContent = question.explanation;
}

function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function showResults() {
    clearInterval(timerInterval);
    
    document.querySelector('.bg-white\\/95').classList.add('hidden');
    document.getElementById('prevBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    document.getElementById('finalScore').textContent = percentage;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('totalCount').textContent = shuffledQuestions.length;
    
    // Calculate category scores
    const mathPercent = categoryScores.Math.total > 0 ? Math.round((categoryScores.Math.correct / categoryScores.Math.total) * 100) : 0;
    const verbalPercent = categoryScores.Verbal.total > 0 ? Math.round((categoryScores.Verbal.correct / categoryScores.Verbal.total) * 100) : 0;
    const logicPercent = categoryScores.Logic.total > 0 ? Math.round((categoryScores.Logic.correct / categoryScores.Logic.total) * 100) : 0;
    const spatialPercent = categoryScores.Spatial.total > 0 ? Math.round((categoryScores.Spatial.correct / categoryScores.Spatial.total) * 100) : 0;
    
    document.getElementById('mathScore').textContent = mathPercent + '%';
    document.getElementById('verbalScore').textContent = verbalPercent + '%';
    document.getElementById('logicScore').textContent = logicPercent + '%';
    document.getElementById('spatialScore').textContent = spatialPercent + '%';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = 0;
    userAnswers = new Array(questions.length).fill(null);
    seconds = 0;
    
    categoryScores = {
        Math: { correct: 0, total: 0 },
        Verbal: { correct: 0, total: 0 },
        Logic: { correct: 0, total: 0 },
        Spatial: { correct: 0, total: 0 }
    };
    
    document.getElementById('score').textContent = '0';
    document.getElementById('answered').textContent = '0';
    
    document.querySelector('.bg-white\\/95').classList.remove('hidden');
    document.getElementById('prevBtn').classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('resultsSection').classList.add('hidden');
    
    // Reshuffle questions
    shuffledQuestions.length = 0;
    shuffledQuestions.push(...shuffleArray(questions));
    
    initQuiz();
}

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${mins}:${secs}`;
    }, 1000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        selectAnswer(parseInt(e.key) - 1);
    }
});

// Initialize quiz on load
initQuiz();
