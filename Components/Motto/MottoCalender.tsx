import Link from 'next/link';

export default function MottoCalender() {
  return (
    <div className='-bottom-16 left-1/2 z-30 absolute bg-white shadow px-8 py-10 border border-white rounded-2xl w-[90%] max-w-7xl -translate-x-1/2'>
      <div className='grid grid-cols-12 w-full'>
        <div className='flex items-center gap-3 col-span-10'>
          <button className='bg-[#194BF0] px-2.5 py-1.5 rounded-[20px] font-medium text-[14px] text-white cursor-pointer'>
            اجاره خودرو با راننده
          </button>
          <button className='px-2.5 py-1.5 border border-[#D7D7D7] rounded-[20px] font-medium text-[14px] text-black cursor-pointer'>
            اجاره خودرو بی راننده
          </button>
          <button className='px-2.5 py-1.5 border border-[#D7D7D7] rounded-[20px] font-medium text-[14px] text-black cursor-pointer'>
            اجاره ماشین عروس
          </button>
        </div>
        <div className='flex items-center col-span-2'>
          <Link href='/' className='font-medium text-[#194BF0] text-[14px]'>
            اطلاعات بیشتر در مورد رزرو خودرو
          </Link>
        </div>
      </div>
    </div>
  );
}
