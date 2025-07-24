'use client';

import 'keen-slider/keen-slider.min.css';
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import Image from 'next/image';
import { MutableRefObject, useRef } from 'react';

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();

      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Comments() {
  const mainSliderRef = useRef<KeenSliderInstance | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      // optional
    },
    created(slider) {
      mainSliderRef.current = slider;
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      slides: {
        perView: 6,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(mainSliderRef)]
  );

  return (
    <section className='my-24 px-8 w-full'>
      <div className='mb-12 text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          آنچه مشتریان ما درموردمان گفته‌اند.
        </h3>
        <p className='mt-2.5 font-bold text-[#353535] text-[34px]'>
          نظرات <strong className='text-[#D79C10]'>مشتریان</strong>
        </p>
      </div>

      <div className='px-[6%] w-full'>
        {/* اسلایدر اصلی */}
        <div
          ref={sliderRef}
          className='mb-6 rounded-xl overflow-hidden keen-slider'
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className='flex flex-col justify-center items-center bg-white shadow py-4 border border-[#D7D7D7] rounded-[16px] h-96 text-4xl keen-slider__slide'
            >
              <figure className='flex justify-center w-full'>
                <Image
                  src='/img/c1.jpg'
                  alt='commentImage'
                  width={136}
                  height={136}
                  className='border-[#194BF0] border-4 rounded-[50%]'
                />
              </figure>
              <h5 className='mt-4 font-medium text-[16px] text-black'>
                اولدوز بهاور
              </h5>
            </div>
          ))}
        </div>

        {/* thumbnail ها */}
        <div ref={thumbnailRef} className='flex justify-center keen-slider'>
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className='flex justify-center items-center bg-gray-100 rounded-lg h-20 text-gray-800 text-xl transition-all duration-300 cursor-pointer keen-slider__slide'
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
