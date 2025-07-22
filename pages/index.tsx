import Brand from '@/Components/Brands/Brand';
import Cars from '@/Components/Cars/Cars';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import MottoParent from '@/Components/Motto2/MottoParent';
import Products from '@/Components/products/Products';
import Questions from '@/Components/Q&A/Q&A';
import Reservation from '@/Components/Reservation/Reservation';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Motto />
      <Brand />
      <MottoParent />
      <Cars />
      <Products />
      <Reservation />
      <Questions />
    </main>
  );
}
