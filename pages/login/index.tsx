import Image from 'next/image';

export default function Login() {
  return (
    <section className='flex justify-center items-center bg-[#d7d7d7] px-4 md:px-[8%] min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-9 bg-white shadow-lg rounded-2xl w-full max-w-[900px] min-h-[520px] overflow-hidden'>
        {/* راست: فرم */}
        <div className='flex flex-col justify-center items-center md:col-span-6 px-6 py-10'>
          <Image
            src='/Img/Logo.png'
            alt='Website Logo'
            width={152}
            height={60}
            priority
          />
          <div className='mt-10 w-full text-center'>
            <h2 className='font-bold text-[20px] text-black'>
              ورود یا ثبت‌نام
            </h2>
            <p className='mt-4 text-[#494949] text-[14px]'>
              کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
            </p>
          </div>

          <form className='space-y-5 mx-auto mt-8 w-full max-w-sm'>
            <div className='flex flex-row-reverse items-center bg-[#f5f5f5] px-4 py-3 border rounded-xl'>
              <Image
                src='/Img/iran.png'
                alt='Iran Flag'
                width={20}
                height={14}
                className='rounded-full'
              />
              <span className='mx-2 text-[16px] text-gray-600'>| 98+</span>
              <input
                type='tel'
                placeholder='9********'
                className='flex-1 bg-transparent pr-2 outline-none text-[14px] placeholder:text-gray-400'
              />
            </div>

            <div className='flex items-center text-[12px] text-gray-600'>
              <input type='checkbox' className='ml-2 w-4 h-4' />
              <label>
                با ورود و ثبت‌نام در سایت،{' '}
                <a href='#' className='font-medium text-[#0075FF]'>
                  قوانین اتورنت
                </a>{' '}
                را می‌پذیرم.
              </label>
            </div>

            <button
              type='submit'
              className='bg-[#EDEDED] py-3 rounded-xl w-full font-semibold text-[#9C9C9C] text-sm'
              disabled
            >
              تایید و ادامه
            </button>
          </form>
        </div>

        {/* چپ: تصویر بک */}
        <div className='hidden md:block md:col-span-3'>
          <Image
            src='/Img/login.jpg'
            alt='Car Image'
            width={356}
            height={855}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
