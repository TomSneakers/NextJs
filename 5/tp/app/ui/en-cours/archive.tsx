import { fetchFilteredBooks } from '@/app/lib/data'; // Importez la fonction pour récupérer les livres

export default async function BooksTable({ query, currentPage, }: { query: string; currentPage: number; }) {
    const books = await fetchFilteredBooks(query, currentPage, ); // Récupérez les livres en fonction de la requête et de la page actuelle

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <table className="min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Author
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Pages
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {books.map((book) => (
                                console.log(book),
                                <tr key={book.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                    <td className="whitespace-nowrap px-4 py-3 sm:pl-6">{book.title}</td>
                                    <td className="whitespace-nowrap px-3 py-3">{book.auteur}</td>
                                    <td className="whitespace-nowrap px-3 py-3">{book.nombredepage}</td>
                                    <td className="whitespace-nowrap px-3 py-3">{book.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
