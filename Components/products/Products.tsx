import Image from 'next/image';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';

interface IProducts {
  id: number;
  image: string;
  title: string;
  model: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export default function Products() {
  const Products: IProducts = [
    {
      id: 1,
      image: '/img/p1.jpg',
      title: 'اجاره بنز E350 سدان',
      model: '2016',
      dailyPrice: 8500000,
      monthlyPrice: 255000000,
    },
    {
      id: 2,
      image: '/img/p2.jpg',
      title: 'اجاره تویوتا لندکروز در تهران 2013',
      model: '2018',
      dailyPrice: 6000000,
      monthlyPrice: 180000000,
    },
    {
      id: 3,
      image: '/img/p3.jpg',
      title: 'اجاره جنسیس کوپه',
      model: '2020',
      dailyPrice: 7000000,
      monthlyPrice: 210000000,
    },
    {
      id: 4,
      image: '/img/p4.jpg',
      title: 'اجاره بی ام و 528',
      model: '2019',
      dailyPrice: 7500000,
      monthlyPrice: 225000000,
    },
    {
      id: 5,
      image: '/img/p5.jpg',
      title: 'اجاره هیوندای توسان 2014',
      model: '2021',
      dailyPrice: 5000000,
      monthlyPrice: 150000000,
    },
    {
      id: 6,
      image: '/img/p6.jpg',
      title: 'اجاره مازراتی گرن توریسمو',
      model: '2017',
      dailyPrice: 5500000,
      monthlyPrice: 165000000,
    },
  ];
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
        <div className='flex justify-center xl:justify-end items-center gap-x-3.5 col-span-12 xl:col-span-7'>
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
        <div className='hidden xl:flex justify-end items-center col-span-4'>
          <Link
            href='/products'
            className='flex justify-center items-center gap-x-2.5 hover:gap-x-4 font-bold text-[#194BF0] duration-500 ease-linear'
          >
            مشاهده همه
            <FaAngleLeft className='mt-1' size='1.2rem' />
          </Link>
        </div>
      </div>
      <div className='gap-8 grid grid-cols-12 mt-8 px-[6%] w-full'>
        {Products.map((item) => (
          <div className='col-span-12 sm:col-span-10 md:col-span-6 xl:col-span-4 sm:col-start-2 bg-[#FFFFFF] shadow p-4 border border-[#D7D7D7] rounded-2xl'>
            <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px] w-full'>
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={225}
              />
            </figure>
            <div className='mt-3.5 w-full'>
              <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
                {item.title}
              </h4>
              <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
                مدل : {item.model}
              </p>
            </div>
            <div className='flex justify-between items-center bg-[#F3F3F3] mt-2.5 px-3 py-2 rounded-[8px] w-full'>
              <span className='flex justify-center items-center font-bold text-[#0C0C0C] text-[16px]'>
                از ۱ تا 30 روز:
                <span className='mt-1 mr-2 text-[#194BF0] text-[14px]'>
                  {item.dailyPrice.toLocaleString()}
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
                  {item.monthlyPrice.toLocaleString()}
                </span>
              </span>
              <span className='font-normal text-[#868686] text-[12px]'>
                ماهانه
              </span>
            </div>
            <span className='block bg-[#D7D7D7] my-3.5 w-full h-[1px]'></span>
            <div className='flex justify-between items-center my-2.5 px-1.5 w-full'>
              <span className='text-[#212121] text-[14px]'>مبلغ ضمانت : </span>
              <span className='font-extrabold text-[#212121] text-[12px]'>
                80 میلیون تومان
              </span>
            </div>
            <button className='flex justify-center items-center bg-[#194BF0] px-4 py-2 rounded-[8px] w-full text-white cursor-pointer'>
              درخواست رزرو
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
