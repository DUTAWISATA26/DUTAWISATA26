/* ==========================================================================
   JavaScript Application Logic - Creator Rate Card Hub
   ========================================================================== */

// --- CREATORS DATASET ---
const creators = [
    {
        id: "arya",
        name: "Arya Syaputra",
        niche: "Content Creator | Model",
        bio: "Encik 1 Batam 2025. Berpengalaman di bidang modeling, promosi brand lokal, dan pembuatan konten kreatif bertema lifestyle & fashion.",
        tags: ["Pageant", "Model", "Lifestyle"],
        accentRgb: "212, 175, 55", // Gold
        stats: {
            followers: "12.5K",
            engagement: "4.8%",
            projects: "40+"
        },
        socials: {
            instagram: "@aryasyaputra",
            tiktok: "@aryasyaputra",
            whatsapp: "6281234567890" // Standard Indonesian Format
        },
        services: [
            { id: "ig-story", name: "Instagram Story", desc: "1x Posting, tag brand + Link swipe up. Aktif 24 jam.", price: 100000 },
            { id: "ig-feed", name: "Instagram Feed", desc: "1x Posting foto/carousel, tag brand & mention di caption. Minimal 30 hari.", price: 300000 },
            { id: "reels-tiktok", name: "Reels / TikTok Video", desc: "1x Video review/aesthetic (15-60 detik), high quality edit.", price: 500000 }
        ],
        avatarSvg: `<svg class="avatar-svg-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-arya" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#D4AF37"/>
                    <stop offset="100%" stop-color="#8A6623"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-arya)"/>
            <circle cx="50" cy="45" r="20" fill="#E8B890"/>
            <path d="M30 40 C30 25 40 20 60 20 C70 20 72 26 70 32 C60 30 50 35 48 40 Z" fill="#201A15"/>
            <ellipse cx="43" cy="44" rx="2" ry="1.5" fill="#201A15"/>
            <ellipse cx="57" cy="44" rx="2" ry="1.5" fill="#201A15"/>
            <path d="M39 41 Q43 39 46 41" stroke="#201A15" stroke-width="1.5" fill="none"/>
            <path d="M54 41 Q57 39 61 41" stroke="#201A15" stroke-width="1.5" fill="none"/>
            <path d="M43 51 Q50 56 57 51" stroke="#201A15" stroke-width="1.5" fill="none"/>
            <path d="M25 80 C25 65 35 60 50 60 C65 60 75 65 75 80 L75 100 L25 100 Z" fill="#1C1D21"/>
            <path d="M44 60 L50 72 L56 60 Z" fill="#FFFFFF"/>
            <polygon points="48,70 52,70 50,78" fill="#D4AF37"/>
        </svg>`
    },
    {
        id: "clara",
        name: "Clara Salsabila",
        niche: "Fashion & Beauty Influencer",
        bio: "Creative influencer yang berfokus pada konten kecantikan, skincare review, OOTD harian, dan makeup tutorial dengan vibes estetik.",
        tags: ["Skincare", "Fashion", "Beauty"],
        accentRgb: "236, 72, 153", // Pink/Rose
        stats: {
            followers: "28.4K",
            engagement: "5.2%",
            projects: "120+"
        },
        socials: {
            instagram: "@clarasalsabila",
            tiktok: "@clara.beauty",
            whatsapp: "6289876543210"
        },
        services: [
            { id: "ig-story", name: "Instagram Story (Spesial)", desc: "1x Posting dengan filter estetik + stiker interaktif.", price: 150000 },
            { id: "ig-feed", name: "Instagram Feed (OOTD)", desc: "1x Posting foto berkonsep fashion lookbook.", price: 400000 },
            { id: "makeup-reels", name: "Skincare/Makeup Reels", desc: "Video tutorial/unboxing produk, review jujur & estetik.", price: 650000 }
        ],
        avatarSvg: `<svg class="avatar-svg-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-clara" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#EC4899"/>
                    <stop offset="100%" stop-color="#BE185D"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-clara)"/>
            <path d="M25 85 C25 70 35 62 50 62 C65 62 75 70 75 85 L75 100 L25 100 Z" fill="#3D3B45"/>
            <path d="M38 62 C38 62 45 78 50 78 C55 78 62 62 62 62 Z" fill="#E8B890"/>
            <circle cx="50" cy="67" r="13" fill="none" stroke="#D4AF37" stroke-width="1.5"/>
            <circle cx="50" cy="80" r="2" fill="#D4AF37"/>
            <path d="M25 45 C20 60 22 80 30 85 C38 90 62 90 70 85 C78 80 80 60 75 45 Z" fill="#2E1C16"/>
            <circle cx="50" cy="45" r="18" fill="#E8B890"/>
            <circle cx="44" cy="45" r="2" fill="#2E1C16"/>
            <circle cx="56" cy="45" r="2" fill="#2E1C16"/>
            <circle cx="41" cy="48" r="3" fill="#F472B6" opacity="0.5"/>
            <circle cx="59" cy="48" r="3" fill="#F472B6" opacity="0.5"/>
            <path d="M46 51 Q50 54 54 51 Q50 56 46 51" fill="#BE185D" stroke="#BE185D" stroke-width="1"/>
            <path d="M30 40 C32 24 45 22 50 25 C55 22 68 24 70 40 C72 48 70 54 68 54 C66 40 60 36 50 38 C40 36 34 40 32 54 C30 54 28 48 30 40 Z" fill="#2E1C16"/>
        </svg>`
    },
    {
        id: "rizky",
        name: "Rizky Pratama",
        niche: "Tech & Gadget Reviewer",
        bio: "Tech enthusiast yang menyajikan ulasan mendalam mengenai gadget terbaru, setup PC, dan tips teknologi dengan bahasa yang mudah dipahami.",
        tags: ["Tech", "Review", "Gadget"],
        accentRgb: "6, 182, 212", // Cyan/Teal
        stats: {
            followers: "54.2K",
            engagement: "6.5%",
            projects: "210+"
        },
        socials: {
            instagram: "@rizkypratama",
            tiktok: "@rizky.tech",
            whatsapp: "6285566778899"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Integration", desc: "1x Story promo/swipe link + review singkat 15 detik.", price: 250000 },
            { id: "tiktok-integration", name: "TikTok Video Review", desc: "Video interaktif ulasan produk, showcase fitur utama.", price: 800000 },
            { id: "dedicated-review", name: "Dedicated Tech Video", desc: "Video ulasan mendalam khusus untuk 1 produk (reels/tiktok).", price: 1200000 }
        ],
        avatarSvg: `<svg class="avatar-svg-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-rizky" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#06B6D4"/>
                    <stop offset="100%" stop-color="#0891B2"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-rizky)"/>
            <circle cx="50" cy="45" r="19" fill="#F5C4A0"/>
            <path d="M30 38 C32 25 35 15 50 15 C65 15 68 25 70 38 L66 32 L58 35 L50 28 L42 35 L34 32 Z" fill="#1A202C"/>
            <rect x="36" y="41" width="11" height="8" rx="2" fill="none" stroke="#1A202C" stroke-width="2"/>
            <rect x="53" y="41" width="11" height="8" rx="2" fill="none" stroke="#1A202C" stroke-width="2"/>
            <line x1="47" y1="45" x2="53" y2="45" stroke="#1A202C" stroke-width="2"/>
            <line x1="32" y1="44" x2="36" y2="44" stroke="#1A202C" stroke-width="2"/>
            <line x1="64" y1="44" x2="68" y2="44" stroke="#1A202C" stroke-width="2"/>
            <circle cx="41.5" cy="45" r="1.5" fill="#1A202C"/>
            <circle cx="58.5" cy="45" r="1.5" fill="#1A202C"/>
            <path d="M46 52 Q51 55 53 51" stroke="#1A202C" stroke-width="1.5" fill="none"/>
            <path d="M25 80 C25 65 35 60 50 60 C65 60 75 65 75 80 L75 100 L25 100 Z" fill="#2D3748"/>
            <polygon points="50,70 40,60 46,60" fill="#4A5568"/>
            <polygon points="50,70 60,60 54,60" fill="#4A5568"/>
            <path d="M34 60 C34 72 66 72 66 60" fill="none" stroke="#06B6D4" stroke-width="4"/>
            <rect x="30" y="55" width="5" height="10" rx="2" fill="#06B6D4"/>
            <rect x="65" y="55" width="5" height="10" rx="2" fill="#06B6D4"/>
        </svg>`
    },
    {
        id: "amanda",
        name: "Amanda Putri",
        niche: "Food & Travel Blogger",
        bio: "Eksplorasi kuliner lezat dan hidden gems wisata menarik. Mengemas konten review makanan, kafe estetik, dan hotel dengan gaya ceria & informatif.",
        tags: ["Kuliner", "Travel", "Vlogger"],
        accentRgb: "249, 115, 22", // Orange
        stats: {
            followers: "42.1K",
            engagement: "5.8%",
            projects: "150+"
        },
        socials: {
            instagram: "@amandaputri",
            tiktok: "@manda.makan",
            whatsapp: "6281122334455"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Visit", desc: "1x Story foto/video liputan langsung di lokasi kuliner.", price: 200000 },
            { id: "tiktok-visit", name: "Dedicated TikTok Review", desc: "Video review makanan/tempat durasi 30-45 detik, voice over ceria.", price: 800000 },
            { id: "reels-visit", name: "Instagram Reels Review", desc: "Video Reels estetik menampilkan ambience lokasi + makanan.", price: 750000 }
        ],
        avatarSvg: `<svg class="avatar-svg-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-amanda" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F97316"/>
                    <stop offset="100%" stop-color="#EA580C"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-amanda)"/>
            <circle cx="50" cy="46" r="18" fill="#F7C8A4"/>
            <circle cx="50" cy="22" r="8" fill="#472A1A"/>
            <path d="M28 48 C28 30 35 24 50 24 C65 24 72 30 72 48 C72 55 70 60 66 60 C64 48 58 44 50 44 C42 44 36 48 34 60 C30 60 28 55 28 48 Z" fill="#472A1A"/>
            <circle cx="44" cy="45" r="2" fill="#472A1A"/>
            <circle cx="56" cy="45" r="2" fill="#472A1A"/>
            <path d="M45 52 Q50 58 55 52 Z" fill="#E11D48"/>
            <circle cx="41" cy="49" r="2" fill="#F87171" opacity="0.6"/>
            <circle cx="59" cy="49" r="2" fill="#F87171" opacity="0.6"/>
            <path d="M25 82 C25 68 35 63 50 63 C65 63 75 68 75 82 L75 100 L25 100 Z" fill="#EF4444"/>
            <path d="M38 63 L45 80 L38 100" stroke="#FFF" stroke-width="2" fill="none"/>
            <path d="M62 63 L55 80 L62 100" stroke="#FFF" stroke-width="2" fill="none"/>
        </svg>`
    }
];

// --- APP STATE ---
let activeCreator = null;
let selectedServices = new Set();
let searchQuery = "";
let selectedCategory = "all";

// --- DOM ELEMENTS ---
const creatorGrid = document.getElementById("creator-grid");
const creatorCount = document.getElementById("creator-count");
const searchInput = document.getElementById("search-input");
const filterBtns = document.querySelectorAll(".filter-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const emptyStateDetail = document.getElementById("empty-state-detail");
const creatorDetailCard = document.getElementById("creator-detail-card");
const detailSection = document.getElementById("detail-section");

// Create overlay for mobile layout
const overlay = document.createElement("div");
overlay.className = "detail-overlay";
document.body.appendChild(overlay);

// --- HELPER FUNCTIONS ---
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

// Get min and max price for creator range display
function getPriceRange(creator) {
    const prices = creator.services.map(s => s.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return `${formatRupiah(min)} - ${formatRupiah(max)}`;
}

// --- RENDER CREATOR LIST ---
function renderCreatorList() {
    const filteredCreators = creators.filter(creator => {
        // Filter by Category
        const matchesCategory = selectedCategory === "all" || 
            creator.niche.toLowerCase().includes(selectedCategory) ||
            creator.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
        
        // Filter by Search Query
        const matchesSearch = creator.name.toLowerCase().includes(searchQuery) ||
            creator.niche.toLowerCase().includes(searchQuery) ||
            creator.tags.some(tag => tag.toLowerCase().includes(searchQuery));
            
        return matchesCategory && matchesSearch;
    });

    creatorCount.textContent = `(${filteredCreators.length})`;

    if (filteredCreators.length === 0) {
        creatorGrid.innerHTML = `
            <div class="empty-state-detail" style="grid-column: 1/-1; height: auto; padding: 40px; border-style: dashed;">
                <div class="empty-icon"><i class="fa-solid fa-user-slash"></i></div>
                <h3>Kreator Tidak Ditemukan</h3>
                <p>Coba gunakan kata kunci pencarian atau kategori lain.</p>
            </div>
        `;
        return;
    }

    creatorGrid.innerHTML = filteredCreators.map(creator => {
        const isActive = activeCreator && activeCreator.id === creator.id ? "active" : "";
        const tagsHtml = creator.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
        
        return `
            <div class="creator-card ${isActive}" data-id="${creator.id}" style="--card-accent-rgb: ${creator.accentRgb}">
                <div>
                    <div class="card-top">
                        <div class="avatar-wrapper">
                            ${creator.avatarSvg}
                        </div>
                        <div class="card-info">
                            <h3 class="card-name">${creator.name}</h3>
                            <span class="card-niche">${creator.niche}</span>
                        </div>
                    </div>
                    <p class="card-desc">${creator.bio}</p>
                    <div class="card-tags">
                        ${tagsHtml}
                    </div>
                </div>
                <div class="card-footer">
                    <div class="price-range">
                        <span class="price-range-label">Mulai Dari</span>
                        <span class="price-range-value">${formatRupiah(Math.min(...creator.services.map(s => s.price)))}</span>
                    </div>
                    <div class="select-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Add click event listeners
    document.querySelectorAll(".creator-card").forEach(card => {
        card.addEventListener("click", () => {
            const creatorId = card.getAttribute("data-id");
            selectCreator(creatorId);
        });
    });
}

// --- SELECT CREATOR ---
function selectCreator(creatorId) {
    const creator = creators.find(c => c.id === creatorId);
    if (!creator) return;

    activeCreator = creator;
    selectedServices.clear(); // Reset calculator selections

    // Update root style variables for creator-specific glowing gradients
    document.documentElement.style.setProperty('--accent-rgb', creator.accentRgb);

    // Update active class on card lists
    document.querySelectorAll(".creator-card").forEach(card => {
        if (card.getAttribute("data-id") === creator.id) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    renderCreatorDetail(creator);
    
    // UI Transitions
    emptyStateDetail.classList.add("hidden");
    creatorDetailCard.classList.remove("hidden");
    
    // Mobile responsiveness drawer activate
    detailSection.classList.add("active");
    overlay.classList.add("active");
}

// --- RENDER DETAIL AREA ---
function renderCreatorDetail(creator) {
    const servicesHtml = creator.services.map(service => {
        const isSelected = selectedServices.has(service.id) ? "selected" : "";
        return `
            <div class="service-item ${isSelected}" data-service-id="${service.id}">
                <div class="service-left">
                    <div class="service-checkbox">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="service-info">
                        <span class="service-name">${service.name}</span>
                        <span class="service-desc">${service.desc}</span>
                    </div>
                </div>
                <span class="service-price">${formatRupiah(service.price)}</span>
            </div>
        `;
    }).join("");

    creatorDetailCard.innerHTML = `
        <button class="mobile-close-btn" id="mobile-close-btn">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="detail-banner"></div>
        <div class="detail-profile">
            <div class="detail-avatar-wrapper">
                ${creator.avatarSvg}
            </div>
            <div class="detail-meta">
                <div class="detail-name-row">
                    <h2 class="detail-name">${creator.name}</h2>
                    <i class="fa-solid fa-circle-check verified-badge" title="Verified Creator"></i>
                </div>
                <div class="detail-niche">${creator.niche}</div>
                <div class="creator-social-links">
                    <a href="https://instagram.com/${creator.socials.instagram.replace('@','')}" target="_blank" class="social-pill-link">
                        <i class="fa-brands fa-instagram"></i> ${creator.socials.instagram}
                    </a>
                    <a href="https://tiktok.com/${creator.socials.tiktok.replace('@','')}" target="_blank" class="social-pill-link">
                        <i class="fa-brands fa-tiktok"></i> ${creator.socials.tiktok}
                    </a>
                </div>
            </div>
        </div>

        <div class="detail-body">
            <p class="detail-bio">${creator.bio}</p>
            
            <div class="social-stats-row">
                <div class="stat-box">
                    <i class="fa-solid fa-users stat-icon"></i>
                    <span class="stat-value">${creator.stats.followers}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="stat-box">
                    <i class="fa-solid fa-bolt stat-icon"></i>
                    <span class="stat-value">${creator.stats.engagement}</span>
                    <span class="stat-label">Engagement</span>
                </div>
                <div class="stat-box">
                    <i class="fa-solid fa-briefcase stat-icon"></i>
                    <span class="stat-value">${creator.stats.projects}</span>
                    <span class="stat-label">Collabs Done</span>
                </div>
            </div>

            <div>
                <div class="services-title">
                    <span>Layanan & Rate Card</span>
                    <button class="select-all-btn" id="select-all-btn">Pilih Semua</button>
                </div>
                <div class="services-list">
                    ${servicesHtml}
                </div>
            </div>
        </div>

        <div class="detail-footer">
            <div class="calculator-summary">
                <div class="calc-label">
                    <span class="calc-title">Total Estimasi</span>
                    <span class="calc-subtitle" id="selected-count-label">0 Layanan dipilih</span>
                </div>
                <div class="calc-total" id="calc-total">Rp0</div>
            </div>
            <button class="contact-btn" id="whatsapp-order-btn">
                <i class="fa-brands fa-whatsapp"></i> Hubungi untuk Kolaborasi
            </button>
        </div>
    `;

    // Hook events inside the dynamic details panel
    setupDetailEventListeners(creator);
}

// --- SETUP DETAIL EVENT LISTENERS ---
function setupDetailEventListeners(creator) {
    // Service item click handler
    document.querySelectorAll(".service-item").forEach(item => {
        item.addEventListener("click", () => {
            const serviceId = item.getAttribute("data-service-id");
            if (selectedServices.has(serviceId)) {
                selectedServices.delete(serviceId);
                item.classList.remove("selected");
            } else {
                selectedServices.add(serviceId);
                item.classList.add("selected");
            }
            updateCalculator();
        });
    });

    // Select All button
    const selectAllBtn = document.getElementById("select-all-btn");
    selectAllBtn.addEventListener("click", () => {
        const allSelected = selectedServices.size === creator.services.length;
        document.querySelectorAll(".service-item").forEach(item => {
            const serviceId = item.getAttribute("data-service-id");
            if (allSelected) {
                selectedServices.delete(serviceId);
                item.classList.remove("selected");
            } else {
                selectedServices.add(serviceId);
                item.classList.add("selected");
            }
        });
        selectAllBtn.textContent = allSelected ? "Pilih Semua" : "Hapus Semua";
        updateCalculator();
    });

    // WhatsApp Button click
    document.getElementById("whatsapp-order-btn").addEventListener("click", () => {
        openWhatsAppChat(creator);
    });

    // Mobile Close Button
    document.getElementById("mobile-close-btn").addEventListener("click", closeMobileDrawer);
}

// --- CALCULATOR ENGINE ---
function updateCalculator() {
    if (!activeCreator) return;
    
    let total = 0;
    const selectedList = [];

    activeCreator.services.forEach(service => {
        if (selectedServices.has(service.id)) {
            total += service.price;
            selectedList.push(service.name);
        }
    });

    const totalEl = document.getElementById("calc-total");
    const countLabelEl = document.getElementById("selected-count-label");

    // Animate price change
    totalEl.classList.add("animate");
    setTimeout(() => totalEl.classList.remove("animate"), 150);

    totalEl.textContent = formatRupiah(total);
    countLabelEl.textContent = `${selectedServices.size} Layanan dipilih`;

    // Update the visual of the "Select All" button text
    const selectAllBtn = document.getElementById("select-all-btn");
    if (selectAllBtn) {
        if (selectedServices.size === activeCreator.services.length) {
            selectAllBtn.textContent = "Hapus Semua";
        } else {
            selectAllBtn.textContent = "Pilih Semua";
        }
    }
}

// --- CLOSE MOBILE DRAWER ---
function closeMobileDrawer() {
    detailSection.classList.remove("active");
    overlay.classList.remove("active");
}

// --- WHATSAPP MESSAGE FORMATTER ---
function openWhatsAppChat(creator) {
    const baseText = `Halo ${creator.name}, saya tertarik untuk bekerjasama.`;
    
    let servicesText = "";
    let totalAmount = 0;

    if (selectedServices.size > 0) {
        servicesText = "\n\nSaya ingin memesan layanan berikut:\n";
        creator.services.forEach(service => {
            if (selectedServices.has(service.id)) {
                servicesText += `- ${service.name} (${formatRupiah(service.price)})\n`;
                totalAmount += service.price;
            }
        });
        servicesText += `\n*Total Estimasi: ${formatRupiah(totalAmount)}*`;
    } else {
        servicesText = "\n\nBisa minta info lengkap mengenai slot kerjasama & detail rate card Anda?";
    }

    const footerText = `\n\nHubungi saya kembali di nomor ini ya. Terima kasih!`;
    const fullMessage = encodeURIComponent(baseText + servicesText + footerText);
    
    const whatsappUrl = `https://wa.me/${creator.socials.whatsapp}?text=${fullMessage}`;
    window.open(whatsappUrl, "_blank");
}

// --- SEARCH & FILTER SETUP ---
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCreatorList();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        selectedCategory = btn.getAttribute("data-category");
        renderCreatorList();
    });
});

// Close mobile overlay on click
overlay.addEventListener("click", closeMobileDrawer);

// --- LIGHT / DARK MODE TOGGLE ---
themeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
    }
});

// Initialize theme from storage
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
    document.body.classList.replace("dark-theme", "light-theme");
}

// --- INITIALIZE APPLICATION ---
window.addEventListener("DOMContentLoaded", () => {
    renderCreatorList();
});
