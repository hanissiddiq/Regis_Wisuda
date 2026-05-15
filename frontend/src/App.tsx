import React, { useState,useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import GraduationForm from './components/GraduationForm';
import PaymentSuccess from './components/PaymentSuccess';
import RegistrationSuccess from './components/RegistrationSuccess';

type Screen = 'LOGIN' | 'REGISTER' | 'FORM' | 'PAYMENT_SUCCESS' | 'REGISTRATION_SUCCESS';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');
 const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {

      setIsAuthenticated(true);

      setCurrentScreen('FORM');

    } else {

      setIsAuthenticated(false);

      setCurrentScreen('LOGIN');
    }

  }, []);

  const handleLoginSuccess = () => {

    setIsAuthenticated(true);

    setCurrentScreen('FORM');
  };

  const handleLogout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('user');

    setIsAuthenticated(false);

    setCurrentScreen('LOGIN');
  };

  const renderScreen = () => {
     // CEGAH BYPASS
    if (!isAuthenticated &&
      currentScreen !== 'LOGIN' &&
      currentScreen !== 'REGISTER') {

      return (
        <Login
          onLogin={handleLoginSuccess}
          onNavigateToRegister={() =>
            setCurrentScreen('REGISTER')
          }
        />
      );
  };
  switch (currentScreen) {

      case 'LOGIN':

        return (
          <Login
            onLogin={handleLoginSuccess}
            onNavigateToRegister={() =>
              setCurrentScreen('REGISTER')
            }
          />
        );

      case 'REGISTER':

        return (
          <Register
            onRegister={() =>
              setCurrentScreen('LOGIN')
            }
            onNavigateToLogin={() =>
              setCurrentScreen('LOGIN')
            }
          />
        );

      case 'FORM':

        return (
          <GraduationForm
            onSave={() =>
              setCurrentScreen('PAYMENT_SUCCESS')
            }
          />
        );

      case 'PAYMENT_SUCCESS':

        return (
          <PaymentSuccess
            onBackToDashboard={() =>
              setCurrentScreen('REGISTRATION_SUCCESS')
            }
          />
        );

      case 'REGISTRATION_SUCCESS':

        return (
          <RegistrationSuccess
            onBackToHome={handleLogout}
          />
        );
         default:

  // const showNav = currentScreen === 'FORM' || currentScreen === 'REGISTRATION_SUCCESS' || currentScreen === 'PAYMENT_SUCCESS';

  return (
          <Login
            onLogin={handleLoginSuccess}
            onNavigateToRegister={() =>
              setCurrentScreen('REGISTER')
            }
          />
        );
    }
  };

  const showNav =
    isAuthenticated &&
    (
      currentScreen === 'FORM' ||
      currentScreen === 'REGISTRATION_SUCCESS' ||
      currentScreen === 'PAYMENT_SUCCESS'
    );

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {showNav && (
        <header className="fixed top-0 w-full z-50 bg-surface-container/40 backdrop-blur-3xl border-b border-white/10">

          <div className="flex justify-between items-center px-8 py-4">

            <div className="text-2xl font-bold text-primary">
              AetherReg
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

        </header>
      )}

      <main
        className={`flex-grow flex items-center justify-center p-6 ${
          showNav ? 'pt-32 pb-20' : 'py-20'
        }`}
      >
        {renderScreen()}
      </main>

    </div>
  );
}

