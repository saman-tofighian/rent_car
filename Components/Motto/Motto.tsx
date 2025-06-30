import MottoCalender from './MottoCalender';
import MottoRight from './MottoRight';

export default function Motto() {
  return (
    <section className='relative grid grid-cols-12 bg-[url(/Img/motto.png)] bg-cover bg-no-repeat h-[80vh] overflow-visible'>
      <MottoRight />
      <MottoCalender />
    </section>
  );
}
