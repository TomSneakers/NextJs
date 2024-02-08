
import { TrashIcon } from "@heroicons/react/20/solid";
import { deleteBook } from "@/app/lib/actions";


export default function DeleteBook({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteBook.bind(null, id);
 
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}

