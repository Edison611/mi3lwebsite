import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, codeString, showLineNumbers=false }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
    //   alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="relative">
      <button 
        onClick={handleCopy} 
        className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded-md text-sm"
      >
        Copy
      </button>
      <SyntaxHighlighter  className="rounded-xl" language={language} style={vscDarkPlus} showLineNumbers={showLineNumbers} >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
