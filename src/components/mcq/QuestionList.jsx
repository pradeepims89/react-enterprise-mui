import React from 'react';
const QuestionList = ({ questions, currentQuestionIndex, handleAnswerSelect, currrentAnswer }) => {
    const currentQuestion = questions[currentQuestionIndex];

     console.log('Current Answer:', currrentAnswer);
    return (    
        <div>   
            <h2>{currentQuestion.questionText}</h2>
            <ul>
                {currentQuestion.answerOptions.map((option, index) => (
                        
                    <li key={index} onClick={() => handleAnswerSelect(option)}
                        className={currrentAnswer === option.answerText ? 'selected' : ''}>
                        {option.answerText}
                    </li>   
                ))}
            </ul>
        </div>
    );
}   
export default QuestionList;