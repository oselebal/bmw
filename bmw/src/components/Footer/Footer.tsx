import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <div>Свяжитесь с нами</div>
        <div>
          Email: <a href="mailto:info@bmwsales.com">info@bmwsales.com</a>
        </div>
        <div>
          Телефон: <a href="tel:+1234567890">+1 234 567 890</a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <div>Подписаться на обновления</div>
        <form>
          <input type="email" placeholder="Ваша почта" />
          <button type="submit">Подписаться</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
