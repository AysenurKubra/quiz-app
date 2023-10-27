import { useState, useEffect } from 'react';
import './App.css';
import { PathCard } from './component/PathCard';
import { LoveQuizQuestions } from './component/LoveQuizQuestions';
import { CourageQuizQuestions } from './component/CourageQuizQuestions';
import { WisdomQuizQuestions } from './component/WisdomQuizQuestions';
import { QuestionCard } from './component/QuestionCard';
import { Timer } from './component/Timer';
import { IntroCard } from './component/IntroCard';
import { LogIn } from './component/LogIn';
import { ResultPage } from './component/ResultPage';

function App() {
	const [data, setData] = useState([
		{
			id: 1,
			name: 'Wisdom',
			title:
				"In the Wisdom path, you'll delve into profound inquiries that challenge your intellect and expand your knowledge.",
			image: '/pictures/visdom.png',
			category: 'Wisdom',
		},
		{
			id: 2,
			name: 'Courage',
			title:
				'As for the Courage path, brace yourself for queries that inspire bravery and the conquering of challenges, fostering a spirit of fearlessness within you.',
			image: '/pictures/brave.png',
			category: 'Courage',
		},
		{
			id: 3,
			name: 'Love',
			title:
				'The Love path leads you through questions that touch the deepest chambers of your heart, exploring the boundless facets of affection and connection.',
			image: '/pictures/love.png',
			category: 'Love',
		},
	]);

	const [logIn, setLogIn] = useState(true);
	const [showCategories, setShowCategories] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [timerStarted, setTimerStarted] = useState(false);
	const [remainingTime, setRemainingTime] = useState(60);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [quizCompleted, setQuizeCompleted] = useState(false);

	useEffect(() => {
		let timerInterval;

		if (timerStarted) {
			timerInterval = setInterval(() => {
				setRemainingTime((prevTime) => {
					if (prevTime > 0) {
						return prevTime - 1;
					} else {
						clearInterval(timerInterval);
						setQuizeCompleted(true);
					}
				});
			}, 1000);
		}

		return () => {
			clearInterval(timerInterval);
		};
	}, [timerStarted]);

	const handleLogIn = () => {
		setLogIn(false);
	};

	const handleClick = (id) => {
		const selectedPath = data.find((pathCard) => pathCard.id === id);
		setShowCategories(false);

		if (selectedPath) {
			setSelectedCategory(selectedPath.name);

			switch (selectedPath.name) {
				case 'Wisdom':
					setQuestions(WisdomQuizQuestions);
					break;
				case 'Courage':
					setQuestions(CourageQuizQuestions);
					break;
				case 'Love':
					setQuestions(LoveQuizQuestions);
					break;
				default:
					setQuestions([]);
			}

			if (!timerStarted) {
				setTimerStarted(true);
			}

			setRemainingTime(60);
		}
	};
	const handleSubmit = (value) => {
		if (value === questions[currentQuestionIndex].correctAnswer) {
			setCorrectAnswers((prev) => prev + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			setQuizeCompleted(true);
		}
	};

	return (
		<div className='app-container'>
			{logIn ? (
				<LogIn handleLogIn={handleLogIn} />
			) : (
				<>
					{quizCompleted ? (
						<ResultPage
							correctAnswers={correctAnswers}
							totalQuestions={questions}
						/>
					) : (
						<>
							{timerStarted && remainingTime > 0 ? (
								<div className='timer'>{remainingTime}</div>
							) : null}
							{showCategories ? (
								<>
									<IntroCard />
									<div className='path-cards__container'>
										{data.map((pathCard) => (
											<PathCard
												key={pathCard.id}
												id={pathCard.id}
												title={pathCard.title}
												name={pathCard.name}
												handleClick={handleClick}
												image={process.env.PUBLIC_URL + pathCard.image}
											/>
										))}
									</div>
								</>
							) : null}
							{selectedCategory ? (
								<QuestionCard
									questions={questions}
									currentQuestionIndex={currentQuestionIndex}
									handleSubmit={handleSubmit}
								/>
							) : null}
						</>
					)}
				</>
			)}
		</div>
	);
}

export default App;
