<script>
	import { quiz, score, breakdown } from '$lib/stores/quiz.js';
	import { questions } from '$lib/questions.js';

	export let onRestart;
	export let onReview;

	let percentage;
	let timeUsed;

	$: percentage = Math.round(($score / questions.length) * 100);
	$: timeUsed = 15 * 60 - $quiz.timeRemaining;
	$: minutes = Math.floor(timeUsed / 60);
	$: seconds = timeUsed % 60;
</script>

<div class="results-screen">
	<h2>Test Complete!</h2>
	<div class="results-summary">
		<div class="result-item">
			<span class="result-label">Your Score:</span>
			<span class="result-value">{$score}/{questions.length}</span>
		</div>
		<div class="result-item">
			<span class="result-label">Percentage:</span>
			<span class="result-value">{percentage}%</span>
		</div>
		<div class="result-item">
			<span class="result-label">Time Used:</span>
			<span class="result-value">{minutes}:{seconds.toString().padStart(2, '0')}</span>
		</div>
	</div>
	<div class="breakdown">
		<h3>Breakdown by Type:</h3>
		{#each Object.entries($breakdown) as [type, data]}
			<div class="breakdown-item">
				<span class="breakdown-type">{type}:</span>
				<span class="breakdown-score"
					>{data.correct}/{data.total} ({Math.round((data.correct / data.total) * 100)}%)</span
				>
			</div>
		{/each}
	</div>
	<div class="navigation">
		<button class="btn-primary" on:click={onRestart}>Restart Test</button>
		<button class="btn-secondary" on:click={onReview}>Review Answers</button>
	</div>
</div>

<style>
	.results-screen h2 {
		color: #1f2937;
		font-size: 32px;
		margin-bottom: 30px;
		text-align: center;
	}

	.results-summary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 30px;
		border-radius: 12px;
		margin-bottom: 30px;
	}

	.result-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.result-item:last-child {
		border-bottom: none;
	}

	.result-label {
		color: rgba(255, 255, 255, 0.9);
		font-size: 16px;
		font-weight: 500;
	}

	.result-value {
		color: white;
		font-size: 24px;
		font-weight: 700;
	}

	.breakdown {
		margin-bottom: 30px;
	}

	.breakdown h3 {
		color: #1f2937;
		margin-bottom: 15px;
		font-size: 20px;
	}

	.breakdown-item {
		display: flex;
		justify-content: space-between;
		padding: 12px 20px;
		background: #f3f4f6;
		border-radius: 8px;
		margin-bottom: 10px;
	}

	.breakdown-type {
		color: #374151;
		font-weight: 600;
	}

	.breakdown-score {
		color: #667eea;
		font-weight: 700;
	}

	.navigation {
		display: flex;
		justify-content: center;
		gap: 15px;
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
</style>
