'use client'

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
}

const LaymanContext = createContext<LaymanContextType | undefined>(undefined);

export const LaymanProvider = ({ children }: { children: ReactNode }) => {
  const [laymanSavedPrompts, setLaymanSavedPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const savedPrompts = JSON.parse(localStorage.getItem('laymanSavedPrompts') || '[]');
    if (savedPrompts) {
      setLaymanSavedPrompts(savedPrompts);
    }
  }, []);

  return (
    <LaymanContext.Provider value={{ laymanSavedPrompts, setLaymanSavedPrompts }}>
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
