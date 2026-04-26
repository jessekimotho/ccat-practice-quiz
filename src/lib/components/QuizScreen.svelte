<script>
	import { quiz } from '$lib/stores/quiz.js';
	import { questions } from '$lib/questions.js';

	export let reviewMode = false;
	export let onFinish;
	export let onBackToResults;

	let currentQuestion;
	let selectedAnswer;

	$: currentQuestion = questions[$quiz.currentQuestion];
	$: selectedAnswer = $quiz.userAnswers[$quiz.currentQuestion];

	function selectAnswer(index) {
		quiz.selectAnswer(index);
		if (!reviewMode) {
			setTimeout(() => {
				if ($quiz.currentQuestion < questions.length - 1) {
					quiz.nextQuestion();
				} else {
					onFinish();
				}
			}, 300);
		}
	}

	function nextQuestion() {
		if ($quiz.currentQuestion < questions.length - 1) {
			quiz.nextQuestion();
		} else if (reviewMode) {
			onBackToResults();
		} else {
			onFinish();
		}
	}

	function previousQuestion() {
		quiz.previousQuestion();
	}
</script>

<div class="question-card">
	<div class="question-header">
		<span class="question-type">{currentQuestion.type}</span>
		<span class="question-number">
			Question {$quiz.currentQuestion + 1}
			{#if reviewMode} - Review{/if}
		</span>
	</div>
	<div class="question-text">{currentQuestion.question}</div>
	<div class="options">
		{#each currentQuestion.options as option, index}
			<div
				class="option"
				class:selected={selectedAnswer === index}
				class:correct={index === currentQuestion.correct}
				class:incorrect={selectedAnswer === index && index !== currentQuestion.correct}
				role="button"
				tabindex="0"
				on:click={() => !reviewMode && selectAnswer(index)}
				on:keydown={(e) => e.key === 'Enter' && !reviewMode && selectAnswer(index)}
			>
				<span class="option-letter">{String.fromCharCode(65 + index)}</span>
				<span class="option-text">{option}</span>
			</div>
		{/each}
	</div>
	<div class="navigation">
		<button
			class="btn-secondary"
			disabled={$quiz.currentQuestion === 0}
			on:click={previousQuestion}
		>
			Previous
		</button>
		<button class="btn-primary" on:click={nextQuestion}>
			{#if reviewMode}
				{#if $quiz.currentQuestion === questions.length - 1}
					Back to Results
				{:else}
					Next
				{/if}
			{:else}
				{#if $quiz.currentQuestion === questions.length - 1}
					Finish
				{:else}
					Next
				{/if}
			{/if}
		</button>
	</div>
</div>

<style>
	.question-card {
		animation: fadeIn 0.3s ease-in;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.question-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;
	}

	.question-type {
		background: #667eea;
		color: white;
		padding: 6px 16px;
		border-radius: 20px;
		font-size: 14px;
		font-weight: 600;
	}

	.question-number {
		color: #6b7280;
		font-weight: 600;
	}

	.question-text {
		font-size: 20px;
		color: #1f2937;
		margin-bottom: 30px;
		line-height: 1.6;
		font-weight: 500;
	}

	.options {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 30px;
	}

	.option {
		display: flex;
		align-items: center;
		padding: 16px 20px;
		border: 2px solid #e5e7eb;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s;
		background: white;
	}

	.option:hover {
		border-color: #667eea;
		background: #f3f4f6;
		transform: translateX(5px);
	}

	.option.selected {
		border-color: #667eea;
		background: #ede9fe;
	}

	.option.correct {
		border-color: #10b981;
		background: #d1fae5;
	}

	.option.incorrect {
		border-color: #ef4444;
		background: #fee2e2;
	}

	.option-letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		background: #667eea;
		color: white;
		border-radius: 50%;
		font-weight: 700;
		margin-right: 15px;
		flex-shrink: 0;
	}

	.option.selected .option-letter {
		background: #764ba2;
	}

	.option.correct .option-letter {
		background: #10b981;
	}

	.option.incorrect .option-letter {
		background: #ef4444;
	}

	.option-text {
		color: #1f2937;
		font-size: 16px;
		flex: 1;
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		margin-top: 30px;
	}

	.navigation button {
		flex: 1;
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 14px 40px;
		font-size: 16px;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
	}

	.btn-primary:active {
		transform: translateY(0);
	}

	.btn-primary:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}

	.btn-secondary {
		background: white;
		color: #667eea;
		border: 2px solid #667eea;
		padding: 12px 30px;
		font-size: 16px;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-secondary:hover {
		background: #667eea;
		color: white;
	}

	.btn-secondary:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}
</style>
