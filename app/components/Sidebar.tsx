'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-[#1e1e1e] text-white sticky top-0 flex flex-col p-6 border-r border-gray-800">
      <h1 className="text-xl font-bold mb-8 tracking-tight">/api/portfolio</h1>
      <nav className="flex flex-col gap-3">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`text-sm px-4 py-2 rounded transition-colors ${
              pathname === route.path
                ? 'bg-[#2d2d2d] text-white font-medium'
                : 'hover:bg-[#2a2a2a] text-gray-300'
            }`}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
