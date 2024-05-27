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
  return promptOutput
    .slice(promptOutput.indexOf("<|assistant|>") + "<|assistant|>".length + 1)
    .trim();
}
