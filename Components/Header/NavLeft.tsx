import Link from 'next/link';
import { LuLogIn } from 'react-icons/lu';

export default function NavLeft() {
  return (
    <div className='flex justify-center sm:justify-end xl:justify-center items-center order-3 xl:order-3 col-span-5 xl:col-span-2 h-full'>
      <Link
        href='/'
        className='flex justify-center items-center bg-[#194BF0] hover:bg-[#197df0] px-5 py-2.5 rounded-[10px] text-white duration-700 ease-linear'
      >
        <span className='hidden xl:block'>ورود / ثبت‌نام</span>
        <LuLogIn className='xl:hidden block' size='1rem' />
      </Link>
    </div>
  );
}
