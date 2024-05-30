import { NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference'
import { prompt_template } from '@/utils/prompt_template'
import getPromptResult from '@/utils/getPromptResult'

const hf = new HfInference(process.env.HF_TOKEN as string);

export async function POST(request: Request): Promise<Response> {
    const { prompt } = await request.json() as { prompt: string };
    const repo_id = process.env.HF_REPO_ID;
    const authHeader = request.headers.get("authorization");
    const token = authHeader && authHeader.split(' ')[1];
    if (token !== process.env.HF_TOKEN) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    try {
        const response = await hf.textGeneration({
            model: repo_id,
            inputs: prompt_template.replace('<user_text>', prompt),
            parameters: { max_new_tokens: 250 },
        });
        return NextResponse.json(getPromptResult(response.generated_text));
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
