import { User, LatestBookRaw,BookTable } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';

export async function getUser(email: string): Promise<User> {
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0] as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function fetchLatestBooks(): Promise<LatestBookRaw[]> { // Renommé la fonction pour obtenir les derniers livres
    noStore();

    try {
        const data = await sql<LatestBookRaw>`
            SELECT bibliotheque.id, bibliotheque.name, bibliotheque.description, bibliotheque.nombredepage, bibliotheque.nombredepagelue
            FROM bibliotheque
            JOIN bibliotheque ON bibliotheque.id = bibliotheque.book_id
            ORDER BY bibliotheque.date DESC
            LIMIT 5`;

        const latestBooks = data.rows.map((book) => ({
            ...book,
            // Si vous devez formater le montant, vous pouvez le faire ici
        }));
        return latestBooks;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest books.');
    }
}




const ITEMS_PER_PAGE = 6;

export async function fetchFilteredBooks(query: string, currentPage: number ) {
    noStore();

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const test = `SELECT *
    FROM bibliotheque
    WHERE
        title ILIKE ${`%${query}%`} OR
        auteur ILIKE ${`%${query}%`} OR
        description ILIKE ${`%${query}%`}
    ORDER BY title
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
`;

    try {
        const books = await sql<BookTable>`
            SELECT *
            FROM bibliotheque
            WHERE
                title ILIKE ${`%${query}%`} OR
                auteur ILIKE ${`%${query}%`} OR
                description ILIKE ${`%${query}%`}
            ORDER BY title
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return books.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch books.');
    }
}

export async function fetchBooksPages(query: string) {
    noStore();

    try {
        const count = await sql`SELECT COUNT(*)
            FROM bibliotheque
            WHERE
                title ILIKE ${`%${query}%`} OR
                auteur ILIKE ${`%${query}%`} OR
                description ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of books.');
    }
}

export async function fetchBookById(id: string) {
    noStore();

    try {
        const data = await sql<BookTable>`
            SELECT
                id,
                title,
                nombredepage,
                nombredepagelue,
                auteur,
                description
            FROM bibliotheque
            WHERE id = ${id};
        `;

        return data.rows[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch book.');
    }
}