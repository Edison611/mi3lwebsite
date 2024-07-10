import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ courseName, chapters, isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-80 p-4 z-50`}
    >
      <button onClick={onClose} className="text-right text-sm text-gray-300">
        Close
      </button>
      <h2 className="text-2xl font-bold mt-5 mb-4">Table of Contents</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} onClick={() => navigate(`/courses/online/${courseName}/${index+1}`)} className="mb-2 hover:bg-gray-600 text-md text-gray-200">
            {index+1}: {chapter}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TableOfContents = ({courseName, chapters}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="text-lg">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="z-10 p-2 bg-gray-900 text-white rounded-md hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7h18M3 12h18m-9 5h9"
          />
        </svg>
      </button>
      <div ref={sidebarRef}>
        <Sidebar courseName={courseName} chapters={chapters} isOpen={isOpen} onClose={handleToggle} />
      </div>
    </div>
  );
};

export default TableOfContents;
