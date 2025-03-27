const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  if (currentIndex < totalItems - 4) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`;
  }
});