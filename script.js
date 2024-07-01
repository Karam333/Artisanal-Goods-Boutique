const images = [
    'product1.jpg',
    'images/product2.jpg',
    'images/product3.jpg'
];

let currentIndex = 0;

function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    document.getElementById('current-image').src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to the Artisanal Goods Boutique!");
});
