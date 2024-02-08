import Form from '@/app/ui/en-cours/edit-form';
import Breadcrumbs from '@/app/ui/en-cours/breadcrumbs';
import { fetchBookById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [book] = await Promise.all([
    fetchBookById(id),

  ]);
  if (!book) {
    notFound();
  }
  return (
    <main>
      <div className='box1'>
              <div className='wave1 -one1'></div>
              <div className='wave1 -two1'></div>
              <div className='wave1 -three1'></div>
              <div className='title1'>Ajouter</div>
      </div>
      <Form book={book} />
    </main>
  );
}