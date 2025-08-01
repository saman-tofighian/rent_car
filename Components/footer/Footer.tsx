import Image from 'next/image';
import { FaRoad } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
export default function Footer() {
  return (
    <section className='my-8 px-[8%] w-full'>
      <div className='gap-y-8 grid grid-cols-1 md:grid-cols-12 bg-[#1E1E1EE5] px-6 md:px-12 py-10 md:py-14 rounded-2xl w-full'>
        <div className='flex lg:flex-row flex-col justify-around items-start lg:items-center gap-6 col-span-12 p-4 border border-[#868686] rounded-2xl'>
          <div className='flex items-center gap-x-4'>
            <span className='flex justify-center items-center p-3 border border-white rounded-[12px]'>
              <LiaPhoneVolumeSolid color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-1 text-[#FFFBFB] text-[15px] md:text-[16px]'>
                ارتباط با ما
              </h5>
              <span className='text-[14px] text-white md:text-[16px]'>
                0912-21326545
              </span>
            </div>
          </div>
          <span className='hidden lg:flex border border-[#868686] h-[40px]'></span>
          <div className='flex items-center gap-x-4'>
            <span className='flex justify-center items-center p-3 border border-white rounded-[12px]'>
              <IoMailSharp color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-1 text-[#FFFBFB] text-[15px] md:text-[16px]'>
                ایمیل
              </h5>
              <span className='text-[14px] text-white md:text-[16px]'>
                autorent@info.com
              </span>
            </div>
          </div>
          <span className='hidden lg:flex border border-[#868686] h-[40px]'></span>
          <div className='flex items-center gap-x-4'>
            <span className='flex justify-center items-center p-3 border border-white rounded-[12px]'>
              <FaRoad color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-1 text-[#FFFBFB] text-[15px] md:text-[16px]'>
                آدرس
              </h5>
              <span className='text-[14px] text-white md:text-[16px]'>
                تهران - خ شادمان
              </span>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-7 lg:col-span-4 lg:mt-3'>
          <figure className='w-full'>
            <Image src='/Img/footer.png' alt='لوگو' width={151} height={59} />
          </figure>
          <p className='mt-3.5 font-[400] text-[14px] text-white leading-7'>
            اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین ناوگان
            خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در
            سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.
          </p>
        </div>
        <div className='col-span-12 md:col-span-5 lg:col-span-3'>
          <ul className='flex flex-col justify-start md:items-center w-full h-full'>
            <li className='mt-4 font-medium text-white'>دسترسی آسان</li>
            <li className='mt-4 font-medium text-white'>سوالات متداول</li>
            <li className='mt-4 font-medium text-white'>تماس با ما</li>
            <li className='mt-4 font-medium text-white'>درباره ما</li>
          </ul>
        </div>
        <div className='flex flex-col justify-start col-span-12 lg:col-span-5 lg:mt-3'>
          <h6 className='mb-3 font-semibold text-[16px] text-white'>خبرنامه</h6>
          <div className='flex sm:flex-row flex-col border border-[#F6F6F6] rounded-[6px] w-full max-w-[400px] overflow-hidden'>
            <input
              type='email'
              placeholder='ایمیل خود را وارد کنید'
              className='px-4 py-3 outline-none w-full text-black placeholder:text-[#9D9D9D] text-sm'
            />
            <button className='bg-[#FDB713] sm:my-2 sm:ml-2.5 px-7 py-3 rounded-none sm:rounded-[6px] font-black text-[#212121] text-sm cursor-pointer'>
              ارسال
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center col-span-12 mt-10 pt-4 border-[#868686] border-t h-full text-center'>
          <p className='text-[#919191] text-sm'>
            © تمامی حقوق این وب‌سایت متعلق به{' '}
            <strong className='text-[#FDB713]'>سامان توفیقیان</strong> می‌باشد
          </p>
        </div>
      </div>
    </section>
  );
}
