'use server';

/**
 * @fileOverview A flow to generate personalized opening remarks for a website.
 *
 * - generatePersonalizedIntro - A function that generates personalized opening remarks.
 * - GeneratePersonalizedIntroInput - The input type for the generatePersonalizedIntro function.
 * - GeneratePersonalizedIntroOutput - The return type for the generatePersonalizedIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedIntroInputSchema = z.object({
  keywords: z.array(z.string()).describe('Keywords representing the website visitor and their work style and principles.'),
});
export type GeneratePersonalizedIntroInput = z.infer<typeof GeneratePersonalizedIntroInputSchema>;

const GeneratePersonalizedIntroOutputSchema = z.object({
  introduction: z.string().describe('Personalized opening remarks for the website.'),
});
export type GeneratePersonalizedIntroOutput = z.infer<typeof GeneratePersonalizedIntroOutputSchema>;

export async function generatePersonalizedIntro(input: GeneratePersonalizedIntroInput): Promise<GeneratePersonalizedIntroOutput> {
  return generatePersonalizedIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedIntroPrompt',
  input: {schema: GeneratePersonalizedIntroInputSchema},
  output: {schema: GeneratePersonalizedIntroOutputSchema},
  prompt: `You are a personal branding expert helping someone craft an engaging opening remark for their personal website.

  The visitor has selected the following keywords that describe them: {{{keywords}}}.

  Write a short, attention-grabbing introductory remark that incorporates these keywords. The tone should be professional, yet inviting.

  Consider the following principles when crafting the introduction, and balance them appropriately:
  - Live like a king
  - Love like you’re not scared
  - Work like your name will be remembered`,
});

const generatePersonalizedIntroFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedIntroFlow',
    inputSchema: GeneratePersonalizedIntroInputSchema,
    outputSchema: GeneratePersonalizedIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
