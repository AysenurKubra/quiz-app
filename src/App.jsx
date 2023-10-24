import { useState } from 'react';
import './App.css';
import { PathCard } from './component/PathCard';
import { LoveQuizQuestions } from './component/LoveQuizQuestions';
import { CourageQuizQuestions } from './component/CourageQuizQuestions';
import { WisdomQuizQuestions } from './component/WisdomQuizQuestions';
import { QuestionCard } from './component/QuestionCard';

function App() {

  const [data, setData] = useState([
    { id: 1, name: 'Wisdom', title: 'This path is going through Wisdom castle', image: '/pictures/visdom.png'},
    { id: 2, name: 'Courage', title: 'This path is going through courage castle', image: '/pictures/brave.png'},
    { id: 3, name: 'Love', title: 'This path is going through love castle', image: '/pictures/love.png'}
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleClick = (category) => {
    setSelectedCategory(category);

    switch (category) {
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
  }

  return (
    <div className="container">
    {
      data.map(pathCard => 
      <PathCard 
      key={pathCard.id}
        id={pathCard.id} 
        title={pathCard.title} 
        name={pathCard.name} 
        handleClick={handleClick}
        image={process.env.PUBLIC_URL + pathCard.image} />)
    }
    {selectedCategory && questions.length > 0 && <QuestionCard questions={questions} />}
    </div>
  );
}

export default App;
