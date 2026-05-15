import React from 'react';
import { User, Lock, School, Eye, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export default function Login({ onLogin, onNavigateToRegister }: LoginProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: any) => {

      e.preventDefault();

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify({
            email,
            password
          }),
        }
      );

      const result = await response.json();

      console.log(result);
        if (!response.ok) {
        alert(result.message);
        return;
      }

      // =========================
      // SIMPAN TOKEN DISINI
      // =========================

      localStorage.setItem(
        'token',
        result.token
      );

      localStorage.setItem(
        'user',
        JSON.stringify(result.user)
      );

      onLogin();

      alert('Login berhasil');
    };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-[480px] glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Brand Identity */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary-container mb-6 shadow-lg shadow-primary/20">
          <GraduationCap className="text-on-primary" size={32} />
        </div>
        <h1 className="text-3xl font-display font-bold text-primary tracking-tight">AetherReg</h1>
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest mt-2">Portal Akademik</p>
      </div>

      {/* Login Form */}
      <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface ml-1">NIM atau Email</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input 
              className="glass-input pl-12" 
              type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-semibold text-on-surface">Password</label>
            <a className="text-xs font-semibold text-secondary hover:text-primary transition-colors" href="#">Lupa Password?</a>
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input 
              className="glass-input pl-12 pr-12"               
              type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
              <Eye size={20} />
            </button>
          </div>
        </div>

        <button className="btn-primary mt-4" type="submit" onClick={handleLogin}>
          Masuk
        </button>

        <div className="flex items-center gap-4 py-4">
          <div className="h-[1px] flex-1 bg-white/10" />
          <span className="text-xs font-semibold text-outline uppercase tracking-wider">Atau</span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <button className="btn-secondary" type="button">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPPVHvBct0n6kUBeTKTI9LaexEWOXGg9yP6rDZPduHMDEwdRo9WC-7NrwhZ3hZjRKyJcbV17l0Z-zj-O4CkF6PHSPXUPfpN3JKPS_b_fa7AIAc0Ar1udh5RQFPVU2fz66z4geYd4rvZGN2zPSPeg5yvLw7Qspsp429KojEU6YP-p5R_DyITo6r1ZPiQf4x-BFXxwsT0ZFXtn_yzuVLGVn-K4lCrxozAZ03Zo7VITA1loY1fwKGpT49l5-iPPtQwSvZmdjsQodW_Vtq" 
            alt="Google" 
            className="w-5 h-5"
          />
          Masuk dengan Google
        </button>
      </form>

      <div className="mt-12 text-center relative z-10">
        <p className="text-sm text-on-surface-variant">
          Belum punya akun? <button onClick={onNavigateToRegister} className="text-secondary font-bold hover:text-primary transition-colors hover:underline decoration-2">Daftar di sini</button>
        </p>
      </div>
    </motion.div>
  );
}
