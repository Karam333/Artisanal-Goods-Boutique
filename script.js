document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'images/product1.jpg',
        'images/product2.jpg',
        'images/product3.jpg'
    ];

    let currentIndex = 0;
    const currentImage = document.getElementById('current-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        currentImage.src = images[currentIndex];
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage.src = images[currentIndex];
    });
});
