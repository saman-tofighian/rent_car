import Link from 'next/link';
import { useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { BiSearch } from 'react-icons/bi';
import { BsArrowLeftCircle } from 'react-icons/bs';
import DatePicker from 'react-multi-date-picker';

export default function MottoCalender() {
  const [pickupDate, setPickupDate] = useState<any>(null);
  const [returnDate, setReturnDate] = useState<any>(null);
  const [pickupTime, setPickupTime] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [city, setCity] = useState('');

  return (
    <div className='-bottom-[330px] sm:-bottom-[140px] md:-bottom-[200px] lg:-bottom-[120px] left-1/2 z-30 absolute bg-white shadow-lg px-6 py-1 md:py-8 border border-gray-200 rounded-2xl w-[95%] max-w-7xl -translate-x-1/2'>
      <div className='gap-y-6 grid grid-cols-12 w-full'>
        {/* دسته‌بندی اجاره */}
        <div className='flex flex-wrap items-center gap-3 col-span-12 lg:col-span-9'>
          <button className='bg-[#194BF0] hover:bg-[#133bbf] px-4 py-2 rounded-[20px] font-medium text-white text-sm transition cursor-pointer'>
            اجاره خودرو با راننده
          </button>
          <button className='hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-[20px] font-medium text-gray-700 text-sm transition cursor-pointer'>
            اجاره خودرو بی راننده
          </button>
          <button className='hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-[20px] font-medium text-gray-700 text-sm transition cursor-pointer'>
            اجاره ماشین عروس
          </button>
        </div>

        {/* لینک اطلاعات */}
        <div className='flex lg:justify-end items-center col-span-12 lg:col-span-3'>
          <Link
            href='/'
            className='font-medium text-[#194BF0] text-sm hover:underline'
          >
            اطلاعات بیشتر در مورد رزرو خودرو
          </Link>
        </div>

        {/* فرم فیلتر */}
        <div className='col-span-12 mt-2'>
          <div className='flex lg:flex-row flex-col items-center gap-3 md:gap-4 bg-gray-50 px-4 py-2 md:py-4 border border-gray-200 rounded-xl'>
            {/* شهر */}
            <div className='flex flex-col w-full lg:w-[220px]'>
              <label className='flex items-center gap-1 mb-1 font-medium text-gray-600 text-sm'>
                <BsArrowLeftCircle className='text-gray-500' /> محل تحویل خودرو
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#194BF0] focus:ring-2 text-sm'
              >
                <option value=''>انتخاب کنید</option>
                <option value='tehran'>تهران - فرودگاه امام خمینی</option>
                <option value='isfahan'>اصفهان - فرودگاه شهید بهشتی</option>
                <option value='shiraz'>شیراز - فرودگاه شیراز</option>
                <option value='mashhad'>مشهد - فرودگاه هاشمی‌نژاد</option>
              </select>
            </div>

            {/* تاریخ تحویل */}
            <div className='flex flex-col w-full lg:w-[180px]'>
              <label className='flex items-center gap-1 mb-1 font-medium text-gray-600 text-sm'>
                <BsArrowLeftCircle className='text-gray-500' /> تاریخ تحویل
              </label>
              <DatePicker
                value={pickupDate}
                onChange={setPickupDate}
                calendar={persian}
                locale={persian_fa}
                inputClass='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#194BF0] focus:outline-none'
                placeholder='انتخاب تاریخ'
              />
            </div>

            {/* ساعت تحویل */}
            <div className='flex flex-col w-full lg:w-[140px]'>
              <label className='flex items-center gap-1 mb-1 font-medium text-gray-600 text-sm'>
                <BsArrowLeftCircle className='text-gray-500' /> ساعت تحویل
              </label>
              <input
                type='time'
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#194BF0] focus:ring-2 text-sm'
              />
            </div>

            {/* تاریخ بازگشت */}
            <div className='flex flex-col w-full lg:w-[180px]'>
              <label className='flex items-center gap-1 mb-1 font-medium text-gray-600 text-sm'>
                <BsArrowLeftCircle className='text-gray-500' /> تاریخ بازگشت
              </label>
              <DatePicker
                value={returnDate}
                onChange={setReturnDate}
                calendar={persian}
                locale={persian_fa}
                inputClass='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#194BF0] focus:outline-none'
                placeholder='انتخاب تاریخ'
              />
            </div>

            {/* ساعت بازگشت */}
            <div className='flex flex-col w-full lg:w-[140px]'>
              <label className='flex items-center gap-1 mb-1 font-medium text-gray-600 text-sm'>
                <BsArrowLeftCircle className='text-gray-500' /> ساعت بازگشت
              </label>
              <input
                type='time'
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#194BF0] focus:ring-2 text-sm'
              />
            </div>

            {/* دکمه جستجو */}
            <div className='flex justify-center lg:justify-end mt-4 lg:mt-4 w-full lg:w-fit'>
              <button className='flex items-center gap-2 bg-[#FDB713] hover:bg-[#e0a710] px-6 py-2.5 rounded-xl w-full lg:w-auto font-medium text-white transition cursor-pointer'>
                <BiSearch className='text-lg' /> جستجو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
