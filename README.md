# Component Footer

Komponen footer digunakan untuk menampilkan footer pada halaman web. Yang dimana menunjukkan beberapa informasi seperti copyright, link ke halaman utama, dan informasi lainnya.

Dan git ini dibuat pada tanggal 7 September 2026.

## Prasyarat

Pastikan sebelum anda menginstal dan menjalankan aplikasi, anda telah menginstal:

| Tools | Versi Minimum | Cara Cek |
|-------|---------------|----------|
| [Node.js](https://nodejs.org) | v20+ (disarankan LTS) | `node -v` |
| npm | v10+ (bawaan Node.js) | `npm -v` |
| Git | v2.30+ | `git --version` |

## Proses instalasi dan menjalankan aplikasi

  1. Clone repository

  ```bash
  git clone <repository-url>
  cd Components-Footer
  ```

  2. Install dependencies

  ```bash
  # Instal dependensi yang diperlukan
  npm install

  # Instal react-router-dom, kalau mau mengganti tag <a> menjadi <Link>
  npm install react-router-dom
  ```

  3. Run the development server

  ```bash
  # Jalankan server pengembangan
  npm run dev
  ```

### Penggunaan

```bash
# kalau footer berada diluar file app.tsx maka impor dari file yang sesuai
import { Footer } from './Footer';
return (
  <div>
    <Footer />
  </div>
);
```

Aplikasi akan berjalan di `http://localhost:5173` atau `http://localhost:<port>`.
