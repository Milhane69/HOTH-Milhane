// contact.js

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        const hoverImage = document.querySelector('.hover-image img');
        const hoverContainer = document.querySelector('.hover-image');

        hoverImage.src = this.getAttribute('data-hover');
        hoverContainer.style.display = 'block';

        // Positionner l'image près de l'icône
        hoverContainer.style.top = `${this.offsetTop + 60}px`; // Ajuste la position
        hoverContainer.style.left = `${this.offsetLeft - 50}px`; // Ajuste la position
    });

    icon.addEventListener('mouseleave', function () {
        document.querySelector('.hover-image').style.display = 'none';
    });
});
