const scrollCovers = document.querySelectorAll('.scroll-cover') /*section want to have cover effect */

function isElementViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateScrollCovers() {
  scrollCovers.forEach((cover) => {
    if (isElementViewport(cover)) {
      cover.classList.add('animate-cover'); /*cover effect exist when in the viewpoint*/
    } else {
      cover.classList.remove('animate-cover');
    }
  });
}

// when user scroll, call function isElementViewpoint to check user viewpoint
window.addEventListener('load', animateScrollCovers);
window.addEventListener('scroll', animateScrollCovers);