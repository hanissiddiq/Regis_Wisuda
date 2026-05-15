import React, { useEffect, useState } from 'react';
import { CheckCircle, Copy, Download, Landmark } from 'lucide-react';
import { motion } from 'motion/react';


interface PaymentSuccessProps {
  onBackToDashboard: () => void;
  orderId: string;
}

interface PaymentData {
  id: number;
  order_id: string;
  gross_amount: number;
  payment_type: string;
  transaction_status: string;
  transaction_time: string;
}


// ============START PAYMENT SUCCESS==================
// useEffect(() => {

//   fetch(`${API_URL}/payment/${orderId}`)
//     .then(res => res.json())
//     .then(data => {
//       setPayment(data);
//     });

// }, []);
      // ============END PAYMENT SUCCESS==================

export default function PaymentSuccess({ onBackToDashboard, orderId }: PaymentSuccessProps) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [payment, setPayment] = useState<PaymentData | null>(null);

    // =========================
  // FETCH PAYMENT
  // =========================
  useEffect(() => {
     const orderId = localStorage.getItem('order_id');

      if (!orderId) {
        console.error('Order ID tidak ditemukan');
        return;
      }

    fetch(`${API_URL}/payment/${orderId}`)
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        setPayment(data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, [orderId]);
  // ============end fetch payment==================



  // =========================
  // COPY ORDER ID
  // =========================
  const copyCode = () => {

    if (!payment) return;

    navigator.clipboard.writeText(payment.order_id);

    alert('Kode transaksi berhasil disalin');
  };
  // =========end copy order id==================

  if (!payment) {
    return (
      <div className="text-center py-20 text-white">
        Memuat data pembayaran...
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl text-center py-12"
    >
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-container/20 border border-primary/30 mb-8 relative">
          <div className="absolute inset-0 bg-primary/10 blur-xl animate-pulse" />
          <CheckCircle className="text-primary relative z-10" size={56} />
        </div>
        <h1 className="text-5xl font-display font-bold text-on-surface mb-3">Payment Successful</h1>
        <p className="text-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Pembayaran Anda telah berhasil diverifikasi. Silakan simpan kode transaksi Anda sebagai bukti pembayaran.
        </p>
      </div>

      

      <div className="glass-card rounded-3xl p-8 space-y-8 text-left">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Transaction Code</span>
          <div className="flex items-center gap-3 bg-surface-container-highest px-6 py-2 rounded-full border border-primary/20">
            {/* <code className="font-mono text-primary font-bold text-lg">REG-2024-8892X</code> */}
            {/* <code className="font-mono text-primary font-bold text-lg">{payment.order_id}</code> */}
            <code className="font-mono text-primary font-bold text-lg">{payment.order_id}</code>
            <button className="text-primary hover:text-white transition-colors" title="Copy" onClick={copyCode}>
              <Copy size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/70 uppercase">Amount Paid</span>
            {/* <p className="text-2xl font-display font-bold text-on-surface">Rp 2.500.000</p> */}
            <p className="text-2xl font-display font-bold text-on-surface">Rp {Number(payment.gross_amount).toLocaleString('id-ID')}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/70 uppercase">Date</span>
            {/* <p className="text-2xl font-display font-bold text-on-surface">24 Mei 2024</p> */}
            <p className="text-2xl font-display font-bold text-on-surface">{payment.transaction_time}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/70 uppercase">Payment Method</span>
            <div className="flex items-center gap-2">
              <Landmark size={24} className="text-secondary" />
              {/* <p className="text-2xl font-display font-bold text-on-surface">Virtual Account</p> */}
              {/* <p className="text-2xl font-display font-bold text-on-surface">{payment.payment_type}</p> */}
              <p className="text-2xl font-display font-bold text-on-surface">{{
    bank_transfer: 'Bank Transfer',
    echannel: 'Virtual Account',
    gopay: 'GoPay',
    qris: 'QRIS',
    credit_card: 'Kartu Kredit',
  }[payment.payment_type] || payment.payment_type}</p>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/70 uppercase">Status</span>
            <div className="inline-flex mx-2 items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {/* <span className="text-sm font-bold text-primary">Success</span> */}
              {/* <span className="text-sm font-bold text-primary">{payment.transaction_status}</span> */}
              <span className="text-sm font-bold text-primary"> {payment.transaction_status === 'settlement'
    ? 'SUCCESS'
    : payment.transaction_status}</span>
            </div>
          </div>
        </div>

        <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-white/5">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHCAJ_0ks6p0lwinldpl0YRe6Rw8UNv1rxi3DvlXYsjRmGLSKndQe_mAmUzVdjzPRwcKSjiRAF5ofr0XeZbQc3SgunIag5rnb1t-0HJTrJYv1kNzNtZBdqTPtSI6ai0X-YEXAPfg9hl9U2byBOMAU4Qp7plo3iUerGxJIPt2CLeT1gqhUnRPLHlLpGW80EBZTuCaEyK3dOKkpEx-joIBK8vz2e8YfniNSeIEbgSGYrzdahpbkJk1-3ybxtHIYnrr5hqSdR9siBmnYQ" 
            alt="Texture" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-60" />
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* <button className="btn-primary w-full md:w-auto px-10"> */}
          <a
            href={`${API_URL}/payment/${payment.id}/pdf`}
            target="_blank"
            className="btn-primary w-full md:w-auto px-10"
          >
            <Download size={20} />
            Unduh Bukti Bayar
          </a>
        {/* </button> */}
        <button 
          onClick={onBackToDashboard}
          className="w-full md:w-auto px-10 py-4 glass-card bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all border border-white/10"
        >
          Ke Dashboard Utama
        </button>
      </div>
    </motion.div>
  );
}
