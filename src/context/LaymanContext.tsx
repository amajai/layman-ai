'use client'

import { useSession } from 'next-auth/react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Prompt {
  id: string;
  user_input: string;
  output: string;
  date: Date;
}

interface LaymanContextType {
  laymanSavedPrompts: Prompt[];
  setLaymanSavedPrompts: (prompts: Prompt[]) => void;
  laymanSavedPromptsCloud: Prompt[];
  setLaymanSavedPromptsCloud: (prompts: Prompt[]) => void;
}

const LaymanContext = createContext<LaymanContextType | undefined>(undefined);

export const LaymanProvider = ({ children }: { children: ReactNode }) => {
  const [laymanSavedPrompts, setLaymanSavedPrompts] = useState<Prompt[]>([]);
  const [laymanSavedPromptsCloud, setLaymanSavedPromptsCloud] = useState<Prompt[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const savedPrompts = JSON.parse(localStorage.getItem('laymanSavedPrompts') || '[]');
    if (savedPrompts) {
      setLaymanSavedPrompts(savedPrompts);
    }
  }, []);

  useEffect(() => {
    if (!session) return;
    const getPastUserPrompts = async () => {
      try {
        const response = await fetch('/api/layman-prompt/get');
        const data = await response.json();
        setLaymanSavedPromptsCloud(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    getPastUserPrompts();
  }, [session]);

  return (
    <LaymanContext.Provider
      value={
        {
          laymanSavedPrompts,
          setLaymanSavedPrompts,
          laymanSavedPromptsCloud,
          setLaymanSavedPromptsCloud
        }}>
      {children}
    </LaymanContext.Provider>
  );
};

export const useLayman = (): LaymanContextType => {
  const context = useContext(LaymanContext);
  if (!context) {
    throw new Error('useLayman must be used within a LaymanProvider');
  }
  return context;
};
