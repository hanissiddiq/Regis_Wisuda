import React, { useEffect,useState } from 'react';
import { Verified, Copy, Download, Mail, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface RegistrationSuccessProps {
  onBackToHome: () => void;
}

// const [registration, setRegistration] =
//   useState<any>(null);

export default function RegistrationSuccess({ onBackToHome }: RegistrationSuccessProps) {

  const [registration, setRegistration] =
    useState<any>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {

    const token = localStorage.getItem('token');

    fetch(`${API_URL}/my-registration`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        setRegistration(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, []);



  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-12"
    >
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150 animate-pulse" />
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
          <Verified className="text-on-primary" size={56} />
        </div>
      </div>

      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl font-display font-bold text-primary mb-4">Pendaftaran Berhasil!</h1>
        <p className="text-xl text-on-surface-variant leading-relaxed">Selamat! Data pendaftaran Anda telah kami terima dan sedang dalam proses verifikasi.</p>
      </div>

      <div className="w-full max-w-xl glass-card rounded-3xl p-8 space-y-10 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Verified size={160} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-1">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Registration Code</p>
            <div className="flex items-center gap-2">
              {/* <span className="text-2xl font-display font-bold text-on-surface">REG-2024-X912</span> */}
              <span className="text-2xl font-display font-bold text-on-surface">REG-{registration?.registration_number || '-'}</span>
              <button className="text-primary hover:text-white transition-colors" title="Copy" onClick={() => {
                  navigator.clipboard.writeText(
                    registration?.registration_number || ''
                  );
                }}  >
                <Copy size={18} />
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Registration Date</p>
            {/* <p className="text-2xl font-display font-bold text-on-surface">{registration?.registration_date}</p> */}
            <p className="text-2xl font-display font-bold text-on-surface">{registration?.created_at
        ? new Date(
            registration.created_at
          ).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        : '-'}
        </p>
          </div>
          <div className="space-y-2 md:col-span-2">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">Status</p>
            <div className="inline-flex items-center px-6 py-1.5 rounded-full bg-secondary-container/30 border border-secondary/20 text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2" />
              <span className="text-sm font-bold">Menunggu Verifikasi</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 relative z-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Applicant Name</p>
            {/* <p className="text-lg font-bold text-on-surface">Adrian Thorne</p> */}
            <p className="text-lg font-bold text-on-surface">{registration?.name || '-'}</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Selected Program</p>
            {/* <p className="text-lg font-bold text-on-surface text-secondary">M.Sc. Quantum Computing</p> */}
            <p className="text-lg font-bold text-on-surface text-secondary">{registration?.jurusan?.name || '-'}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl mb-16">
        <a
          href={`${API_URL}/registration/${registration?.id}/pdf`}
          target="_blank"
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Unduh Bukti (PDF)
        </a>
        <button 
          onClick={onBackToHome}
          className="flex-1 btn-secondary border-white/10"
        >
          Kembali ke Beranda
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="glass-card bg-surface-container/20 p-6 rounded-2xl border-white/10 flex items-start gap-4">
          <Mail className="text-primary mt-1" size={24} />
          <div className="space-y-1">
            <h3 className="font-bold text-on-surface">Email Notification</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">Sent to a***n@example.com</p>
            {/* <p className="text-xs text-on-surface-variant leading-relaxed">Sent to {registration?.email || '-'}</p> */}
          </div>
        </div>
        <div className="glass-card bg-surface-container/20 p-6 rounded-2xl border-white/10 flex items-start gap-4">
          <Clock className="text-primary mt-1" size={24} />
          <div className="space-y-1">
            <h3 className="font-bold text-on-surface">Processing Time</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">Typically 2-3 working days</p>
          </div>
        </div>
        <div className="glass-card bg-surface-container/20 p-6 rounded-2xl border-white/10 flex items-start gap-4">
          <HelpCircle className="text-primary mt-1" size={24} />
          <div className="space-y-1">
            <h3 className="font-bold text-on-surface">Need Help?</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">Contact our 24/7 helpdesk</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
