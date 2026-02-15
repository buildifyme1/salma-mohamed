// ================= Navbar Toggle =================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ================= Navbar Links Close on Click =================
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
  link.addEventListener('click', () => {
    // لو القايمة مفتوحة على الموبايل
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
    }
  });
});

// ================= Navbar Scroll Shadow =================
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ================= Fade-in Animation =================
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ================= About Counter =================
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // سرعة العداد

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// ================= Gallery Lightbox =================
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const lightboxClose = document.getElementById('lightbox-close');

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// ================= Before & After Touch Support =================
const beforeAfterCards = document.querySelectorAll('.before-after-card');

beforeAfterCards.forEach(card => {
  card.addEventListener('touchstart', () => {
    card.classList.toggle('touch-active');
  });
});

// ================= WhatsApp Form =================
const whatsappForm = document.getElementById('whatsappForm');

whatsappForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  const text = `Hello, my name is ${name}.%0AService: ${service}%0APhone: ${phone}%0AMessage: ${message}`;
  const url = `https://wa.me/201000000000?text=${text}`;

  window.open(url, '_blank');
});
