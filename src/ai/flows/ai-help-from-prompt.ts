'use server';

/**
 * @fileOverview An AI agent that provides mental health support and resources based on user input.
 *
 * - aiHelpFromPrompt - A function that takes user input and returns suggested resources or coping mechanisms.
 * - AIHelpFromPromptInput - The input type for the aiHelpFromPrompt function.
 * - AIHelpFromPromptOutput - The return type for the aiHelpFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIHelpFromPromptInputSchema = z.object({
  userInput: z
    .string()
    .describe('The user input describing their feelings or situation.'),
});
export type AIHelpFromPromptInput = z.infer<typeof AIHelpFromPromptInputSchema>;

const AIHelpFromPromptOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested resources, coping mechanisms, or next steps for the user.'
    ),
});
export type AIHelpFromPromptOutput = z.infer<typeof AIHelpFromPromptOutputSchema>;

export async function aiHelpFromPrompt(input: AIHelpFromPromptInput): Promise<AIHelpFromPromptOutput> {
  return aiHelpFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiHelpFromPromptPrompt',
  input: {schema: AIHelpFromPromptInputSchema},
  output: {schema: AIHelpFromPromptOutputSchema},
  prompt: `You are a mental health support chatbot designed to help students.

  Based on the student's input, provide a list of relevant resources, coping mechanisms, or next steps.
  Be encouraging and supportive.

  Student Input: {{{userInput}}}`,
});

const aiHelpFromPromptFlow = ai.defineFlow(
  {
    name: 'aiHelpFromPromptFlow',
    inputSchema: AIHelpFromPromptInputSchema,
    outputSchema: AIHelpFromPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
