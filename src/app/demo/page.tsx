'use client'

import { useState, FormEvent } from 'react';
import { useLayman } from '@/context/LaymanContext';
import PromptInput from '@/components/PromptInput';
import PromptOutput from '@/components/PromptOutput';
import { Button } from '@nextui-org/button';

export default function HomePage() {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<object | string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { laymanSavedPrompts, setLaymanSavedPrompts } = useLayman();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const res = await axios.post(
      //   '/api/ask-layman-ai',
      //   { prompt },
      //   {
      //     headers: {
      //       'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`
      //     }
      //   }
      // );
      const res = {
        data: "hello my friend"
      };
      const now = new Date();
      setResponse(res.data);
      const new_prompt = {
        id: self.crypto.randomUUID(),
        user_input: prompt,
        output: res.data,
        date: now
      };
      const updatedPrompts = laymanSavedPrompts ? [new_prompt, ...laymanSavedPrompts] : [new_prompt];
      localStorage.setItem('laymanSavedPrompts', JSON.stringify(updatedPrompts));
      setPrompt('');
      setLaymanSavedPrompts(updatedPrompts);
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
