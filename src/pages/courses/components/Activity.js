import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

const Activity = ({ question, language="cpp", answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleCheckAnswer = () => {
        setShowAnswer(!showAnswer);
    }

    return (
    <div className="mt-10 max-w-4xl mx-auto p-4 bg-gray-900 text-white rounded-md shadow-md">
    <div className='text-2xl text-center font-bold mb-5'>Activity!</div>
    <div className="mb-4">
        <label className="block text-lg mb-2">{question}</label>
    </div>
    <button
        onClick={handleCheckAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Show Answer
    </button>
    {showAnswer !== false && (
        <CodeBlock language={language} codeString={answer}/>
    )}
    </div>
);
};

export default Activity;
