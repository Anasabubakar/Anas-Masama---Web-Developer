'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

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
  
  const { name, email, message } = validatedFields.data;

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL ||
    !process.env.RESEND_TO_EMAIL
  ) {
    console.error('Missing required Resend environment variables for email sending.');
    return {
      errors: {},
      message: 'The server is not configured to send emails. Please contact the site administrator.',
    };
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });
    
    revalidatePath('/');
    return { message: 'Your message has been sent successfully!', errors: {} };
  } catch (e) {
    console.error('Failed to send email with Resend:', e);
    return {
      errors: {},
      message: 'An unexpected error occurred while sending the email. Please try again later.',
    };
  }
}
