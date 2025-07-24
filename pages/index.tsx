import Brand from '@/Components/Brands/Brand';
import Cars from '@/Components/Cars/Cars';
import Comments from '@/Components/Comments/Comments';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import MottoParent from '@/Components/Motto2/MottoParent';
import Products from '@/Components/products/Products';
import Questions from '@/Components/Q&A/Q&A';
import Reservation from '@/Components/Reservation/Reservation';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>سامان توفیقیان | اتورنت</title>
      </Head>
      <main className='overflow-x-hidden'>
        <Header />
        <Motto />
        <Brand />
        <MottoParent />
        <Cars />
        <Products />
        <Reservation />
        <Questions />
        <Comments />
      </main>
    </>
  );
}
