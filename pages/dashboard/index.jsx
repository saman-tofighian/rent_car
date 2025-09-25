'use client';
import { useState } from 'react';
import {
  AiOutlineCar,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  MdAccountBalanceWallet,
  MdOutlineHistory,
  MdOutlineLocationOn,
  MdOutlinePayment,
  MdOutlineRateReview,
} from 'react-icons/md';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('wallet');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [reservationFilter, setReservationFilter] = useState('all');
  const [mobileNav, setMobileNav] = useState(false);

  const reservations = [
    {
      id: 1,
      title: 'هیوندای سوناتا 2022',
      date: '1404/07/01',
      status: 'pending',
    },
    {
      id: 2,
      title: 'تویوتا کرولا 2021',
      date: '1404/06/25',
      status: 'confirmed',
    },
    { id: 3, title: 'بنز E200 2023', date: '1404/06/20', status: 'rejected' },
  ];

  const menuItems = [
    {
      key: 'wallet',
      label: 'کیف پول',
      icon: <MdAccountBalanceWallet size={18} />,
    },
    {
      key: 'reservations',
      label: 'رزروهای من',
      icon: <AiOutlineCar size={18} />,
    },
    {
      key: 'addresses',
      label: 'آدرس‌های من',
      icon: <MdOutlineLocationOn size={18} />,
    },
    {
      key: 'payments',
      label: 'پرداخت‌های من',
      icon: <MdOutlinePayment size={18} />,
    },
    {
      key: 'history',
      label: 'تراکنش‌های من',
      icon: <MdOutlineHistory size={18} />,
    },
    {
      key: 'reviews',
      label: 'نظرات من',
      icon: <MdOutlineRateReview size={18} />,
    },
  ];

  const filteredReservations =
    reservationFilter === 'all'
      ? reservations
      : reservations.filter((r) => r.status === reservationFilter);

  const navLinks = [
    { label: 'رزرو خودرو', href: '#' },
    { label: 'خدمات ما', href: '#' },
    { label: 'درباره ما', href: '#' },
    { label: 'بانک', href: '#' },
    { label: 'تماس با ما', href: '#' },
  ];

  return (
    <div className='flex flex-col bg-gray-100 min-h-screen'>
      {/* Header */}
      <header className='flex justify-center bg-gray-100 w-full h-20'>
        <div className='flex justify-between items-center bg-white px-6 md:px-8 rounded-b-2xl w-full max-w-6xl h-full'>
          <img src='/Img/Logo.png' alt='لوگو' className='h-9 object-contain' />

          {/* Desktop Nav */}
          <nav className='hidden md:flex gap-10 font-medium text-gray-600 text-sm'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='hover:text-blue-600'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className='flex items-center gap-3'>
            <AiOutlineSearch
              size={22}
              className='hidden md:block text-gray-500 cursor-pointer'
            />
            <button
              className='md:hidden block text-gray-600'
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileNav && (
            <div className='md:hidden top-20 right-0 z-40 absolute flex flex-col items-center gap-4 bg-white shadow-lg py-6 rounded-b-2xl w-full'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='font-medium text-gray-700 hover:text-blue-600 text-sm'
                  onClick={() => setMobileNav(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Layout */}
      <main className='flex flex-1 justify-center px-4 md:px-6 py-6 md:py-10'>
        <div className='flex gap-6 w-full max-w-6xl'>
          {/* Sidebar */}
          <aside
            className={`flex flex-col bg-white shadow-sm p-6 rounded-2xl w-60 fixed md:static top-20 right-0 h-full md:h-auto z-50 transition-transform duration-300
            ${
              mobileMenu ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
            }`}
          >
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
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveSection(item.key);
                    setMobileMenu(false);
                  }}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg transition ${
                    activeSection === item.key
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              ))}
            </nav>

            {/* Logout */}
            <button className='flex justify-between items-center hover:opacity-80 mt-auto text-red-500 text-sm'>
              <span>خروج</span>
              <FaSignOutAlt size={16} />
            </button>
          </aside>

          {/* Main Section */}
          <div className='flex flex-col flex-1 gap-8'>
            {/* کیف پول */}
            {activeSection === 'wallet' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>کیف پول</h2>
                <div className='flex md:flex-row flex-col gap-6 mb-10'>
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
              </div>
            )}

            {/* رزروهای من */}
            {activeSection === 'reservations' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>رزروهای من</h2>

                {/* Filters */}
                <div className='flex flex-wrap gap-4 mb-6'>
                  {[
                    { key: 'all', label: 'همه' },
                    { key: 'pending', label: 'در انتظار' },
                    { key: 'confirmed', label: 'تایید شده' },
                    { key: 'rejected', label: 'رد شده' },
                  ].map((f) => (
                    <button
                      key={f.key}
                      onClick={() => setReservationFilter(f.key)}
                      className={`px-6 py-2 rounded-lg text-sm transition ${
                        reservationFilter === f.key
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Reservation List */}
                <div className='flex flex-col gap-4'>
                  {filteredReservations.map((item) => (
                    <div
                      key={item.id}
                      className='flex md:flex-row flex-col justify-between items-center gap-4 p-4 border rounded-xl'
                    >
                      <img
                        src='https://dummyimage.com/120x80/000/fff&text=Car'
                        alt='car'
                        className='rounded-lg w-full md:w-32 h-20 object-cover'
                      />
                      <div className='flex-1 px-2 text-center md:text-right'>
                        <h3 className='mb-1 font-medium text-sm'>
                          اجاره خودرو {item.title}
                        </h3>
                        <p className='text-gray-500 text-xs'>
                          اجاره روزانه - تاریخ: {item.date}
                        </p>
                      </div>
                      <span
                        className={`font-medium text-sm ${
                          item.status === 'confirmed'
                            ? 'text-green-600'
                            : item.status === 'pending'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {item.status === 'confirmed'
                          ? 'تایید شده'
                          : item.status === 'pending'
                          ? 'در انتظار'
                          : 'رد شده'}
                      </span>
                      <button className='hover:bg-blue-50 px-4 py-2 border rounded-lg text-blue-600 text-sm'>
                        مشاهده جزئیات
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* آدرس‌ها */}
            {activeSection === 'addresses' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>آدرس‌های من</h2>
                <div className='flex flex-col gap-4'>
                  <div className='p-4 border rounded-lg'>
                    تهران، خیابان آزادی، پلاک 12
                  </div>
                  <div className='p-4 border rounded-lg'>
                    مشهد، بلوار وکیل‌آباد، پلاک 45
                  </div>
                </div>
              </div>
            )}

            {/* پرداخت‌ها */}
            {activeSection === 'payments' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>پرداخت‌های من</h2>
                <table className='border w-full text-sm'>
                  <thead>
                    <tr className='bg-gray-50'>
                      <th className='p-2 border'>تاریخ</th>
                      <th className='p-2 border'>مبلغ</th>
                      <th className='p-2 border'>وضعیت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-2 border'>1404/07/01</td>
                      <td className='p-2 border'>500,000 تومان</td>
                      <td className='p-2 border text-green-600'>موفق</td>
                    </tr>
                    <tr>
                      <td className='p-2 border'>1404/06/28</td>
                      <td className='p-2 border'>250,000 تومان</td>
                      <td className='p-2 border text-red-600'>ناموفق</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* تراکنش‌ها */}
            {activeSection === 'history' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>تراکنش‌های من</h2>
                <ul className='flex flex-col gap-3 text-sm'>
                  <li>+ 500,000 تومان - واریز به کیف پول</li>
                  <li>- 300,000 تومان - اجاره خودرو</li>
                  <li>+ 200,000 تومان - بازگشت وجه</li>
                </ul>
              </div>
            )}

            {/* نظرات */}
            {activeSection === 'reviews' && (
              <div className='bg-white shadow-sm p-8 rounded-2xl'>
                <h2 className='mb-6 font-bold text-lg'>نظرات من</h2>
                <div className='flex flex-col gap-4'>
                  <div className='p-4 border rounded-lg'>
                    <p className='mb-2 text-sm'>
                      ⭐⭐⭐⭐ اجاره خودرو عالی بود، ماشین بسیار تمیز و
                      سرویس‌شده بود.
                    </p>
                    <span className='text-gray-500 text-xs'>1404/06/20</span>
                  </div>
                  <div className='p-4 border rounded-lg'>
                    <p className='mb-2 text-sm'>
                      ⭐⭐⭐ برخورد پشتیبانی خوب بود ولی ماشین کمی دیر رسید.
                    </p>
                    <span className='text-gray-500 text-xs'>1404/05/15</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
