'use client'

import { SetStateAction, useEffect, useState } from 'react';
import PromptInput from '@/components/PromptInput';
import PromptOuput from '@/components/PromptOutput';
import {Button} from "@nextui-org/react";

export default function DemoPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [laymanSavedPrompts, setLaymanSavedPrompts] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const laymanSavedPrompts = JSON.parse(localStorage.getItem('laymanSavedPrompts'));
    if (laymanSavedPrompts) {
     setLaymanSavedPrompts(laymanSavedPrompts);
    }
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        // const res = await axios.post(
        //     '/api/ask-layman-ai',
        //     { prompt },
        //     {
        //         headers: {
        //             'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`
        //         }
        //     }
        // );
        const res = {
            data: "hello my friend"
        }
        const now = new Date()
        setResponse(res.data);
        console.log(now);
        const laymanSavedPrompts = JSON.parse(localStorage.getItem('laymanSavedPrompts'));
        const new_prompt = {
          user_input: prompt,
          output: res.data,
          date: now
        }
        if (laymanSavedPrompts) {
          laymanSavedPrompts.unshift(new_prompt)
          localStorage.setItem('laymanSavedPrompts', JSON.stringify(laymanSavedPrompts));
        }
        else 
          localStorage.setItem('laymanSavedPrompts', JSON.stringify([new_prompt]));
        setPrompt('');
        setLaymanSavedPrompts(laymanSavedPrompts);
    } catch (error) {
        console.error('Error fetching response:', error);
        setResponse({ error: error.message });
    }
    setLoading(false);
};

  return (
    <div className="flex h-screen-app">
      <div className={`lg:w-1/6 ease-linear lg:p-4 bg-gray-200 ${isSidebarOpen? 'w-2/5 p-4': 'w-0 p-0' }`}>
            {isSidebarOpen?
              <span className="relative cursor-pointer w-2/5" onClick={toggleSidebar}>
                  <div className='absolute -top-12 -left-3'>
                    <svg  className="left-56 size-6 my-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </div>
              </span>
            :
            ''
            }
        <h2 className="text-xl font-bold mb-4 mt-8">Past Prompts</h2>
        <ul>
          {laymanSavedPrompts.map((prompt, index) => (
            <li key={index} className="mb-2 p-2 bg-white rounded shadow">
              {prompt.user_input}
            </li>
          ))}
        </ul>
      </div>
      {isSidebarOpen?
          ''
          :
        <div className={` lg:hidden w-8 px-1 ease-linear bg-blue-800 ${isSidebarOpen? 'w-2/5 p-4': 'w-0 p-0' }`}>
          <span className='lg:hidden cursor-pointer menu-toggler' onClick={toggleSidebar}>
            <svg className="size-6 my-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </span>
        </div>
        }
      <div className="lg:w-5/6 w-full flex flex-col p-4 bg-blue-300">
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <PromptInput 
                  value={prompt}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPrompt(e.target.value)}
                  isLoading={loading}
                />
                <Button className='my-3' type="submit" size="lg" radius="full" color="primary" isLoading={loading}>
                  Submit
                </Button>
            </form>
            <PromptOuput resultOuput={JSON.stringify(response, null, 2)} isLoading={loading}/>
        </div>
      </div>
    </div>
  );
};
