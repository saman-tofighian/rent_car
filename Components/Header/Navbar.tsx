import { useEffect, useState } from 'react';
import NavCenter from './NavCenter';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

export default function Navbar() {
  const [isScroll, setIsScroll]: boolean = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else if (window.scrollY == 0) {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`grid grid-cols-12 bg-white shadow px-8 h-[96px] fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ${
        isScroll ? 'w-full' : 'w-3/4 rounded-b-[16px]'
      }`}
    >
      <NavRight />
      <NavCenter />
      <NavLeft />
    </nav>
  );
}
