'use client';

import { Button } from '@/app/ui/button';
import { createBook } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Link from 'next/link';

export default function CreateBookForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBook, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Book Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Author */}
        <div className="mb-4">
          <label htmlFor="auteur" className="mb-2 block text-sm font-medium">
            Author
          </label>
          <input
            id="auteur"
            name="auteur"
            type="text"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Description */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Page Count */}
        <div className="mb-4">
          <label htmlFor="nombredepage" className="mb-2 block text-sm font-medium">
            Page Count
          </label>
          <input
            id="nombredepage"
            name="nombredepage"
            type="number"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Pages Read */}
        <div className="mb-4">
          <label htmlFor="nombredepagelue" className="mb-2 block text-sm font-medium">
            Pages Read
          </label>
          <input
            id="nombredepagelue"
            name="nombredepagelue"
            type="number"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Create Book
        </Button>
        {/* Cancel */}
        <Link href="/dashboard/en-cours">
        <Button type="button" className="w-full mt-2" >
          Cancel
        </Button>
        </Link>
      </div>
    </form>
  );
}