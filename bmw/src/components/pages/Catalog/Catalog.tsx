import React from 'react';
import Header from '../../Header/Header';
import CarCard from '../../Cards/CarCard';
import Footer from '../../Footer/Footer';
import styles from './Catalog.module.scss';
import cars from '../../../data/carsData';

const Catalog: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <main className={styles.main}>
          <h1>Catalog of BMW Cars</h1>
          <div className={styles.carGrid}>
            {cars.map((car, index) => (
              <CarCard
                key={index}
                model={car.model}
                year={car.year}
                price={car.price}
                image={car.image}
                onDetailClick={() => alert(`More details about ${car.model}`)}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
