import x5Image from '../assets/img/x5Image.jpg';
import s3Image from '../assets/img/s3Image.jpg';
import x3Image from '../assets/img/x3Image.jpg';
import s5Image from '../assets/img/s5Image.jpg';
export interface Car {
  model: string;
  year: number;
  price: number;
  image: string;
  category: string;
}

const cars: Car[] = [
  { model: 'BMW X5', year: 2021, price: 60000, image: x5Image, category: 'SUV' },
  { model: 'BMW 3 Series', year: 2020, price: 45000, image: s3Image, category: 'Sedan' },
  { model: 'BMW X3', year: 2019, price: 40000, image: x3Image, category: 'SUV' },
  { model: 'BMW 5 Series', year: 2018, price: 35000, image: s5Image, category: 'Sedan' },
];

export default cars;
