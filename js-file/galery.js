// Tunggu sampai seluruh HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DATABASE FOTO (Pastikan nama file dan foldernya benar!)
    const galleryDatabase = [
        {
            id: 1,
            src: "imgdoc/pasbratalasttime.jpg",
            title: "Pasbrata last time",
            category: "event",
            description: "Perpisahan Akt 22 SMANDEL {Pasbrata)."
        },
        {
            id: 2,
            src: "imgdoc/DSC08166.JPG", // Perhatikan huruf besar JPG
            title: "Grand Openning DUST",
            category: "magang",
            description: "Dokumentasi tim EventOrgenaizer "
        },
        {
            id: 3,
            src: "imgdoc/IMG_0289.JPG",
            title: "PTIK B 2024",
            category: "personal",
            description: "Foto bareng"
        },
        {
            id: 4,
            src: "imgdoc/WhatsApp Image 2025-12-14 at 21.57.12 (1).jpeg",
            title: "Diskusi Project",
            category: "project",
            description: "Rapat malam persiapan event."
        },
        {
            id: 5,
            src: "imgdoc/WhatsApp Image 2026-02-18 at 14.40.46.jpeg",
            title: "Event Tahunan",
            category: "event",
            description: "Acara puncak tahun ini."
        },
        {
            id: 6,
            src: "imgdoc/image copy 2.png",
            title: "Art 1",
            category: "art",
            description: "Undescription, this not an AI"
        },
        {
            id: 7,
            src: "imgdoc/image copy 3.png",
            title: "Art 2",
            category: "art",
            description: "Undescription, this not an AI"
        },
        {
            id: 8,
            src: "imgdoc/image copy.png",
            title: "Art 3",
            category: "art",
            description: "Undescription, this not an AI"
        },
        {
            id: 9,
            src: "imgdoc/image.png",
            title: "Art 4",
            category: "art",
            description: "Undescription, this not an AI"
        },

        {
            id: 10,
            src: "imgdoc/MASTERPEACE.png",
            title: "Art 5",
            category: "art",
            description: "Undescription, this not an AI"
        },

        
        
    ];

    const container = document.getElementById("gallery-container");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Jika container tidak ditemukan di HTML, hentikan script agar tidak error
    if (!container) {
        console.error("Wadah gallery-container tidak ditemukan!");
        return; 
    }

    // 2. FUNGSI RENDER GALERI
    function renderGallery(filterCategory) {
        container.innerHTML = ""; // Bersihkan kontainer

        const filteredData = filterCategory === "all" 
            ? galleryDatabase 
            : galleryDatabase.filter(item => item.category === filterCategory);

        filteredData.forEach(item => {
            const div = document.createElement("div");
            div.className = "gallery-item";
            
            // Tambahkan event listener untuk Lightbox
            div.addEventListener("click", () => {
                openLightbox(item.src, item.title);
            });

            div.innerHTML = `
                <img src="${item.src}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Gambar+Tidak+Ditemukan';">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    // 3. FUNGSI FILTER KLIK
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            renderGallery(filterValue);
        });
    });

    // Render galeri pertama kali saat halaman dimuat
    renderGallery("all");
});

// 4. FUNGSI LIGHTBOX & MUSIC (Taruh di luar DOMContentLoaded agar bisa dipanggil dari HTML)
window.openLightbox = function(imgSrc, captionText) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if(lightbox && lightboxImg && lightboxCaption) {
        lightbox.style.display = "flex";
        lightboxImg.src = imgSrc;
        lightboxCaption.innerText = captionText;
    }
}

window.closeLightbox = function(event) {
    if (event.target.id === "lightbox" || event.target.className === "close-btn") {
        document.getElementById("lightbox").style.display = "none";
    }
}

window.toggleMusic = function() {
    const music = document.getElementById("bg-music");
    const icon = document.getElementById("music-icon");
    if (music.paused) {
        music.play();
        icon.innerText = "🔊";
    } else {
        music.pause();
        icon.innerText = "🔇";
    }
}