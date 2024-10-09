
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('header');

    if (window.scrollY > lastScrollY) {
      navbar.classList.add('-translate-y-full');
      setTimeout(() => {
        navbar.classList.remove('-translate-y-full');
        navbar.classList.add('translate-y-0');
      }, 300);
    } else {
      navbar.classList.remove('-translate-y-full');
      navbar.classList.add('translate-y-0');
    }

    lastScrollY = window.scrollY;
  });
