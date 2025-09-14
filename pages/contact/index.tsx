import Header from '@/Components/Header/Header';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>تماس با ما</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> تماس با ما
          </span>
        </div>
      </div>

      <div className='mt-7 px-[8%] w-full'>
        <div className='grid grid-cols-12 bg-[#FFFFFF] p-8 border border-[#EDEDED] rounded-2xl w-full'>
          <div className='col-span-6'>
            <h2 className='text-[#494949] text-2xl'>
              ارتباط با دفتر مرکزی اتورنت
            </h2>
            <span className='block mt-3 border w-[365px] text-[#C2C2C2]'></span>
            <p className='flex items-center mt-6 text-[#9A9A9A] text-[20px]'>
              <HiOutlineLocationMarker />
              <span className='mx-2 font-bold text-black'>آدرس : </span>
              تهران، میدان آزادی، خیابان آزادی، خیابان شادمان، پلاک 23
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
