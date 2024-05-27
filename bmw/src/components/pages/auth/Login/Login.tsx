import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider } from '../../../../firebase/firebaseConfig';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Вход</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
      <button onClick={handleGoogleLogin} className={styles.googleButton}>
        Войти через Google
      </button>
      <p>
        Нет аккаунта?{' '}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};

export default Login;
