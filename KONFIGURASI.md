# 📝 PANDUAN KONFIGURASI iloveyou2

Mudah sekali untuk mengubah gambar, musik, dan pesan di situs Anda! Cukup edit file **`config.js`** dan semuanya akan berubah otomatis.

---

## 🖼️ MENGGANTI GAMBAR UTAMA

Buka file `config.js` dan cari bagian ini:

```javascript
image: {
  url: "https://i.imgur.com/k6lP0Wn.jpg",
  alt: "A romantic moment between two people"
}
```

**Ganti URL gambar:**
- Gunakan URL publik dari Imgur, Google Drive, atau hosting lainnya
- Contoh: `"https://i.imgur.com/XXXXXX.jpg"`

**Atau gunakan gambar lokal:**
- Letakkan gambar di folder `assets/` (buat folder jika belum ada)
- Ganti dengan: `"./assets/foto.jpg"`

---

## 🎵 MENGGANTI MUSIK LATAR

Cari bagian ini di `config.js`:

```javascript
music: {
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  playButtonText: "Putar Musik Romantis",
  stopButtonText: "Hentikan Musik"
}
```

**Ganti URL musik:**
- Gunakan URL publik dari SoundCloud, YouTube Music, atau hosting lainnya
- Format yang didukung: MP3, WAV, OGG, M4A
- Contoh: `"https://example.com/lagu-romantis.mp3"`

**Ubah teks tombol:**
- `playButtonText`: Teks saat musik belum diputar
- `stopButtonText`: Teks saat musik sedang diputar

---

## 💬 MENGGANTI PESAN ROMANTIS

Semua pesan dapat diubah di bagian `messages` dalam `config.js`:

```javascript
messages: {
  title: "iloveyou2",                    // Judul utama
  subtitle: "My heart beats only for you.",  // Subtitle
  mainMessage: "Di setiap detik...",    // Pesan utama dengan efek ketikan
  sectionTitle: "Untuk Cinta Hatiku...", // Judul bagian
  surpriseMessage: "Terima kasih...",   // Pesan kejutan
  surpriseButtonText: "Klik untuk Pesan Spesial!",  // Teks tombol
  hideButtonText: "Sembunyikan Pesan",  // Teks saat pesan ditampilkan
  imageCaption: "Setiap momen...",      // Caption pada gambar
  footerText: "© 2026 iloveyou2. Dibuat dengan cinta."  // Footer
}
```

Cukup ganti teks dengan pesan Anda sendiri!

---

## 🎨 MENGGANTI WARNA

Jika ingin mengubah palet warna, cari bagian `colors` di `config.js`:

```javascript
colors: {
  primaryPink: "#FCE7F3",      // Warna pink utama
  secondaryRose: "#FCC2D3",    // Warna rose untuk hati
  accentViolet: "#9F7AEA",     // Warna ungu untuk judul
  textDark: "#4A5568",         // Warna teks gelap
  bgDark: "#1A202C",           // Warna latar belakang gelap
  softWhite: "#F7FAFC"         // Warna putih lembut
}
```

Gunakan format hex color (contoh: `#FF0000` untuk merah).

---

## ⚙️ MENGUBAH ANIMASI

Untuk mengubah jumlah hati yang melayang atau durasi animasi:

```javascript
animation: {
  floatingHeartCount: 30,        // Jumlah hati (semakin banyak = lebih berat)
  typewriterDuration: 3.5,       // Durasi efek ketikan (detik)
  floatingHeartDuration: 10      // Durasi hati melayang (detik)
}
```

---

## 📋 CONTOH LENGKAP

Berikut contoh konfigurasi dengan pesan personal:

```javascript
const CONFIG = {
  image: {
    url: "./assets/foto-kami.jpg",
    alt: "Foto kenangan indah kami"
  },

  music: {
    url: "https://example.com/lagu-favorit.mp3",
    playButtonText: "🎵 Putar Lagu Kami",
    stopButtonText: "⏸️ Hentikan"
  },

  messages: {
    title: "Untuk Kamu",
    subtitle: "Orang yang paling berarti dalam hidupku",
    mainMessage: "Setiap hari bersamamu adalah hadiah terindah. Terima kasih telah menjadi bagian dari hidupku.",
    sectionTitle: "Pesan Spesial",
    surpriseMessage: "Aku mencintaimu lebih dari apapun di dunia ini. Mari kita ciptakan lebih banyak kenangan indah bersama.",
    surpriseButtonText: "Buka Pesan Rahasia",
    hideButtonText: "Tutup",
    imageCaption: "Momen yang akan selalu kuingat",
    footerText: "Dengan sepenuh hati, dari orang yang mencintaimu"
  }
};
```

---

## 🚀 CARA MENGGUNAKAN

1. **Edit `config.js`** dengan text editor (Notepad, VS Code, dll)
2. **Ganti URL dan teks** sesuai keinginan
3. **Simpan file**
4. **Refresh halaman** di browser (Ctrl+F5 untuk hard refresh)
5. **Selesai!** Semua perubahan akan langsung terlihat

---

## 💡 TIPS

- **Gambar:** Gunakan gambar berkualitas tinggi untuk hasil terbaik
- **Musik:** Pastikan file audio dapat diakses publik (bukan private)
- **Pesan:** Gunakan emoji untuk membuat lebih menarik (contoh: ❤️ 💕 💑)
- **Browser:** Jika perubahan tidak terlihat, coba refresh dengan Ctrl+F5

---

## ❓ TROUBLESHOOTING

**Gambar tidak muncul?**
- Pastikan URL gambar benar dan dapat diakses publik
- Coba buka URL di browser terlebih dahulu

**Musik tidak bisa diputar?**
- Pastikan file audio dapat diakses publik
- Coba format MP3 terlebih dahulu

**Perubahan tidak terlihat?**
- Refresh halaman dengan Ctrl+F5 (hard refresh)
- Bersihkan cache browser

---

Selamat menikmati situs romantis Anda! 💕
