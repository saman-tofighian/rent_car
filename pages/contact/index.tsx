import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>تماس با ما</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> تماس با ما
          </span>
        </div>
      </div>

      <div className='my-12 px-[8%] w-full'>
        <div className='gap-y-9 xl:gap-y-0 grid grid-cols-12 bg-[#FFFFFF] px-[6%] py-8 border border-[#EDEDED] rounded-2xl w-full'>
          <div className='col-span-12 xl:col-span-7 mt-8'>
            <h2 className='text-[#494949] text-2xl'>
              ارتباط با دفتر مرکزی اتورنت
            </h2>
            <span className='block mt-3 border w-[365px] text-[#C2C2C2]'></span>
            <p className='flex items-center mt-6 text-[#9A9A9A] text-[12px] xl:text-[16px]'>
              <HiOutlineLocationMarker />
              <span className='mx-2 font-bold text-black'>آدرس : </span>
              تهران، میدان آزادی، خیابان آزادی، خیابان شادمان، پلاک 23
            </p>
            <p className='flex items-center mt-6 text-[#9A9A9A] text-[16px]'>
              <HiOutlineLocationMarker />
              <span className='mx-2 font-bold text-black'>شماره تماس : </span>
              02166552589
            </p>
            <p className='flex items-center my-6 text-[#9A9A9A] text-[16px]'>
              <HiOutlineLocationMarker />
              <span className='mx-2 font-bold text-black'> ایمیل : </span>
              info@AutoRent.com
            </p>
          </div>
          <div className='flex justify-center xl:justify-end col-span-12 xl:col-span-5'>
            <div className='border border-[#CBCBCB] rounded-[4px] w-[330px] h-[330px]'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6267716601036!2d51.417947114738705!3d35.732378180181295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e017d0b6b6245%3A0xf7db0e46d7dc20fa!2z2KfZhNmF2LHYp9ix2YUg2KfZhNio2KfYsduM2YbbjCDYp9mE2KjYsdmI2LHYp9uMINmI2LHYp9ix2KfYqQ!5e0!3m2!1sen!2s!4v1700000000000'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>

        <div className='gap-x-16 grid grid-cols-12 bg-[#FFFFFF] mt-16 mb-20 px-[6%] py-8 border border-[#EDEDED] rounded-2xl w-full'>
          {/* عنوان و فیلدها */}
          <div className='space-y-6 col-span-12 lg:col-span-6 mt-4'>
            <div className='col-span-7 mt-8'>
              <h2 className='text-[#494949] text-2xl'>
                ارتباط با دفتر مرکزی اتورنت
              </h2>
              <span className='block mt-3 border w-[365px] text-[#C2C2C2]'></span>
            </div>

            {/* نام */}
            <div className='relative'>
              <input
                type='text'
                id='fullname'
                placeholder='نام و نام خانوادگی'
                className='peer block px-3 pt-5 pb-2 border border-gray-300 focus:border-gray-400 rounded-lg outline-none focus:ring-0 w-full text-gray-900 text-sm placeholder-transparent'
              />
              <label
                htmlFor='fullname'
                className='top-2 peer-focus:top-2 peer-placeholder-shown:top-1/2 right-3 absolute bg-white px-1 text-gray-400 peer-focus:text-gray-600 peer-placeholder-shown:text-gray-400 peer-focus:text-xs text-sm transition-all peer-placeholder-shown:-translate-y-1/2'
              >
                نام و نام خانوادگی
              </label>
            </div>

            {/* ایمیل */}
            <div className='relative'>
              <input
                type='email'
                id='email'
                placeholder='ایمیل'
                className='peer block px-3 pt-5 pb-2 border border-gray-300 focus:border-gray-400 rounded-lg outline-none focus:ring-0 w-full text-gray-900 text-sm placeholder-transparent'
              />
              <label
                htmlFor='email'
                className='top-2 peer-focus:top-2 peer-placeholder-shown:top-1/2 right-3 absolute bg-white px-1 text-gray-400 peer-focus:text-gray-600 peer-placeholder-shown:text-gray-400 peer-focus:text-xs text-sm transition-all peer-placeholder-shown:-translate-y-1/2'
              >
                ایمیل
              </label>
            </div>

            {/* شماره تماس */}
            <div className='relative'>
              <input
                type='tel'
                id='phone'
                placeholder='شماره تماس'
                className='peer block px-3 pt-5 pb-2 border border-gray-300 focus:border-gray-400 rounded-lg outline-none focus:ring-0 w-full text-gray-900 text-sm placeholder-transparent'
              />
              <label
                htmlFor='phone'
                className='top-2 peer-focus:top-2 peer-placeholder-shown:top-1/2 right-3 absolute bg-white px-1 text-gray-400 peer-focus:text-gray-600 peer-placeholder-shown:text-gray-400 peer-focus:text-xs text-sm transition-all peer-placeholder-shown:-translate-y-1/2'
              >
                شماره تماس
              </label>
            </div>
          </div>

          {/* متن پیام */}
          <div className='flex flex-col col-span-12 lg:col-span-6 mt-4'>
            <div className='mt-16'>
              <textarea
                id='message'
                placeholder='پیام شما'
                className='peer block px-3 pt-5 pb-2 border border-gray-300 focus:border-gray-400 rounded-lg outline-none focus:ring-0 w-full h-40 text-gray-900 text-sm resize-none placeholder-transparent'
              />
            </div>

            {/* دکمه ارسال */}
            <div className='mt-6'>
              <button className='bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full text-white transition cursor-pointer'>
                ارسال
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
