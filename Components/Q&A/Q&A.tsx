import Image from 'next/image';

export default function Questions() {
  return (
    <section className='my-28 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          پر تکرارترین سؤالاتی که پرسیدید
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          سؤالات <strong className='text-[#D79C10]'>متداول</strong>
        </p>
      </div>
      <div className='grid grid-cols-12 mt-10 px-[6%] w-full'>
        <div className='flex flex-col justify-center col-span-7'>
          <div className='w-full'>
            <div className='space-y-4'>
              <details
                className='group bg-white shadow px-4 py-6 border border-[#D7D7D7] rounded-[16px]'
                open
              >
                <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-6 py-4 rounded-lg font-medium text-secondary-900 text-lg cursor-pointer list-none'>
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
                <div className='px-6 pb-4 text-[#727272]'>
                  در صورت بروز نقص فنی برای خودرو، تیم پشتیبانی ما به سرعت اقدام
                  به رفع مشکل می‌کند. شما می‌توانید با تماس با شماره پشتیبانی یا
                  از طریق اپلیکیشن، درخواست کمک کنید.
                </div>
              </details>
              <details className='group bg-white shadow px-4 py-6 border border-[#D7D7D7] rounded-[16px]'>
                <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-6 py-4 rounded-lg font-medium text-secondary-900 text-lg cursor-pointer list-none'>
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
                <div className='px-6 pb-4 text-[#727272]'>
                  در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک
                  بنزین پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در
                  صورتی که خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت
                  باشد هزینه آن بر عهده مشتری می باشد.
                </div>
              </details>
              <details className='group bg-white shadow px-4 py-6 border border-[#D7D7D7] rounded-[16px]'>
                <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-6 py-4 rounded-lg font-medium text-secondary-900 text-lg cursor-pointer list-none'>
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
                <div className='px-6 pb-4 text-[#727272]'>
                  بله، تمامی خودروهای اجاره ای اتورنت دارای بیمه شخص ثالث و بدنه
                  هستند. در صورت بروز حادثه، شما می‌توانید با تیم پشتیبانی تماس
                  بگیرید تا راهنمایی‌های لازم را دریافت کنید.
                </div>
              </details>
              <details className='group bg-white shadow px-4 py-6 border border-[#D7D7D7] rounded-[16px]'>
                <summary className='flex justify-between items-center hover:bg-[#FFFFFF] px-6 py-4 rounded-lg font-medium text-secondary-900 text-lg cursor-pointer list-none'>
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
                <div className='px-6 pb-4 text-[#727272]'>
                  محدودیت کیلومتر در اجاره خودروهای بدون راننده معمولاً 250
                  کیلومتر در روز است. در صورت نیاز به کیلومتر بیشتر، می‌توانید
                  با تیم پشتیبانی تماس بگیرید تا شرایط و هزینه‌های اضافی را
                  بررسی کنید.
                </div>
              </details>
            </div>
          </div>
        </div>
        <figure className='flex justify-center col-span-5'>
          <Image
            src='/Img/question.png'
            width={342}
            height={359}
            alt='Q&A image'
            className='rounded-2xl'
          />
        </figure>
      </div>
    </section>
  );
}
