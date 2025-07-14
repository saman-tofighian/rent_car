import Image from 'next/image';

export default function Cars() {
  return (
    <section className='my-16 px-8 w-full'>
      <div className='gap-x-8 grid grid-cols-12 border w-full'>
        <div className='col-span-2 bg-white shadow border border-[#D7D7D7] rounded-2xl overflow-hidden'>
          <div className='py-1.5'>
            <h2 className='font-bold text-2xl text-center'>کوپه</h2>
          </div>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/cope.png'
              width={242}
              height={98}
              alt='کوپه'
              className='-rotate-y-180'
            />
          </figure>
          <div className='relative flex justify-center w-full'>
            <span className='-bottom-0.5 absolute bg-[#FDB713] rounded-[8px] w-4/5 h-[7px]'></span>
          </div>
        </div>
        <div className='col-span-2 bg-white shadow border border-[#D7D7D7] rounded-2xl overflow-hidden'>
          <div className='py-1.5'>
            <h2 className='font-bold text-2xl text-center'>کوپه</h2>
          </div>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/cope.png'
              width={242}
              height={98}
              alt='کوپه'
              className='-rotate-y-180'
            />
          </figure>
          <div className='relative flex justify-center w-full'>
            <span className='-bottom-0.5 absolute bg-[#FDB713] rounded-[8px] w-4/5 h-[7px]'></span>
          </div>
        </div>
        <div className='col-span-2 bg-white shadow border border-[#D7D7D7] rounded-2xl overflow-hidden'>
          <div className='py-1.5'>
            <h2 className='font-bold text-2xl text-center'>کوپه</h2>
          </div>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/cope.png'
              width={242}
              height={98}
              alt='کوپه'
              className='-rotate-y-180'
            />
          </figure>
          <div className='relative flex justify-center w-full'>
            <span className='-bottom-0.5 absolute bg-[#FDB713] rounded-[8px] w-4/5 h-[7px]'></span>
          </div>
        </div>
        <div className='col-span-2 bg-white shadow border border-[#D7D7D7] rounded-2xl overflow-hidden'>
          <div className='py-1.5'>
            <h2 className='font-bold text-2xl text-center'>کوپه</h2>
          </div>
          <figure className='flex justify-center w-full'>
            <Image
              src='/img/cope.png'
              width={242}
              height={98}
              alt='کوپه'
              className='-rotate-y-180'
            />
          </figure>
          <div className='relative flex justify-center w-full'>
            <span className='-bottom-0.5 absolute bg-[#FDB713] rounded-[8px] w-4/5 h-[7px]'></span>
          </div>
        </div>
      </div>
    </section>
  );
}
