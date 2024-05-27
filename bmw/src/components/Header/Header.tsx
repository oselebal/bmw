import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { getAuth } from 'firebase/auth';

const Header: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BMW</div>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/special-offers">Специальные предложения</Link>
        <Link to="/contact">Контакты</Link>
        {user && <Link to="/profile">Profile</Link>}
      </nav>
    </header>
  );
};

export default Header;
