// ===========================================================
// SS GLOBAL SOLUTIONS — main.js
// ===========================================================

document.addEventListener('DOMContentLoaded', function () {

  // Init AOS (scroll animations) if loaded
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }

  // Navbar shadow on scroll
  var nav = document.querySelector('.site-navbar');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  }

  // Collapse mobile menu after clicking a link
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var collapseEl = document.querySelector('.navbar-collapse');
      if (collapseEl && collapseEl.classList.contains('show') && window.bootstrap) {
        var bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
        bsCollapse.hide();
      }
    });
  });

  // Animated counters (e.g. Placement Pulse panel, trust strip)
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    var animateCounter = function (el) {
      var target = parseFloat(el.getAttribute('data-counter'));
      var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
      var duration = 1400;
      var start = null;

      var step = function (ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = target * eased;
        el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value).toLocaleString('en-IN');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = decimals ? target.toFixed(decimals) : target.toLocaleString('en-IN');
        }
      };
      window.requestAnimationFrame(step);
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  // Set current year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Highlight active nav link based on current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-navbar .nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Simple client-side validation feedback for the contact form
  var contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      contactForm.classList.add('was-validated');
    });
  }

});
