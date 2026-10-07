// The remaining page control uses no carousel, slider, or jQuery dependencies.
const scrollButton = document.querySelector('.scroll-to-top');
if (scrollButton) {
  const updateScrollButton = () => {
    scrollButton.classList.toggle('visible', window.scrollY > 300);
  };
  window.addEventListener('scroll', updateScrollButton, { passive: true });
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  });
  updateScrollButton();
}
