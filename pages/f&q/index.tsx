import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const logos = [
  '/Img/bmw.png',
  '/Img/lexus.png',
  '/Img/benz.png',
  '/Img/honda.png',
  '/Img/hyundai.png',
  '/Img/nissan.png',
  '/Img/toyota.png',
  '/Img/kia.png',
  '/Img/jeep.png',
  '/Img/landrover.png',
  '/Img/bmw.png',
  '/Img/lexus.png',
  '/Img/benz.png',
];

export default function Question() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 6,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 992px)': {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);
  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>سوالات ما</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> سئوالات متداول
          </span>
        </div>
      </div>

      <div className='my-28 px-8 w-full'>
        <div className='gap-y-10 xl:gap-y-0 grid grid-cols-12 mt-10 md:px-[6%] w-full'>
          <div className='flex flex-col xl:justify-center col-span-12 xl:col-span-7'>
            <div className='w-full'>
              <div className='space-y-4'>
                <details
                  className='group bg-white shadow p-4 border border-[#D7D7D7] rounded-[16px]'
                  open
                >
                  <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-4 sm:px-6 py-3 rounded-lg font-medium text-secondary-900 text-base sm:text-lg cursor-pointer list-none'>
                    در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟
                    <div className='text-secondary-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='group-open:hidden block w-5 h-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='hidden group-open:block w-5 h-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className='px-4 sm:px-6 pb-4 text-[#727272] text-sm sm:text-base leading-relaxed'>
                    در صورت بروز نقص فنی برای خودرو، تیم پشتیبانی ما به سرعت
                    اقدام به رفع مشکل می‌کند. شما می‌توانید با تماس با شماره
                    پشتیبانی یا از طریق اپلیکیشن، درخواست کمک کنید.
                  </div>
                </details>
                <details className='group bg-white shadow p-4 border border-[#D7D7D7] rounded-[16px]'>
                  <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-4 sm:px-6 py-3 rounded-lg font-medium text-secondary-900 text-base sm:text-lg cursor-pointer list-none'>
                    هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟
                    <div className='text-secondary-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='group-open:hidden block w-5 h-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='hidden group-open:block w-5 h-5'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className='px-4 sm:px-6 pb-4 text-[#727272] text-sm sm:text-base leading-relaxed'>
                    در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک
                    بنزین پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو
                    در صورتی که خودرو به کارواش نیاز داشته و یا خودرو دارای کسر
                    سوخت باشد هزینه آن بر عهده مشتری می باشد.
                  </div>
                </details>
                <details className='group bg-white shadow p-4 border border-[#D7D7D7] rounded-[16px]'>
                  <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-4 sm:px-6 py-3 rounded-lg font-medium text-secondary-900 text-base sm:text-lg cursor-pointer list-none'>
                    آیا ماشین های اتورنت دارای بیمه هستند؟
                    <div className='text-secondary-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='group-open:hidden block w-5 h-5 transition-all'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='hidden group-open:block w-5 h-5 transition-all'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className='px-4 sm:px-6 pb-4 text-[#727272] text-sm sm:text-base leading-relaxed'>
                    بله، تمامی خودروهای اجاره ای اتورنت دارای بیمه شخص ثالث و
                    بدنه هستند. در صورت بروز حادثه، شما می‌توانید با تیم
                    پشتیبانی تماس بگیرید تا راهنمایی‌های لازم را دریافت کنید.
                  </div>
                </details>
                <details className='group bg-white shadow p-4 border border-[#D7D7D7] rounded-[16px]'>
                  <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-4 sm:px-6 py-3 rounded-lg font-medium text-secondary-900 text-base sm:text-lg cursor-pointer list-none'>
                    محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟
                    <div className='text-secondary-500'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='group-open:hidden block w-5 h-5 transition-all'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='hidden group-open:block w-5 h-5 transition-all'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className='px-4 sm:px-6 pb-4 text-[#727272] text-sm sm:text-base leading-relaxed'>
                    محدودیت کیلومتر در اجاره خودروهای بدون راننده معمولاً 250
                    کیلومتر در روز است. در صورت نیاز به کیلومتر بیشتر، می‌توانید
                    با تیم پشتیبانی تماس بگیرید تا شرایط و هزینه‌های اضافی را
                    بررسی کنید.
                  </div>
                </details>
              </div>
            </div>
          </div>
          <figure className='flex justify-center col-span-12 xl:col-span-5'>
            <Image
              src='/Img/question.png'
              width={342}
              height={259}
              alt='Q&A image'
              className='rounded-2xl'
            />
          </figure>
        </div>
      </div>

      <div className='mt-11 mb-28 w-full'>
        <div className='keen-slider' ref={sliderRef}>
          {logos.map((logo, idx) => (
            <div
              className='flex justify-center items-center keen-slider__slide'
              key={idx}
            >
              <Image
                src={logo}
                alt={`Logo ${idx}`}
                width={74}
                height={60}
                className='opacity-60 hover:opacity-100 grayscale transition-all'
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
