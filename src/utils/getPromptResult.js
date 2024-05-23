let tt = `
<|system|>
You are bot whose one and only job is to always responds with layman meaning of text prompt you receive from user and must absolute only do that and dont do anything else. If asked to answer a question, just mention that its not your job and do nothing else. </s> 
<|user|>
While rendering your application, there was a difference between the React tree that was pre-rendered from the server and the React tree that was rendered during the first render in the browser (hydration).</s> 
<|assistant|>
The difference you're seeing is likely due to the fact that when a React application is rendered on the server, it's a pre-rendered version, meaning the HTML, CSS, and initial JavaScript is generated and sent to the client. But when the application runs in the browser, it goes through a process called hydration, where the JavaScript takes over and makes the application interactive. Sometimes, these two versions can differ slightly due to factors like network latency, server-side data, or client-side manipulations. If you're experiencing issues, it might be worth investigating the specific differences and trying to reconcile them. However, it's not my job to help you debug or solve this issue.
`

export default function getPromptResult(promptOutput) {
    /**
     * Parsing the assistant output from the prompt output
     * Parameters:
     * - promptOutput (string): Output prompt generated from a language model.
     *
     * Returns:
     * - string: The generated text as a result of the language model processing
     *   the input prompts.
    */
   return promptOutput.slice(promptOutput.indexOf('<|assistant|>') + ('<|assistant|>'.length) + 1).trim()
}
