'use client'

import { useState, FormEvent, useEffect } from 'react';
import { useLayman } from '@/context/LaymanContext';
import PromptInput from '@/components/PromptInput';
import PromptOutput from '@/components/PromptOutput';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import usePromptLimit from '@/hooks/usePromptLimit';
import { Link, useDisclosure } from '@nextui-org/react';
import LimitModelApp from '@/components/LimitModelApp';

export default function AppPage() {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<object | string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { setLaymanSavedPromptsCloud } = useLayman();
  const { data: session } = useSession();
  const { status } = useSession();
  const { incrementPromptCount, isLimitReached } = usePromptLimit(30);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear().toString())
  }, [])

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isLimitReached) {
      onOpen()
      setPrompt('')
      return
    }
    if (!session) {
      console.error('Not authenticated');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        '/api/ask-layman-ai',
        { prompt },
        {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`
          }
        }
      );
      incrementPromptCount()
      await axios.post(
        '/api/layman-prompt/add',
        JSON.stringify({ user_input: prompt, output: res.data }),
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
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
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="container" id="main">
      <LimitModelApp isOpen={isOpen} onOpenChange={onOpenChange} limit={30} />
      <form onSubmit={handleSubmit}>
        <PromptInput
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          isLoading={loading}
        />
        <Button className='my-3' type="submit" size="lg" radius="full" color="primary" isLoading={loading}>
          Submit
        </Button>
      </form>
      <PromptOutput resultOutput={JSON.stringify(response, null, 2)} isLoading={loading} />
      <p className='mt-12 text-center text-black text-sm'>{year || '2024'} Layman AI. Made by <Link underline="hover" size='sm' className="text-primary-100" href={'https://github.com/amajai/layman-ai'}>Abdulmajeed Isa</Link></p>
    </div>
  );
}
