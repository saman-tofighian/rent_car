import Image from 'next/image';

export default function NavRight() {
  return (
    <figure className='flex justify-center items-center order-2 xl:order-1 col-span-5 xl:col-span-2 h-full'>
      <Image
        src='/Img/Logo.png'
        alt='Website Logo'
        width={152}
        height={60}
        priority
      />
    </figure>
  );
}
