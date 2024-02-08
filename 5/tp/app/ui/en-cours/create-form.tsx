'use client';

import { Button } from '@/app/ui/button';
import { createBook } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Link from 'next/link';

export default function CreateBookForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBook, initialState);

  return (
    <form action={dispatch} className='create-form'>
      <div className="rounded-md bg-pink-300 p-4 md:p-6">
        {/* Book Title */}
        <div className="mb-4 input-create">
          <label htmlFor="title" className="label-create ml-4 mb-2 block text-sm font-medium">
            Titre du livre
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="block w-full rounded-md  bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Author */}
        <div className="mb-4 input-create">
          <label htmlFor="auteur" className="label-create ml-4 mb-2 block text-sm font-medium">
            Auteur
          </label>
          <input
            id="auteur"
            name="auteur"
            type="text"
            className="block w-full rounded-md  bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Description */}
        <div className="mb-4 input-create">
          <label htmlFor="description" className="label-create ml-4 mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="block w-full rounded-md  bg-transparent py-2 px-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Page Count */}
        <div className="mb-4 input-create">
          <label htmlFor="nombredepage" className="label-create ml-4 mb-2 block text-sm font-medium">
            Nombre de page total
          </label>
          <input
            id="nombredepage"
            name="nombredepage"
            type="number"
            className="block w-full rounded-md  bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Pages Read */}
        <div className="mb-4 input-create">
          <label htmlFor="nombredepagelue" className="label-create ml-4 mb-2 block text-sm font-medium">
            Nombre de page lue
          </label>
          <input
            id="nombredepagelue"
            name="nombredepagelue"
            type="number"
            className="block w-full rounded-md  bg-transparent py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Create Book
        </Button>
        {/* Cancel */}
        <Link href="/dashboard">
        <Button type="button" className="w-full mt-2" >
          Annuler
        </Button>
        </Link>
      </div>
    </form>
  );
}