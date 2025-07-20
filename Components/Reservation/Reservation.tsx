import Image from 'next/image';
import {
  FaCarSide,
  FaKey,
  FaMoneyCheckAlt,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaRegCalendarAlt size={24} />,
    title: '<strong class="text-[#D79C10]">تاریخ</strong> تحویل را تعیین کنید.',
    desc: 'تاریخ مدنظر خود را از تقویم انتخاب و رزرو کنید.',
    number: 1,
  },
  {
    icon: <FaCarSide size={24} />,
    title: '<strong class="text-[#D79C10]">خودرو</strong> خود را انتخاب کنید.',
    desc: 'خودروی مورد نظر خود را متناسب با درخواست خود انتخاب کنید.',
    number: 2,
  },
  {
    icon: <FaMoneyCheckAlt size={24} />,
    title:
      '<strong class="text-[#D79C10]">هزینه</strong> اجاره را پرداخت کنید.',
    desc: 'می‌توانید از طریق کیف پول آنلاین یا کارت‌های عضو شبکه شتاب هزینه اجاره را پرداخت کنید.',
    number: 3,
  },
  {
    icon: <FaKey size={24} />,
    title: '<strong class="text-[#D79C10]">خودرو</strong> را دریافت کنید.',
    desc: 'در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.',
    number: 4,
  },
];

export default function Reservation() {
  return (
    <section className='my-24 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          چگونه در وبسایت
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          <strong className='text-[#D79C10]'>اُتـــورِنت،</strong> خودرو رزرو
          کنیم؟
        </p>
      </div>

      <div className='relative flex lg:flex-row flex-col justify-center items-center gap-12 mt-20'>
        {/* Left Column */}
        <div className='flex flex-col gap-x-12 gap-y-20 md:mt-0 mb-6'>
          {[steps[0], steps[1]].map((step) => (
            <StepBox key={step.number} step={step} />
          ))}
        </div>

        {/* Car and Lines */}
        <div className='relative flex justify-center items-center'>
          {/* ماشین */}
          <Image
            src='/img/reservation.png'
            alt='Car'
            width={372}
            height={726}
            className='block z-10 relative'
          />
          {/* خطوط زیر ماشین */}
          <Image
            src='/img/line1.png'
            alt='خط جاده بالا'
            width={47}
            height={135}
            className='top-[-32px] z-0 absolute'
          />
          <Image
            src='/img/line2.png'
            alt='خط جاده پایین'
            width={47}
            height={244}
            className='bottom-[-32px] z-0 absolute'
          />
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-x-12 gap-y-20 mt-6 md:mt-0'>
          {[steps[2], steps[3]].map((step) => (
            <StepBox key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBox({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className='relative flex flex-col gap-4 max-w-xs'>
      <span className='-top-4 -right-4 z-10 absolute flex justify-center items-center bg-[#D79C10] shadow-md rounded-full w-8 h-8 font-bold text-white'>
        {step.number}
      </span>

      <div className='flex justify-center items-center bg-[#F7F7F7] shadow rounded-full w-12 h-12 text-[#D79C10] text-xl'>
        {step.icon}
      </div>

      <h4
        className='font-bold text-[#000000] text-2xl leading-6'
        dangerouslySetInnerHTML={{ __html: step.title }}
      />

      <p className='font-medium text-[#5E5E5E] text-[16px]'>{step.desc}</p>
    </div>
  );
}
