import { AnimatePresence, easeInOut, easeOut, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

interface NavItem {
  href: string;
  label: string;
  className?: string;
}
const navItems: NavItem[] = [
  { href: '/', label: 'خانه' },
  { href: '/products', label: 'محصولات' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
];
export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: easeInOut },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.3, ease: easeInOut },
    },
  };
  const linkVariants = {
    hidden: { opacity: 0, y: -120 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: easeOut },
    }),
  };
  return (
    <div className='xl:hidden flex justify-center items-center order-1 col-span-2 h-full'>
      <button
        onClick={() => setIsOpen(true)}
        className='hover:bg-gray-200 p-2 rounded-full transition-colors duration-200 cursor-pointer'
        aria-label='Open menu'
      >
        <MdMenu className='text-gray-900 text-3xl' />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='top-0 right-0 z-50 fixed flex flex-col bg-gradient-to-b from-white to-gray-100 shadow-xl p-8 rounded-l-2xl w-3/5 max-w-sm h-screen'
            >
              <button
                onClick={() => setIsOpen(false)}
                className='self-end hover:bg-gray-200 p-2 rounded-full transition-colors duration-200 cursor-pointer'
                aria-label='Close menu'
              >
                <IoMdClose className='text-gray-900 hover:text-red-600 text-3xl' />
              </button>
              <nav className='flex flex-col gap-6 mt-6 font-semibold text-xl text-center'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={linkVariants}
                    initial='hidden'
                    animate='visible'
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className='block hover:bg-gray-200 px-4 py-3 rounded-lg hover:text-[#194BF0] transition-colors duration-500 cursor-pointer'
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
