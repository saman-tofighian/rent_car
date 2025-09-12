import Header from '@/Components/Header/Header';
import Footer from '@/Components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsClock, BsEye, BsSearch } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';

interface IArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  views: number;
  date: string;
}

export default function BlogPage() {
  const articles: IArticle[] = [
    {
      id: 1,
      title: 'روش‌های مختلف برای اجاره خودرو',
      excerpt:
        'در این مقاله به بررسی روش‌های گوناگون اجاره خودرو و مزایا و معایب آن‌ها پرداخته‌ایم...',
      image: '/Img/b4.jpg',
      views: 1312,
      date: '12 شهریور 1404',
    },
    {
      id: 2,
      title: 'بررسی لکسوس NX جدید',
      excerpt:
        'لکسوس NX یکی از شاسی بلندهای محبوب بازار ایران است که طراحی مدرن و امکانات ویژه دارد...',
      image: '/Img/b5.jpg',
      views: 980,
      date: '10 شهریور 1404',
    },
    {
      id: 3,
      title: 'معرفی تویوتا راو 4',
      excerpt:
        'تویوتا راو 4 به دلیل کیفیت بالا و مصرف سوخت بهینه یکی از بهترین گزینه‌ها برای اجاره است...',
      image: '/Img/b6.jpg',
      views: 765,
      date: '5 شهریور 1404',
    },
    {
      id: 4,
      title: 'روش‌های مختلف برای اجاره خودرو',
      excerpt:
        'در این مقاله به بررسی روش‌های گوناگون اجاره خودرو و مزایا و معایب آن‌ها پرداخته‌ایم...',
      image: '/Img/b7.jpg',
      views: 1312,
      date: '12 شهریور 1404',
    },
    {
      id: 5,
      title: 'بررسی لکسوس NX جدید',
      excerpt:
        'لکسوس NX یکی از شاسی بلندهای محبوب بازار ایران است که طراحی مدرن و امکانات ویژه دارد...',
      image: '/Img/b8.jpg',
      views: 980,
      date: '10 شهریور 1404',
    },
    {
      id: 6,
      title: 'معرفی تویوتا راو 4',
      excerpt:
        'تویوتا راو 4 به دلیل کیفیت بالا و مصرف سوخت بهینه یکی از بهترین گزینه‌ها برای اجاره است...',
      image: '/Img/b9.jpg',
      views: 765,
      date: '5 شهریور 1404',
    },
  ];

  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>اجاره خودرو</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> مقالات
          </span>
        </div>
      </div>

      {/* بخش اصلی */}
      <div className='flex lg:flex-row-reverse flex-col gap-6 my-10 px-4 lg:px-[8%]'>
        {/* سایدبار */}
        <aside className='space-y-6 w-full lg:w-1/3 xl:w-1/4'>
          {/* سرچ */}
          <div className='bg-white shadow p-2 border border-[#EDEDED] rounded-xl'>
            <div className='relative'>
              <input
                type='text'
                placeholder='جستجوی مقالات...'
                className='p-2 pl-10 border-0 rounded-lg outline-none w-full'
              />
              <BsSearch className='top-1/2 left-3 absolute text-gray-400 -translate-y-1/2' />
            </div>
          </div>

          {/* آخرین مقالات */}
          <div className='bg-white shadow p-4 border border-[#EDEDED] rounded-xl'>
            <h3 className='mb-3 font-bold'>آخرین مقالات</h3>
            <ul className='space-y-3'>
              {articles.slice(0, 4).map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 pb-3 ${
                    index !== 3 ? 'border-b border-[#EDEDED]' : ''
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={40}
                    className='rounded-lg'
                  />
                  <div>
                    <p className='text-gray-700 text-sm'>{item.title}</p>
                    <span className='text-gray-400 text-xs'>{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* برچسب‌ها */}
          <div className='bg-white shadow p-4 border border-[#EDEDED] rounded-xl'>
            <h3 className='mb-3 font-bold'>برچسب‌ها</h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {['اجاره خودرو', 'بنز', 'تویوتا', 'هیوندای'].map((tag, index) => (
                <span
                  key={index}
                  className='bg-gray-100 px-3 py-1 rounded-lg text-gray-600 text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* مقالات */}
        <div className='flex-1 gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
          {articles.map((item) => (
            <div
              key={item.id}
              className='flex flex-col gap-2 bg-white shadow-md p-5 border border-[#EDEDED] rounded-2xl overflow-hidden'
            >
              <Image
                src={item.image}
                alt={item.title}
                width={329}
                height={195}
                className='rounded-[8px] w-full h-56 object-cover'
              />
              <div className='p-4'>
                <h4 className='font-bold text-lg'>{item.title}</h4>
                <p className='mt-2 text-gray-600 text-sm'>{item.excerpt}</p>
                <div className='flex items-center gap-x-8 mt-4 text-gray-400 text-sm'>
                  <span className='flex items-center gap-1'>
                    <BsEye /> {item.views}
                  </span>
                  <span className='flex items-center gap-1'>
                    <BsClock /> {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-center col-span-2 mt-6 w-full'>
            <Link
              href='/'
              className='flex items-center gap-x-2.5 font-medium text-[#194BF0] text-[18px]'
            >
              مشاهده بیشتر
              <FaChevronLeft />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
