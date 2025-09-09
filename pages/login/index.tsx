import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PiClockLight } from 'react-icons/pi';

export default function Login() {
  const [step, setStep] = useState<1 | 2>(1);
  const [phone, setPhone] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  // مرحله دوم (کد تایید)
  const [otp, setOtp] = useState<string[]>(Array(5).fill(''));
  const [timer, setTimer] = useState<number>(120); // 2 دقیقه = 120 ثانیه

  // تایمر
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [step, timer]);

  // اعتبارسنجی شماره موبایل
  const isPhoneValid = phone.length === 10 && /^\d{10}$/.test(phone);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPhoneValid && checked) {
      setStep(2);
      setTimer(120); // ریست تایمر وقتی وارد مرحله 2 می‌شه
    }
  };

  // مدیریت ورودی OTP
  const handleOtpChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  // چک کردن پر بودن همه ورودی‌ها
  const isOtpComplete = otp.every((digit) => digit !== '');

  // فرمت تایمر mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className='flex justify-center items-center bg-[#d7d7d7] px-4 md:px-[8%] min-h-screen'>
      <Toaster reverseOrder={false} />
      <div className='grid grid-cols-1 md:grid-cols-9 bg-white shadow-lg rounded-2xl w-full max-w-[900px] min-h-[520px] overflow-hidden'>
        <div className='flex flex-col justify-center items-center md:col-span-6 px-6 py-10'>
          <Image
            src='/Img/Logo.png'
            alt='Website Logo'
            width={152}
            height={60}
            priority
          />

          {/* مرحله اول */}
          {step === 1 && (
            <>
              <div className='mt-10 w-full text-center'>
                <h2 className='font-bold text-[20px] text-black'>
                  ورود یا ثبت‌نام
                </h2>
                <p className='mt-4 text-[#494949] text-[14px]'>
                  کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
                </p>
              </div>

              <form
                onSubmit={handleSubmitPhone}
                className='space-y-5 mx-auto mt-8 w-full max-w-sm'
              >
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
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder='9*********'
                    className='flex-1 bg-transparent pr-2 outline-none text-[14px] placeholder:text-gray-400'
                  />
                </div>

                <div className='flex items-center text-[12px] text-gray-600'>
                  <input
                    type='checkbox'
                    className='ml-2 w-4 h-4'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
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
                  className={`py-3 rounded-xl w-full font-semibold text-sm transition-colors duration-200 ${
                    isPhoneValid && checked
                      ? 'bg-[#0075FF] text-white cursor-pointer'
                      : 'bg-[#EDEDED] text-[#9C9C9C] cursor-not-allowed'
                  }`}
                  disabled={!isPhoneValid || !checked}
                >
                  تایید و ادامه
                </button>
              </form>
            </>
          )}

          {/* مرحله دوم */}
          {step === 2 && (
            <>
              <div className='mt-10 w-full text-center'>
                <h2 className='font-bold text-[20px] text-black'>کد تایید</h2>
                <p className='mt-4 text-[#494949] text-[14px]'>
                  کد تایید به شماره {`98${phone}`} ارسال شد.
                </p>
              </div>

              <div className='flex justify-between items-center gap-x-6 mt-5 text-[12px]'>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type='tel'
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className='px-4 py-2 border border-[#C2C2C2] focus:border-[#1371F4] rounded-[10px] outline-none w-[56px] h-[56px] text-center'
                  />
                ))}
              </div>

              <div className='flex justify-evenly items-center mt-7 w-full'>
                {timer > 0 ? (
                  <span className='flex justify-center items-center gap-x-2 font-normal text-[#868686] text-[14px]'>
                    <PiClockLight />
                    <span className='text-[#194BF0]'>
                      {formatTime(timer)}
                    </span>{' '}
                    تا دریافت مجدد کد
                  </span>
                ) : (
                  <button
                    onClick={() => setTimer(120)}
                    className='font-medium text-[#194BF0] text-[14px]'
                  >
                    ارسال مجدد کد
                  </button>
                )}

                <span
                  className='font-normal text-[#194BF0] text-[14px] cursor-pointer'
                  onClick={() => setStep(1)}
                >
                  ویرایش شماره موبایل
                </span>
              </div>

              <div className='space-y-5 mx-auto mt-8 w-full max-w-sm'>
                <button
                  type='submit'
                  className={`py-3 rounded-xl w-full font-semibold text-sm transition-colors duration-200 ${
                    isOtpComplete
                      ? 'bg-[#0075FF] text-white cursor-pointer'
                      : 'bg-[#EDEDED] text-[#9C9C9C] cursor-not-allowed'
                  }`}
                  disabled={!isOtpComplete}
                  onClick={() => toast.success('ورود شما با موفقیت انجام شد')}
                >
                  تایید و ادامه
                </button>
              </div>
            </>
          )}
        </div>

        {/* سمت راست */}
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
