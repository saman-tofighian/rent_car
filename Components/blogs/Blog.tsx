import Image from 'next/image';
import Link from 'next/link';
import { BsEye } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { PiClockLight } from 'react-icons/pi';

export default function Blog() {
  return (
    <section className='my-28 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          مقالات ما
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          مجله <strong className='text-[#D79C10]'>خودرو</strong>
        </p>
      </div>
      <div className='flex justify-end mt-3.5 px-[6%] w-full'>
        <Link
          href='/blogs'
          className='flex justify-center items-center gap-x-2.5 hover:gap-x-4 ml-12 font-bold text-[#194BF0] duration-500 ease-linear'
        >
          <span className='mt-1.5'>مشاهده همه</span>
          <FaAngleLeft className='mt-1' size='1.2rem' />
        </Link>
      </div>
      <div className='gap-x-6 grid grid-cols-12 mt-10 px-[6%] w-full'>
        <div className='col-span-4 bg-white shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/b1.jpg'
              alt='blog1'
              width={410}
              height={195}
              className='rounded-[12px]'
            />
          </figure>
          <h3 className='mt-4.5 mb-3 font-medium text-[#414141] text-[16px]'>
            روش های مختلف برای اجاره خودرو{' '}
          </h3>
          <p className='font-[400] text-[#757575] text-[12px] leading-6'>
             امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.
          </p>
          <div className='flex gap-x-5 mt-3 w-full'>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <PiClockLight />3 دقیقه
            </span>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <BsEye />
              1,213
            </span>
          </div>
        </div>
        <div className='col-span-4 bg-white shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/b1.jpg'
              alt='blog1'
              width={410}
              height={195}
              className='rounded-[12px]'
            />
          </figure>
          <h3 className='mt-4.5 mb-3 font-medium text-[#414141] text-[16px]'>
            روش های مختلف برای اجاره خودرو{' '}
          </h3>
          <p className='font-[400] text-[#757575] text-[12px] leading-6'>
             امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.
          </p>
          <div className='flex gap-x-5 mt-3 w-full'>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <PiClockLight />3 دقیقه
            </span>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <BsEye />
              1,213
            </span>
          </div>
        </div>
        <div className='col-span-4 bg-white shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/b1.jpg'
              alt='blog1'
              width={410}
              height={195}
              className='rounded-[12px]'
            />
          </figure>
          <h3 className='mt-4.5 mb-3 font-medium text-[#414141] text-[16px]'>
            روش های مختلف برای اجاره خودرو{' '}
          </h3>
          <p className='font-[400] text-[#757575] text-[12px] leading-6'>
             امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.
          </p>
          <div className='flex gap-x-5 mt-3 w-full'>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <PiClockLight />3 دقیقه
            </span>
            <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
              <BsEye />
              1,213
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
