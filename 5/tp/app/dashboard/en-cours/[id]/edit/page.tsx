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
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form book={book} />
    </main>
  );
}