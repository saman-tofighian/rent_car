import { ProductData } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<
    'popular' | 'new' | 'suggested'
  >('popular');

  const filteredProducts = useMemo(() => {
    switch (activeFilter) {
      case 'new':
        return [...ProductData].sort(
          (a, b) => Number(b.model) - Number(a.model)
        );
      case 'suggested':
        return ProductData.filter((item) => item.dailyPrice <= 7000000);
      case 'popular':
      default:
        return ProductData.slice(0, 6);
    }
  }, [activeFilter]);

  return (
    <section className='my-24 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          مشاهده موجودی خودروها
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          رزرو خودرو در <strong className='text-[#D79C10]'>اُتـــورِنت</strong>
        </p>
      </div>

      <div className='grid grid-cols-12 mt-7 w-full'>
        <div className='flex justify-center xl:justify-end items-center gap-x-3.5 col-span-12 xl:col-span-7'>
          <button
            onClick={() => setActiveFilter('popular')}
            className={`px-4 py-2 rounded-[8px] cursor-pointer ${
              activeFilter === 'popular'
                ? 'bg-[#194BF0] text-white'
                : 'bg-transparent border border-[#194BF0] text-[#194BF0]'
            }`}
          >
            پرطرفدار
          </button>
          <button
            onClick={() => setActiveFilter('new')}
            className={`px-4 py-2 rounded-[8px] cursor-pointer ${
              activeFilter === 'new'
                ? 'bg-[#194BF0] text-white'
                : 'bg-transparent border border-[#194BF0] text-[#194BF0]'
            }`}
          >
            جدیدترین
          </button>
          <button
            onClick={() => setActiveFilter('suggested')}
            className={`px-4 py-2 rounded-[8px] cursor-pointer ${
              activeFilter === 'suggested'
                ? 'bg-[#194BF0] text-white'
                : 'bg-transparent border border-[#194BF0] text-[#194BF0]'
            }`}
          >
            پیشنهادی
          </button>
        </div>
        <div className='hidden xl:flex justify-end items-center col-span-4'>
          <Link
            href='/products'
            className='flex justify-center items-center gap-x-2.5 hover:gap-x-4 font-bold text-[#194BF0] duration-500 ease-linear'
          >
            <span className='mt-1.5'>مشاهده همه</span>
            <FaAngleLeft className='mt-1' size='1.2rem' />
          </Link>
        </div>
      </div>
      <div className='gap-y-9 md:gap-x-9 grid grid-cols-12 mt-8 md:px-[6%] w-full'>
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className='col-span-12 sm:col-span-10 md:col-span-6 xl:col-span-4 sm:col-start-2 bg-[#FFFFFF] shadow p-4 border border-[#D7D7D7] rounded-2xl'
          >
            {/* تصویر */}
            <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px] w-full'>
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={225}
              />
            </figure>

            {/* اطلاعات ماشین */}
            <div className='mt-3.5 w-full'>
              <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
                {item.title}
              </h4>
              <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
                مدل : {item.model}
              </p>
            </div>

            {/* قیمت روزانه */}
            <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
              <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
                از ۱ تا 30 روز:
                <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                  {item.dailyPrice.toLocaleString('fa-ir')}
                </span>
              </span>
              <span className='font-normal text-[#868686] text-[12px]'>
                روزانه
              </span>
            </div>

            {/* قیمت ماهانه */}
            <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
              <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
                از ۱ تا 30 روز:
                <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                  {item.monthlyPrice.toLocaleString('fa-ir')}
                </span>
              </span>
              <span className='font-normal text-[#868686] text-[12px]'>
                ماهانه
              </span>
            </div>

            {/* ضمانت */}
            <span className='block bg-[#D7D7D7] my-3.5 w-full h-[1px]'></span>
            <div className='flex justify-between items-center my-2.5 px-1.5 w-full'>
              <span className='text-[#212121] text-[14px]'>مبلغ ضمانت : </span>
              <span className='font-medium text-[#0C0C0C]'>
                {item.deposit.toLocaleString('fa-ir')}
              </span>
              <span className='text-xs'>تومان</span>
            </div>

            {/* دکمه رزرو */}
            <Link
              href={`/products/${item.id}`}
              className='flex justify-center items-center bg-[#194BF0] px-4 py-2 rounded-[8px] w-full text-white cursor-pointer'
            >
              درخواست رزرو
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
