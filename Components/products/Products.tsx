import Image from 'next/image';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

export default function Products() {
  return (
    <section className='my-24 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          مشاهده موجودی خودروها{' '}
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          رزرو خودرو در <strong className='text-[#D79C10]'>اُتـــورِنت</strong>
        </p>
      </div>
      <div className='grid grid-cols-12 mt-7 w-full'>
        <div className='flex justify-end items-center gap-x-3.5 col-span-7'>
          <button className='bg-[#194BF0] px-4 py-2 rounded-[8px] text-white cursor-pointer'>
            پرطرفدار
          </button>
          <button className='bg-transparent px-4 py-2 border border-[#194BF0] rounded-[8px] text-[#194BF0] cursor-pointer'>
            جدیدترین
          </button>
          <button className='bg-transparent px-4 py-2 border border-[#194BF0] rounded-[8px] text-[#194BF0] cursor-pointer'>
            پیشنهادی
          </button>
        </div>
        <div className='flex justify-end items-center col-span-4'>
          <Link
            href='/products'
            className='flex justify-center items-center gap-x-2.5 font-bold text-[#194BF0]'
          >
            مشاهده همه
            <FaAngleLeft className='mt-1' size='1.2rem' />
          </Link>
        </div>
      </div>
      <div className='gap-x-8 grid grid-cols-12 mt-8 px-[6%] w-full'>
        <div className='col-span-4 bg-[#FFFFFF] shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px] w-full'>
            <Image src='/img/p1.jpg' alt='Car Image' width={350} height={225} />
          </figure>
          <div className='mt-3.5 w-full'>
            <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
              اجاره بنز E350 سدان
            </h4>
            <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
              مدل : 2016
            </p>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              روزانه
            </span>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              ماهانه
            </span>
          </div>
          <span className='block bg-[#D7D7D7] my-3.5 w-full h-[1px]'></span>
          <button className='flex justify-center items-center bg-[#194BF0] px-4 py-2 rounded-[8px] w-full text-white cursor-pointer'>
            درخواست رزرو
          </button>
        </div>
        <div className='col-span-4 bg-[#FFFFFF] shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px] w-full'>
            <Image src='/img/p1.jpg' alt='Car Image' width={350} height={225} />
          </figure>
          <div className='mt-3.5 w-full'>
            <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
              اجاره بنز E350 سدان
            </h4>
            <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
              مدل : 2016
            </p>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              روزانه
            </span>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              ماهانه
            </span>
          </div>
          <span className='block bg-[#D7D7D7] my-3.5 w-full h-[1px]'></span>
          <button className='flex justify-center items-center bg-[#194BF0] px-4 py-2 rounded-[8px] w-full text-white cursor-pointer'>
            درخواست رزرو
          </button>
        </div>
        <div className='col-span-4 bg-[#FFFFFF] shadow p-4 border border-[#D7D7D7] rounded-2xl'>
          <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px] w-full'>
            <Image src='/img/p1.jpg' alt='Car Image' width={350} height={225} />
          </figure>
          <div className='mt-3.5 w-full'>
            <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
              اجاره بنز E350 سدان
            </h4>
            <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
              مدل : 2016
            </p>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              روزانه
            </span>
          </div>
          <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
            <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
              از ۱ تا 30 روز:
              <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                8,500,000
              </span>
            </span>
            <span className='font-normal text-[#868686] text-[12px]'>
              ماهانه
            </span>
          </div>
          <span className='block bg-[#D7D7D7] my-3.5 w-full h-[1px]'></span>
          <button className='flex justify-center items-center bg-[#194BF0] px-4 py-2 rounded-[8px] w-full text-white cursor-pointer'>
            درخواست رزرو
          </button>
        </div>
      </div>
    </section>
  );
}
