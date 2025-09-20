import NavCenter from './NavCenter';
import NavLeft from './NavLeft';
import NavMobile from './NavMobile';
import NavRight from './NavRight';

export default function Navbar() {
  return (
    <nav className='gap-x-6 xl:gap-x-0 grid grid-cols-12 bg-white shadow-lg px-8 rounded-2xl w-3/4 h-[96px]'>
      <NavRight />
      <NavCenter />
      <NavLeft />
      <NavMobile />
    </nav>
  );
}
