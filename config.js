/**
 * ===================================
 * KONFIGURASI MUDAH ILOVEYOU2
 * ===================================
 * 
 * Edit file ini untuk mengubah:
 * - Gambar utama
 * - Musik latar
 * - Pesan romantis
 * - Warna dan gaya
 * 
 * Cukup ganti URL dan teks di bawah ini!
 */

const CONFIG = {
  // ==================
  // GAMBAR UTAMA
  // ==================
  image: {
    // URL gambar utama (bisa dari URL publik atau path lokal)
    // Contoh: "https://i.imgur.com/k6lP0Wn.jpg" atau "./assets/foto.jpg"
    url: "https://i.imgur.com/k6lP0Wn.jpg",
    
    // Alt text untuk aksesibilitas
    alt: "A romantic moment between two people"
  },

  // ==================
  // MUSIK LATAR
  // ==================
  music: {
    // URL file audio (MP3, WAV, atau format audio lainnya)
    // Contoh: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    
    // Teks tombol putar
    playButtonText: "Putar Musik Romantis",
    
    // Teks tombol henti
    stopButtonText: "Hentikan Musik"
  },

  // ==================
  // PESAN ROMANTIS
  // ==================
  messages: {
    // Judul utama
    title: "iloveyou2",
    
    // Subtitle
    subtitle: "My heart beats only for you.",
    
    // Pesan utama dengan efek ketikan
    mainMessage: "Di setiap detik yang berlalu, senyummu adalah mentari yang menyinari hariku, dan tawamu adalah melodi terindah yang kuingat. Aku beruntung memilikimu.",
    
    // Judul bagian pesan
    sectionTitle: "Untuk Cinta Hatiku...",
    
    // Pesan kejutan (ditampilkan saat tombol diklik)
    surpriseMessage: "Terima kasih telah mewarnai hidupku dengan cinta, tawa, dan kebahagiaan. Aku mencintaimu, lebih dari kata-kata bisa ungkapkan. Selamanya dan selalu, my love.",
    
    // Teks tombol kejutan
    surpriseButtonText: "Klik untuk Pesan Spesial!",
    
    // Teks tombol saat pesan ditampilkan
    hideButtonText: "Sembunyikan Pesan",
    
    // Caption pada gambar
    imageCaption: "Setiap momen bersamamu adalah kenangan yang terukir indah.",
    
    // Footer
    footerText: "© 2026 iloveyou2. Dibuat dengan cinta."
  },

  // ==================
  // WARNA & GAYA
  // ==================
  colors: {
    // Warna pink utama (latar belakang lembut)
    primaryPink: "#FCE7F3",
    
    // Warna rose (untuk hati dan aksen)
    secondaryRose: "#FCC2D3",
    
    // Warna ungu (untuk judul dan tombol)
    accentViolet: "#9F7AEA",
    
    // Warna teks gelap
    textDark: "#4A5568",
    
    // Warna latar belakang gelap
    bgDark: "#1A202C",
    
    // Warna putih lembut
    softWhite: "#F7FAFC"
  },

  // ==================
  // ANIMASI
  // ==================
  animation: {
    // Jumlah hati yang melayang
    floatingHeartCount: 30,
    
    // Durasi efek ketikan (dalam detik)
    typewriterDuration: 3.5,
    
    // Durasi animasi hati melayang (dalam detik)
    floatingHeartDuration: 10
  }
};

// Export untuk digunakan di HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
