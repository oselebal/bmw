import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from './Contact.module.scss';

const Contacts: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.contacts}>
        <main>
          <h1>Свяжитесь с нами</h1>
          <div className={styles.contactInfo}>
            <p>Если у вас есть какие-либо вопросы, не стесняйтесь обращаться к нам:</p>
            <p>
              Электронная почта: <a href="mailto:info@bmwsales.com">info@bmwsales.com</a>
            </p>
            <p>
              Телефон: <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <h2>Наш адрес</h2>
            <p>1234 BMW Street, Auto City, Country</p>
            <h2>Часы работы</h2>
            <p>Понедельник - Пятница: 9:00 - 18:00</p>
            <p>Суббота: 10:00 - 16:00</p>
            <p>Воскресенье: выходной</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
