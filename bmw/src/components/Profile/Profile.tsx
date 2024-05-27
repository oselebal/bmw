import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import styles from './Profile.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Profile: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    if (user && user.email) {
      try {
        await sendPasswordResetEmail(auth, user.email);
        alert('Password reset email sent!');
      } catch (error) {
        console.error('Error sending password reset email:', error);
      }
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <Header />
      <div className={styles.profile}>
        <main className={styles.main}>
          <h1>Profile</h1>
          {user && (
            <div className={styles.userInfo}>
              <p>Email: {user.email}</p>
              <button onClick={handlePasswordReset}>Reset Password</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
