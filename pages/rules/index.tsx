import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';

export default function Rules() {
  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>قوانین و مقررات</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> قوانین و مقررات
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-y-8 my-16 px-6 lg:px-[10%] w-full'>
        <div className='bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            مدارک لازم
          </h2>

          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <ul className='mt-5 pl-6 w-full list-disc'>
            <li className='mb-2'>
              ارائه گواهینامه رانندگی با اعتبار حداقل 6 ماه
            </li>
            <li className='mb-2'>ارائه کارت ملی</li>
            <li className='mb-2'>
              مدارک شغلی (هرگونه مدرکی که نشان دهنده شغل یا محل کار شما باشد)
            </li>
            <li className='mb-2'>
              ارائه سفته (به ارزش خودرو برای ماشین‌های ایرانی و ارائه چک به ارزش
              خودرو برای ماشین‌های خارجی)
            </li>
            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>
          </ul>
        </div>

        <div className='bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            مدارک لازم برای اجاره خودرو افراد خارجی
          </h2>

          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <ul className='mt-5 pl-6 w-full list-disc'>
            <li className='mb-2'>
              کپی از گواهینامه رانندگی کشور محل سکونت و یا گواهینامه بین‌المللی
              فرد
            </li>
            <li className='mb-2'>
              کپی از پاسپورت برای خودروهای اقتصادی و اصل پاسپورت برای خودروهای
              لوکس
            </li>
            <li className='mb-2'>
              ارائه بلیط برای تحویل خودرو در فرودگاه امام
            </li>
            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>
          </ul>
        </div>

        <div className='bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            مدارک اجاره خودرو برای شرکت‌ها
          </h2>

          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <ul className='mt-5 pl-6 w-full list-disc'>
            <li className='mb-2'>مدرک شناسایی مدیر شرکت</li>
            <li className='mb-2'>ارائه اساسنامه شرکت</li>
            <li className='mb-2'>دریافت چک شرکت</li>
            <li>پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.</li>
          </ul>
        </div>

        <div className='bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            انواع بیمه برای انواع خودرو
          </h2>

          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <p className='mt-6 font-medium text-[#4A4A4A] text-[14px] leading-8'>
            شرکت اتورنت برای منطبق شدن با نیازهای مختلف مشتریان دو نوع بیمه
            پایه و بیمه کامل را برای اجاره خودرو ارائه می‌دهد. هر کدام از این
            بیمه‌ها باتوجه‌به بوجه و نیاز مشتری، هزینه خسارات را پوشش
            می‌دهند. بیمه پایه اجاره خودرو در این نوع بیمه که بصورت پیش فرض بر
            روی تمامی خودروهای اجاره شده دراتورنت وجود دارد، در این نوع بیمه
            مسئولیت تمامی خسارات و زیان‌ها بر عهده اجاره کننده است.
          </p>
        </div>
      </div>
      <div className='gap-x-8 gap-y-8 lg:gap-y-0 grid grid-cols-12 my-12 px-6 lg:px-[10%] w-full'>
        <div className='col-span-12 lg:col-span-6 bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            بیمه پایه
          </h2>
          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <ul className='mt-5 pl-6 w-full list-disc'>
            <li className='mb-2'>امداد جاده‌ای بصورت گسترده (ERA)</li>
            <li className='mb-2'> ایمنی خودرو (SSP)</li>
            <li className='mb-2'>پوشش کامل در برابر سرقت</li>
            <li>
              بیمه شخص ثالث (ALI) مبلغ بیمه پایه بصورت رایگان و روزانه است.
            </li>
          </ul>
        </div>

        <div className='col-span-12 lg:col-span-6 bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            بیمه کامل
          </h2>

          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[3px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] rounded-2xl w-10 h-[3px]'></span>
          </div>
          <ul className='mt-5 pl-6 w-full list-disc'>
            <li className='mb-2'>امداد جاده‌ای گسترده (ERA)</li>
            <li className='mb-2'>بیمه شخص ثالث (ALI)</li>
            <li className='mb-2'>تعهد ایمنی خودرو (SSP)</li>
            <li className='mb-2'>پوشش کامل ناشی از سرقت</li>
            <li className='mb-2'>پرداخت خسارات جزئی (شیشه، لاستیک، بدنه)</li>
            <li className='mb-2'>بیمه بدنه با حداقل مسئولیت (LDW)</li>
            <li>
              حداقل معافیت جهت افت قیمت مبلغ بیمه کامل بصورت روزانه حدود 35%
              کرایه خودرو است.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}
