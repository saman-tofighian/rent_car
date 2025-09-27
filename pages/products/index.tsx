import Footer from '@/Components/footer/Footer';
import Header from '@/Components/Header/Header';
import { ProductData } from '@/Data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

export default function ProductsPage() {
  const Products = ProductData;

  // state های فیلتر
  const [price, setPrice] = useState<number>(100000000);
  const [brands, setBrands] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  // toggle برای checkbox ها
  const toggleBrand = (brand: string) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleType = (type: string) => {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // اعمال فیلتر
  const filteredProducts = Products.filter((item) => {
    const byPrice = item.dailyPrice <= price;
    const byBrand = brands.length > 0 ? brands.includes(item.brand) : true;
    const byType = types.length > 0 ? types.includes(item.type) : true;
    return byPrice && byBrand && byType;
  });

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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
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
                      {item.dailyPrice.toLocaleString('fa-ir')}
                      <span className='mr-1 text-[#194BF0] text-[13px]'>
                        تومان
                      </span>
                    </span>
                    <span className='text-[#868686] text-[12px]'>روزانه</span>
                  </div>

                  {/* قیمت ماهانه */}
                  <div className='flex justify-between items-center bg-[#F3F3F3] mt-2 px-3 py-2 rounded-lg'>
                    <span className='font-bold text-[#0C0C0C] text-[15px]'>
                      {item.monthlyPrice.toLocaleString('fa-ir')}
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
                    <span className='text-[#212121] text-[14px]'>
                      مبلغ ضمانت
                    </span>
                    <span className='font-bold text-[#212121] text-[13px]'>
                      {item.deposit.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>

                  <Link
                    href={`/products/${item.id}`}
                    className='flex justify-center items-center bg-[#194BF0] hover:bg-blue-700 py-2.5 rounded-lg w-full font-medium text-white transition cursor-pointer'
                  >
                    درخواست رزرو
                  </Link>
                </div>
              ))
            ) : (
              <p className='col-span-3 text-gray-500 text-center'>
                محصولی یافت نشد.
              </p>
            )}
          </div>
        </div>

        {/* فیلتر */}
        <aside className='bg-white p-5 border border-[#EDEDED] rounded-2xl w-full lg:w-1/5 xl:w-1/4 h-fit'>
          <h3 className='mb-4 font-bold text-[#0C0C0C]'>فیلتر خودرو</h3>

          {/* قیمت */}
          <div className='mb-6'>
            <label className='block mb-2 text-[#212121] text-sm'>
              قیمت اجاره خودرو (حداکثر روزانه)
            </label>
            <input
              type='range'
              min='1000000'
              max='100000000'
              step='1000000'
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className='w-full'
            />
            <p className='mt-1 text-gray-500 text-xs'>
              حداکثر: {price.toLocaleString()} تومان
            </p>
          </div>

          {/* برند */}
          <div className='mb-6'>
            <label className='block mb-2 text-[#212121] text-sm'>
              برند خودرو
            </label>
            <ul className='flex flex-col gap-2 text-[#212121] text-sm'>
              {['بنز', 'بی ام و', 'هیوندای', 'تویوتا', 'مازراتی'].map(
                (brand) => (
                  <li key={brand} className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      checked={brands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                    />
                    {brand}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* نوع خودرو */}
          <div>
            <label className='block mb-2 text-[#212121] text-sm'>
              نوع خودرو
            </label>
            <ul className='flex flex-col gap-2 text-[#212121] text-sm'>
              {['شاسی بلند', 'اسپرت', 'سدان'].map((type) => (
                <li key={type} className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={types.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </section>
  );
}
