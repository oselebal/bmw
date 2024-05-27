import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { getAuth } from 'firebase/auth';

const Header: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        BMW
      </Link>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contacts">Контакты</Link>
        {user && <Link to="/profile">Профиль</Link>}
      </nav>
    </header>
  );
};

export default Header;
