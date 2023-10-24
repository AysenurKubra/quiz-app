import { useState } from 'react';
import './App.css';
import { PathCard } from './component/PathCard';
import QuestionCard from './component/QuestionCard';

function App() {

  const [data, setData] = useState([
    { id: 1, name: 'Wisdom', title: 'This path is going through Wisdom castle', image: '/pictures/visdom.png'},
    { id: 2, name: 'Courage', title: 'This path is going through courage castle', image: '/pictures/brave.png'},
    { id: 3, name: 'Love', title: 'This path is going through love castle', image: '/pictures/love.png'}
  ]);

  const handleClick = () => {
    return
  }

  return (
    <div className="container">
      <QuestionCard />
    {/* {
      data.map(pathCard => 
      <PathCard 
        id={pathCard.id} 
        title={pathCard.title} 
        name={pathCard.name} 
        handleClick={handleClick}
        image={process.env.PUBLIC_URL + pathCard.image} />)
    } */}
    </div>
  );
}

export default App;
