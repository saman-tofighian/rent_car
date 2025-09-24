import { useState } from 'react';
import { AiOutlineCar, AiOutlineSearch } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  MdAccountBalanceWallet,
  MdOutlineHistory,
  MdOutlineLocationOn,
  MdOutlinePayment,
} from 'react-icons/md';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('wallet');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='flex flex-col bg-gray-100 min-h-screen'>
      {/* Header */}
      <header className='flex justify-center bg-gray-100 w-full h-22'>
        <div className='flex justify-between items-center bg-white px-8 rounded-b-2xl w-full max-w-6xl h-full'>
          {/* Logo */}
          <img src='/Img/Logo.png' alt='لوگو' className='h-9 object-contain' />

          {/* Navigation */}
          <nav className='hidden md:flex gap-10 font-medium text-gray-600 text-sm'>
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

          {/* Search */}
          <AiOutlineSearch size={22} className='text-gray-500 cursor-pointer' />
        </div>
      </header>

      {/* Main Content */}
      <main className='flex flex-1 justify-center px-6 py-10'>
        <div className='flex flex-row-reverse gap-6 w-full max-w-6xl'>
          {/* Sidebar */}
          <aside className='flex flex-col bg-white shadow-sm p-6 rounded-2xl w-64'>
            {/* Profile */}
            <div className='flex flex-col items-center mb-8'>
              <img
                src='https://i.pravatar.cc/100'
                alt='user'
                className='mb-3 border-4 border-gray-100 rounded-full w-16 h-16'
              />
              <h3 className='font-semibold text-sm'>الوندز بهنوار</h3>
              <span className='text-gray-500 text-xs'>0912 345 6789</span>
            </div>

            {/* Menu */}
            <nav className='flex flex-col flex-1 gap-4 text-gray-700 text-sm'>
              <a
                href='#'
                onClick={() => handleSectionChange('wallet')}
                className={`flex justify-between items-center ${
                  activeSection === 'wallet'
                    ? 'text-blue-600'
                    : 'hover:text-blue-600'
                }`}
              >
                <span>کیف پول</span>
                <MdAccountBalanceWallet size={16} />
              </a>
              <a
                href='#'
                onClick={() => handleSectionChange('reservations')}
                className={`flex justify-between items-center ${
                  activeSection === 'reservations'
                    ? 'text-blue-600'
                    : 'hover:text-blue-600'
                }`}
              >
                <span>رزروهای من</span>
                <AiOutlineCar size={16} />
              </a>
              <a
                href='#'
                className='flex justify-between items-center hover:text-blue-600'
              >
                <span>آدرس‌های من</span>
                <MdOutlineLocationOn size={16} />
              </a>
              <a
                href='#'
                className='flex justify-between items-center hover:text-blue-600'
              >
                <span>پرداخت‌های من</span>
                <MdOutlinePayment size={16} />
              </a>
              <a
                href='#'
                className='flex justify-between items-center hover:text-blue-600'
              >
                <span>تراکنش‌های من</span>
                <MdOutlineHistory size={16} />
              </a>
            </nav>

            {/* Logout */}
            <button className='flex justify-between items-center hover:opacity-80 mt-auto text-red-500 text-sm'>
              <span>خروج</span>
              <FaSignOutAlt size={16} />
            </button>
          </aside>

          {/* Main Section */}
          <div className='flex flex-col flex-1 gap-8'>
            {activeSection === 'wallet' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                {/* Title + Button */}
                <div className='flex justify-between items-center mb-8'>
                  <h2 className='font-bold text-lg'>کیف پول</h2>
                  <button className='flex items-center gap-1 text-blue-600 text-sm'>
                    افزایش اعتبار 🚀
                  </button>
                </div>

                {/* Cards */}
                <div className='flex gap-6 mb-10'>
                  <div className='flex flex-col flex-1 justify-between bg-green-500 shadow p-5 rounded-2xl h-36 text-white'>
                    <span className='text-sm'>الوندز بهنوار</span>
                    <span className='text-sm tracking-wider'>
                      **** **** **** 2849
                    </span>
                  </div>
                  <div className='flex flex-col flex-1 justify-center items-center bg-yellow-400 shadow p-5 rounded-2xl h-36 text-white'>
                    <span className='mb-2 text-sm'>موجودی کیف پول</span>
                    <span className='font-extrabold text-xl'>۱۱,۰۰۰ تومان</span>
                  </div>
                  <div className='flex flex-col flex-1 justify-between bg-red-400 shadow p-5 rounded-2xl h-36 text-white'>
                    <span className='text-sm'>الوندز بهنوار</span>
                    <span className='text-sm tracking-wider'>
                      **** **** **** 2849
                    </span>
                  </div>
                </div>

                {/* Quick amounts */}
                <div className='flex gap-4 mb-5'>
                  {['۱۰۰,۰۰۰ تومان', '۲۰۰,۰۰۰ تومان', '۳۰۰,۰۰۰ تومان'].map(
                    (amt, i) => (
                      <button
                        key={i}
                        className='flex-1 bg-gray-50 px-5 py-3 border hover:border-blue-500 rounded-lg text-sm'
                      >
                        {amt}
                      </button>
                    )
                  )}
                </div>

                {/* Input */}
                <input
                  type='text'
                  placeholder='مبلغ موردنظر خود را وارد کنید...'
                  className='mb-6 px-4 py-3 border focus:border-blue-500 rounded-lg focus:outline-none w-full text-gray-600 text-sm placeholder-gray-400'
                />

                {/* Button */}
                <button className='bg-blue-600 hover:bg-blue-700 py-3 rounded-lg w-full font-medium text-white text-sm transition'>
                  افزایش اعتبار
                </button>
              </div>
            )}

            {activeSection === 'reservations' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                {/* Tabs */}
                <div className='flex gap-4 mb-6'>
                  <button className='bg-blue-600 px-6 py-2 rounded-lg font-medium text-white text-sm'>
                    همه
                  </button>
                  <button className='bg-gray-100 hover:bg-blue-50 px-6 py-2 rounded-lg text-gray-600 hover:text-blue-600 text-sm'>
                    در انتظار
                  </button>
                  <button className='bg-gray-100 hover:bg-blue-50 px-6 py-2 rounded-lg text-gray-600 hover:text-blue-600 text-sm'>
                    تایید شده
                  </button>
                </div>

                {/* Reservation Cards */}
                <div className='flex flex-col gap-4'>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className='flex justify-between items-center p-4 border rounded-xl'
                    >
                      {/* Image */}
                      <img
                        src='https://dummyimage.com/120x80/000/fff&text=Car'
                        alt='car'
                        className='rounded-lg w-32 h-20 object-cover'
                      />

                      {/* Info */}
                      <div className='flex-1 px-4'>
                        <h3 className='mb-1 font-medium text-sm'>
                          اجاره خودرو هیوندای سوناتا مدل 2022
                        </h3>
                        <p className='text-gray-500 text-xs'>
                          اجاره روزانه - تاریخ: ۱۴۰۴/۰۷/۰۱
                        </p>
                      </div>

                      {/* Status */}
                      <span className='font-medium text-green-600 text-sm'>
                        تایید شده
                      </span>

                      {/* Button */}
                      <button className='hover:bg-blue-50 px-4 py-2 border rounded-lg text-blue-600 text-sm'>
                        مشاهده جزئیات
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
