let activeImages = document.querySelectorAll('.active');
let hoverImages = document.querySelectorAll('.hover');
let hereImage = document.querySelector('.here');

activeImages.forEach((img) => {
    img.onclick = function () {
        hereImage.src = this.src;
    }
});

hoverImages.forEach((img) => {
    img.onmouseenter = function () {
        hereImage.src = this.src;
    }
});
