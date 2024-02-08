import { PlusIcon, TrashIcon } from '@heroicons/react/20/solid';
import { deleteBook } from '@/app/lib/actions';
import Link from 'next/link';

export default function CreateBook() {
  return (
    <Link
      href="/dashboard/create"
      className=" button-create flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Book</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}