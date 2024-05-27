import React from 'react';
import styles from './Footer.module.scss';
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.company_info}>
        <div>О нас</div>
        <div>BMW</div>
      </div> */}
      <div className={styles.contact_info}>
        <div>Свяжитесь с нами</div>
        <div>Email: info@bmwsales.com</div>
        <div>Phone: +1 234 567 890</div>
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
