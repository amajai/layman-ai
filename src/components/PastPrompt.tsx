'use client'

import React from 'react'
import { Textarea } from "@nextui-org/react";
import { useLayman } from '@/context/LaymanContext';

const PastPrompt = ({ id, isSidebarOpen }) => {
  const { laymanSavedPrompts, setLaymanSavedPrompts } = useLayman();
  
  const prompt = laymanSavedPrompts.find(prompt => prompt.id == id);
  const date = new Date(prompt.date).toString();

  return (
    <div className={`sm:w-9/12 sm:p-4 bg-blue-400 ${isSidebarOpen ? 'w-0 p-0 visually-hidden' : 'w-full p-4'} `}>
      <Textarea
        isReadOnly
        size={'lg'}
        minRows={500}
        label="Input"
        placeholder={prompt.user_input}
      />
      <br />
      <Textarea
        isReadOnly
        size={'lg'}
        minRows={500}
        label="Output"
        placeholder={prompt.output}
        color="primary"
      />
      <p className='text-black mt-4 text-center'>{date}</p>
    </div>
  )
}

export default PastPrompt
