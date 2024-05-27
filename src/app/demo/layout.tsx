'use client'

import { useState, ReactNode, useEffect } from 'react';
import { useLayman } from '@/context/LaymanContext';
import DemoSideMenu from '@/components/DemoSideMenu';
import PastPrompt from '@/components/PastPrompt';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPromptId, setSelectedPromptId] = useState(null);
  const { laymanSavedPrompts } = useLayman();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(false)
  }
  , [selectedPromptId])

  return (
    <div className="flex h-screen-app">
      <DemoSideMenu
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        data={laymanSavedPrompts}
        setSelectedPromptId={setSelectedPromptId}
        selectedPromptId={selectedPromptId}
      />
      {isSidebarOpen ? '' : (
        <div className={`sm:hidden w-8 px-1 ease-linear bg-blue-800 ${isSidebarOpen ? 'w-2/5 p-4' : 'w-0 p-0'}`}>
          <span className='sm:hidden cursor-pointer menu-toggler' onClick={toggleSidebar}>
            <svg className="size-6 my-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </span>
        </div>
      )}

      {selectedPromptId ? (
        <PastPrompt id={selectedPromptId} isSidebarOpen={isSidebarOpen} />
      ) : (
        <div className={`sm:w-9/12 flex flex-col sm:p-4 bg-blue-300 ${isSidebarOpen ? 'w-0 p-0 visually-hidden' : 'w-full p-4'}`}>
          {children}
        </div>
      )}

    </div>
  );
}
