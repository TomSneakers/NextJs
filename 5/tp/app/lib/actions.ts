'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
 
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


const FormSchema = z.object({
  id: z.string(),
  auteur: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  title: z.string({
    invalid_type_error: 'Please enter a title.',
  }),
  description: z.string({
    invalid_type_error: 'Please enter a description.',
  }),
  nombredepage: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),

  nombredepagelue: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
});

export type State = {
  errors?: {
    id?: string[];
    auteur?: string[];
    title?: string[];
    description?: string[];
    nombredepagelue?: number[];
    nombredepage?: number[];
  };
  message?: string | null;
};

const UpdateBook = FormSchema.omit({ id: true});

export async function updateBook(
  id: string,
  prevState: State,
  formData: FormData,
) {
console.log('FormData ://////////', FormData);
  const validatedFields = UpdateBook.safeParse({
    auteur: formData.get('auteur'),
    title: formData.get('title'),
    description: formData.get('description'),
    nombredepage: formData.get('nombredepage'),
    nombredepagelue: formData.get('nombredepagelue'),
  });

 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { auteur, title , description, nombredepagelue, nombredepage } = validatedFields.data; 
//   console.log(`
//   UPDATE bibliotheque
//   SET auteur = ${auteur}, title = ${title} ,description = ${description},  nombredepagelue = ${nombredepagelue}, nombredepage = ${nombredepage},
//   WHERE id = ${id}
// `)
try {
  await sql`
    UPDATE bibliotheque
    SET auteur = ${auteur}, title = ${title}, description = ${description}, nombredepagelue = ${nombredepagelue}, nombredepage = ${nombredepage}
    WHERE id = ${id}
  `;
} catch (error) {
  console.error('Database Error:', error);
  return { message: 'Database Error: Failed to Update Invoice.' };
}

 
  revalidatePath('/dashboard/en-cours');
  redirect('/dashboard/en-cours');
}





const FormSchema1 = z.object({

  auteur: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  title: z.string({
    invalid_type_error: 'Please enter a title.',
  }),
  description: z.string({
    invalid_type_error: 'Please enter a description.',
  }),
  nombredepage: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),

  nombredepagelue: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
});


export async function createBook(prevState: State, formData: FormData) {

  const validatedFields = FormSchema1.safeParse({
    auteur: formData.get('auteur'),
    title: formData.get('title'),
    description: formData.get('description'),
    nombredepage: formData.get('nombredepage'),
    nombredepagelue: formData.get('nombredepagelue'),
  });
  console.table(validatedFields.success);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }


  const { auteur, title, description, nombredepagelue, nombredepage } = validatedFields.data;
  console.log('validatedFields.data ://////////', validatedFields.data);
  try {
    await sql`
      INSERT INTO bibliotheque (auteur, title, description, nombredepagelue, nombredepage)
      VALUES (${auteur}, ${title}, ${description}, ${nombredepagelue}, ${nombredepage})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Database Error: Failed to Create Invoice.' };
  }

  revalidatePath('/dashboard/en-cours');
  redirect('/dashboard/en-cours');
}



export async function deleteBook(id: string) {

  try {
    await sql`DELETE FROM bibliotheque WHERE id = ${id}`;
    revalidatePath('/dashboard/en-cours');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}