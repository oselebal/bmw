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
          <div>Contact Us</div>
          <div className={styles.contactInfo}>
            <div>If you have any questions, feel free to reach out to us:</div>
            <div>Email: info@bmwsales.com</div>
            <div>Phone: +1 234 567 890</div>
            <div>Our Address</div>
            <div>1234 BMW Street, Auto City, Country</div>
            <div>Business Hours</div>
            <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
            <div>Saturday: 10:00 AM - 4:00 PM</div>
            <div>Sunday: Closed</div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
