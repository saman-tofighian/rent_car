import { FaRoad } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';

export default function Footer() {
  return (
    <section className='my-8 px-[8%] w-full'>
      <div className='grid grid-cols-12 bg-black px-12 py-14 rounded-2xl w-full'>
        <div className='flex justify-around items-center gap-x-8 col-span-12 p-4 border border-[#868686] rounded-2xl'>
          <div className='flex items-center gap-x-6'>
            <span className='flex justify-between items-center gap-2 p-3 border border-white rounded-[12px]'>
              <LiaPhoneVolumeSolid color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-2 text-[#FFFBFB] text-[16px]'>ارتباط با ما</h5>
              <span className='text-[16px] text-white'>0912-21326545</span>
            </div>
          </div>
          <span className='flex border border-[#868686] h-[40px]'></span>
          <div className='flex items-center gap-x-6'>
            <span className='flex justify-between items-center gap-2 p-3 border border-white rounded-[12px]'>
              <IoMailSharp color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-2 text-[#FFFBFB] text-[16px]'>ایمیل</h5>
              <span className='text-[16px] text-white'>
                samantofighian78@gmail.com
              </span>
            </div>
          </div>
          <span className='flex border border-[#868686] h-[40px]'></span>
          <div className='flex items-center gap-x-6'>
            <span className='flex justify-between items-center gap-2 p-3 border border-white rounded-[12px]'>
              <FaRoad color='white' size='1.5rem' />
            </span>
            <div>
              <h5 className='mb-2 text-[#FFFBFB] text-[16px]'>آدرس</h5>
              <span className='text-[16px] text-white'>تهران- خ شادمان</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
