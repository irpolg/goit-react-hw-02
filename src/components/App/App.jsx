import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

import './App.css';

import { useState } from 'react';
import { useEffect } from 'react';

// функція initFeedback отримує дані з локального сховища браузера за ключем current-feedback
const initFeedback = () => {
    const getFeedback = localStorage.getItem('current-feedback');
    return getFeedback !== null
    ? JSON.parse(getFeedback)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

// створює стан feedback та функцію setFeedback, початкове значення =initFeedback
function App() {
  const [feedback, setFeedback] = useState(initFeedback);

// збереження відгуку в локальному сховищ
  useEffect(() => {
    localStorage.setItem('current-feedback', JSON.stringify(feedback));
  }, [feedback]);
  
//   ЗГІДНО УМОВИ updateFeedback 
  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const goodFeedback = feedback.good;
  const neutralFeedback = feedback.neutral;
  const badFeedback = feedback.bad;

// ЗГІДНО УМОВИ totalFeedback
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
    
  const positiveFeedback = Math.round(
    ((goodFeedback) / totalFeedback) * 100);

  const nullFeedback = totalFeedback === 0;

  return (
    <>
      <Description />

      <Options onBtnClick={() => updateFeedback('good')}>Good</Options>
      <Options onBtnClick={() => updateFeedback('neutral')}>Neutral</Options>
      <Options onBtnClick={() => updateFeedback('bad')}>Bad</Options>
      {!nullFeedback && <Options onBtnClick={resetFeedback}>Reset</Options>}

      <Feedback
        noFeedback={nullFeedback}
        good={goodFeedback}
        bad={badFeedback}
        neutral={neutralFeedback}
        total={totalFeedback}
        positive={positiveFeedback}
      />
    </>
  );
}

export default App;