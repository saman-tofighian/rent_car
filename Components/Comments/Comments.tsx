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
    text: `اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.`,
  },
  {
    id: 2,
    name: 'نیلوفر کاظمی',
    avatar: '/img/c2.jpg',
    date: '12 فروردین 1402',
    rating: '/img/star.png',
    text: `همه چیز خیلی سریع و دقیق انجام شد...`,
  },
  {
    id: 3,
    name: 'محمدرضا افشاری',
    avatar: '/img/c3.jpg',
    date: '5 شهریور 1401',
    rating: '/img/star.png',
    text: `من به همه دوستام توصیه کردم...`,
  },
  {
    id: 4,
    name: 'لیلا عباسی',
    avatar: '/img/c4.jpg',
    date: '9 آبان 1399',
    rating: '/img/star.png',
    text: `یه تجربه فوق‌العاده...`,
  },
];

// Plugin با قابلیت تعیین index فعال
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
    created(slider) {
      mainSliderRef.current = slider;
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPluginWithActiveIndex(mainSliderRef, setActiveThumb)]
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
        <div ref={sliderRef} className='mb-6 keen-slider'>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className='flex flex-col items-center bg-white shadow px-6 py-4 border border-[#D7D7D7] rounded-[16px] h-96 keen-slider__slide'
            >
              <figure className='flex justify-center mt-5 w-full'>
                <Image
                  src={comment.avatar}
                  alt={comment.name}
                  width={136}
                  height={136}
                  className='border-[#194BF0] border-4 rounded-full'
                />
              </figure>
              <h5 className='mt-4 font-medium text-[16px] text-black'>
                {comment.name}
              </h5>
              <Image
                src={comment.rating}
                alt='rating'
                width={136}
                height={24}
                className='mt-2'
              />
              <p className='mt-4 max-w-[90%] md:max-w-[37%] text-[#727272] text-[14px] text-justify leading-7'>
                {comment.text}
              </p>
            </div>
          ))}
        </div>

        {/* thumbnailها */}
        <div ref={thumbnailRef} className='keen-slider'>
          {comments.map((comment, idx) => (
            <div
              key={comment.id}
              className={`keen-slider__slide cursor-pointer transition-all duration-300 flex items-center rounded-[16px] py-4 border justify-evenly
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
                  width={64}
                  height={64}
                  className='rounded-full'
                />
              </div>
              <div>
                <h6 className='font-semibold text-[#212121] text-[15px]'>
                  {comment.name}
                </h6>
                <span className='font-light text-[#494949] text-[12px]'>
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
