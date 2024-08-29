// contact.js

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function (event) {
        const hoverImage = document.querySelector('.hover-image img');
        const hoverContainer = document.querySelector('.hover-image');

        hoverImage.src = this.getAttribute('data-hover');
        hoverContainer.style.display = 'block';

        // Positionner l'image près de l'icône en ajustant pour le survol
        const iconRect = this.getBoundingClientRect();
        hoverContainer.style.top = `${iconRect.bottom + window.scrollY + 10}px`; // Ajuste la position sous l'icône
        hoverContainer.style.left = `${iconRect.left + window.scrollX + (this.offsetWidth / 2) - (hoverContainer.offsetWidth / 2)}px`; // Centre l'image sous l'icône
    });

    icon.addEventListener('mouseleave', function () {
        document.querySelector('.hover-image').style.display = 'none';
    });
});

// Pour faire suivre l'image de survol avec la souris lors du mouvement
document.addEventListener('mousemove', function (event) {
    const hoverContainer = document.querySelector('.hover-image');
    const iconRect = document.querySelector('.icon:hover')?.getBoundingClientRect();

    if (iconRect) {
        hoverContainer.style.top = `${event.clientY + 10}px`; // Positionne l'image 10px au-dessous de la souris
        hoverContainer.style.left = `${event.clientX - (hoverContainer.offsetWidth / 2)}px`; // Centre l'image horizontalement sur la souris
    }
});
