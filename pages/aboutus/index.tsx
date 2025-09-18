import Header from '@/Components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';

export default function AboutUs() {
  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right mb-16 h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>درباره ما</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> درباره ما
          </span>
        </div>
      </div>

      <div className='my-12 px-[8%] w-full'>
        <div className='gap-y-9 lg:gap-y-0 grid grid-cols-12 bg-[#FFFFFF] px-[6%] py-8 border border-[#EDEDED] rounded-2xl w-full'>
          <div className='flex flex-col items-center lg:items-start col-span-12 mt-8'>
            <h2 className='font-bold text-[#494949] text-2xl'>معرفی اتورنت</h2>
            <span className='block mx-auto lg:mx-0 mt-3 border w-40 lg:w-[365px] text-[#C2C2C2]'></span>
            <p className='font-medium text-[14px] leading-8'>
              اتورنت با رویکرد اعتماد به مشتری، در ابتدا با ایجاد بزرگترین
              ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا
              تجاری در سراسر کشور ایران و در تمامی شهرهای اصلی کشور و تمامی
              فرودگاه های اصلی و با هدف ارتقاء واقعی خدمات خوب و خدماتی
              همانندکشورهای پیــــشرفته در مــیهن عزیزمان ایران سرمایه‌گذاری
              نموده و این مهم با جلب همکاری سایر شرکای تجاری و جذب سرمایه تا
              رسیدن به هدف ایجاد‌ شبکه ای بالغ بر صد هزار خودرو و گسترش شبکه به
              کلیه شهرستانهای کوچک ایران ادامه خواهد یافت.مدل تـجاری اتورنت ، با
              محوریت اعـتماد به مشتری، امـکان اجاره خودرو با استانداردهای روز
              دنیا و بدون دریافت تضامین سنتی همانند چک و سفته و اسناد ملکی را
              فراهم می سازد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
