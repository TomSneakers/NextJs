import Breadcrumbs from '@/app/ui/en-cours/breadcrumbs';
import CreateBookForm from '@/app/ui/en-cours/create-form';

export default function CreatePage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Livre', href: '/dashboard/en-cours' },
          {
            label: 'Create book',
            href: '/dashboard/en-cours/create',
            active: true,
          },
        ]}
      />
      <CreateBookForm />
    </main>
  );
}