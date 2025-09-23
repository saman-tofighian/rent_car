import { AiOutlineCar, AiOutlineSearch } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  MdOutlineHistory,
  MdOutlineLocationOn,
  MdOutlinePayment,
} from 'react-icons/md';

export default function Dashboard() {
  return (
    <div dir='rtl' className='flex flex-col bg-gray-100 min-h-screen'>
      {/* Header */}
      <header className='flex justify-center bg-gray-100 shadow-sm w-full'>
        <div className='flex justify-between items-center bg-white px-8 py-4 rounded-b-2xl w-full max-w-6xl'>
          {/* Navigation */}
          <nav className='flex gap-8 text-gray-700 text-sm'>
            <a href='#' className='hover:text-blue-600'>
              رزرو خودرو
            </a>
            <a href='#' className='hover:text-blue-600'>
              خدمات ما
            </a>
            <a href='#' className='hover:text-blue-600'>
              درباره ما
            </a>
            <a href='#' className='hover:text-blue-600'>
              بانک
            </a>
            <a href='#' className='hover:text-blue-600'>
              تماس با ما
            </a>
          </nav>

          {/* Logo + Search */}
          <div className='flex items-center gap-6'>
            <AiOutlineSearch
              size={20}
              className='text-gray-500 cursor-pointer'
            />
            <img
              src='https://via.placeholder.com/100x40?text=Logo'
              alt='لوگو'
              className='h-8 object-contain'
            />
          </div>
        </div>
      </header>

      {/* محتوا */}
      <main className='flex flex-1 justify-center px-6 py-10'>
        <div className='flex gap-6 w-full max-w-6xl'>
          {/* کیف پول */}
          <div className='flex-1 bg-white shadow-sm p-6 rounded-2xl'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='font-semibold text-lg'>کیف پول</h2>
              <button className='flex items-center gap-2 text-blue-600 text-sm'>
                <span>افزایش اعتبار</span> 🚀
              </button>
            </div>

            {/* کارت‌ها */}
            <div className='flex gap-5 mb-8'>
              <div className='flex flex-col justify-between bg-green-500 p-4 rounded-xl w-52 h-28 text-white'>
                <span className='text-xs'>الوندز بهنوار</span>
                <span className='text-xs'>**** **** **** 2849</span>
              </div>
              <div className='flex flex-col justify-between bg-yellow-400 p-4 rounded-xl w-52 h-28 text-white'>
                <span className='text-xs'>موجودی کیف پول</span>
                <span className='font-bold'>11,000 تومان</span>
              </div>
              <div className='flex flex-col justify-between bg-red-400 p-4 rounded-xl w-52 h-28 text-white'>
                <span className='text-xs'>الوندز بهنوار</span>
                <span className='text-xs'>**** **** **** 2849</span>
              </div>
            </div>

            {/* فرم افزایش اعتبار */}
            <div className='flex gap-4 mb-4'>
              <button className='bg-gray-100 px-4 py-2 border rounded-lg text-sm'>
                100,000 تومان
              </button>
              <button className='bg-gray-100 px-4 py-2 border rounded-lg text-sm'>
                200,000 تومان
              </button>
              <button className='bg-gray-100 px-4 py-2 border rounded-lg text-sm'>
                300,000 تومان
              </button>
            </div>
            <input
              type='text'
              placeholder='مبلغ موردنظر خود را وارد کنید...'
              className='mb-4 px-4 py-2 border rounded-lg w-full text-sm text-right'
            />
            <button className='bg-blue-600 py-2 rounded-lg w-full font-medium text-white text-sm'>
              افزایش اعتبار
            </button>
          </div>

          {/* پروفایل و منو */}
          <aside className='flex flex-col bg-white shadow-sm p-6 rounded-2xl w-72'>
            <div className='flex flex-col items-center mb-6'>
              <img
                src='https://i.pravatar.cc/100'
                alt='کاربر'
                className='mb-3 border rounded-full w-16 h-16'
              />
              <h3 className='font-medium text-sm'>الوندز بهنوار</h3>
              <span className='text-gray-500 text-xs'>0912 345 6789</span>
            </div>
            <nav className='flex flex-col flex-1 gap-4 text-gray-700 text-sm'>
              <a
                href='#'
                className='flex items-center gap-2 hover:text-blue-600'
              >
                <AiOutlineCar size={16} /> رزروهای من
              </a>
              <a
                href='#'
                className='flex items-center gap-2 hover:text-blue-600'
              >
                <MdOutlineLocationOn size={16} /> آدرس‌های من
              </a>
              <a
                href='#'
                className='flex items-center gap-2 hover:text-blue-600'
              >
                <MdOutlinePayment size={16} /> پرداخت‌های من
              </a>
              <a
                href='#'
                className='flex items-center gap-2 hover:text-blue-600'
              >
                <MdOutlineHistory size={16} /> تراکنش‌های من
              </a>
            </nav>
            <button className='flex items-center gap-2 mt-6 text-red-500 text-sm'>
              <FaSignOutAlt /> خروج
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
