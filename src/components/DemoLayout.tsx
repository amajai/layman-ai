'use client'

import React, { useState } from 'react';

const DemoLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [prompts, setPrompts] = useState([
    'Prompt 1',
    'Prompt 2',
    'Prompt 3',
  ]);

  return (
    <div className="flex h-screen-app">
      <div className={`lg:w-1/6 lg:p-4 bg-gray-200 ${isSidebarOpen? 'w-2/5 p-4': 'w-0 p-0' }`}>
        <span className="relative cursor-pointer" onClick={toggleSidebar}>
            {isSidebarOpen?
            <svg className="absolute left-56 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            :
            ''
            }

        </span>

        <h2 className="text-xl font-bold mb-4">Past Prompts</h2>
        <ul>
          {prompts.map((prompt, index) => (
            <li key={index} className="mb-2 p-2 bg-white rounded shadow">
              {prompt}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-5/6 w-full flex flex-col p-4 bg-blue-200">
        <span className='lg:hidden cursor-pointer' onClick={toggleSidebar}>
            {isSidebarOpen?
            ''
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            }
        </span>
        {children}
      </div>
    </div>
  );
};

export default DemoLayout;
