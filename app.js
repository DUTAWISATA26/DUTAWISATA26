// --- DATASET CREATORS (20 batam creators: 10 Encik & 10 Puan) ---
const creators = [
    {
        id: "arya",
        name: "Arya Syaputra",
        gender: "encik",
        niche: "Content Creator | Model",
        bio: "Encik 1 Batam 2025. Berpengalaman di bidang modeling, promosi brand lokal, runway, dan pembuatan konten kreatif bertema lifestyle & fashion.",
        tags: ["Pageant", "Model", "Lifestyle"],
        accentRgb: "212, 175, 55", // Gold Accent
        stats: {
            followers: "12.5K",
            engagement: "4.8%",
            projects: "40+"
        },
        socials: {
            instagram: "@aryasyaputra",
            tiktok: "@aryasyaputra",
            whatsapp: "6281234567890"
        },
        services: [
            { id: "ig-story", name: "Instagram Story", desc: "1x Posting, tag brand + Link swipe up. Aktif 24 jam.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed", desc: "1x Posting foto/carousel, tag brand & mention di caption. Minimal 30 hari.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Video", desc: "1x Video review/aesthetic (15-60 detik), high quality edit.", price: 500000 }
        ],
        avatarImg: "assets/img3.png" // Professional close-up studio portrait
    },
    {
        id: "fikri",
        name: "Fikri Pose",
        gender: "encik",
        niche: "Content Creator | Fashion Model",
        bio: "Influencer bertema fashion pria yang berfokus pada ulasan outfit harian (OOTD), batik modern lokal, serta gaya hidup kasual anak muda Batam.",
        tags: ["Fashion", "Model", "Batik"],
        accentRgb: "236, 72, 153", // Pink Accent
        stats: {
            followers: "10.2K",
            engagement: "5.1%",
            projects: "30+"
        },
        socials: {
            instagram: "@fikripose",
            tiktok: "@fikri.pose",
            whatsapp: "6285566778899"
        },
        services: [
            { id: "ig-story", name: "Instagram Story", desc: "1x Posting dengan tag brand + tautan promo.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed (OOTD)", desc: "1x Posting foto berkonsep fashion lookbook/casual style.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Video", desc: "Video review produk fashion pria, unboxing, dan styling tips.", price: 500000 }
        ],
        avatarImg: "assets/img4.png" // Selfie profile
    },
    {
        id: "nabiley",
        name: "Nabiley",
        gender: "puan",
        niche: "Content Creator | Lifestyle Model",
        bio: "Model dan content creator berambut ikal dengan gaya unik. Berfokus pada konten lifestyle, food traveling, dan review spot nongkrong estetik di Batam.",
        tags: ["Lifestyle", "Travel", "Curly"],
        accentRgb: "249, 115, 22", // Orange Accent
        stats: {
            followers: "15.4K",
            engagement: "5.5%",
            projects: "50+"
        },
        socials: {
            instagram: "@nabiley",
            tiktok: "@nabiley.vlog",
            whatsapp: "6281122334455"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Visit", desc: "1x Story foto/video langsung di lokasi cafe/resto/toko.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Review", desc: "1x Posting feed foto aesthetic di tempat atau dengan produk Anda.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Review", desc: "Video review berdurasi 30-60 detik dengan voiceover interaktif.", price: 500000 }
        ],
        avatarImg: "assets/img1.png" // Grand Batam Mall photo
    },
    {
        id: "alfajar",
        name: "Alfajar Madani",
        gender: "encik",
        niche: "Professional Model | Content Creator",
        bio: "Model komersial profesional yang berspesialisasi dalam pose studio, runway modeling, menswear katalog, dan promosi produk lifestyle.",
        tags: ["Runway", "Photoshoot", "Style"],
        accentRgb: "6, 182, 212", // Cyan Accent
        stats: {
            followers: "18.1K",
            engagement: "6.2%",
            projects: "75+"
        },
        socials: {
            instagram: "@alfajar",
            tiktok: "@alfajar.style",
            whatsapp: "6289876543210"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Promo", desc: "1x Posting, ulasan singkat produk, stiker interaktif.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Studio", desc: "1x Posting foto katalog profesional beresolusi tinggi.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Showcase", desc: "Video cinematic aesthetic memamerkan produk menswear/aksesoris.", price: 500000 }
        ],
        avatarImg: "assets/img2.png" // Full body studio pose
    },
    {
        id: "dinda",
        name: "Dinda Lestari",
        gender: "puan",
        niche: "Pageant | Lifestyle Influencer",
        bio: "Puan 1 Batam 2025. Aktif mempromosikan pariwisata Batam, fashion hijab modern, serta brand kecantikan lokal.",
        tags: ["Pageant", "Hijab", "Lifestyle"],
        accentRgb: "236, 72, 153", // Pink Accent
        stats: {
            followers: "15.2K",
            engagement: "5.1%",
            projects: "35+"
        },
        socials: {
            instagram: "@dindalestari",
            tiktok: "@dindalestari",
            whatsapp: "6281234567891"
        },
        services: [
            { id: "ig-story", name: "Instagram Story", desc: "1x Posting dengan tag brand + tautan promo.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed (OOTD)", desc: "1x Posting foto berkonsep fashion lookbook/casual style.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Video", desc: "Video review produk fashion hijab, unboxing, dan styling tips.", price: 500000 }
        ]
    },
    {
        id: "siti",
        name: "Siti Rahma",
        gender: "puan",
        niche: "Hijab Fashion & Beauty Creator",
        bio: "Puan Harapan 1 Batam 2025. Berfokus pada konten daily hijab styling, modest fashion, dan review produk skincare halal.",
        tags: ["Hijab", "Beauty", "Skincare"],
        accentRgb: "244, 63, 94", // Rose Accent
        stats: {
            followers: "22.4K",
            engagement: "5.7%",
            projects: "60+"
        },
        socials: {
            instagram: "@sitirahma",
            tiktok: "@sitirahma.beauty",
            whatsapp: "6281234567892"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Promo", desc: "1x Story video, tag brand + stiker interaktif.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Carousel", desc: "1x Post feed (multiple photos), review detail di caption.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Video Review", desc: "Video review skincare/makeup transisi estetik.", price: 500000 }
        ]
    },
    {
        id: "bagas",
        name: "Bagas Aditya",
        gender: "encik",
        niche: "Travel & Culinary Vlog",
        bio: "Encik Batam Persahabatan 2025. Senang menjelajahi destinasi wisata dan cafe aesthetic baru di Batam dan Kepulauan Riau.",
        tags: ["Travel", "Culinary", "Vlog"],
        accentRgb: "16, 185, 129", // Emerald Accent
        stats: {
            followers: "14.8K",
            engagement: "4.9%",
            projects: "45+"
        },
        socials: {
            instagram: "@bagasaditya",
            tiktok: "@bagas.explore",
            whatsapp: "6281234567893"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Visit", desc: "1x Posting IG Story live di lokasi wisata/resto.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Photo", desc: "1x Posting feed foto aesthetic di lokasi brand.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Cafe Review", desc: "Video review vibes cafe/spot wisata durasi 30-60 detik.", price: 500000 }
        ]
    },
    {
        id: "nadia",
        name: "Nadia Safitri",
        gender: "puan",
        niche: "Beauty & Makeup Artist",
        bio: "Puan Fotogenik Batam 2025. MUA profesional yang sering membagikan tips makeup, tutorial look transisi, dan review produk kecantikan.",
        tags: ["Beauty", "Makeup", "MUA"],
        accentRgb: "217, 70, 239", // Fuchsia Accent
        stats: {
            followers: "25.6K",
            engagement: "6.0%",
            projects: "80+"
            },
        socials: {
            instagram: "@nadiasafitri",
            tiktok: "@nadia.makeup",
            whatsapp: "6281234567894"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Tutorial", desc: "1x Story video mini-tutorial menggunakan produk.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Lookbook", desc: "1x Posting foto hasil riasan/look makeup.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Transformation", desc: "Video transisi makeup before-after yang cinematic.", price: 500000 }
        ]
    },
    {
        id: "reza",
        name: "Reza Mahendra",
        gender: "encik",
        niche: "Fitness & Lifestyle Creator",
        bio: "Encik Batam 2025 Runner Up 1. Menginspirasi gaya hidup sehat, workout routine di gym, serta tips nutrisi seimbang untuk anak muda.",
        tags: ["Fitness", "Lifestyle", "Gym"],
        accentRgb: "239, 68, 68", // Red Accent
        stats: {
            followers: "16.3K",
            engagement: "5.2%",
            projects: "50+"
        },
        socials: {
            instagram: "@rezamahendra",
            tiktok: "@reza.fit",
            whatsapp: "6281234567895"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Gym Promo", desc: "1x Story review produk suplemen/healthy food.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Product Post", desc: "1x Posting foto feed bertema activewear/fitness gym.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Workout", desc: "Video routine workout memamerkan produk brand.", price: 500000 }
        ]
    },
    {
        id: "aisyah",
        name: "Aisyah Putri",
        gender: "puan",
        niche: "Food & Cafe Reviewer",
        bio: "Food vlogger Batam yang membagikan rekomendasi makanan lezat mulai dari street food legendaris hingga restoran bintang lima.",
        tags: ["Culinary", "Foodies", "Review"],
        accentRgb: "245, 158, 11", // Amber Accent
        stats: {
            followers: "30.5K",
            engagement: "5.9%",
            projects: "95+"
        },
        socials: {
            instagram: "@aisyahputri.eat",
            tiktok: "@aisyah.makan",
            whatsapp: "6281234567896"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Food Review", desc: "1x Live story ulasan rasa makanan/ambience.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Photo Review", desc: "1x Post feed foto makanan dengan caption ulasan lengkap.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Kuliner Vlog", desc: "Video review makanan cinematic menggugah selera.", price: 500000 }
        ]
    },
    {
        id: "farhan",
        name: "Farhan Alfarizi",
        gender: "encik",
        niche: "Photography & Creative Director",
        bio: "Visual creator yang berfokus pada street photography Batam, cinematic video, dan ulasan kamera/gear kreatif.",
        tags: ["Creative", "Cinematic", "Visual"],
        accentRgb: "59, 130, 246", // Blue Accent
        stats: {
            followers: "19.4K",
            engagement: "4.5%",
            projects: "70+"
        },
        socials: {
            instagram: "@farhanalfarizi",
            tiktok: "@farhan.visuals",
            whatsapp: "6281234567897"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Behind The Scenes", desc: "1x Story proses shoot kreatif brand.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Creative Photo", desc: "1x Posting foto komersial berkonsep unik.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Cinematic Video", desc: "Video pendek komersial bertema cinematic aesthetic.", price: 500000 }
        ]
    },
    {
        id: "putri",
        name: "Putri Handayani",
        gender: "puan",
        niche: "Traditional Dance & Culture",
        bio: "Puan Batam 2025 Runner Up 2. Penari tradisional Melayu profesional yang giat melestarikan seni dan kebudayaan Kepulauan Riau.",
        tags: ["Culture", "Dance", "Melayu"],
        accentRgb: "20, 184, 166", // Teal Accent
        stats: {
            followers: "11.2K",
            engagement: "5.3%",
            projects: "25+"
        },
        socials: {
            instagram: "@putrihandayani",
            tiktok: "@putri.melayu",
            whatsapp: "6281234567898"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Event Promo", desc: "1x Story mempromosikan event budaya/brand.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Performance", desc: "1x Post feed foto mengenakan baju adat/batik daerah.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Dance Cover", desc: "Video cover tari Melayu kontemporer estetik.", price: 500000 }
        ]
    },
    {
        id: "rizky_h",
        name: "Rizky Hidayat",
        gender: "encik",
        niche: "Automotive & Travel",
        bio: "Antusias otomotif yang membagikan konten review motor/mobil modifikasi, road trip keliling Kepri, dan tips perawatan kendaraan.",
        tags: ["Automotive", "Roadtrip", "Lifestyle"],
        accentRgb: "107, 114, 128", // Gray Accent
        stats: {
            followers: "13.7K",
            engagement: "4.7%",
            projects: "32+"
        },
        socials: {
            instagram: "@rizkyhidayat",
            tiktok: "@rizky.garage",
            whatsapp: "6281234567899"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Driving Vlog", desc: "1x Story road trip santai mengulas performa brand.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Vehicle Review", desc: "1x Post feed foto estetik kendaraan/aksesoris.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Automotive Action", desc: "Video cinematic review modifikasi & test drive.", price: 500000 }
        ]
    },
    {
        id: "indah",
        name: "Indah Permatasari",
        gender: "puan",
        niche: "Travel & Photography",
        bio: "Pelepas penat melalui jepretan foto pemandangan indah Batam. Sering membagikan spot foto instagramable tersembunyi.",
        tags: ["Travel", "Photography", "Aesthetic"],
        accentRgb: "34, 197, 94", // Green Accent
        stats: {
            followers: "17.5K",
            engagement: "5.4%",
            projects: "48+"
        },
        socials: {
            instagram: "@indahpermatasari",
            tiktok: "@indah.travel",
            whatsapp: "6281234567900"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Location Tag", desc: "1x Story membagikan spot menarik dengan tag lokasi.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Landscape Photo", desc: "1x Post foto aesthetic landscape.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Cinematic Travel", desc: "Video travel vlog estetik berdurasi 30-45 detik.", price: 500000 }
        ]
    },
    {
        id: "dimas",
        name: "Dimas Nugraha",
        gender: "encik",
        niche: "Music & Event Host",
        bio: "Encik Batam Berbakat 2025. Vokalis band lokal dan MC profesional yang aktif memandu event-event besar pariwisata di Batam.",
        tags: ["Music", "MC", "Entertainment"],
        accentRgb: "99, 102, 241", // Indigo Accent
        stats: {
            followers: "14.2K",
            engagement: "5.0%",
            projects: "55+"
        },
        socials: {
            instagram: "@dimasnugraha",
            tiktok: "@dimas.singer",
            whatsapp: "6281234567901"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Event Coverage", desc: "1x Story live memandu event atau review brand.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Music Cover", desc: "1x Post feed cuplikan bernyanyi/performing di panggung.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Event MC Promo", desc: "Video cinematic recap keseruan memandu event brand.", price: 500000 }
        ]
    },
    {
        id: "tari",
        name: "Tari Anggraini",
        gender: "puan",
        niche: "Wellness & Yoga Coach",
        bio: "Puan Batam Persahabatan 2025. Instruktur yoga berlisensi yang mengedukasi masyarakat tentang kesehatan mental and kebugaran tubuh.",
        tags: ["Wellness", "Yoga", "Mindfulness"],
        accentRgb: "14, 165, 233", // Sky Accent
        stats: {
            followers: "12.8K",
            engagement: "4.6%",
            projects: "38+"
        },
        socials: {
            instagram: "@tarianggraini",
            tiktok: "@tari.wellness",
            whatsapp: "6281234567902"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Mindfulness Tip", desc: "1x Story tips rileksasi harian.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Yoga Pose", desc: "1x Post foto yoga pose estetik.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Workout Routine", desc: "Video tips peregangan/yoga pemula durasi 30-45 detik.", price: 500000 }
        ]
    },
    {
        id: "gathan",
        name: "Gathan Khalid",
        gender: "encik",
        niche: "Streetwear & Sneakerhead",
        bio: "Kolektor sneaker dan penikmat fashion streetwear. Membagikan inspirasi mix and match outfit kekinian untuk anak muda Batam.",
        tags: ["Streetwear", "Sneakers", "Fashion"],
        accentRgb: "79, 70, 229", // Indigo-dark Accent
        stats: {
            followers: "15.9K",
            engagement: "5.8%",
            projects: "42+"
        },
        socials: {
            instagram: "@gathankhalid",
            tiktok: "@gathan.fit",
            whatsapp: "6281234567903"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Sneaker Review", desc: "1x Story unboxing/sneak-peek sepatu terbaru.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Streetwear OOTD", desc: "1x Post feed foto gaya OOTD streetwear di perkotaan.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Styling Video", desc: "Video transisi ganti baju (styling ideas).", price: 500000 }
        ]
    },
    {
        id: "syifa",
        name: "Syifa Aulia",
        gender: "puan",
        niche: "Baking & Dessert Creator",
        bio: "Home baker Batam yang hobi membagikan resep kue cantik, review alat baking, serta tips sukses berbisnis kuliner rumahan.",
        tags: ["Baking", "Desserts", "Recipes"],
        accentRgb: "236, 72, 153", // Pink Accent
        stats: {
            followers: "27.8K",
            engagement: "6.1%",
            projects: "85+"
        },
        socials: {
            instagram: "@syifaaulia.bakes",
            tiktok: "@syifa.baking",
            whatsapp: "6281234567904"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Baking Tips", desc: "1x Story tips dapur/bahan kue berkualitas.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Recipe Post", desc: "1x Post feed foto kue hasil baking.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Baking Tutorial", desc: "Video tutorial menghias cake/kue aesthetic.", price: 500000 }
        ]
    },
    {
        id: "rian",
        name: "Rian Hidayat",
        gender: "encik",
        niche: "Outdoor & Camping Vlogger",
        bio: "Pecinta alam yang suka mendaki gunung dan camping ceria. Membagikan tips survival, review perlengkapan outdoor, dan keindahan alam Kepri.",
        tags: ["Outdoor", "Camping", "Adventure"],
        accentRgb: "120, 113, 108", // Stone Accent
        stats: {
            followers: "11.9K",
            engagement: "4.9%",
            projects: "28+"
        },
        socials: {
            instagram: "@rianhidayat",
            tiktok: "@rian.outdoor",
            whatsapp: "6281234567905"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Camping Gear", desc: "1x Story merekomendasikan alat mendaki.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Adventure Photo", desc: "1x Post feed foto camping aesthetic.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Hiking Trip", desc: "Video vlog perjalanan mendaki puncak bukit Kepri.", price: 500000 }
        ]
    },
    {
        id: "tania",
        name: "Tania Clarissa",
        gender: "puan",
        niche: "Fashion & Accessories Designer",
        bio: "Puan Intelegensia Batam 2025. Desainer perhiasan hand-made yang membagikan proses kreatif pembuatan aksesoris etnik modern.",
        tags: ["Fashion", "Accessories", "Art"],
        accentRgb: "217, 119, 6", // Amber Accent
        stats: {
            followers: "14.1K",
            engagement: "5.0%",
            projects: "36+"
        },
        socials: {
            instagram: "@taniaclarissa",
            tiktok: "@tania.design",
            whatsapp: "6281234567906"
        },
        services: [
            { id: "ig-story", name: "Instagram Story Crafting Process", desc: "1x Story membagikan proses hand-crafting perhiasan.", price: 500000 },
            { id: "ig-feed", name: "Instagram Feed Jewelry Catalog", desc: "1x Post foto produk perhiasan etnik premium.", price: 500000 },
            { id: "reels-tiktok", name: "Reels / TikTok Styling Tips", desc: "Video tips memadukan aksesoris dengan gaun batik/melayu.", price: 500000 }
        ]
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

// Mobile drawer overlay setup
const overlay = document.createElement("div");
overlay.className = "detail-overlay";
document.body.appendChild(overlay);

// --- UTILITY FUNCTIONS ---
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

// Generate beautiful initials avatar with glowing gradient or use base64 image if available
function getAvatarHtml(creator) {
    if (creator.avatarImg) {
        return `<img src="${creator.avatarImg}" alt="${creator.name}" class="avatar-img">`;
    } else {
        const initials = creator.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        return `
        <svg class="avatar-svg-placeholder" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-${creator.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="rgb(${creator.accentRgb})"/>
                    <stop offset="100%" stop-color="rgba(${creator.accentRgb}, 0.5)"/>
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad-${creator.id})"/>
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="'Outfit', sans-serif" font-weight="800" font-size="32">${initials}</text>
        </svg>
        `;
    }
}

// --- RENDER FUNCTION ---
function renderCreatorList() {
    const filteredCreators = creators.filter(creator => {
        const matchesCategory = selectedCategory === "all" || 
            creator.gender === selectedCategory;
        
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
        const avatarHtml = getAvatarHtml(creator);
        
        return `
            <div class="creator-card ${isActive}" data-id="${creator.id}" style="--card-accent-rgb: ${creator.accentRgb}">
                <div>
                    <div class="card-top">
                        <div class="avatar-wrapper">
                            ${avatarHtml}
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
                    <span style="font-size: 0.8rem; font-weight: 700; color: rgb(var(--card-accent-rgb, var(--accent-rgb))); letter-spacing: 0.5px; text-transform: uppercase;">Lihat Detail</span>
                    <div class="select-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Add click listeners to cards
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
    selectedServices.clear(); // Clear selections

    // Apply accent theme coloring
    document.documentElement.style.setProperty('--accent-rgb', creator.accentRgb);

    document.querySelectorAll(".creator-card").forEach(card => {
        if (card.getAttribute("data-id") === creator.id) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    renderCreatorDetail(creator);
    
    emptyStateDetail.classList.add("hidden");
    creatorDetailCard.classList.remove("hidden");
    
    // Drawer overlay behavior on mobile
    detailSection.classList.add("active");
    overlay.classList.add("active");
}

// --- RENDER DETAIL COMPONENT ---
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
                ${getAvatarHtml(creator)}
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
                <div class="calc-total" id="calc-total" style="font-size: 1.1rem;">Info Selengkapnya</div>
            </div>
            <button class="contact-btn" id="whatsapp-order-btn">
                <i class="fa-brands fa-whatsapp"></i> Hubungi untuk Kolaborasi
            </button>
        </div>
    `;

    setupDetailEventListeners(creator);
}

// --- HOOK LISTENERS ---
function setupDetailEventListeners(creator) {
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

    document.getElementById("whatsapp-order-btn").addEventListener("click", () => {
        openWhatsAppChat(creator);
    });

    document.getElementById("mobile-close-btn").addEventListener("click", closeMobileDrawer);
}

// --- CALCULATOR CALCULATION ---
function updateCalculator() {
    if (!activeCreator) return;

    const totalEl = document.getElementById("calc-total");
    const countLabelEl = document.getElementById("selected-count-label");

    totalEl.classList.add("animate");
    setTimeout(() => totalEl.classList.remove("animate"), 150);

    totalEl.textContent = "Info Selengkapnya";
    totalEl.style.fontSize = "1.1rem";
    countLabelEl.textContent = `${selectedServices.size} Layanan dipilih`;

    const selectAllBtn = document.getElementById("select-all-btn");
    if (selectAllBtn) {
        if (selectedServices.size === activeCreator.services.length) {
            selectAllBtn.textContent = "Hapus Semua";
        } else {
            selectAllBtn.textContent = "Pilih Semua";
        }
    }
}

// --- MOBILE DRAWER CLOSE ---
function closeMobileDrawer() {
    detailSection.classList.remove("active");
    overlay.classList.remove("active");
}

// --- WHATSAPP TEXT BUILDER ---
function openWhatsAppChat(creator) {
    const baseText = `Halo ${creator.name}, saya tertarik untuk bekerjasama.`;
    let servicesText = "";

    if (selectedServices.size > 0) {
        servicesText = "\n\nSaya ingin memesan layanan berikut:\n";
        creator.services.forEach(service => {
            if (selectedServices.has(service.id)) {
                servicesText += `- ${service.name}\n`;
            }
        });
        servicesText += `\n*Bisa minta info selengkapnya mengenai ketersediaan slot & detail kerjasama?*`;
    } else {
        servicesText = "\n\nBisa minta info lengkap mengenai slot kerjasama & detail rate card Anda?";
    }

    const footerText = `\n\nHubungi saya kembali di nomor ini ya. Terima kasih!`;
    const fullMessage = encodeURIComponent(baseText + servicesText + footerText);
    const whatsappUrl = `https://wa.me/${creator.socials.whatsapp}?text=${fullMessage}`;
    window.open(whatsappUrl, "_blank");
}

// --- SEARCH & FILTER LISTENERS ---
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

overlay.addEventListener("click", closeMobileDrawer);

// --- THEME TOGGLE ---
themeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
    }
});

const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
    document.body.classList.replace("dark-theme", "light-theme");
}

// --- INIT ---
window.addEventListener("DOMContentLoaded", () => {
    renderCreatorList();
});