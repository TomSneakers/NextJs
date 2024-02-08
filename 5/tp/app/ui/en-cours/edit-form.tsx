
"use client";
import { BookForm } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import { updateBook } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditBookForm({ book }: { book: BookForm }) {
  
  const initialState = { message: null, errors: {} };
  const updateBookWithId = updateBook.bind(null, book.id);
  const [state, dispatch] = useFormState(updateBookWithId, initialState);
  


  
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
            defaultValue={book.title}
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
            defaultValue={book.auteur}
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
            defaultValue={book.description}
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
            defaultValue={book.nombredepage}
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Book Pages Read Count */}
        <div className="mb-4">
          <label htmlFor="nombredepagelue" className="mb-2 block text-sm font-medium">
            Pages Read
          </label>
          <input
            id="nombredepagelue"
            name="nombredepagelue"
            type="number"
            defaultValue={book.nombredepagelue}
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      {/* Form Actions */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
        <Button type="submit">Edit Book</Button>
      </div>
    </form>
  );
}
