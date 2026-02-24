function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// MUSIC
const audio = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
let isPlaying = false;

// 1. Fungsi Toggle Musik
function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        musicIcon.innerText = '🔇';
    } else {
        audio.play();
        musicIcon.innerText = '🔊';
    }
    isPlaying = !isPlaying;
}

// 2. Trik Autoplay: Putar musik saat klik pertama kali di halaman
document.addEventListener('click', function() {
    if (!isPlaying) {
        audio.play().then(() => {
            musicIcon.innerText = '🔊';
            isPlaying = true;
        }).catch(error => {
            console.log("Autoplay dicegah, menunggu interaksi user.");
        });
    }
}, { once: true });



/* --- LIGHTBOX LOGIC UNTUK SERTIFIKAT --- */
function openCert(imageSrc, title, description) {
    const lightbox = document.getElementById('cert-lightbox');
    const img = document.getElementById('lightbox-img');
    const titleText = document.getElementById('lightbox-title');
    const descText = document.getElementById('lightbox-desc');

    img.src = imageSrc;
    titleText.innerText = title;
    descText.innerText = description;
    lightbox.style.display = 'flex';
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.opacity = '1';
        lightbox.style.transition = 'opacity 0.3s ease';
    }, 10);
}

function closeCert() {
    const lightbox = document.getElementById('cert-lightbox');
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); 
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeCert();
    }
});