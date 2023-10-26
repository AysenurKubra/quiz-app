import { useState, useEffect } from 'react';
import './styles.css';

export const Timer = ({ selectedCategory }) => {
    const [timer, setTimer] = useState(60);
  
    useEffect(() => {
      if (selectedCategory) {
        const interval = setInterval(() => {
          setTimer(prevTimer => prevTimer - 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }
    }, [selectedCategory]);
  
    return <div className="timer">{timer}</div>;
  }
