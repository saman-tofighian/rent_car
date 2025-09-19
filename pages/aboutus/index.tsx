import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';

type dataType = {
  id: number;
  icon: any;
  title: string;
  desc: string;
};

export default function AboutUs() {
  const data: dataType[] = [
    {
      id: 1,
      icon: <FaBoxOpen color='#194BF0' size='2rem' />,
      title: 'تحویل در محل',
      desc: 'تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود.',
    },
    {
      id: 2,
      icon: <MdOutlineSupportAgent color='#194BF0' size='2rem' />,
      title: 'پشتیبانی 24 ساعته',
      desc: 'کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود.',
    },
    {
      id: 3,
      icon: <GiWallet color='#194BF0' size='2rem' />,
      title: 'قیمت مناسب',
      desc: 'هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است.',
    },
  ];

  return (
    <section className='bg-[#F9F9F9] w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right mb-16 h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>درباره ما</h1>
          <span className='flex justify-center items-center gap-x-2.5 mt-2 font-normal text-[#CFCFCF] text-[14px]'>
            اتورنت <BsArrowLeft /> درباره ما
          </span>
        </div>
      </div>

      <div className='my-12 px-6 lg:px-[10%] w-full'>
        {/* معرفی اتورنت */}
        <div className='bg-white shadow-sm px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            معرفی اتورنت
          </h2>
          {/* خط کامل + رنگی */}
          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[2px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] w-10 h-[2px]'></span>
          </div>
          <p className='mt-6 font-medium text-[#4A4A4A] text-[14px] leading-8'>
            اتورنت با رویکرد اعتماد به مشتری، در ابتدا با ایجاد بزرگترین ناوگان
            خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در
            سراسر کشور ایران و در تمامی شهرهای اصلی کشور و تمامی فرودگاه های
            اصلی و با هدف ارتقاء واقعی خدمات خوب و خدماتی همانند کشورهای پیشرفته
            در میهن عزیزمان ایران سرمایه‌گذاری نموده و این مهم با جلب همکاری
            سایر شرکای تجاری و جذب سرمایه تا رسیدن به هدف ایجاد شبکه ای بالغ بر
            صد هزار خودرو و گسترش شبکه به کلیه شهرستانهای کوچک ایران ادامه خواهد
            یافت. مدل تجاری اتورنت، با محوریت اعتماد به مشتری، امکان اجاره خودرو
            با استانداردهای روز دنیا و بدون دریافت تضامین سنتی همانند چک و سفته
            و اسناد ملکی را فراهم می‌سازد.
          </p>
        </div>

        {/* آیتم‌های سه‌تایی */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mt-10 w-full'>
          {data.map((item) => (
            <div
              key={item.id}
              className='bg-white shadow hover:shadow-lg px-6 py-6 border border-[#EDEDED] rounded-2xl transition duration-300'
            >
              <div className='flex justify-center'>
                <span className='flex justify-center items-center p-3 border rounded-xl w-[68px] h-[68px]'>
                  {item.icon}
                </span>
              </div>
              <h3 className='mt-4 font-bold text-[#333] text-[18px] text-center'>
                {item.title}
              </h3>
              <p className='mt-3 font-medium text-[#757575] text-[13px] text-center leading-6'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* شبکه نمایندگان */}
        <div className='bg-white shadow-sm mt-10 px-8 py-10 border border-[#EDEDED] rounded-2xl'>
          <h2 className='inline-block relative font-bold text-[#494949] text-2xl'>
            شبکه نمایندگان و شرکتهای اجاره خودروی همکار
          </h2>
          {/* خط کامل + رنگی */}
          <div className='relative bg-[#E5E5E5] mt-3 w-full h-[2px]'>
            <span className='top-0 right-0 absolute bg-[#FDB713] w-10 h-[2px]'></span>
          </div>
          <p className='mt-6 font-medium text-[#4A4A4A] text-[14px] leading-8'>
            اتورنت دارای شبکه ای شامل ایستگاه های داخل شهری و فرودگاهی می باشد
            که این ایستگاه ها توسط نمایندگان و شرکای تجاری نگهداری و مدیریت
            می‌گردند، افرادی که علاقمند به سرمایه‌گذاری و همکاری با ناواران
            می‌باشند می‌توانند بصورت نمایندگی یا همکار تجاری فعالیت نمایند ، در
            هر صورت این اشخاص می بایست دوره های آموزش را طبق استاندارد
            بین‌المللی گذرانده و تحت استاندارد و کیفیت مورد نیاز ناواران شروع به
            فعالیت نمایند. دارا بودن سرمایه مورد نیاز جهت خرید حداقل تعداد
            خودروهای صفر کیلومتر در محدوده تحت پوشش و قبل از هرچیز اهمیت به اصل
            خدمت به هموطنان و رضایت مشتریان از شرایط اصلی اعطای نمایندگی می
            با نمایندگان دارای اپلیکیشن موبایل و سیستم آنلاین مرتبط با سامانه
            مدیریت مرکزی می باشند، و تمامی امور رزرو و محاسبات مرتبط بصورت
            خودکار انجام پذیرفته و نمایندگان از پشتیبانی کامل شرکت مرکزی در
            تمامی مراحل برخوردار خواهند بود.
          </p>
        </div>

        {/* سکشن عکس + کارت‌ها */}
        <div className='relative mt-10 mb-40'>
          {/* بک‌گراند عکس */}
          <div className='relative rounded-2xl overflow-hidden'>
            <img
              src='/Img/about.png'
              alt='about-section'
              className='w-full h-[450px] object-cover'
            />
            {/* لایه تیره */}
            <div className='absolute inset-0 bg-black/50'></div>

            {/* متن روی عکس */}
            <div className='absolute inset-0 flex flex-col justify-center items-center px-6 text-white text-center'>
              <h2 className='mb-4 font-bold text-2xl md:text-3xl'>
                شبکه امدادری و تعمیرات خودرو
              </h2>
              <p className='max-w-2xl text-sm md:text-base leading-7'>
                شبکه تحت پوشش اتورنت که با سرمایه‌گذاری و همکاری شرکای تجاری در
                خدمت مشتریان قرار گرفته است شامل 2000 نقطه در سراسر کشور ایــران
                و مناطق آزاد تجاری مـی‌باشد که باعث شده سرعت امداد رسانی در هر
                نقطه ایران به کمتر از 30 دقیقه کاهش یابد، امدادگران و خودروهای
                امدادی همگی مجهز به تجهیزات جهت رفع معایب و تعمیرات ساده بوده و
                بسیاری از مشکلات در همین مرحله به سادگی رفع می گردند.
              </p>
            </div>
          </div>

          {/* کارت‌ها پایین عکس */}
          <div className='bottom-0 left-1/2 absolute px-4 sm:px-6 w-full max-w-5xl translate-x-[-50%] translate-y-1/2'>
            <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
              {/* کارت اول */}
              <div className='bg-white shadow-xl px-8 py-6 rounded-2xl text-[#333]'>
                <div className='flex justify-center w-full'>
                  <h3 className='mb-2 border-[#FDB713] border-b w-fit font-bold text-lg md:text-xl'>
                    خدمات شبانه روزی
                  </h3>
                </div>
                <p className='text-[#555] text-sm md:text-base leading-6'>
                  اتورنت در تــمامی بخش‌های اصـلی از جـمله مرکز تماس مشتریان و
                  خدمات امدادی بصورت دائمی تمامی روزهای هفته و 24 ساعته فعال
                  است، بیشتر ایستگاه های کاری تحویل خودرو نیز بصورت 24 ساعته
                  می‌باشند ، فقط واحد اداری و فروش اجاره های بلند مدت در ساعات
                  اداری و روزهای اداری فعال می باشند.
                </p>
              </div>
              {/* کارت دوم */}
              <div className='bg-white shadow-xl px-8 py-6 rounded-2xl text-[#333]'>
                <div className='flex justify-center w-full'>
                  <h3 className='mb-2 border-[#FDB713] border-b w-fit font-bold text-lg md:text-xl'>
                    ارائه خودرو جایگزین
                  </h3>
                </div>
                <p className='text-[#555] text-sm md:text-base leading-6'>
                  با توجه به تعداد خودرو های موجود در اتورنت امکان ارائه خودروی
                  جایگزین در خرابی ها و تعمیرات طولانی مدت که بصورت امدادی برطرف
                  نگردند ، در هر نقطه از ایران میسر می باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
