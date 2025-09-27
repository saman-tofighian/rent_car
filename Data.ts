interface IProducts {
  id: number;
  image: string;
  title: string;
  model: string;
  dailyPrice: number;
  monthlyPrice: number;
  description: string;
  deposit: number;
  gallery: string[];
  brand: string; // برند خودرو
  type: string; // نوع خودرو (سدان، شاسی بلند، اسپرت و ...)
}

export const ProductData: IProducts[] = [
  {
    id: 1,
    image: '/Img/p1.jpg',
    title: 'اجاره بنز E350 سدان',
    model: '2016',
    dailyPrice: 8500000,
    monthlyPrice: 255000000,
    description: 'خودروی اسپرت و شیک مناسب افراد خاص‌پسند.',
    gallery: ['/Img/p1.jpg'],
    deposit: 60000000,
    brand: 'بنز',
    type: 'سدان',
  },
  {
    id: 2,
    image: '/Img/p2.jpg',
    title: 'اجاره تویوتا لندکروز در تهران 2013',
    model: '2018',
    dailyPrice: 6000000,
    monthlyPrice: 180000000,
    description: 'خودروی قدرتمند و مناسب سفرهای خانوادگی.',
    gallery: ['/Img/p2.jpg'],
    deposit: 80000000,
    brand: 'تویوتا',
    type: 'شاسی بلند',
  },
  {
    id: 3,
    image: '/Img/p3.jpg',
    title: 'اجاره جنسیس کوپه',
    model: '2020',
    dailyPrice: 7000000,
    monthlyPrice: 210000000,
    description: 'خودروی اسپرت و لوکس برای رانندگی خاص.',
    gallery: ['/Img/p3.jpg'],
    deposit: 40000000,
    brand: 'هیوندای',
    type: 'اسپرت',
  },
  {
    id: 4,
    image: '/Img/p4.jpg',
    title: 'اجاره بی ام و 528',
    model: '2019',
    dailyPrice: 7500000,
    monthlyPrice: 225000000,
    description: 'بی‌ام‌و لوکس با امکانات رفاهی کامل.',
    gallery: ['/Img/p4.jpg'],
    deposit: 95000000,
    brand: 'بی ام و',
    type: 'سدان',
  },
  {
    id: 5,
    image: '/Img/p5.jpg',
    title: 'اجاره هیوندای توسان 2014',
    model: '2021',
    dailyPrice: 5000000,
    monthlyPrice: 150000000,
    description: 'شاسی بلند اقتصادی و پرکاربرد.',
    gallery: ['/Img/p5.jpg'],
    deposit: 14000000,
    brand: 'هیوندای',
    type: 'شاسی بلند',
  },
  {
    id: 6,
    image: '/Img/p6.jpg',
    title: 'اجاره مازراتی گرن توریسمو',
    model: '2017',
    dailyPrice: 5500000,
    monthlyPrice: 165000000,
    description: 'خودروی سوپر اسپرت لوکس با صدای فوق‌العاده.',
    gallery: ['/Img/p6.jpg'],
    deposit: 100000000,
    brand: 'مازراتی',
    type: 'اسپرت',
  },
];
