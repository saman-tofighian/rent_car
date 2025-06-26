import Link from 'next/link';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export default function NavCenter() {
  const [links] = useState([
    {
      id: 1,
      name: 'رزرو خودرو',
      href: '/',
    },
    {
      id: 2,
      name: 'خدمات ما',
      href: '/',
    },
    {
      id: 3,
      name: 'بلاگ',
      href: '/',
    },
    {
      id: 4,
      name: 'درباره ما',
      href: '/',
    },
    {
      id: 5,
      name: 'تماس با ما',
      href: '/',
    },
  ]);
  return (
    <div className='flex justify-center items-center col-span-8 h-full'>
      <ul className='flex justify-center items-center gap-x-8 w-full h-full'>
        {links.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className='w-fit h-fit hover:text-[#194BF0] duration-500'
            >
              {item.name}
            </Link>
          </li>
        ))}
        <button className='cursor-pointer'>
          <BiSearch
            size='1.3rem'
            className='hover:text-[#194BF0] duration-500'
          />
        </button>
      </ul>
    </div>
  );
}
