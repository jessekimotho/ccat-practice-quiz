class CCATQuiz {
    constructor() {
        this.questions = questions;
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.timeLimit = 15 * 60; // 15 minutes in seconds
        this.timeRemaining = this.timeLimit;
        this.timerInterval = null;
        this.startTime = null;
        
        this.initElements();
        this.attachEventListeners();
    }

    initElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.reviewBtn = document.getElementById('review-btn');
        
        // Quiz elements
        this.questionType = document.getElementById('question-type');
        this.questionNumber = document.getElementById('question-number');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options');
        
        // Stats
        this.timerDisplay = document.getElementById('timer');
        this.progressDisplay = document.getElementById('progress');
        this.scoreDisplay = document.getElementById('score');
    }

    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restart());
        this.reviewBtn.addEventListener('click', () => this.reviewAnswers());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    handleKeyPress(e) {
        if (this.quizScreen.classList.contains('hidden')) return;
        
        const key = e.key.toLowerCase();
        if (['a', 'b', 'c', 'd'].includes(key)) {
            const index = key.charCodeAt(0) - 97; // Convert a=0, b=1, c=2, d=3
            this.selectAnswer(index);
        } else if (e.key === 'ArrowLeft' && !this.prevBtn.disabled) {
            this.previousQuestion();
        } else if (e.key === 'ArrowRight') {
            this.nextQuestion();
        }
    }

    startQuiz() {
        this.startScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.startTime = Date.now();
        this.startTimer();
        this.displayQuestion();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning color when less than 2 minutes
        if (this.timeRemaining < 120) {
            this.timerDisplay.style.color = '#ef4444';
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        
        this.questionType.textContent = question.type;
        this.questionNumber.textContent = `Question ${this.currentQuestion + 1}`;
        this.questionText.textContent = question.question;
        
        // Update progress
        this.progressDisplay.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        
        // Display options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            optionDiv.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${option}</span>
            `;
            
            // Highlight if already answered
            if (this.userAnswers[this.currentQuestion] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionDiv.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.textContent = this.currentQuestion === this.questions.length - 1 ? 'Finish' : 'Next';
    }

    selectAnswer(index) {
        this.userAnswers[this.currentQuestion] = index;
        
        // Update UI
        const options = this.optionsContainer.querySelectorAll('.option');
        options.forEach((opt, i) => {
            opt.classList.toggle('selected', i === index);
        });
        
        // Update score display
        this.updateScore();
        
        // Auto-advance to next question after short delay
        setTimeout(() => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.nextQuestion();
            } else {
                // Last question - show finish button highlighted
                this.nextBtn.classList.add('pulse');
            }
        }, 300);
    }

    updateScore() {
        const answered = this.userAnswers.filter(a => a !== null).length;
        let correct = 0;
        
        this.userAnswers.forEach((answer, index) => {
            if (answer !== null && answer === this.questions[index].correct) {
                correct++;
            }
        });
        
        this.score = correct;
        this.scoreDisplay.textContent = `Score: ${correct}/${answered}`;
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.endQuiz();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    endQuiz() {
        clearInterval(this.timerInterval);
        this.quizScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
        this.displayResults();
    }

    displayResults() {
        const timeUsed = this.timeLimit - this.timeRemaining;
        const minutes = Math.floor(timeUsed / 60);
        const seconds = timeUsed % 60;
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        document.getElementById('final-score').textContent = `${this.score}/${this.questions.length}`;
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('time-used').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Breakdown by type
        const breakdown = this.calculateBreakdown();
        const breakdownDiv = document.getElementById('breakdown-details');
        breakdownDiv.innerHTML = '';
        
        Object.keys(breakdown).forEach(type => {
            const item = breakdown[type];
            const div = document.createElement('div');
            div.className = 'breakdown-item';
            div.innerHTML = `
                <span class="breakdown-type">${type}:</span>
                <span class="breakdown-score">${item.correct}/${item.total} (${Math.round((item.correct/item.total)*100)}%)</span>
            `;
            breakdownDiv.appendChild(div);
        });
    }

    calculateBreakdown() {
        const breakdown = {};
        
        this.questions.forEach((question, index) => {
            if (!breakdown[question.type]) {
                breakdown[question.type] = { correct: 0, total: 0 };
            }
            
            breakdown[question.type].total++;
            
            if (this.userAnswers[index] === question.correct) {
                breakdown[question.type].correct++;
            }
        });
        
        return breakdown;
    }

    reviewAnswers() {
        this.resultsScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.currentQuestion = 0;
        this.displayReviewQuestion();
    }

    displayReviewQuestion() {
        const question = this.questions[this.currentQuestion];
        const userAnswer = this.userAnswers[this.currentQuestion];
        
        this.questionType.textContent = question.type;
        this.questionNumber.textContent = `Question ${this.currentQuestion + 1} - Review`;
        this.questionText.textContent = question.question;
        
        this.progressDisplay.textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        
        // Display options with correct/incorrect indicators
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const letter = String.fromCharCode(65 + index);
            optionDiv.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${option}</span>
            `;
            
            // Mark correct answer
            if (index === question.correct) {
                optionDiv.classList.add('correct');
            }
            
            // Mark user's answer if wrong
            if (userAnswer === index && index !== question.correct) {
                optionDiv.classList.add('incorrect');
            }
            
            // Mark user's answer if correct
            if (userAnswer === index && index === question.correct) {
                optionDiv.classList.add('selected', 'correct');
            }
            
            this.optionsContainer.appendChild(optionDiv);
        });
        
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.textContent = this.currentQuestion === this.questions.length - 1 ? 'Back to Results' : 'Next';
        
        // Override next button for review mode
        this.nextBtn.onclick = () => {
            if (this.currentQuestion < this.questions.length - 1) {
                this.currentQuestion++;
                this.displayReviewQuestion();
            } else {
                this.nextBtn.onclick = () => this.nextQuestion();
                this.endQuiz();
            }
        };
        
        this.prevBtn.onclick = () => {
            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                this.displayReviewQuestion();
            }
        };
    }

    restart() {
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.timeRemaining = this.timeLimit;
        this.timerDisplay.style.color = '';
        
        // Reset button handlers
        this.nextBtn.onclick = null;
        this.prevBtn.onclick = null;
        this.nextBtn.classList.remove('pulse');
        
        this.resultsScreen.classList.add('hidden');
        this.startScreen.classList.remove('hidden');
    }
}

// Initialize quiz when page loads
let quiz;
document.addEventListener('DOMContentLoaded', () => {
    quiz = new CCATQuiz();
});
