import { writable } from 'svelte/store';
import { questions } from '../questions.js';

const TIME_LIMIT = 15 * 60; // 15 minutes in seconds

function createQuizStore() {
	const { subscribe, set, update } = writable({
		currentQuestion: 0,
		userAnswers: new Array(questions.length).fill(null),
		timeRemaining: TIME_LIMIT,
		isRunning: false,
		isFinished: false,
		startTime: null,
		timerInterval: null
	});

	return {
		subscribe,
		start: () => {
			update((state) => ({
				...state,
				isRunning: true,
				startTime: Date.now()
			}));

			const interval = setInterval(() => {
				update((state) => {
					if (state.timeRemaining <= 0) {
						clearInterval(state.timerInterval);
						return { ...state, isFinished: true, isRunning: false };
					}
					return { ...state, timeRemaining: state.timeRemaining - 1 };
				});
			}, 1000);

			update((state) => ({ ...state, timerInterval: interval }));
		},
		selectAnswer: (index) => {
			update((state) => {
				const newAnswers = [...state.userAnswers];
				newAnswers[state.currentQuestion] = index;
				return { ...state, userAnswers: newAnswers };
			});
		},
		nextQuestion: () => {
			update((state) => ({
				...state,
				currentQuestion: Math.min(state.currentQuestion + 1, questions.length - 1)
			}));
		},
		previousQuestion: () => {
			update((state) => ({
				...state,
				currentQuestion: Math.max(state.currentQuestion - 1, 0)
			}));
		},
		finish: () => {
			update((state) => {
				if (state.timerInterval) {
					clearInterval(state.timerInterval);
				}
				return { ...state, isFinished: true, isRunning: false };
			});
		},
		restart: () => {
			update((state) => {
				if (state.timerInterval) {
					clearInterval(state.timerInterval);
				}
				return {
					currentQuestion: 0,
					userAnswers: new Array(questions.length).fill(null),
					timeRemaining: TIME_LIMIT,
					isRunning: false,
					isFinished: false,
					startTime: null,
					timerInterval: null
				};
			});
		}
	};
}

export const quiz = createQuizStore();

export const score = derived(quiz, ($quiz) => {
	let correct = 0;
	$quiz.userAnswers.forEach((answer, index) => {
		if (answer !== null && answer === questions[index].correct) {
			correct++;
		}
	});
	return correct;
});

export const answeredCount = derived(quiz, ($quiz) => {
	return $quiz.userAnswers.filter((a) => a !== null).length;
});

export const breakdown = derived(quiz, ($quiz) => {
	const result = {};
	questions.forEach((question, index) => {
		if (!result[question.type]) {
			result[question.type] = { correct: 0, total: 0 };
		}
		result[question.type].total++;
		if ($quiz.userAnswers[index] === question.correct) {
			result[question.type].correct++;
		}
	});
	return result;
});

function derived(store, fn) {
	const derivedStore = writable(fn($store(store)));
	store.subscribe((value) => {
		derivedStore.set(fn(value));
	});
	return derivedStore;
}

function $store(store) {
	let value;
	store.subscribe((v) => (value = v))();
	return value;
}
