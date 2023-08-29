const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

console.log(images.length);
let currentIndex = 0;

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  const offset = -index * 33.33;
  carousel.style.transform = `translateX(${offset}%)`;

  currentIndex = index;
}

// Call showImage with appropriate index to display initial image
showImage(currentIndex);

// Set up event listeners for navigation
document.querySelector('.prev-btn').addEventListener('click', () => {
  showImage(currentIndex - 1);
});

document.querySelector('.next-btn').addEventListener('click', () => {
  showImage(currentIndex + 1);
});
