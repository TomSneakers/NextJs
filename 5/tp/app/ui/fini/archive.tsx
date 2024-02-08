// BooksTable.tsx

import { fetchFilteredBooks } from '@/app/lib/data';
import CircularDeterminate from '../progressbar';

export default async function BooksTable({ query, currentPage }: { query: string; currentPage: number; }) {
    const books = await fetchFilteredBooks(query, currentPage);

    // Filtrer les livres avec une progression de 100%
    const completedBooks = books.filter(book => {
        return ((book.nombredepagelue / book.nombredepage) * 100) === 100;
    });

    return (
        <div className="mt-10 flow-root ">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-pink-300 p-2 md:pt-0">
                    <table className="min-w-full text-gray-900 md:table ">
                        <thead className="rounded-lg text-left text-sm font-normal ">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Progression
                                </th>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Titre
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Auteur
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" bg-pink-300">
                            {completedBooks.map((book) => {
                                return (
                                    <tr key={book.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                        <td className="whitespace-nowrap px-4 py-3 sm:pl-6"><CircularDeterminate progress={100} /></td>
                                        <td className="whitespace-nowrap px-4 py-3 sm:pl-6">{book.title}</td>
                                        <td className="whitespace-nowrap px-3 py-3">{book.auteur}</td>
                                        <td className="whitespace-nowrap px-3 py-3">{book.description.substring(0, 47)}...</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
