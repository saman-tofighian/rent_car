import Image from 'next/image';
import Link from 'next/link';
import { BsEye } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { PiClockLight } from 'react-icons/pi';

interface IBlogCard {
  id: number;
  img: string;
  alt: string;
  title: string;
  desc: string;
  clock: any;
  miniute: string;
  eye: any;
  count: string;
}

export default function Blog() {
  const blog: IBlogCard[] = [
    {
      id: 1,
      img: '/img/b1.jpg',
      title: 'روش های مختلف برای اجاره خودرو',
      desc: `امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.`,
      clock: <PiClockLight />,
      miniute: '3 دقیقه',
      eye: <BsEye />,
      count: '1,213',
      alt: 'عکس بلاگ',
    },
    {
      id: 2,
      img: '/img/b2.jpg',
      title: 'روش های مختلف برای اجاره خودرو',
      desc: `امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.`,
      clock: <PiClockLight />,
      miniute: '3 دقیقه',
      eye: <BsEye />,
      count: '1,213',
      alt: 'عکس بلاگ',
    },
    {
      id: 3,
      img: '/img/b3.jpg',
      title: 'روش های مختلف برای اجاره خودرو',
      desc: `امروزه با تغییراتی که در سبک زندگی مردم و شرایط اقتصادی جوامع به
            وجود آمده است نیازهای افراد و نحوه دسترسی به آنها نیز دچار تحولاتی
            شده است.`,
      clock: <PiClockLight />,
      miniute: '3 دقیقه',
      eye: <BsEye />,
      count: '1,213',
      alt: 'عکس بلاگ',
    },
  ];
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
      <div className='hidden xl:flex justify-end mt-3.5 px-[6%] w-full'>
        <Link
          href='/blog'
          className='flex justify-center items-center gap-x-2.5 hover:gap-x-4 ml-12 font-bold text-[#194BF0] duration-500 ease-linear'
        >
          <span className='mt-1.5'>مشاهده همه</span>
          <FaAngleLeft className='mt-1' size='1.2rem' />
        </Link>
      </div>
      <div className='gap-x-6 gap-y-8 xl:gap-y-0 grid grid-cols-12 mt-10 px-[6%] w-full'>
        {blog.map((item) => (
          <div
            key={item.id}
            className='col-span-12 sm:col-span-8 lg:col-span-6 xl:col-span-4 sm:col-start-3 md:col-start-3 bg-white shadow hover:shadow-2xl px-4 py-6 border border-[#D7D7D7] rounded-2xl duration-700 ease-linear'
          >
            <figure className='flex justify-center w-full'>
              <Image
                src={item.img}
                alt={item.alt}
                width={410}
                height={195}
                className='rounded-[12px]'
              />
            </figure>
            <h3 className='mt-4.5 mb-3 font-medium text-[#414141] text-[16px]'>
              {item.title}
            </h3>
            <p className='font-[400] text-[#757575] text-[12px] leading-6'>
               {item.desc}
            </p>
            <div className='flex gap-x-5 mt-3 w-full'>
              <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
                {item.clock}
                {item.miniute}
              </span>
              <span className='flex justify-center items-center gap-x-2 text-[#757575] text-[14px]'>
                {item.eye}
                {item.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
