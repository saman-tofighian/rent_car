import Header from '@/Components/Header/Header';
import Footer from '@/Components/footer/Footer';
import { ProductData } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsArrowLeft, BsStarFill } from 'react-icons/bs';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import {
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineDriveEta,
  MdOutlineTimer,
} from 'react-icons/md';

// ==== Interface ====
interface IProducts {
  id: number;
  image: string;
  gallery: string[];
  title: string;
  model: string;
  dailyPrice: number;
  monthlyPrice: number;
  deposit: number;
  description: string;
}

// ==== Similar Product Card ====
const SimilarProductCard = ({ item }: { item: IProducts }) => {
  return (
    <div className='col-span-12 sm:col-span-6 lg:col-span-4 bg-white shadow hover:shadow-lg p-4 border border-gray-200 rounded-2xl transition-shadow'>
      <figure className='flex justify-center p-2 border border-gray-100 rounded-xl w-full'>
        <Image
          src={item.image}
          alt={item.title}
          width={350}
          height={225}
          className='rounded-lg object-cover'
        />
      </figure>
      <div className='mt-3.5 w-full'>
        <h4 className='font-extrabold text-gray-900 text-lg'>{item.title}</h4>
        <p className='mt-1.5 font-normal text-gray-500 text-sm'>
          مدل : <span className='font-semibold'>{item.model}</span>
        </p>
      </div>
      <div className='flex flex-col gap-2 mt-3'>
        <div className='flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg'>
          <span className='font-bold text-gray-900 text-sm'>
            روزانه:
            <span className='mr-2 font-extrabold text-blue-600 text-base'>
              {item.dailyPrice.toLocaleString('fa-IR')}
            </span>
          </span>
          <span className='text-gray-500 text-sm'>تومان</span>
        </div>
        <div className='flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg'>
          <span className='font-bold text-gray-900 text-sm'>
            ماهانه:
            <span className='mr-2 font-extrabold text-blue-600 text-base'>
              {item.monthlyPrice.toLocaleString('fa-IR')}
            </span>
          </span>
          <span className='text-gray-500 text-sm'>تومان</span>
        </div>
      </div>

      <div className='flex justify-between items-center my-3.5 px-1.5 w-full text-sm'>
        <span className='font-bold text-gray-700'>مبلغ ضمانت :</span>
        <span className='font-extrabold text-gray-800'>
          {item.deposit.toLocaleString('fa-IR')} تومان
        </span>
      </div>
      <Link
        href={`/products/${item.id}`}
        className='flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full font-extrabold text-white transition-colors cursor-pointer'
      >
        درخواست رزرو
      </Link>
    </div>
  );
};

// ==== Main Page ====
export default function ProductById() {
  const { id } = useRouter().query;

  const Products = ProductData;

  // Default product if no ID found
  const benzSClass: IProducts = {
    id: 99,
    image: '/Img/benz-s-class-main.jpg',
    gallery: ['/Img/p1.jpg', '/Img/p1-1.jpg', '/Img/p1-2.jpg'],
    title: 'اجاره بنز S500',
    model: '2016',
    dailyPrice: 10500000,
    monthlyPrice: 315000000,
    deposit: 140000000,
    description:
      'بنز S500 سدان لوکس و تشریفاتی مناسب مراسم‌های ویژه و سفرهای کاری مهم. خودرو با بیمه کامل و سرویس‌شده تحویل داده می‌شود.',
  };

  const product = Products.find((p) => p.id.toString() === id) || benzSClass;

  // ==== States ====
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // ==== Helpers ====
  const calcDays = () => {
    if (!startDate || !endDate) return 0;
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
    return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : 0;
  };

  const days = calcDays();
  const subTotal = days * product.dailyPrice;
  const total = subTotal + product.deposit;

  const formatToman = (num: number) => num.toLocaleString('fa-IR') + ' تومان';

  // ==== Render ====
  return (
    <section className='bg-gray-50 w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>اجاره خودرو</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> لیست خودروهای اجاره ای
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='gap-y-9 md:gap-x-9 grid grid-cols-12 mt-10 px-8 md:px-[8%]'>
        {/* Main Info */}
        <div className='space-y-8 col-span-12 lg:col-span-8'>
          {/* Title & Actions */}
          <div className='flex flex-wrap justify-between items-center gap-4'>
            <h1 className='font-extrabold text-gray-900 text-3xl'>
              {product.title}
            </h1>
            <div className='flex items-center gap-4 text-gray-600'>
              <span className='flex items-center gap-1 font-bold text-yellow-500'>
                <BsStarFill className='text-xl' />
                ۴.۷
              </span>
              <span className='text-gray-500 text-sm'>(۱۴ دیدگاه)</span>
              <button className='hover:text-blue-600 text-lg'>
                <FaHeart />
              </button>
              <button className='hover:text-blue-600 text-lg'>
                <FaShareAlt />
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className='bg-white shadow-xl p-6 rounded-2xl'>
            <div>
              <Image
                src={product.gallery[selectedGalleryIndex] ?? product.image}
                alt={product.title}
                width={1200}
                height={700}
                className='rounded-xl w-full h-[450px] object-center'
              />
              <div className='flex gap-3 mt-4 overflow-x-auto'>
                {product.gallery.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGalleryIndex(idx)}
                    className={`min-w-[120px] h-[80px] rounded-lg overflow-hidden border-2 ${
                      idx === selectedGalleryIndex
                        ? 'border-yellow-400'
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={g}
                      alt={`thumb-${idx}`}
                      width={120}
                      height={80}
                      className='w-full h-full object-cover hover:scale-105 transition'
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-8'>
              {/* Pricing */}
              <div className='space-y-3 bg-gray-50 p-4 border rounded-xl'>
                <div className='flex justify-between font-bold text-gray-700'>
                  <span>قیمت پایه (روزانه)</span>
                  <span className='text-blue-600'>
                    {formatToman(product.dailyPrice)}
                  </span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>ودیعه</span>
                  <span>{formatToman(product.deposit)}</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>بیمه</span>
                  <span className='font-bold text-green-600'>کامل</span>
                </div>
              </div>

              {/* Car Details */}
              <div className='space-y-3 bg-gray-50 p-4 border rounded-xl'>
                <div className='flex justify-between text-gray-700'>
                  <span className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-yellow-500' /> سال ساخت
                  </span>
                  <span className='font-bold'>{product.model}</span>
                </div>
                <div className='flex justify-between text-gray-700'>
                  <span className='flex items-center gap-2'>
                    <MdOutlineDriveEta className='text-yellow-500' /> گیربکس
                  </span>
                  <span className='font-bold'>اتومات</span>
                </div>
                <div className='flex justify-between text-gray-700'>
                  <span className='flex items-center gap-2'>
                    <MdOutlineAirlineSeatReclineExtra className='text-yellow-500' />{' '}
                    ظرفیت
                  </span>
                  <span className='font-bold'>۴ نفر</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className='mt-8 pt-4 border-t'>
              <h2 className='mb-4 font-bold text-xl'>🚗 درباره خودرو</h2>
              <p className='text-gray-600 text-justify leading-7'>
                {product.description}
              </p>
            </div>

            {/* Reviews */}
            <div className='mt-8 pt-4 border-t'>
              <h2 className='mb-4 font-bold text-xl'>💬 نظرات</h2>
              <div className='flex items-center gap-2 mb-4'>
                <span className='font-extrabold text-yellow-500 text-2xl'>
                  ۴.۷
                </span>
                <div className='flex'>
                  <BsStarFill className='text-yellow-500 text-xl' />
                  <BsStarFill className='text-yellow-500 text-xl' />
                  <BsStarFill className='text-yellow-500 text-xl' />
                  <BsStarFill className='text-yellow-500 text-xl' />
                  <BsStarFill className='text-gray-300 text-xl' />
                </div>
                <span className='text-gray-500'>(۱۴ دیدگاه)</span>
              </div>
              <button className='hover:bg-blue-600 px-6 py-2 border border-blue-600 rounded-lg font-bold text-blue-600 hover:text-white transition cursor-pointer'>
                ثبت نظر جدید
              </button>
            </div>
          </div>
        </div>

        {/* Reservation */}
        <div className='col-span-12 lg:col-span-4'>
          <div className='top-24 sticky space-y-4 bg-white shadow-xl p-6 border rounded-2xl'>
            <h3 className='pb-3 border-b font-extrabold text-blue-600 text-2xl'>
              📅 درخواست رزرو
            </h3>

            <label
              htmlFor='startDate'
              className='block font-medium text-gray-700 text-sm'
            >
              تاریخ تحویل
            </label>
            <input
              id='startDate'
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 w-full'
            />

            <label
              htmlFor='endDate'
              className='block font-medium text-gray-700 text-sm'
            >
              تاریخ عودت
            </label>
            <input
              id='endDate'
              type='date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className='p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 w-full'
            />

            <input
              type='text'
              placeholder='نام و نام خانوادگی'
              className='p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 w-full'
            />
            <input
              type='tel'
              placeholder='شماره تلفن'
              className='p-3 border rounded-lg focus:ring-2 focus:ring-blue-600 w-full'
            />

            <div className='space-y-3 bg-gray-50 p-4 border rounded-xl'>
              <div className='flex justify-between text-gray-600'>
                <span>تعداد روز</span>
                <span className='font-bold'>
                  {days.toLocaleString('fa-IR')}
                </span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>مبلغ پایه</span>
                <span className='font-bold'>{formatToman(subTotal)}</span>
              </div>
              <div className='flex justify-between text-gray-600'>
                <span>ودیعه</span>
                <span className='font-bold'>
                  {formatToman(product.deposit)}
                </span>
              </div>
              <div className='flex justify-between pt-3 border-t font-extrabold text-blue-600 text-lg'>
                <span>💰 مجموع</span>
                <span>{formatToman(total)}</span>
              </div>
            </div>

            <button className='bg-blue-600 hover:bg-blue-700 py-3.5 rounded-xl w-full font-extrabold text-white text-lg transition cursor-pointer'>
              رزرو خودرو
            </button>
          </div>
        </div>
      </div>

      {/* Similar Cars */}
      <div className='mt-16 px-8 md:px-[8%] pb-16 w-full'>
        <h3 className='mb-6 font-extrabold text-gray-900 text-2xl'>
          🚗 خودروهای مشابه
        </h3>
        <div className='gap-6 grid grid-cols-12'>
          {Products.slice(0, 3).map((item) => (
            <SimilarProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
