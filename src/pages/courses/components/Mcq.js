import React, { useState } from 'react';

const Mcq = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === correctAnswer);
  };

  return (
    <div className="mt-10 max-w-md mx-auto p-4 bg-gray-900 text-white rounded-md shadow-md">
      <div className='text-2xl text-center font-bold mb-5'>Test Your Knowledge</div>
      <div className="mb-4">
        <label className="block text-lg mb-2">{question}</label>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`w-full mb-2 py-2 px-4 rounded ${
              selectedOption === option
                ? option === correctAnswer
                  ? 'bg-green-500'
                  : 'bg-red-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {isCorrect !== null && (
        <div className={`mt-4 p-2 rounded ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect, please try again.'}
        </div>
      )}
    </div>
  );
};

export default Mcq;
