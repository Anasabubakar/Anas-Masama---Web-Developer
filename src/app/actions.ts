'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'There were errors with your submission. Please correct them and try again.',
    };
  }

  try {
    // Simulate sending an email. In a real application, you would use a
    // service like Resend, SendGrid, or Nodemailer here.
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${validatedFields.data.name}`);
    console.log(`Email: ${validatedFields.data.email}`);
    console.log(`Message: ${validatedFields.data.message}`);
    console.log('-----------------------------------');
    
    revalidatePath('/');
    return { message: 'Your message has been sent successfully!', errors: {} };
  } catch (e) {
    return {
      errors: {},
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
