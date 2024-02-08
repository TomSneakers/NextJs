

import BooksTable from "@/app/ui/fini/archive";
import Pagination from "@/app/ui/en-cours/pagination";
import { Suspense } from 'react';
import { fetchBooksPages } from '@/app/lib/data';
import Search from "@/app/ui/search";
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
          <div className='box1'>
              <div className='wave1 -one1'></div>
              <div className='wave1 -two1'></div>
              <div className='wave1 -three1'></div>
              <div className='title1'>Fini</div>
          </div>
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
    