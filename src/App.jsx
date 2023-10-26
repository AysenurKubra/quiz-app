import { useState, useEffect } from "react";
import "./App.css";
import { PathCard } from "./component/PathCard";
import { LoveQuizQuestions } from "./component/LoveQuizQuestions";
import { CourageQuizQuestions } from "./component/CourageQuizQuestions";
import { WisdomQuizQuestions } from "./component/WisdomQuizQuestions";
import { QuestionCard } from "./component/QuestionCard";
import { Timer } from "./component/Timer";
import { IntroCard } from "./component/IntroCard";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Wisdom",
      title:
        "In the Wisdom path, you'll delve into profound inquiries that challenge your intellect and expand your knowledge.",
      image: "/pictures/visdom.png",
      category: "Wisdom",
    },
    {
      id: 2,
      name: "Courage",
      title:
        "As for the Courage path, brace yourself for queries that inspire bravery and the conquering of challenges, fostering a spirit of fearlessness within you.",
      image: "/pictures/brave.png",
      category: "Courage",
    },
    {
      id: 3,
      name: "Love",
      title:
        "The Love path leads you through questions that touch the deepest chambers of your heart, exploring the boundless facets of affection and connection.",
      image: "/pictures/love.png",
      category: "Love",
    },
  ]);

  const [showIntro, setShowIntro] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showTimer, setShowTimer] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(data.length);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely");
  const [quizFinished, setQuizFinished] = useState(false)

  useEffect(() => {
    let timerInterval;

    if (showTimer && timerStarted) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerInterval);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [showTimer, timerStarted]);

  const handleClick = (id) => {
    const selectedPath = data.find((pathCard) => pathCard.id === id);
    setShowCategories(false);

    if (selectedPath) {
      setShowIntro(false);
      setSelectedCategory(selectedPath.name);

      if (!timerStarted) {
        setTimerStarted(true);
      }

      setShowTimer(true);
      setRemainingTime(60);

      switch (selectedPath.name) {
        case "Wisdom":
          setQuestions(WisdomQuizQuestions);
          break;
        case "Courage":
          setQuestions(CourageQuizQuestions);
          break;
        case "Love":
          setQuestions(LoveQuizQuestions);
          break;
        default:
          setQuestions([]);
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (value === questions[currentQuestionIndex].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
  
    setUnansweredQuestions(unansweredQuestions - 1);
  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setValue("");
      setHelperText("Choose wisely");
      setError(false);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="app-container">
      <div className="timer">
        {showTimer && remainingTime > 0 && `${remainingTime}`}
      </div>
      <div className="intro">{showIntro && <IntroCard />}</div>
      <div className="path-cards">
        {showCategories &&
          data.map((pathCard) => (
            <PathCard
              key={pathCard.id}
              id={pathCard.id}
              title={pathCard.title}
              name={pathCard.name}
              handleClick={handleClick}
              image={process.env.PUBLIC_URL + pathCard.image}
            />
          ))}
        {!showCategories && selectedCategory && questions.length > 0 && (
          <QuestionCard
            questions={questions}
            totalQuestions={questions.length}
            currentQuestionIndex={currentQuestionIndex}
            value={value}
            setValue={setValue}
            error={error}
            setError={setError}
            helperText={helperText}
            setHelperText={setHelperText}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      {quizFinished && (
  <div>
    <p>Doğru Cevaplar: {correctAnswers}</p>
    <p>Yanlış Cevaplar: {wrongAnswers}</p>
    <p>Cevaplanmamış Sorular: {unansweredQuestions}</p>
  </div>
)}
    </div>
  );
}

export default App;
