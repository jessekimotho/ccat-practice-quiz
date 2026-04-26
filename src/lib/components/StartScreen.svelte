<script>
	export let onStart;
</script>

<div class="start-screen">
	<h2>Welcome to CCAT Practice</h2>
	<p>This test simulates the Criteria Cognitive Aptitude Test (CCAT)</p>
	<ul>
		<li>50 questions in 15 minutes</li>
		<li>Math, Logic, and Verbal Reasoning</li>
		<li>Press A, B, C, or D to answer quickly</li>
		<li>Click answers or use keyboard shortcuts</li>
	</ul>
	<button class="btn-primary" on:click={onStart}>Start Test</button>
</div>

<style>
	.start-screen {
		text-align: center;
	}

	h2 {
		color: #1f2937;
		margin-bottom: 20px;
		font-size: 32px;
	}

	p {
		color: #6b7280;
		font-size: 18px;
		margin-bottom: 30px;
	}

	ul {
		list-style: none;
		margin-bottom: 40px;
		text-align: left;
		display: inline-block;
	}

	li {
		color: #374151;
		padding: 10px 0;
		font-size: 16px;
		border-bottom: 1px solid #e5e7eb;
	}

	li::before {
		content: "✓ ";
		color: #10b981;
		font-weight: bold;
		margin-right: 10px;
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
</style>
