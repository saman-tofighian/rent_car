import { FaBoxOpen } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';

type dataType = {
  id: number;
  icon: any;
  title: string;
  desc: string;
};
export default function MottoCard() {
  const data: dataType = [
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
    <div className='gap-x-10 grid grid-cols-12 px-10 w-full'>
      {data.map((item) => (
        <div
          key={item.id}
          className='col-span-4 bg-white shadow hover:shadow-2xl px-6 py-5 border border-[#D7D7D7] rounded-2xl duration-500 ease-linear'
        >
          <div className='flex justify-center w-full'>
            <span className='flex justify-center items-center p-3 border rounded-[12px] w-[68px] h-[68px]'>
              {item.icon}
            </span>
          </div>
          <h3 className='mt-2.5 font-bold text-[18px]'>{item.title}</h3>
          <p className='mt-3 px-3 font-medium text-[#757575] text-[12px] leading-6'>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
