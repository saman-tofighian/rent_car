import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect } from 'react';
const logos = [
  '/Img/bmw.png',
  '/Img/lexus.png',
  '/Img/benz.png',
  '/Img/honda.png',
  '/Img/hyundai.png',
  '/Img/nissan.png',
  '/Img/toyota.png',
  '/Img/kia.png',
  '/Img/jeep.png',
  '/Img/landrover.png',
  '/Img/bmw.png',
  '/Img/lexus.png',
  '/Img/benz.png',
];
export default function Brand() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 6,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 992px)': {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);
  return (
    <section className='mt-[26rem] sm:mt-[16rem] lg:mt-[12rem] mb-14 w-full'>
      <div className='keen-slider' ref={sliderRef}>
        {logos.map((logo, idx) => (
          <div
            className='flex justify-center items-center keen-slider__slide'
            key={idx}
          >
            <Image
              src={logo}
              alt={`Logo ${idx}`}
              width={74}
              height={60}
              className='opacity-60 hover:opacity-100 grayscale transition-all'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
