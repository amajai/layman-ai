'use client'

import { useState, FormEvent } from 'react';
import { useLayman } from '@/context/LaymanContext';
import PromptInput from '@/components/PromptInput';
import PromptOutput from '@/components/PromptOutput';
import { Button } from '@nextui-org/button';
import axios from 'axios';
import { useSession } from 'next-auth/react';


export default function AppPage() {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<object | string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { laymanSavedPromptsCloud, setLaymanSavedPromptsCloud } = useLayman();
  const { data: session } = useSession();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
    </div>

  );
}
