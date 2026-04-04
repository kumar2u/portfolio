/* ==========================================
   1. INITIAL LOAD & AOS INITIALIZATION
   ========================================== */
// document.addEventListener("DOMContentLoaded", () => {
//     // AOS (Animations) ko chalu karne ke liye
//     AOS.init({ duration: 800, once: true });

//     // Fancybox ko initialize karne ke liye
//     initFancybox();

//     // Page load hote hi default 'Social' works dikhane ke liye
//     filterWork('social');
// });
/* ==========================================
   1. INITIAL LOAD & AOS INITIALIZATION
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    // AOS ko initialize kiya (Mobile-friendly settings ke saath)
    AOS.init({ 
        duration: 800, 
        once: true,
        disable: false, // Isse mobile par bhi animation chalega
        offset: 100     // Scroll karte hi thoda jaldi trigger hoga
    });

    initFancybox();
    filterWork('social');
});

/* ==========================================
   2. PORTFOLIO FILTER SYSTEM
   ========================================== */
const behanceLinks = {
    'social': 'https://www.behance.net/gallery/221953215/Saree-Clothing-Post',
    'thumbnail': 'https://www.behance.net/gallery/215671741/YouTube-Thumbnail-For-SEO',
    'reels': 'https://www.behance.net/gallery/245829039/Reels-Thumbnails-Design',
    'banner': 'https://www.behance.net/gallery/221085785/Website-Banner',
    'logo': 'https://www.logodesign.net/logos/mover?page=2'
};

function filterWork(category, event) {
    // Buttons par 'active' class update karne ke liye
    if (event) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }

    const items = document.querySelectorAll('.work-item');

    // Exit Animation (Gayab hone ka effect)
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px) scale(0.95)';
    });

    // Layout Change (Show/Hide)
    setTimeout(() => {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.add('active-item');
                // Entrance Animation (Wapas aane ka effect)
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                }, 50);
            } else {
                item.classList.remove('active-item');
            }
        });
    }, 300);

    // Bottom link aur text update karne ke liye
    const catLabel = category.replace('-', ' ').toUpperCase();
    document.getElementById('catName').innerText = catLabel;
    document.getElementById('showAllBtn').href = behanceLinks[category];
}


/* ==========================================
   3. FANCYBOX CONFIGURATION (Full Features)
   ========================================== */
function initFancybox() {
    Fancybox.bind("[data-fancybox]", {
        infinite: true,
        hideScrollbar: true,
        Navigation: true, // Side Arrows ke liye

        Images: {
            fit: "contain",
            panMode: "drag",
            zoom: true, // Zoom enable kiya
        },

        // Toolbar mein saare features wapas add kar diye
        Toolbar: {
            display: {
                left: ["infobar"], // Wo 13/15 wala counter
                middle: [
                    "zoom",       // Zoom karne ke liye
                    "slideshow",  // Auto play ke liye
                    "fullscreen", // Poori screen par dekhne ke liye
                    "thumbs",     // Neeche saari images ki thumbnails dikhane ke liye
                ],
                right: ["close"], // Close button
            },
        },

        Carousel: {
            friction: 0.8,
        }
    });
}

/* ==========================================
   4. WHATSAPP CONTACT FORM LOGIC with dorop down logic with servics
   ========================================== */
// function sendToWhatsapp(e) {
//     e.preventDefault();

//     const name = document.getElementById('userName').value;
//     const email = document.getElementById('userEmail').value;
//     const service = document.getElementById('userService').value;
//     const subject = document.getElementById('userSubject').value;
//     const message = document.getElementById('userMessage').value;

//     const phoneNumber = "918809575764";

//     const whatsappMessage = `*🔥 New Creative Inquiry *%0A%0A` +
//         `*👤 Name:* ${name}%0A` +
//         `*📧 Email:* ${email}%0A` +
//         `*🛠 Service:* ${service}%0A` +
//         `*📌 Subject:* ${subject}%0A` +
//         `*💬 Message:* ${message}`;

//     const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
//     window.open(url, '_blank').focus();
// }
/* ==========================================
   4. WHATSAPP CONTACT FORM LOGIC (Updated)
   ========================================== */
function sendToWhatsapp(e) {
    e.preventDefault();

    // Elements ko check karte hain
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const subject = document.getElementById('userSubject').value;
    const message = document.getElementById('userMessage').value;

    // Kyunki aapne select box comment kar diya hai, 
    // isliye humne niche wali line ko hata diya ya default set kar diya hai.
    const phoneNumber = "918809575764";

    const whatsappMessage = `*🔥 New Creative Inquiry *%0A%0A` +
        `*👤 Name:* ${name}%0A` +
        `*📧 Email:* ${email}%0A` +
        `*📌 Subject:* ${subject}%0A` +
        `*💬 Message:* ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank').focus();
}
/* ==========================================
   5. MOBILE MENU & BUTTON DYNAMIC SHIFT
   ========================================== */
const toggle = document.getElementById("mobile-toggle");
const menu = document.getElementById("nav-menu");
const navBtn = document.querySelector(".nav-cta"); // Tumhara asli button
const navContainer = document.querySelector(".vortex-nav .container"); // Purani jagah

if (toggle && navBtn) {
    toggle.addEventListener("click", function () {
        const isOpen = menu.classList.toggle("active");
        toggle.classList.toggle("open");

        if (isOpen) {
            // 1. Mobile par: Button ko menu ke andar bhej do
            menu.appendChild(navBtn);
            navBtn.style.display = "flex"; 
            document.body.style.overflow = "hidden"; // Scroll lock
        } else {
            // 2. Menu band: Button ko wapas header mein le aao
            navContainer.appendChild(navBtn);
            document.body.style.overflow = "auto";
        }
    });
}

// Menu ke kisi link par click ho toh sab normal kar do
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("open");
        menu.classList.remove("active");
        navContainer.appendChild(navBtn); // Wapas header mein bhej do
        document.body.style.overflow = "auto";
    });
});

/* ==========================================
   6. BACK TO TOP BUTTON LOGIC
   ========================================== */
window.addEventListener('scroll', function () {
    const btn = document.querySelector('.back-to-top');
    if (btn) {
        if (window.scrollY > 400) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }
});

const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
