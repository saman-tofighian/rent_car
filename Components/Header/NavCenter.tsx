import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export default function NavCenter() {
  const pathname = usePathname();
  const [links] = useState([
    { id: 1, name: 'رزرو خودرو', href: '/' },
    { id: 2, name: 'خدمات ما', href: '/products' },
    { id: 3, name: 'بلاگ', href: '/blog' },
    { id: 4, name: 'درباره ما', href: '/aboutus' },
    { id: 5, name: 'تماس با ما', href: '/contact' },
  ]);

  return (
    <div className='hidden xl:flex justify-center items-center order-2 col-span-8 h-full'>
      <ul className='flex justify-center items-center gap-x-8 w-full h-full'>
        {links.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`w-fit h-fit duration-300 ${
                pathname === item.href
                  ? 'text-[#194BF0] font-semibold'
                  : 'hover:text-[#194BF0]'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <button className='cursor-pointer'>
          <BiSearch
            size='1.3rem'
            className='hover:text-[#194BF0] duration-300'
          />
        </button>
      </ul>
    </div>
  );
}
