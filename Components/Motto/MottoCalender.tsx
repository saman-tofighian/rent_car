import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function MottoCalender() {
  return (
    <div className='-bottom-36 xl:-bottom-30 left-1/2 z-30 absolute bg-white shadow px-8 py-10 border border-white rounded-2xl w-[90%] max-w-7xl -translate-x-1/2'>
      <div className='grid grid-cols-12 w-full'>
        <div className='flex flex-wrap items-center gap-3 col-span-12 xl:col-span-10'>
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
        <div className='flex items-center col-span-12 xl:col-span-2'>
          <Link
            href='/'
            className='mt-3.5 xl:mt-0 font-medium text-[#194BF0] text-[14px]'
          >
            اطلاعات بیشتر در مورد رزرو خودرو
          </Link>
        </div>
        <div className='flex flex-wrap justify-between items-center col-span-12 xl:col-span-11 mt-5'>
          <div>
            <span className='flex justify-center items-center gap-x-1 mb-3.5 xl:mb-0'>
              <BsArrowLeftCircle className='mt-1' />
              محل تحویل خودرو
            </span>
          </div>
          <div className='flex flex-wrap xl:justify-center items-center gap-x-9 gap-y-2'>
            <span className='flex justify-center items-center gap-x-1'>
              <BsArrowLeftCircle className='mt-1' />
              تاریخ تحویل
            </span>
            <span className='flex justify-center items-center gap-x-1'>
              <BsArrowLeftCircle className='mt-1' />
              ساعت تحویل
            </span>
            <span className='flex justify-center items-center gap-x-1'>
              <BsArrowLeftCircle className='mt-1' />
              تاریخ بازگشت
            </span>
            <span className='flex justify-center items-center gap-x-1'>
              <BsArrowLeftCircle className='mt-1' />
              ساعت بازگشت
            </span>
          </div>
        </div>
        <div className='flex flex-wrap justify-between items-center col-span-12 mt-5'>
          <div className='flex items-center gap-x-2 border border-[#F3F3F3] rounded-[16px] w-full'>
            <select name='' id='' className='w-[527px] h-[30px]'>
              <option value=''>تهران-فرودگاه امام خمینی</option>
              <option value=''>اصفهان-فرودگاه بین المللی شهید بهشتی</option>
              <option value=''>شیراز-فرودگاه بین المللی شیراز</option>
              <option value=''>مشهد-فرودگاه بین المللی شهید هاشمی نژاد</option>
            </select>
            <div className='flex items-center gap-x-7'>
              <div>
                <input type='date' />
              </div>
              <div>
                <input type='time' />
              </div>
              <div>
                <input type='date' />
              </div>
              <div>
                <input type='time' />
              </div>
              <div className='pr-9'>
                <button className='bg-[#FDB713] p-4 rounded-[16px] text-white cursor-pointer'>
                  <BiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
