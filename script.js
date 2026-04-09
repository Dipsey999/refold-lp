// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form handler
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sent!';
    btn.style.background = '#0057ff';
    setTimeout(() => {
      btn.textContent = 'Book a Demo';
      btn.style.background = '';
      form.reset();
    }, 2000);
  });
}

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
