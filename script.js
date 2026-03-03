document.addEventListener("DOMContentLoaded", () => {
        const navItems = document.querySelectorAll(".sidebar .nav-item");
        const sections = document.querySelectorAll(".content-section");
        const sectionIds = [
            "pengalaman", "dokumentasi", "sertifikasi", 
            "skill", "resource", "project", "profil"
        ];

        navItems.forEach((item, index) => {
            // Abaikan tombol 'Lainnya' di bottom-menu jika tidak ada kontennya
            if(index >= sectionIds.length) return; 

            item.addEventListener("click", (e) => {
                e.preventDefault();

                // 1. Hapus status 'active' dari semua tombol navigasi
                navItems.forEach(nav => nav.classList.remove("active"));
                
                // 2. Tambahkan status 'active' ke tombol yang diklik
                item.classList.add("active");

                // 3. Sembunyikan semua konten
                sections.forEach(sec => sec.classList.remove("active"));

                // 4. Tampilkan konten yang sesuai
                const targetId = sectionIds[index];
                document.getElementById(targetId).classList.add("active");
            });
        });
    });

    // Fungsi untuk mengganti gambar pada halaman dokumentasi
function changeImage(newSrc, clickedElement) {
    // 1. Ganti background gambar utama
    const mainDoc = document.getElementById('mainDocImage');
    mainDoc.style.backgroundImage = `url('${newSrc}')`;
    
    // 2. Hapus class 'active-thumb' dari semua thumbnail
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.classList.remove('active-thumb');
    });
    
    // 3. Tambahkan class 'active-thumb' ke thumbnail yang baru saja diklik
    clickedElement.classList.add('active-thumb');
}

// ==========================================
// ANIMASI TIMELINE (INTERSECTION OBSERVER)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Pengaturan kapan animasi dipicu (saat 15% elemen terlihat di layar)
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Menambahkan class show-timeline agar elemen muncul dengan animasi CSS
                entry.target.classList.add("show-timeline");
                // Stop mengamati setelah animasi berjalan agar tidak terus-terusan mengulang
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Cari semua elemen timeline-item dan amati
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Opsional: Karena sistem web kamu memakai "display: none" antar menu, 
    // pastikan saat tombol "Pengalaman" diklik, animasi di-reset & dijalankan ulang
    const navPengalaman = document.querySelector('a[href="#pengalaman"]') || document.querySelectorAll('.nav-item')[0];
    
    if(navPengalaman) {
        navPengalaman.addEventListener("click", () => {
            // Beri sedikit delay agar display: block terjadi lebih dulu
            setTimeout(() => {
                const visibleItems = document.querySelectorAll('#pengalaman .timeline-item');
                visibleItems.forEach(item => {
                    item.classList.remove("show-timeline"); // reset
                    timelineObserver.observe(item); // pantau lagi
                });
            }, 100);
        });
    }
});

// ==========================================
// 4. FUNGSI PLAY/PAUSE MUSIK LOKAL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-toggle");

    // Pastikan elemen ada di halaman sebelum menjalankan script
    if (music && musicBtn) {
        musicBtn.addEventListener("click", () => {
            if (music.paused) {
                music.play();
                musicBtn.innerHTML = '⏸️ Pause';
            } else {
                music.pause();
                musicBtn.innerHTML = '🎵 Play Music';
            }
        });
    }
});