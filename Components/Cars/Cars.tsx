import Image from 'next/image';

interface ICar {
  id: number;
  title: string;
  img: string;
}

export default function Cars() {
  const Cars: ICar[] = [
    {
      id: 1,
      title: 'کوپه',
      img: '/img/cope.png',
    },
    {
      id: 2,
      title: 'سدان',
      img: '/img/sedan.png',
    },
    {
      id: 3,
      title: 'کروک',
      img: '/img/crok.png',
    },
    {
      id: 4,
      title: 'شاسی بلند',
      img: '/img/shasi.png',
    },
    {
      id: 5,
      title: 'اسپرت',
      img: '/img/sport.png',
    },
  ];
  return (
    <section className='mt-1 xl:mt-[11rem] mb-16 px-8 w-full'>
      <div className='gap-y-9 md:gap-x-8 xl:gap-x-5 xl:gap-y-0 grid grid-cols-12 xl:grid-cols-10 xl:mx-auto w-full xl:w-fit'>
        {Cars.map((item) => (
          <div
            className='col-span-12 md:col-span-6 xl:col-span-2 bg-white shadow hover:shadow-2xl border border-[#D7D7D7] rounded-2xl overflow-hidden duration-500 ease-linear'
            key={item.id}
          >
            <div className='mt-4'>
              <h2 className='font-bold text-2xl text-center'>{item.title}</h2>
            </div>
            <figure className='flex justify-center w-full'>
              <Image
                src={item.img}
                width={262}
                height={98}
                alt={item.title}
                className={item.id === 4 ? '' : '-rotate-y-180'}
              />
            </figure>
            <div className='relative flex justify-center w-full'>
              <span className='-bottom-0.5 absolute bg-[#FDB713] rounded-[8px] w-4/5 h-[7px]'></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
