import Link from 'next/link';

export default function NavLeft() {
  return (
    <div className='flex justify-center items-center col-span-2 h-full'>
      <Link
        href='/'
        className='flex justify-center items-center bg-[#194BF0] hover:bg-[#197df0] px-5 py-2.5 rounded-[10px] text-white duration-700 ease-linear'
      >
        ورود / ثبت‌نام
      </Link>
    </div>
  );
}
