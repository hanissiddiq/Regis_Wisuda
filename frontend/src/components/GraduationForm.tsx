import React, { useEffect, useState } from 'react';
import { User, School, UploadCloud, Info, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface GraduationFormProps {
  onSave: () => void;
}

interface Province {
  id: string;
  nama: string;
}

interface Regency {
  id: string;
  nama: string;
}

interface District {
  id: string;
  nama: string;
}

interface Village {
  id: string;
  nama: string;
}

export default function GraduationForm({ onSave }: GraduationFormProps) {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [regencies, setRegencies] = useState<Regency[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [villages, setVillages] = useState<Village[]>([]);
  const [locationError, setLocationError] = useState<string | null>(null);

  const [provinceId, setProvinceId] = useState('');
  const [regencyId, setRegencyId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [villageId, setVillageId] = useState('');

  useEffect(() => {
    async function loadProvinces() {
      try {
        const response = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json');
        const data: Province[] = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error('Gagal memuat daftar provinsi', error);
        setLocationError('Gagal memuat daftar provinsi. Silakan muat ulang halaman.');
      }
    }

    loadProvinces();
  }, []);

  useEffect(() => {
    if (!provinceId) {
      setRegencies([]);
      setDistricts([]);
      setVillages([]);
      setRegencyId('');
      setDistrictId('');
      setVillageId('');
      return;
    }

    async function loadRegencies() {
      try {
        const response = await fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${provinceId}.json`);
        const data: Regency[] = await response.json();
        setRegencies(data);
      } catch (error) {
        console.error('Gagal memuat daftar kabupaten/kota', error);
        setLocationError('Gagal memuat daftar kabupaten/kota. Silakan pilih ulang provinsi.');
      }
    }

    setRegencies([]);
    setDistricts([]);
    setVillages([]);
    setRegencyId('');
    setDistrictId('');
    setVillageId('');
    loadRegencies();
  }, [provinceId]);

  useEffect(() => {
    if (!regencyId) {
      setDistricts([]);
      setVillages([]);
      setDistrictId('');
      setVillageId('');
      return;
    }

    async function loadDistricts() {
      try {
        const response = await fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${regencyId}.json`);
        const data: District[] = await response.json();
        setDistricts(data);
      } catch (error) {
        console.error('Gagal memuat daftar kecamatan', error);
        setLocationError('Gagal memuat daftar kecamatan. Silakan pilih ulang kabupaten/kota.');
      }
    }

    setDistricts([]);
    setVillages([]);
    setDistrictId('');
    setVillageId('');
    loadDistricts();
  }, [regencyId]);

  useEffect(() => {
    if (!districtId) {
      setVillages([]);
      setVillageId('');
      return;
    }

    async function loadVillages() {
      try {
        const response = await fetch(`https://ibnux.github.io/data-indonesia/kelurahan/${districtId}.json`);
        const data: Village[] = await response.json();
        setVillages(data);
      } catch (error) {
        console.error('Gagal memuat daftar desa/kelurahan', error);
        setLocationError('Gagal memuat daftar desa/kelurahan. Silakan pilih ulang kecamatan.');
      }
    }

    setVillages([]);
    setVillageId('');
    loadVillages();
  }, [districtId]);

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
        {locationError ? (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-700">
            {locationError}
          </div>
        ) : null}
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
                <option disabled value="">Pilih Jenis Kelamin</option>
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
                <option disabled value="">Pilih Agama</option>
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
                <option disabled value="">Pilih Program Studi</option>
                <option>Informatika</option>
                <option>Sistem Informasi</option>
                <option>Teknik Elektro</option>
                <option>Arsitektur</option>
                <option>Manajemen</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Provinsi *</label>
              <select
                className="glass-input bg-surface-container"
                value={provinceId}
                onChange={(e) => setProvinceId(e.target.value)}
              >
                <option value="">Pilih Provinsi</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Kabupaten / Kota *</label>
              <select
                className="glass-input bg-surface-container"
                value={regencyId}
                onChange={(e) => setRegencyId(e.target.value)}
                disabled={!provinceId}
              >
                <option value="">Pilih Kabupaten / Kota</option>
                {regencies.map((regency) => (
                  <option key={regency.id} value={regency.id}>
                    {regency.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Kecamatan *</label>
              <select
                className="glass-input bg-surface-container"
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
                disabled={!regencyId}
              >
                <option value="">Pilih Kecamatan</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-on-surface">Desa / Kelurahan *</label>
              <select
                className="glass-input bg-surface-container"
                value={villageId}
                onChange={(e) => setVillageId(e.target.value)}
                disabled={!districtId}
              >
                <option value="">Pilih Desa / Kelurahan</option>
                {villages.map((village) => (
                  <option key={village.id} value={village.id}>
                    {village.nama}
                  </option>
                ))}
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
                <option disabled value="">Pilih Keterangan Lulus</option>
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
