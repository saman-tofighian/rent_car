import 'keen-slider/keen-slider.min.css';
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import Image from 'next/image';
import { MutableRefObject, useRef, useState } from 'react';

interface CommentItem {
  id: number;
  name: string;
  avatar: string;
  date: string;
  text: string;
  rating: string;
}

const comments: CommentItem[] = [
  {
    id: 1,
    name: 'اولدوز بهاور',
    avatar: '/img/c1.jpg',
    date: '27 دی ماه 1380',
    rating: '/img/star.png',
    text: 'اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.',
  },
  {
    id: 2,
    name: 'محمدجواد امینی',
    avatar: '/img/c2.jpg',
    date: '27 دی ماه 1399',
    rating: '/img/star.png',
    text: 'اجاره ماشین از اتو رنت بهترین تصمیمی بود که برای سفرم گرفتم. پشتیبانی 24 ساعته و قیمت‌های منصفانه باعث شد تجربه‌ای بی‌نظیر داشته باشم.',
  },
  {
    id: 3,
    name: 'فرزانه حیدری',
    avatar: '/img/c3.jpg',
    date: '27 دی ماه 1380',
    rating: '/img/star.png',
    text: 'واقعا از کیفیت خدمات اتو رنت راضی بودم. فرآیند رزرو آنلاین خیلی ساده بود و ماشین دقیقا همون چیزی بود که انتظار داشتم. ممنون از تیم حرفه‌ایشون!',
  },
  {
    id: 4,
    name: 'فاطمه ابراهیمی‌فر',
    avatar: '/img/c4.jpg',
    date: '27 دی ماه 1380',
    rating: '/img/star.png',
    text: 'تجربه بسیار خوبی از اجاره خودرو با اتو رنت داشتم. خدمات حرفه‌ای، ماشین تمیز و پشتیبانی سریع باعث شد که سفرم خیلی راحت‌تر بشه. حتما دوباره ازشون استفاده می‌کنم!',
  },
];

// Plugin for thumbnail with active index and RTL support
function ThumbnailPluginWithActiveIndex(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
  setActiveIndex: (idx: number) => void
): KeenSliderPlugin {
  return (slider) => {
    slider.on('created', () => {
      if (!mainRef.current) return;
      setActiveIndex(slider.track.details.rel);

      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          mainRef.current?.moveToIdx(idx);
        });
      });

      mainRef.current.on('animationStarted', (main) => {
        const next = main.animator.targetIdx || 0;
        const rel = main.track.absToRel(next);
        setActiveIndex(rel);
      });
    });
  };
}

export default function Comments() {
  const mainSliderRef = useRef<KeenSliderInstance | null>(null);
  const [activeThumb, setActiveThumb] = useState<number>(0);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    created(slider) {
      mainSliderRef.current = slider;
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rtl: true,
      slides: {
        perView: 4,
        spacing: 10,
        // Responsive settings for thumbnails
        number: comments.length,
      },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: { perView: 3, spacing: 8 },
        },
        '(max-width: 768px)': {
          slides: { perView: 2, spacing: 6 },
        },
        '(max-width: 480px)': {
          slides: { perView: 1, spacing: 4 },
        },
      },
    },
    [ThumbnailPluginWithActiveIndex(mainSliderRef, setActiveThumb)]
  );

  return (
    <section
      className='my-12 sm:my-16 md:my-24 px-4 sm:px-6 md:px-8 w-full'
      dir='rtl'
    >
      <div className='mb-8 sm:mb-10 md:mb-12 text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-base sm:text-lg md:text-xl'>
          آنچه مشتریان ما درموردمان گفته‌اند.
        </h3>
        <p className='mt-2 sm:mt-2.5 font-bold text-[#353535] md:text-[34px] text-2xl sm:text-3xl'>
          نظرات <strong className='text-[#D79C10]'>مشتریان</strong>
        </p>
      </div>

      <div className='px-0 sm:px-[4%] md:px-[6%] w-full'>
        <div ref={sliderRef} className='mb-4 sm:mb-5 md:mb-6 keen-slider'>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className='flex flex-col items-center bg-white shadow px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 border border-[#D7D7D7] rounded-2xl h-80 sm:h-88 md:h-96 keen-slider__slide'
            >
              <figure className='flex justify-center mt-3 sm:mt-4 md:mt-8 w-full'>
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={100}
                  height={100}
                  sizes='(max-width: 768px) 80px, (max-width: 1024px) 100px, 136px'
                  className='border-[#194BF0] border-4 rounded-full'
                />
              </figure>
              <h5 className='mt-2 sm:mt-3 md:mt-4 font-medium text-black md:text-[16px] text-sm sm:text-base'>
                {comment.name}
              </h5>
              <Image
                src={comment.rating}
                alt='rating'
                width={100}
                height={18}
                sizes='(max-width: 768px) 80px, (max-width: 1024px) 100px, 136px'
                className='mt-1 sm:mt-1.5 md:mt-2'
              />
              <p className='mt-2 sm:mt-3 md:mt-4 max-w-[95%] sm:max-w-[90%] xl:max-w-[37%] text-[#727272] md:text-[14px] text-xs sm:text-sm text-justify leading-6 sm:leading-7'>
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        {/* Thumbnails */}
        <div ref={thumbnailRef} className='flex keen-slider'>
          {comments.map((comment, idx) => (
            <div
              key={comment.id}
              className={`keen-slider__slide cursor-pointer transition-all duration-300 flex items-center rounded-2xl py-2 sm:py-3 md:py-4 border justify-evenly 
              ${
                activeThumb === idx
                  ? 'bg-[#FDB713] border-[#FDB713] shadow-md'
                  : 'bg-white border-[#E1E1E1]'
              }`}
            >
              <div className='flex justify-center items-center h-full'>
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={62}
                  height={62}
                  sizes='(max-width: 768px) 40px, (max-width: 1024px) 48px, 64px'
                  layout='responsive'
                  className='rounded-full'
                />
              </div>
              <div>
                <h6 className='font-semibold text-[#212121] md:text-[15px] text-xs sm:text-sm'>
                  {comment.name}
                </h6>
                <span className='font-light text-[#494949] text-[10px] md:text-[12px] sm:text-xs'>
                  {comment.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
