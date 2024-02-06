'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { noto_sans} from '../fonts';

// Map of links to display in the top navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '#',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers',
    href: '#', 
    icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 relative nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo or site name can be placed here */}
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <h1 className={`${noto_sans.className} text-white ml-2 text-lg`} >TITRE</h1>

            </div>
          </div>
          <div className="flex items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                  {
                    'border-blue-500 text-white': pathname === link.href,
                    'border-transparent text-gray-300 hover:text-white hover:border-white': pathname !== link.href,
                  }
                )}
              >
                <link.icon className="w-6 h-6" />
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
