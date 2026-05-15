import React, { useState,useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import GraduationForm from './components/GraduationForm';
import PaymentSuccess from './components/PaymentSuccess';
import RegistrationSuccess from './components/RegistrationSuccess';

type Screen = 'LOGIN' | 'REGISTER' | 'FORM' | 'PAYMENT_SUCCESS' | 'REGISTRATION_SUCCESS';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('LOGIN');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return (
          <Login 
            onLogin={() => setCurrentScreen('FORM')} 
            onNavigateToRegister={() => setCurrentScreen('REGISTER')} 
          />
        );
      case 'REGISTER':
        return (
          <Register 
            onRegister={() => setCurrentScreen('LOGIN')} 
            onNavigateToLogin={() => setCurrentScreen('LOGIN')} 
          />
        );
      case 'FORM':
        return <GraduationForm onSave={() => setCurrentScreen('PAYMENT_SUCCESS')} />;
      case 'PAYMENT_SUCCESS':
        return <PaymentSuccess onBackToDashboard={() => setCurrentScreen('REGISTRATION_SUCCESS')} />;
      case 'REGISTRATION_SUCCESS':
        return <RegistrationSuccess onBackToHome={() => setCurrentScreen('LOGIN')} />;
      default:
        return <Login onLogin={() => setCurrentScreen('FORM')} onNavigateToRegister={() => setCurrentScreen('REGISTER')} />;
    }
  };

  const showNav = currentScreen === 'FORM' || currentScreen === 'REGISTRATION_SUCCESS' || currentScreen === 'PAYMENT_SUCCESS';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation Bar (Conditional) */}
      {showNav && (
        <header className="fixed top-0 w-full z-50 bg-surface-container/40 backdrop-blur-3xl border-b border-white/10">
          <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
            <div className="text-2xl font-display font-bold tracking-tight text-primary">AetherReg</div>
            <nav className="hidden md:flex gap-8 items-center">
              {['Admissions', 'Programs', 'Campus Life', 'Scholarships'].map((item) => (
                <a key={item} href="#" className="text-on-surface-variant hover:text-on-surface text-sm font-semibold transition-all">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl text-sm font-bold hover:opacity-80 transition-all">
                My Dashboard
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className={`flex-grow flex items-center justify-center p-6 ${showNav ? 'pt-32 pb-20' : 'py-20'}`}>
        <div className="fixed inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        {renderScreen()}
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-low/60 backdrop-blur-xl border-t border-white/5 py-8">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-display font-bold text-on-surface">AetherReg University</span>
            <span className="text-sm text-on-surface-variant text-center md:text-left">
              © 2024 AetherReg University Admission Portal. Powered by Aether Systems.
            </span>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            {['Support', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
