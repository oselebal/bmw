import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import CarDetails from './components/pages/CarDetails/CarDetails';
import Catalog from './components/pages/Catalog/Catalog';
import Contacts from './components/pages/Contact/Contact';
import MainPage from './components/pages/MainPage/MainPage';
import Login from './components/pages/auth/Login/Login';
import Register from './components/pages/auth/Register/Register';
import { checkUserAuth } from './firebase/firebaseConfig';

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = checkUserAuth((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </>
      ) : (
        <Route path="/*" element={<Navigate to="/register" />} />
      )}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/register-phone" element={<RegisterWithPhone />} /> */}
    </Routes>
  );
};

export default App;
