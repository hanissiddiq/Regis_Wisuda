import React from 'react';
import { User, School, UploadCloud, Info, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface GraduationFormProps {
  onSave: () => void;
}

export default function GraduationForm({ onSave }: GraduationFormProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-6xl mx-auto space-y-10"
    >
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-5xl font-display font-bold text-on-background mb-4">Registrasi Wisuda</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">Selamat atas pencapaian akademik Anda. Silakan lengkapi formulir pendaftaran wisuda di bawah ini dengan data yang valid.</p>
      </div>

      <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
        {/* Section 1: Data Pribadi */}
        <div className="glass-card p-8 rounded-3xl border-white/5">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
            <User className="text-primary" size={28} />
            <h2 className="text-2xl font-display font-bold text-primary">Data Pribadi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">NIM Mahasiswa *</label>
              <input className="glass-input" placeholder="Contoh: 202400123" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Nama Mahasiswa *</label>
              <input className="glass-input" placeholder="Nama sesuai ijazah" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">NIK (KTP) *</label>
              <input className="glass-input" placeholder="16 digit nomor kependudukan" type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Jenis Kelamin *</label>
              <select className="glass-input appearance-none bg-surface-container">
                <option disabled selected value="">Pilih Jenis Kelamin</option>
                <option value="L">Laki-Laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Tempat Lahir *</label>
              <input className="glass-input" placeholder="Kota Kelahiran" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Tanggal Lahir *</label>
              <input className="glass-input" style={{ colorScheme: 'dark' }} type="date" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Agama *</label>
              <select className="glass-input bg-surface-container">
                <option disabled selected value="">Pilih Agama</option>
                <option>Islam</option>
                <option>Kristen</option>
                <option>Katolik</option>
                <option>Hindu</option>
                <option>Budha</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Telpon/HP *</label>
              <input className="glass-input" placeholder="08xxxxxxxxxx" type="tel" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Program Studi *</label>
              <select className="glass-input bg-surface-container">
                <option disabled selected value="">Pilih Program Studi</option>
                <option>Informatika</option>
                <option>Sistem Informasi</option>
                <option>Teknik Elektro</option>
                <option>Arsitektur</option>
                <option>Manajemen</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Nama Ibu Kandung *</label>
              <input className="glass-input" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Nama Ayah *</label>
              <input className="glass-input" type="text" />
            </div>
            <div className="hidden lg:block"></div>

            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-on-surface">Alamat Lengkap *</label>
              <textarea className="glass-input resize-none" placeholder="Jalan, No. Rumah, RT/RW" rows={3}></textarea>
            </div>
          </div>
        </div>

        {/* Section 2: Data Akademik */}
        <div className="glass-card p-8 rounded-3xl border-white/5">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
            <School className="text-secondary" size={28} />
            <h2 className="text-2xl font-display font-bold text-secondary">Data Akademik</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">PIN / Nomor Ijazah *</label>
              <input className="glass-input" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">IPK *</label>
              <input className="glass-input" placeholder="0.00" step="0.01" type="number" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Keterangan Lulus *</label>
              <select className="glass-input bg-surface-container">
                <option disabled selected value="">Pilih Keterangan Lulus</option>
                <option>Cumlaude</option>
                <option>Sangat Memuaskan</option>
                <option>Memuaskan</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Nomor SK Yudisium *</label>
              <input className="glass-input" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Tanggal SK Yudisium *</label>
              <input className="glass-input" style={{ colorScheme: 'dark' }} type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Tanggal Lulus *</label>
              <input className="glass-input" style={{ colorScheme: 'dark' }} type="date" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-on-surface">Judul Tugas Akhir / Skripsi *</label>
              <textarea className="glass-input resize-none" rows={3}></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Pas Photo (3x4) *</label>
              <div className="relative group h-full">
                <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" />
                <div className="glass-input border-dashed border-2 rounded-xl p-6 flex flex-col items-center justify-center gap-2 h-full min-h-[120px] group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <UploadCloud size={32} className="text-outline group-hover:text-primary transition-colors" />
                  <span className="text-sm font-semibold text-on-surface-variant">Upload Photo</span>
                  <span className="text-[10px] text-outline">JPG/PNG max 2MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Info size={18} />
            <p className="text-sm italic">Pastikan seluruh data yang Anda masukkan telah sesuai dengan dokumen resmi.</p>
          </div>
          <button className="btn-primary w-full md:w-auto px-12 py-5 text-xl" type="submit">
            Simpan Pendaftaran
          </button>
        </div>
      </form>
    </motion.div>
  );
}
