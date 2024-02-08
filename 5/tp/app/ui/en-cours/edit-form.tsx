
"use client";
import { BookForm } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateBook } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Link from 'next/link';

export default function EditBookForm({ book }: { book: BookForm }) {
  
  const initialState = { message: null, errors: {} };
  const updateBookWithId = updateBook.bind(null, book.id);
  const [state, dispatch] = useFormState(updateBookWithId, initialState);
  


  
  return (
    <form action={dispatch} className='form-edit'>
      <div className="rounded-md bg-pink-300 p-4 md:p-6">
        {/* Book Title */}
        <div className="mb-4 input-create">
          <label htmlFor="title" className="ml-3 mt-1 label-create  mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={book.title}
            className="block w-full rounded-md bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Author */}
        <div className="mb-4 input-create">
          <label htmlFor="auteur" className="ml-3 mt-1 label-create mb-2 block text-sm font-medium">
            Author
          </label>
          <input
            id="auteur"
            name="auteur"
            type="text"
            defaultValue={book.auteur}
            className="block w-full rounded-md bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Description */}
        <div className="mb-4 input-create">
          <label htmlFor="description" className="ml-3 mt-1 label-create mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={book.description}
            className="block w-full rounded-md bg-transparent py-2 px-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Page Count */}
        <div className="mb-4 input-create">
          <label htmlFor="nombredepage" className="ml-3 mt-1 label-create mb-2 block text-sm font-medium">
            Page Count
          </label>
          <input
            id="nombredepage"
            name="nombredepage"
            type="number"
            defaultValue={book.nombredepage}
            className="block w-full rounded-md bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Pages Read Count */}
        <div className="mb-4 input-create">
          <label htmlFor="nombredepagelue" className="ml-3 mt-1 label-create mb-2 block text-sm font-medium">
            Pages Read
          </label>
          <input
            id="nombredepagelue"
            name="nombredepagelue"
            type="number"
            defaultValue={book.nombredepagelue}
            className="block w-full rounded-md bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      {/* Form Actions */}

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Modifier le livre
        </Button>
        {/* Cancel */}
        <Link href="/dashboard">
          <Button type="button" className="w-full mt-2" >
          Annulé
          </Button>
        </Link>
    </form>
  );
}
