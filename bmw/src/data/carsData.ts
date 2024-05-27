import x5Image from '../assets/img/x5Image.jpg';
import s3Image from '../assets/img/s3Image.jpg';
import x3Image from '../assets/img/x3Image.jpg';
import s5Image from '../assets/img/s5Image.jpg';
import s7Image from '../assets/img/s7Image.jpg';
import x6Image from '../assets/img/x6Image.jpg';
import z4Image from '../assets/img/z4Image.webp';
import i8Image from '../assets/img/i8Image.jpg';
import m3Image from '../assets/img/m3Image.jpeg';

export interface Car {
  model: string;
  year: number;
  price: number;
  image: string;
  category: string;
  specifications: string[];
}

const cars: Car[] = [
  {
    model: 'BMW X5',
    year: 2021,
    price: 60000,
    image: x5Image,
    category: 'SUV',
    specifications: ['3.0L I6', '8-speed automatic', 'AWD', '335 hp'],
  },
  {
    model: 'BMW 3 Series',
    year: 2020,
    price: 45000,
    image: s3Image,
    category: 'Sedan',
    specifications: ['2.0L I4', '8-speed automatic', 'RWD', '255 hp'],
  },
  {
    model: 'BMW X3',
    year: 2019,
    price: 40000,
    image: x3Image,
    category: 'SUV',
    specifications: ['2.0L I4', '8-speed automatic', 'AWD', '248 hp'],
  },
  {
    model: 'BMW 5 Series',
    year: 2018,
    price: 35000,
    image: s5Image,
    category: 'Sedan',
    specifications: ['2.0L I4', '8-speed automatic', 'RWD', '248 hp'],
  },
  {
    model: 'BMW 7 Series',
    year: 2022,
    price: 85000,
    image: s7Image,
    category: 'Sedan',
    specifications: ['3.0L I6', '8-speed automatic', 'AWD', '335 hp'],
  },
  {
    model: 'BMW X6',
    year: 2021,
    price: 70000,
    image: x6Image,
    category: 'SUV',
    specifications: ['3.0L I6', '8-speed automatic', 'AWD', '335 hp'],
  },
  {
    model: 'BMW Z4',
    year: 2020,
    price: 65000,
    image: z4Image,
    category: 'Convertible',
    specifications: ['2.0L I4', '8-speed automatic', 'RWD', '255 hp'],
  },
  {
    model: 'BMW i8',
    year: 2019,
    price: 140000,
    image: i8Image,
    category: 'Hybrid',
    specifications: ['1.5L I3', '6-speed automatic', 'AWD', '369 hp'],
  },
  {
    model: 'BMW M3',
    year: 2021,
    price: 75000,
    image: m3Image,
    category: 'Sedan',
    specifications: ['3.0L I6', '6-speed manual', 'RWD', '473 hp'],
  },
];

export default cars;
