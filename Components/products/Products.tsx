export default function Products() {
  return (
    <section className='my-24 px-8 w-full'>
      <div className='w-full text-center'>
        <h3 className='font-extralight text-[#5E5E5E] text-[20px]'>
          مشاهده موجودی خودروها{' '}
        </h3>
        <p className='mt-2.5 text-[#353535] text-[34px]'>
          رزرو خودرو در <strong className='text-[#D79C10]'>اُتـــورِنت</strong>
        </p>
      </div>
      <div className='grid grid-cols-12 mt-7 w-full'>
        <div className='flex justify-end items-center gap-x-3.5 col-span-7'>
          <button className='bg-[#194BF0] px-4 py-2 rounded-[8px] text-white cursor-pointer'>
            پرطرفدار
          </button>
          <button className='bg-transparent px-4 py-2 border border-[#194BF0] rounded-[8px] text-[#194BF0] cursor-pointer'>
            جدیدترین
          </button>
          <button className='bg-transparent px-4 py-2 border border-[#194BF0] rounded-[8px] text-[#194BF0] cursor-pointer'>
            پیشنهادی
          </button>
        </div>
      </div>
    </section>
  );
}
