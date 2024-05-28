'use client'

import React from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { useLayman } from '@/context/LaymanContext';

interface PastPromptProps {
  id: string;
  isSidebarOpen: boolean;
  sessionObj?: Object | null;
}

const PastPrompt: React.FC<PastPromptProps> = ({ id, isSidebarOpen, sessionObj = null }) => {
  const { laymanSavedPrompts, laymanSavedPromptsCloud } = useLayman();

  let prompt: any = {};

  if (!sessionObj) {
    prompt = laymanSavedPrompts.find((prompt: any) => prompt.id == id);
  } else {
    prompt = laymanSavedPromptsCloud.find((prompt: any) => prompt._id == id);
  }

  const date = new Date(prompt.date).toString();
  const handleCopy = (value: string) => {
    if (value === 'null') {
      value = '';
    }
    navigator.clipboard.writeText(value);
  };

  return (
    <div className={`sm:w-9/12 sm:p-4 bg-blue-400 ${isSidebarOpen ? 'w-0 p-0 visually-hidden' : 'w-full p-4'}`}>
      <Textarea
        isReadOnly
        size="lg"
        minRows={500}
        label="Input"
        placeholder={prompt.user_input}
      />
      <br />
      <div className="relative lg:mt-6 mt-0">
        <Textarea
          isReadOnly
          size="lg"
          minRows={500}
          label="Output"
          placeholder={prompt.output}
          color="primary"
        />
        <Button
          style={{ position: 'absolute', top: 0, right: 0 }}
          onPress={() => handleCopy(prompt.output)}
          size="sm"
          radius="full"
        >
          Copy
        </Button>
      </div>
      <p className="text-black mt-4 text-center">{date}</p>
    </div>
  );
}

export default PastPrompt;
