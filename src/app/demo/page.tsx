'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Demo() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(
                '/api/ask-layman-ai',
                { prompt },
                {
                    headers: {
                        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`
                    }
                }
            );
            setResponse(res.data);
        } catch (error) {
            console.error('Error fetching response:', error);
            setResponse({ error: error.message });
        }
        setLoading(false);
    };

    return (
        <div className='container'>
            <h1>Call LLM</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here"
                    rows={10}
                    cols={50}
                ></textarea>
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
