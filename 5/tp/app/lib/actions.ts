'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';

 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function getBooks() {
  try {
    const books = await sql`SELECT * FROM bibliotheque`;
    return books.rows;
  } 
  catch (error) {
    console.error('Failed to fetch books:', error);
    throw new Error('Failed to fetch books.');
  }
}