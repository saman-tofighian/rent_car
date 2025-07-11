import MottoChild from './MottoChild';

export default function MottoParent() {
  return (
    <section className='flex justify-center items-center mt-16 mb-32 px-7 w-full'>
      <MottoChild />
    </section>
  );
}
