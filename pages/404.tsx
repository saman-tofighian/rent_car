import Header from '@/Components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='w-full'>
      <Header />
      <div className='flex justify-center mt-36 px-[10%] lg:px-1 w-full'>
        <div className='bg-[#FFFFFF] shadow mb-8 rounded-2xl w-[90%] md:w-[75%]'>
          <figure className='flex justify-center w-full'>
            <Image
              src='/Img/404.png'
              width={822}
              height={510}
              alt='not found'
              className='rounded-2xl'
            />
          </figure>
          <div className='flex flex-col items-center mt-6 w-full'>
            <span className='font-medium text-[#353535] text-[20px]'>
              صفحه مورد نظر یافت نشد
            </span>
            <Link
              href='/'
              className='bg-transparent hover:bg-[#194BF0] mt-3.5 mb-7 px-4 py-1.5 border border-[#194BF0] rounded-[8px] text-[#194BF0] hover:text-white duration-500 ease-linear'
            >
              رفتن به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
