const navLinks = document.querySelectorAll('header nav a');

for (const navLink of navLinks) {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(navLink.getAttribute('href'));

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
}