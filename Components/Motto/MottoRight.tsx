import Link from 'next/link';
import { CiCircleChevLeft } from 'react-icons/ci';
import { IoCarSportOutline } from 'react-icons/io5';

export default function MottoRight() {
  return (
    <div className='flex flex-col justify-center items-center col-span-12 xl:col-span-7 px-[6%] xl:px-0 h-full text-center'>
      <h1 className='font-bold text-[#FDB713] text-[37px] xl:text-[44px]'>
        اُتـــو رِنت؛ سریع، آسان و به صرفه
      </h1>
      <p className='mt-4 text-[#F9F9F9] text-[18px] xl:text-[20px]'>
        سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
      </p>
      <div className='flex justify-center gap-x-8 mt-10 w-full'>
        <Link
          href='/'
          className='flex justify-center items-center gap-x-2 bg-[#FDB713] px-8 py-2 rounded-[8px] font-bold text-black'
        >
          <IoCarSportOutline size='1.4rem' className='mt-1.5' />
          رزرو آسان خودرو
        </Link>
        <Link
          href='/'
          className='flex justify-center items-center gap-x-2 bg-transparent px-5 py-2 border border-white rounded-[8px] text-white'
        >
          <CiCircleChevLeft size='1.4rem' />
          تماس با ما
        </Link>
      </div>
    </div>
  );
}
