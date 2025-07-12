import MottoCard from './MottoCard';

export default function MottoChild() {
  return (
    <div className='relative grid bg-[#000000a0] bg-[url(/Img/motto2.jpg)] bg-blend-multiply bg-cover bg-no-repeat xl:bg-center mb-7 rounded-2xl w-full xl:w-4/5 h-[100vh] xl:h-[35vh] text-center'>
      <div className='w-full'>
        <h2 className='mt-12 font-bold text-[#FDB713] text-3xl'>
          چــــــرا اُتو رِنت؟
        </h2>
        <p className='mt-3 px-7 xl:px-36 font-[400] text-[18px] text-white leading-[180%]'>
          اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
          مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین
          مناسب خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار
          ندارید یا خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب خود
          را کرایه کرده و با آسودگی به سفر بروید.
        </p>
      </div>
      <div className='xl:-bottom-28 absolute -mt-36 w-full'>
        <MottoCard />
      </div>
    </div>
  );
}
