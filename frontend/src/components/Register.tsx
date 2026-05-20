import React, { useState } from 'react';
import { User, Mail, Lock, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface RegisterProps {
  onRegister: () => void;
  onNavigateToLogin: () => void;
}

export default function Register({ onRegister, onNavigateToLogin }: RegisterProps) {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    email: '',
    password: '',
  });

   const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //=========== START REGISTER LOGIC ===========//
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

       // ambil csrf cookie
    await fetch(
      `${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`,
      // 'http://127.0.0.1:8000/sanctum/csrf-cookie',
      {
        credentials: 'include',
      }
    );

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
          credentials: 'include',
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      console.log(result);

      if (!response.ok) {
        throw new Error(
          result.message || 'Register gagal'
        );
      }

      alert('Register berhasil');

      // pindah ke login
      onRegister();

    } catch (error) {

      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan'
      );

    } finally {

      setLoading(false);
    }
  };
  //=========== END REGISTER LOGIC ===========//


  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[480px] glass-card rounded-xl p-8 md:p-12 space-y-8 border-t-[1.5px] border-l-[1.5px] border-white/20"
    >
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-display font-bold text-primary tracking-tight">AetherReg</h1>
        <p className="text-on-surface-variant font-medium">Mulai perjalanan akademik Anda hari ini.</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant ml-1">Nama Lengkap</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input className="glass-input pl-12" placeholder="Contoh: Budi Santoso" type="text" name="name"
              value={formData.name}
              onChange={handleChange}
              required/>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant ml-1">NIM</label>
          <div className="relative group">
            <BadgeCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input className="glass-input pl-12" placeholder="Masukkan 10 digit NIM" type="text" name="nim"
              value={formData.nim}
              onChange={handleChange}
              required/>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant ml-1">Email</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input className="glass-input pl-12" placeholder="nama@universitas.ac.id" type="email" name="email"
              value={formData.email}
              onChange={handleChange}
              required/>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant ml-1">Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
            <input className="glass-input pl-12" placeholder="Minimal 8 karakter" type="password" name="password"
              value={formData.password}
              onChange={handleChange}
              required/>
          </div>
        </div>

        <div className="pt-2 space-y-4">
          {/* <button className="btn-primary py-3" type="submit">Buat Akun</button> */}
          <button
            className="btn-primary py-3 w-full"
            type="submit"
            disabled={loading}
          >
            {loading
              ? 'Loading...'
              : 'Buat Akun'}
          </button>
          
          <div className="relative flex items-center gap-3">
            <div className="flex-grow border-t border-white/10" />
            <span className="text-[10px] text-on-surface-variant/60 uppercase tracking-[0.2em]">Atau</span>
            <div className="flex-grow border-t border-white/10" />
          </div>

          <button className="btn-secondary py-3 text-sm font-semibold" type="button">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Daftar dengan Google
          </button>
        </div>
      </form>

      <div className="text-center pt-4">
        <p className="text-sm text-on-surface-variant font-medium">
          Sudah punya akun? <button onClick={onNavigateToLogin} className="text-primary font-bold hover:underline transition-all underline-offset-4">Masuk di sini</button>
        </p>
      </div>
    </motion.div>
  );
}
