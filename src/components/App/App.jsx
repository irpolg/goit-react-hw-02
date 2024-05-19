import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import './App.css';
import { useState, useEffect } from 'react';

const initFeedbackShow = () => {
    const getFeedback = localStorage.getItem('current-feedback');
    return getFeedback !== null
        ? JSON.parse(getFeedback) 
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

function App() {
    const [feedback, setFeedback] = useState(initFeedbackShow);

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

    const { good, neutral, bad } = feedback;
    
//  ЗГІДНО УМОВИ totalFeedback
    const totalFeedback = good + neutral + bad;  
    const positiveFeedback = Math.round(
        (good / totalFeedback) * 100);
    
    return (
    <>
        <Description />
            
        <Options
            options={['good', 'neutral', 'bad']}
            onClickFeedback={updateFeedback}
            onClickReset={resetFeedback}
            isResetButtonShow={totalFeedback > 0}
        />
            
        {totalFeedback > 0 ? 
            <Feedback
                good={good}
                bad={bad}
                neutral={neutral}
                total={totalFeedback}
                positive={positiveFeedback}
        />
            : <Notification />
        }
    </>
  );
}

export default App;