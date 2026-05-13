# Debugging Checklist: Data Jurusan Tidak Terload

## Langkah 1: Verifikasi Backend Laravel Running
```bash
# Terminal 1 - Start Laravel Server
cd c:\laragon\www\Regis_Wisuda
php artisan serve
# atau gunakan Laragon UI untuk start Apache
```

## Langkah 2: Verifikasi Database & Data
- Buka phpMyAdmin: http://localhost/phpmyadmin
- Pilih database: `db_wisuda`
- Check tabel `faculties`:
  - Pastikan ada data
  - Jika kosong, run seeder atau insert manual
- Check tabel `jurusans`:
  - Pastikan ada data
  - Pastikan foreign key `faculty_id` terhubung ke `faculties`

## Langkah 3: Test Endpoint API
```bash
# Terminal - Test endpoint
php -r "echo json_encode(json_decode(file_get_contents('http://localhost/api/jurusans')), JSON_PRETTY_PRINT);" 2>&1

# Atau gunakan browser: http://localhost/api/jurusans
```

Respons yang diharapkan:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Teknik Informatika",
      "code": "TI",
      "faculty_id": 1,
      "faculty_name": "Teknik"
    }
  ]
}
```

## Langkah 4: Verifikasi Frontend Config
- Vite proxy sudah ditambahkan di `vite.config.ts` ✓
- Frontend dev server: npm run dev (port 5173)
- Check browser DevTools Console untuk error

## Langkah 5: Seeder Data (Jika Perlu)
Jalankan seeder untuk insert data sample:
```bash
cd c:\laragon\www\Regis_Wisuda
php artisan db:seed
# atau specific seeder
php artisan db:seed --class=DatabaseSeeder
```

## Browser Console Debugging
Buka DevTools (F12) → Console tab
Harus melihat:
```
Fetching jurusans...
Response status: 200
Jurusans data received: {success: true, data: [...]}
```

## Common Issues & Solutions

### Issue: Response status 404
- ✓ Pastikan Laravel server running (php artisan serve)
- ✓ Pastikan route `/api/jurusans` terdaftar di `routes/api.php`

### Issue: Response status 500
- ✓ Check Laravel log: `storage/logs/laravel.log`
- ✓ Pastikan Model Faculty & Jurusan exist dan benar

### Issue: Empty data array
- ✓ Insert data ke tabel faculties & jurusans
- ✓ Atau gunakan seeder untuk populate sample data

### Issue: CORS Error (development)
- ✓ Proxy di Vite sudah dikonfigurasi ✓
- ✓ Reload page setelah update vite.config.ts
