import React, { useState } from 'react';

const FillBlank = ({ question, answer,  }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    if (userAnswer.trim() === answer.trim()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-900 text-white rounded-md shadow-md">
    <div className='text-2xl text-center font-bold mb-5'>Try It Yourself!</div>
      <div className="mb-4">
        <label className="block text-lg mb-2">{question}</label>
        <input

          type="text"
          value={userAnswer}
          onChange={handleChange}
          className="w-full px-3 py-2 text-black rounded-md"
          placeholder="Type your answer here"
        />
      </div>
      <button
        onClick={handleCheckAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Check Answer
      </button>
      {isCorrect !== null && (
        <div className={`mt-4 p-2 rounded ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect, please try again.'}
        </div>
      )}
    </div>
  );
};

export default FillBlank;
