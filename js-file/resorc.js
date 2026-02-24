document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================================
    // DATABASE GUDANG RESOURCES ASJAD (Total 70+ File)
    // =========================================================================
    const resourceDatabase = [
        
        // ---------------------------------------------------------
        // KATEGORI 1: BUKU, MODUL & LITERATUR UTAMA
        // ---------------------------------------------------------
        { id: 1, title: "The Psychology of Money", type: "pdf", description: "Buku karya Morgan Housel tentang mindset keuangan.", url: "items/121. The Psychology of Money (Morgan Housel).pdf", icon: "📚" },
        { id: 2, title: "Atomic Habits", type: "pdf", description: "Buku panduan membangun kebiasaan baik.", url: "items/Buku Atomic Habits.pdf", icon: "📚" },
        { id: 3, title: "48 Laws of Power", type: "pdf", description: "Buku strategi dan kekuasaan karya Robert Greene.", url: "items/48 laws of power.pdf", icon: "📖" },
        { id: 4, title: "Retorika (Seni Berbicara)", type: "pdf", description: "Buku klasik Aristoteles tentang seni komunikasi.", url: "items/529. Retorika (Seni Berbicara) - Aristoteles.pdf", icon: "🗣️" },
        { id: 5, title: "Buku Manajemen Sistem Informasi", type: "pdf", description: "Buku referensi Manajemen Sistem Informasi.", url: "items/Buku Manajemen Sistem Informasi.pdf", icon: "📚" },
        { id: 6, title: "Buku Pengasuhan Anak Berkebutuhan Khusus", type: "pdf", description: "Buku referensi psikologi & pendidikan.", url: "items/BUKU PENGASUHAN ANAK BERKEBUTUHAN KHUSUS.pdf", icon: "📚" },
        { id: 7, title: "Buku Profesi Kependidikan", type: "pdf", description: "Buku panduan mata kuliah Profesi Kependidikan.", url: "items/BUKU PROFESI KEPENDIDIKAN.pdf", icon: "📚" },
        { id: 8, title: "Matematika Diskrit (Rinaldi Munir)", type: "pdf", description: "Buku pegangan Matematika Diskrit.", url: "items/Matematika_Diskrit_Rinaldi_Munir.pdf", icon: "📘" },
        { id: 9, title: "Models of Teaching", type: "pdf", description: "Buku referensi model-model pengajaran.", url: "items/Models of Teaching by Bruce R. Joyce, Marsha Weil, Emily Calhoun (z-lib.org).pdf", icon: "📘" },
        { id: 10, title: "Modul Sistem Basis Data", type: "pdf", description: "Modul pembelajaran Sistem Basis Data.", url: "items/Modul-Sistem-Basis-Data.pdf", icon: "📔" },
        { id: 11, title: "Dasar-Dasar Teknik Elektronika", type: "pdf", description: "Buku Siswa Kelas X Dasar Elektronika.", url: "items/Dasar-Dasar-Teknik-Elektronika-Semester-2-BS-KLS-X.pdf", icon: "📔" },
        { id: 12, title: "Komponen Elektronika", type: "pdf", description: "Modul/Buku Komponen Elektronika (Dedi Irfan).", url: "items/KOMPONEN_ELEKTRONIKA_DEDI_IRFAN.pdf", icon: "📔" },
        { id: 13, title: "Physics of Semiconductor Devices", type: "pdf", description: "Buku referensi Fisika Semikonduktor (Wiley).", url: "items/S.M.SzePhysicsofSemiconductorDevicesWiley.pdf", icon: "📘" },

        // ---------------------------------------------------------
        // KATEGORI 2: MAKALAH & PRESENTASI KULIAH
        // ---------------------------------------------------------
        { id: 14, title: "Makalah RPL: Model Scrum", type: "pdf", description: "Makalah Kelompok 3 Rekayasa Perangkat Lunak.", url: "items/MAKALAH (RPL) KELOMPOK 3 Model Scrum.docx", icon: "📝" },
        { id: 15, title: "Makalah Jarkom: Firewall", type: "pdf", description: "Makalah Jaringan Komputer Lanjutan.", url: "items/MAKALAH JARINGAN KOMPUTER LANJUTAN FIREWALL.pdf", icon: "📝" },
        { id: 16, title: "Makalah Determinan Matematika Terapan", type: "pdf", description: "Tugas makalah matematika.", url: "items/MAKALAH Determinan Matematika Terapan.docx", icon: "📝" },
        { id: 17, title: "Makalah Himpunan", type: "pdf", description: "Makalah Matematika Himpunan.", url: "items/MAKALAH Himpunan.docx", icon: "📝" },
        { id: 18, title: "Makalah Profesi Kependidikan (Kel 8)", type: "pdf", description: "Makalah presentasi kelompok 8.", url: "items/makalah Profesi Kependidikan kel 8.pdf", icon: "📝" },
        { id: 19, title: "Makalah Psikologi Pendidikan ABK", type: "pdf", description: "Makalah Anak Berkebutuhan Khusus.", url: "items/Makalah Psikologi Pendidikan Berkebutuhan Khusus.docx", icon: "📝" },
        { id: 20, title: "Makalah Sistem Persamaan Linear", type: "pdf", description: "Makalah Matematika/Aljabar SPL.", url: "items/MAKALAH SISTEM PERSAMAAN LINEAR.docx", icon: "📝" },
        { id: 21, title: "Makalah TDL: Motherboard", type: "pdf", description: "Teknik Dasar Listrik Kelompok 4.", url: "items/Makalah TDL KEL-4 MOTHERBOARD.pdf", icon: "📝" },
        { id: 22, title: "Makalah TDL: Power Supply", type: "pdf", description: "Teknik Dasar Listrik Kelompok 5.", url: "items/Makalah TDL Kel-5 Power Supply.pdf", icon: "📝" },
        { id: 23, title: "Makalah TDL: Input Output", type: "pdf", description: "Teknik Dasar Listrik Kelompok 7.", url: "items/Makalah TDL Kel-7 Input Output dalam komputer.docx", icon: "📝" },
        { id: 24, title: "Makalah Sistem Basis Data (SQL)", type: "pdf", description: "Makalah Kelompok 7 SBD (DML, DDL).", url: "items/MAKALAH_SISTEM_BASIS_DATA_KEL_7_SQL,DML,DDL[1].docx", icon: "📝" },
        { id: 25, title: "PPT Aljabar Boolean", type: "pdf", description: "Slide presentasi Aljabar Boolean.", url: "items/PPT ALJABAR BOLEAN II.pptx", icon: "📊" },
        { id: 26, title: "PPT TDL Kelompok 8", type: "pdf", description: "Slide presentasi Teknik Dasar Listrik.", url: "items/PRESENTASI TDL KELOMPOK 8.pptx", icon: "📊" },
        { id: 27, title: "PPT Sistem Basis Data", type: "pdf", description: "Slide presentasi Sistem Basis Data.", url: "items/Sistem basis data (1).pptx", icon: "📊" },
        { id: 28, title: "PPT Model Scrum RPL", type: "pdf", description: "Slide presentasi RPL Model Scrum.", url: "items/MODEL SCRUM REKAYASA PERANGKAT LUNAK.pptx", icon: "📊" },

        // ---------------------------------------------------------
        // KATEGORI 3: TUGAS (CBR, CJR, RI, MINI RISET, CASE METHOD)
        // ---------------------------------------------------------
        { id: 29, title: "CBR Psikologi Pendidikan", type: "pdf", description: "Critical Book Review Psikologi Pendidikan.", url: "items/CRITICAL BOOK REVIEW [PSIKOLOGI PENDIDIKAN].docx", icon: "📑" },
        { id: 30, title: "CBR Profesi Pendidikan", type: "pdf", description: "Critical Book Review Profesi Pendidikan (PDF).", url: "items/CRITICAL BOOK REVIEW PROFESI PENDIDIKAN Asjad Iman Nazeb Zebua.pdf", icon: "📑" },
        { id: 31, title: "CJR Asjad Iman Nazeb Zebua", type: "pdf", description: "Critical Journal Review milik pribadi.", url: "items/CRITICAL JOURNAL REVIEW ASJAD IMAN NAZEB ZEBUA.pdf", icon: "📑" },
        { id: 32, title: "CJR Profesi Pendidikan", type: "pdf", description: "Critical Journal Review Profesi Pendidikan.", url: "items/CRITICAL JOURNAL REVIEW Profesi Pendidikan.docx", icon: "📑" },
        { id: 33, title: "Mini Riset & Rekayasa Ide Profesi", type: "pdf", description: "Laporan gabungan MR dan RI Kelompok 7.", url: "items/LAPORAN MINI RISET DAN REKAYASA IDE PROFESI KEPENDIDIKAN_KELOMPOK 7.pdf", icon: "📊" },
        { id: 34, title: "Rekayasa Ide Psikologi Pendidikan", type: "pdf", description: "Laporan RI Kelompok 4.", url: "items/REKAYASA IDE PSIKOLOGI PENDIDIKAN KELOMPOK 4.docx", icon: "💡" },
        { id: 35, title: "Case Method Struktur Data (Docx)", type: "pdf", description: "Laporan Case Method mata kuliah Struktur Data.", url: "items/CASE METHODE 2 STRUKTUR DATA.docx", icon: "📝" },
        { id: 36, title: "Laporan SRS", type: "pdf", description: "Software Requirement Specification.", url: "items/LAPORAN SOFTWARE REQUEREMENT SPESIFICATION_.docx", icon: "📋" },
        { id: 37, title: "Tugas Rutin Kombinatorial", type: "pdf", description: "Tugas rutin matematika (Kelompok 5).", url: "items/tugas rutin kelompok 5 kombinatorial.docx", icon: "📝" },
        { id: 38, title: "Tugas Rutin Aljabar Boolean", type: "pdf", description: "Tugas rutin matematika (Kelompok 5).", url: "items/tugas rutin kelompok 5_aljabar boolean.docx", icon: "📝" },
        { id: 39, title: "Tugas UAS Jaringan Komputer", type: "pdf", description: "Tugas akhir semester Jarkom Lanjut.", url: "items/TUGAS UAS JARINGAN KOMPUTER LANJUTAN.docx", icon: "📝" },
        { id: 40, title: "Tugas UAS Sistem Basis Data", type: "pdf", description: "Tugas akhir semester SBD.", url: "items/Tugas UAS Sistem Basis Data.docx", icon: "📝" },
        { id: 41, title: "Penerapan Matriks SPL", type: "pdf", description: "Tugas penyelesaian Sistem Persamaan Linear.", url: "items/PENERAPAN MATRIKS DALAM PENYELESAIAN SPL.docx", icon: "📝" },

        // ---------------------------------------------------------
        // KATEGORI 4: JURNAL & ARTIKEL PENELITIAN
        // ---------------------------------------------------------
        { id: 42, title: "Jurnal: Technology Adoption in Government", type: "pdf", description: "Analisis transformasi sektor publik.", url: "items/TECHNOLOGY ADOPTION IN GOVERNMENT MANAGEMENT PUBLIC SECTOR TRANSFORMATION ANALYSIS.pdf", icon: "📰" },
        { id: 43, title: "Jurnal: Acceptance of AI in Education", type: "pdf", description: "Artikel tentang AI di dunia pendidikan.", url: "items/Acceptanceofartificialintelligenceineducation.pdf", icon: "📰" },
        { id: 44, title: "Jurnal Model Pembelajaran", type: "pdf", description: "Artikel referensi model pembelajaran.", url: "items/jurnal model pembelajaran.pdf", icon: "📰" },
        { id: 45, title: "Jurnal: Analisis Kesalahan Mahasiswa", type: "pdf", description: "Penelitian analisis kesalahan problem solving.", url: "items/Analisis_Kesalahan_Mahasiswa_dalam_Menyelesaikan_P.pdf", icon: "📰" },
        { id: 46, title: "Jurnal: Sintesis Grafena", type: "pdf", description: "Jurnal karakterisasi grafena.", url: "items/108830-ID-sintesis-dan-karakterisasi-grafena-denga.pdf", icon: "📰" },
        { id: 47, title: "Jurnal: Pengembangan Catu Daya", type: "pdf", description: "Jurnal teknik elektro presisi display.", url: "items/130598-ID-pengembangan-catu-daya-presisi-display-d.pdf", icon: "📰" },
        { id: 48, title: "Article Text 2192", type: "pdf", description: "Artikel akademik.", url: "items/522-Article Text-2192-1-10-20230628.pdf", icon: "📰" },
        { id: 49, title: "Article Text 5152", type: "pdf", description: "Artikel akademik.", url: "items/1101-Article Text-5152-1-10-20210815.pdf", icon: "📰" },
        { id: 50, title: "Article Text 20803", type: "pdf", description: "Artikel akademik.", url: "items/1608-Article Text-20803-1-10-20241231.pdf", icon: "📰" },
        { id: 51, title: "Artikel Rusli", type: "pdf", description: "Referensi artikel Rusli.", url: "items/Artikel+Rusli.pdf", icon: "📰" },

        // ---------------------------------------------------------
        // KATEGORI 5: PROJECT & PRAKTIKUM (Type: project)
        // ---------------------------------------------------------
        { id: 52, title: "Project Packet Tracer: UTS Jarkom", type: "project", description: "Simulasi topologi jaringan UTS.", url: "items/Tugas UTS jarkom.pkt", icon: "⚙️" },
        { id: 53, title: "Project Packet Tracer: Latihan 1", type: "project", description: "Simulasi jaringan Cisco.", url: "items/Sisko 02031u8 981cy82bawjkbdkja.pkt", icon: "⚙️" },
        { id: 54, title: "Project Packet Tracer: Uji Coba", type: "project", description: "File project simulasi jaringan.", url: "items/kontolfuyjhuv.pkt", icon: "⚙️" }, // Hehe, nama file ini aku biarin asli dari kamu ya
        { id: 55, title: "BML SD: Pengantar Struktur Data", type: "project", description: "Materi Belajar Struktur Data.", url: "items/BML - 01a - SD - Pengantar Struktur Data.pdf", icon: "💻" },
        { id: 56, title: "BML SD: String", type: "project", description: "Materi pemrograman String.", url: "items/BML - 03 - SD - String.pdf", icon: "💻" },
        { id: 57, title: "BML SD: Rekursif", type: "project", description: "Materi pemrograman Rekursif.", url: "items/BML - 04 - SD - Rekursif.pdf", icon: "💻" },
        { id: 58, title: "Modul Pemrograman Web Dasar", type: "project", description: "Belajar HTML, CSS, JS dasar.", url: "items/Belajar Pemerograman Web Dasar (HTML,CSS,JS).pdf", icon: "💻" },
        { id: 71, title: "Quotes Generator", type: "project", description: "Generator kutipan motivasi.", url: "https://ainpersonal.github.io/Quotes-Generator/", icon: "💻" },
        { id: 72, title: "Dicoding Final Exam", type: "project", description: "Final Exam Pemrograman Dasar Web.", url: "https://ainpersonal.github.io/Dicoding-Final-Exam_Pemerograman-Dasar-Web/", icon: "💻" },
        { id: 73, title: "Eventmedan website Canceled", type: "project", description: "Website eventmedan.id", url: "https://ainpersonal.github.io/Eventmedan.id/", icon: "💻" },
        // ---------------------------------------------------------
        // KATEGORI 6: SERTIFIKAT & DATA DIRI
        // ---------------------------------------------------------
        { id: 59, title: "Curriculum Vitae (CV) Asjad", type: "pdf", description: "Dokumen CV Asjad Iman Nazeb Zebua.", url: "items/CV Asjad Iman Nazeb Zebua.pdf", icon: "🎓" },
        { id: 60, title: "Sertifikat Matematika (OSSN 2025)", type: "pdf", description: "Sertifikat Olimpiade Sains Nasional.", url: "items/cert_Matematika - OSSN 2025.pdf", icon: "🏆" },
        { id: 61, title: "Sertifikat Bahasa Inggris", type: "pdf", description: "Sertifikat KSI-HUT PUSKANAS 2023.", url: "items/cert_Bahasa Inggris - KSI-HUT PUSKANAS 2023.pdf", icon: "🏆" },
        { id: 62, title: "Dokumen Pribadi Asjad (Docx)", type: "pdf", description: "Tugas/Data Asjad Iman Nazeb Zebua.", url: "items/5243151011_Asjad Iman Nazeb Zebua.docx", icon: "📄" },

        // ---------------------------------------------------------
        // KATEGORI 7: LINK EXTERNAL (Type: link)
        // ---------------------------------------------------------
        { id: 63, title: "GitHub Repository", type: "link", description: "Kumpulan source code dan project pemrograman.", url: "https://github.com/Ainpersonal", icon: "🔗" },
        { id: 64, title: "Dribbble UI/UX", type: "link", description: "Referensi desain antarmuka aplikasi dan web.", url: "https://dribbble.com/", icon: "🔗" },
        { id: 65, title: "Web Design Reference", type: "link", description: "Referensi desain untuk website.", url: "https://godly.website/", icon: "🔗" },
        { id: 66, title: "Freepik", type: "link", description: "Sumber gambar dan vektor gratis.", url: "https://www.freepik.com/", icon: "🔗" },
        { id: 67, title: "Unsplash", type: "link", description: "Sumber foto berkualitas tinggi gratis.", url: "https://unsplash.com/", icon: "🔗" }, 
        { id: 68, title: "AOS animate on scrol", type: "link", description: "smooth scroll", url: "https://michalsnik.github.io/aos/", icon: "🔗" },
        { id: 69, title: "Font Google", type: "link", description: "Sumber font gratis untuk web.", url: "https://fonts.google.com/", icon: "🔗" },
        { id: 70, title: "Dark Mode Design Ref", type: "link", description: "Sumber referensi website.", url: "https://www.darkmodedesign.com/", icon: "🔗" },
    ];

    // =========================================================================
    // LOGIKA RENDER & FILTER 
    // =========================================================================
    const container = document.getElementById("resource-container");
    const searchInput = document.getElementById("search-input");
    const filterBtns = document.querySelectorAll(".filter-btn");

    if (!container) return;

    function renderResources(data) {
        container.innerHTML = "";
        
        if (data.length === 0) {
            container.innerHTML = `<p style="color: #aaa; text-align: center; grid-column: 1 / -1; padding: 40px;">Oops! File yang kamu cari tidak ditemukan di gudang.</p>`;
            return;
        }

        data.forEach(item => {
            const div = document.createElement("div");
            div.className = "resource-card";
            let badgeText = item.type === 'pdf' ? 'Dokumen' : item.type === 'link' ? 'Link' : 'Project';
            let badgeStyle = item.type === 'project' ? 'background: rgba(255, 165, 0, 0.2); color: orange;' : 
                             item.type === 'link' ? 'background: rgba(0, 150, 255, 0.2); color: #00a8ff;' : '';

            // Render Kotak Kartu
            div.innerHTML = `
                <div>
                    <div class="resource-header">
                        <span class="resource-icon">${item.icon}</span>
                        <span class="resource-badge" style="${badgeStyle}">${badgeText}</span>
                    </div>
                    <h3 class="resource-title">${item.title}</h3>
                    <p class="resource-desc">${item.description}</p>
                </div>
                <a href="${item.url}" target="_blank" class="resource-btn">Buka Resource</a>
            `;
            container.appendChild(div);
        });
    }
    function filterData() {
        const searchText = searchInput.value.toLowerCase();
        const activeBtn = document.querySelector(".filter-btn.active");
        const filterType = activeBtn ? activeBtn.getAttribute("data-type") : "all";

        const filtered = resourceDatabase.filter(item => {
            const matchSearch = item.title.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText);
            const matchType = filterType === "all" || item.type === filterType;
            return matchSearch && matchType;
        });

        renderResources(filtered);
    }

    // Eksekusi fungsi saat mengetik di kolom pencarian
    searchInput.addEventListener("input", filterData);

    // Eksekusi fungsi saat tombol filter diklik
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterData();
        });
    });

    // Jalankan render data semua saat halaman web pertama kali dibuka
    renderResources(resourceDatabase);
});