// Back to Top Button
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// // Dark Mode Toggle
// const darkModeToggle = document.getElementById('darkModeToggle');
// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// Slider Functionality
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function showSlide(index) {
    sliderItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
}, 3000);
