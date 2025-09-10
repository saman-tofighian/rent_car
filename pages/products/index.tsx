import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import Image from 'next/image';
import { BsArrowLeft } from 'react-icons/bs';

interface IProducts {
  id: number;
  image: string;
  title: string;
  model: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export default function ProductsPage() {
  const Products: IProducts[] = [
    {
      id: 1,
      image: '/Img/p1.jpg',
      title: 'اجاره بنز E350 سدان',
      model: '2016',
      dailyPrice: 8500000,
      monthlyPrice: 255000000,
    },
    {
      id: 2,
      image: '/Img/p2.jpg',
      title: 'اجاره تویوتا لندکروز در تهران',
      model: '2018',
      dailyPrice: 6000000,
      monthlyPrice: 180000000,
    },
    {
      id: 3,
      image: '/Img/p3.jpg',
      title: 'اجاره جنسیس کوپه',
      model: '2020',
      dailyPrice: 7000000,
      monthlyPrice: 210000000,
    },
    {
      id: 4,
      image: '/Img/p4.jpg',
      title: 'اجاره بی ام و 528',
      model: '2019',
      dailyPrice: 7500000,
      monthlyPrice: 225000000,
    },
    {
      id: 5,
      image: '/Img/p5.jpg',
      title: 'اجاره هیوندای توسان 2014',
      model: '2021',
      dailyPrice: 5000000,
      monthlyPrice: 150000000,
    },
    {
      id: 6,
      image: '/Img/p6.jpg',
      title: 'اجاره مازراتی گرن توریسمو',
      model: '2017',
      dailyPrice: 5500000,
      monthlyPrice: 165000000,
    },
  ];

  return (
    <section className='w-full'>
      <Header />

      {/* Hero */}
      <div className='relative bg-[url(/Img/product-page-image.jpg)] bg-cover bg-no-repeat xl:bg-center bg-right h-[60vh]'>
        <div className='absolute inset-0 bg-[#00000099]'></div>
        <div className='z-10 relative flex flex-col justify-center items-center h-full text-white'>
          <h1 className='font-bold text-[#FDB713] text-5xl'>اجاره خودرو</h1>
          <span className='flex justify-center items-center gap-x-2.5 font-normal text-[#868686] text-[14px]'>
            اتورنت <BsArrowLeft /> لیست خودروهای اجاره ای
          </span>
        </div>
      </div>

      {/* Filters & Products */}
      <div className='flex lg:flex-row-reverse flex-col gap-6 my-10 px-4 lg:px-[8%]'>
        {/* بخش اصلی */}
        <div className='flex-1'>
          {/* DropDowns */}
          <div className='flex md:flex-row flex-col gap-4 mb-6'>
            <select className='flex-2 p-3 border border-[#D7D7D7] rounded-lg'>
              <option value=''>تقویم قیمتی</option>
            </select>
            <select className='flex-1 p-3 border border-[#D7D7D7] rounded-lg'>
              <option value=''>مرتب سازی</option>
            </select>
          </div>

          {/* لیست محصولات */}
          <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {Products.map((item) => (
              <div
                key={item.id}
                className='bg-white shadow-md p-4 border border-[#EDEDED] rounded-2xl'
              >
                <figure className='flex justify-center p-2 border border-[#F3F3F3] rounded-[12px]'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                  />
                </figure>

                <div className='mt-3.5'>
                  <h4 className='font-bold text-[#0C0C0C] text-[16px]'>
                    {item.title}
                  </h4>
                  <p className='mt-1.5 font-normal text-[#868686] text-[12px]'>
                    مدل : {item.model}
                  </p>
                </div>

                {/* قیمت روزانه */}
                <div className='flex justify-between items-center bg-[#F3F3F3] mt-3 px-3 py-2 rounded-lg'>
                  <span className='font-bold text-[#0C0C0C] text-[15px]'>
                    {item.dailyPrice.toLocaleString()}
                    <span className='mr-1 text-[#194BF0] text-[13px]'>
                      تومان
                    </span>
                  </span>
                  <span className='text-[#868686] text-[12px]'>روزانه</span>
                </div>

                {/* قیمت ماهانه */}
                <div className='flex justify-between items-center bg-[#F3F3F3] mt-2 px-3 py-2 rounded-lg'>
                  <span className='font-bold text-[#0C0C0C] text-[15px]'>
                    {item.monthlyPrice.toLocaleString()}
                    <span className='mr-1 text-[#194BF0] text-[13px]'>
                      تومان
                    </span>
                  </span>
                  <span className='text-[#868686] text-[12px]'>ماهانه</span>
                </div>

                {/* خط جداکننده */}
                <span className='block bg-[#EDEDED] my-3 h-[1px]'></span>

                {/* ضمانت */}
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-[#212121] text-[14px]'>مبلغ ضمانت</span>
                  <span className='font-bold text-[#212121] text-[13px]'>
                    80 میلیون تومان
                  </span>
                </div>

                <button className='bg-[#194BF0] hover:bg-blue-700 py-2.5 rounded-lg w-full font-medium text-white transition cursor-pointer'>
                  درخواست رزرو
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* فیلتر */}
        <aside className='bg-white p-5 border border-[#EDEDED] rounded-2xl w-full lg:w-1/5 xl:w-1/4 h-fit'>
          <h3 className='mb-4 font-bold text-[#0C0C0C]'>فیلتر خودرو</h3>

          {/* قیمت */}
          <div className='mb-6'>
            <label className='block mb-2 text-[#212121] text-sm'>
              قیمت اجاره خودرو
            </label>
            <input
              type='range'
              min='1000000'
              max='100000000'
              className='w-full'
            />
          </div>

          {/* برند */}
          <div className='mb-6'>
            <label className='block mb-2 text-[#212121] text-sm'>
              برند خودرو
            </label>
            <ul className='flex flex-col gap-2'>
              <li>
                <input type='checkbox' /> بنز
              </li>
              <li>
                <input type='checkbox' /> بی ام و
              </li>
              <li>
                <input type='checkbox' /> هیوندای
              </li>
              <li>
                <input type='checkbox' /> تویوتا
              </li>
            </ul>
          </div>

          {/* نوع خودرو */}
          <div>
            <label className='block mb-2 text-[#212121] text-sm'>
              نوع خودرو
            </label>
            <ul className='flex flex-col gap-2'>
              <li>
                <input type='checkbox' /> شاسی بلند
              </li>
              <li>
                <input type='checkbox' /> اسپرت
              </li>
              <li>
                <input type='checkbox' /> سدان
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </section>
  );
}
