<script>
	import { onMount, onDestroy } from 'svelte';
	import { quiz, score, answeredCount } from '$lib/stores/quiz.js';
	import { questions } from '$lib/questions.js';
	import StartScreen from '$lib/components/StartScreen.svelte';
	import QuizScreen from '$lib/components/QuizScreen.svelte';
	import ResultsScreen from '$lib/components/ResultsScreen.svelte';

	let screen = 'start'; // start, quiz, results
	let reviewMode = false;

	onMount(() => {
		// Keyboard event listener
		const handleKeyPress = (e) => {
			if (screen !== 'quiz') return;
			
			const key = e.key.toLowerCase();
			if (['a', 'b', 'c', 'd'].includes(key)) {
				const index = key.charCodeAt(0) - 97;
				quiz.selectAnswer(index);
				quiz.nextQuestion();
			} else if (e.key === 'ArrowLeft') {
				quiz.previousQuestion();
			} else if (e.key === 'ArrowRight') {
				quiz.nextQuestion();
			}
		};

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	});

	function startQuiz() {
		screen = 'quiz';
		quiz.start();
	}

	function finishQuiz() {
		screen = 'results';
		quiz.finish();
	}

	function restart() {
		screen = 'start';
		reviewMode = false;
		quiz.restart();
	}

	function reviewAnswers() {
		screen = 'quiz';
		reviewMode = true;
	}
</script>

<div class="container">
	<header>
		<h1>CCAT Practice Test</h1>
		<div class="stats">
			{#if screen === 'quiz'}
				{@const minutes = Math.floor($quiz.timeRemaining / 60)}
				{@const seconds = $quiz.timeRemaining % 60}
				<div class="timer" class:warning={$quiz.timeRemaining < 120}>
					Time: {minutes}:{seconds.toString().padStart(2, '0')}
				</div>
			{/if}
			{#if screen === 'quiz' || screen === 'results'}
				<div class="progress">Question {$quiz.currentQuestion + 1} of {questions.length}</div>
				<div class="score">Score: {$score}/{answeredCount}</div>
			{/if}
		</div>
	</header>

	<main>
		{#if screen === 'start'}
			<StartScreen onStart={startQuiz} />
		{:else if screen === 'quiz'}
			<QuizScreen 
				{reviewMode} 
				onFinish={finishQuiz}
				onBackToResults={() => screen = 'results'}
			/>
		{:else if screen === 'results'}
			<ResultsScreen 
				onRestart={restart} 
				onReview={reviewAnswers}
			/>
		{/if}
	</main>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	header {
		background: white;
		padding: 20px 30px;
		border-radius: 12px 12px 0 0;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	header h1 {
		color: #667eea;
		font-size: 28px;
		margin-bottom: 15px;
	}

	.stats {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	.stats > div {
		background: #f3f4f6;
		padding: 8px 16px;
		border-radius: 6px;
		font-weight: 600;
		color: #374151;
		font-size: 14px;
	}

	.timer {
		background: #dbeafe !important;
		color: #1e40af !important;
	}

	.timer.warning {
		color: #ef4444 !important;
		background: #fee2e2 !important;
	}

	main {
		background: white;
		padding: 40px;
		border-radius: 0 0 12px 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
		min-height: 400px;
	}
</style>
