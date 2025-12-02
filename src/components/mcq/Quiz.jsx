import React from 'react';
import './Quiz.css';
import QuestionList from '../mcq/QuestionList.jsx';
import { useState } from 'react';

const Quiz = () => {

   const questions = [
        {
            questionText: 'What is var key word in c# ?',   
            answerOptions: [
                { answerText: 'Explicitly typed variable', isCorrect: false },
                { answerText: 'Implicitly typed variable', isCorrect: true },   
                { answerText: 'Statically typed variable', isCorrect: false },      
                { answerText: 'Dynamically typed variable', isCorrect: false },
            ],
        },  
        {
            questionText: 'Which of the following is not a value type in C#?',   
            answerOptions: [
                { answerText: 'int', isCorrect: false },
                { answerText: 'float', isCorrect: false },
                { answerText: 'string', isCorrect: true },
                { answerText: 'bool', isCorrect: false },
            ],  
        }, 
        {   
            questionText: 'Which of the following is used to define a constant in C#?',   
            answerOptions: [
                { answerText: 'const', isCorrect: true },
                { answerText: 'readonly', isCorrect: false },   
                { answerText: 'static', isCorrect: false },
                { answerText: 'final', isCorrect: false },
            ],
        }  
    ];  

    const   [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const   [currrentAnswer, setCurrentAnswer] = useState(null); 
    const   [score, setScore] = useState(0);

    const handleAnswerSelect = (option) => {
       const ans=questions[currentQuestionIndex].answerOptions.find(option => option.answerText === option.answerText);
         setCurrentAnswer(ans.answerText);
         if (option.isCorrect) {
            setScore(score + 1);
         }
    };    
    
    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setCurrentAnswer(null);
        score=score;
    }   

    return (
  <div className="App">
    <h1>Quiz Application</h1>
    <h3>Score: {score} / {questions.length}</h3>

    {currentQuestionIndex >= questions.length ? (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your final score is {score} out of {questions.length}.</p>
        <button onClick={() => {
          setCurrentQuestionIndex(0);
          setScore(0);
          setCurrentAnswer(null);
        }} >Restart Quiz</button>
      </div>
    ) : (
      <div>
        <QuestionList 
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswerSelect={handleAnswerSelect}
          currrentAnswer={currrentAnswer}
        />
        <button
          className={currrentAnswer != null ? "button" : "button-disable"}
          onClick={handleNextQuestion}
          disabled={currrentAnswer == null}
        >
          Next Question
        </button>
      </div>
    )}
  </div>
);
};
export default Quiz;
