

import BooksTable from "@/app/ui/en-cours/archive";
import Pagination from "@/app/ui/en-cours/pagination";
import { Suspense } from 'react';
import { fetchBooksPages } from '@/app/lib/data';

export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchBooksPages(query);
  
    return (
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-4xl top-1 left-4 relative ">LECTURE EN COURS</h1>
        </div>
        <Suspense key={query + currentPage }>
          <BooksTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    );
  }
    