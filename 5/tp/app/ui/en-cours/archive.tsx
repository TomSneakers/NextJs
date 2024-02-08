// BooksTable.tsx

import { fetchFilteredBooks } from '@/app/lib/data';
import CircularDeterminate from '../progressbar';
import UpdateBook from './buttons-update';
import DeleteBook from './buttons-delete';

export default async function BooksTable({ query, currentPage }: { query: string; currentPage: number; }) {
    const books = await fetchFilteredBooks(query, currentPage);

    return (
        <div className="box-encours flow-root ">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg p-2 md:pt-0" style={{backgroundColor: "#f889c466"}}>
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
                        <tbody className=" bg-pink-300" style={{color: "#86377b"}}>
                            {books.map((book) => {
                                const progression = ((book.nombredepagelue / book.nombredepage) * 100).toFixed(1); // Arrondir au dixième
                                if (progression !== "100.0") {
                                    return (
                                        <tr key={book.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                            <td className="whitespace-nowrap px-4 py-3 sm:pl-6"><CircularDeterminate progress={Number(progression)} /></td>
                                            <td className="whitespace-nowrap px-4 py-3 sm:pl-6">{book.title}</td>
                                            <td className="whitespace-nowrap px-3 py-3">{book.auteur}</td>
                                            <td className="whitespace-nowrap px-3 py-3">{book.description.substring(0, 47)}...</td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                            <UpdateBook id={book.id} />
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                            <DeleteBook id={book.id} />
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return null; // Exclure les livres avec une progression de 100%
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
