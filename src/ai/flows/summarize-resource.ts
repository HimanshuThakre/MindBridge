'use server';

/**
 * @fileOverview Summarizes a mental health resource into key takeaways.
 *
 * - summarizeResource - A function that summarizes the given mental health resource.
 * - SummarizeResourceInput - The input type for the summarizeResource function.
 * - SummarizeResourceOutput - The return type for the summarizeResource function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResourceInputSchema = z.object({
  resourceText: z
    .string()
    .describe('The text content of the mental health resource to summarize.'),
});
export type SummarizeResourceInput = z.infer<typeof SummarizeResourceInputSchema>;

const SummarizeResourceOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the mental health resource.'),
});
export type SummarizeResourceOutput = z.infer<typeof SummarizeResourceOutputSchema>;

export async function summarizeResource(input: SummarizeResourceInput): Promise<SummarizeResourceOutput> {
  return summarizeResourceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResourcePrompt',
  input: {schema: SummarizeResourceInputSchema},
  output: {schema: SummarizeResourceOutputSchema},
  prompt: `You are an AI assistant specializing in mental health resources.

  Please summarize the following mental health resource, extracting the key takeaways and providing a concise overview for students to quickly understand the core concepts.

  Resource Text: {{{resourceText}}}`,
});

const summarizeResourceFlow = ai.defineFlow(
  {
    name: 'summarizeResourceFlow',
    inputSchema: SummarizeResourceInputSchema,
    outputSchema: SummarizeResourceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
