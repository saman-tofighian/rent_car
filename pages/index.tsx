import Brand from '@/Components/Brands/Brand';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import MottoParent from '@/Components/Motto2/MottoParent';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Motto />
      <Brand />
      <MottoParent />
    </main>
  );
}
