import React, { useEffect, useState } from 'react'
import { Button } from "@nextui-org/react";
import DeletePromptItemBtn from './DeletePromptItemBtn';
import DeleteAllPromptItemBtn from './DeleteAllPromptItemBtn';

const AppSideMenu = ({ isSidebarOpen, toggleSidebar, data, setSelectedPromptId, selectedPromptId }) => {
  const [isMobileView, setIsMobileView] = useState(false)

  const handleResize = () => {
    if (window.innerWidth <= 639) {
      setIsMobileView(true)
    } else {
      setIsMobileView(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div className={`sm:w-3/12 ease-linear sm:p-4 bg-gray-200 ${isMobileView && !isSidebarOpen && 'visually-hidden'} ${isSidebarOpen ? 'w-full p-4 z-10' : 'w-0 p-0'}`}>
      {isSidebarOpen ? (
        <span className="relative cursor-pointer w-2/5" onClick={toggleSidebar}>
          <div className='absolute -top-12 -left-3'>
            <svg className="left-56 size-6 my-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </span>
      ) : ''}

      <h2 className="text-xl font-bold mb-4 mt-8">Past Prompts</h2>
      <ul className='h-4/6 overflow-y-auto'>
        {data.length > 0 ?
          (data.map((prompt) => (
            <li
              key={prompt.id}
              className={`mb-2 p-2 text-sm rounded flex justify-between items-center shadow cursor-pointer promptItem ${selectedPromptId == prompt.id ? 'bg-blue-400 text-white' : 'bg-white'}`}
              onClick={() => setSelectedPromptId(prompt.id)}
            >
              {prompt.user_input.length <= 80? prompt.user_input: `${prompt.user_input.substring(0,80)}...`}
              <DeletePromptItemBtn promptItem={prompt} setSelectedPromptId={setSelectedPromptId} selectedPromptId={selectedPromptId} />
            </li>
          )))
          :
          <div className='h-4/6 text-center flex justify-center items-center'>No prompt history</div>
        }
      </ul>
      <Button fullWidth={true} color="success" className='mt-5' onPress={() => setSelectedPromptId(null)}>
        New Prompt
      </Button>
      <DeleteAllPromptItemBtn setSelectedPromptId={setSelectedPromptId} />
      <p className='text-warning-300 mt-3 text-center'>Demo Version</p>

    </div>
  )
}

export default AppSideMenu