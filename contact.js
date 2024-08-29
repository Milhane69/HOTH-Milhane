// contact.js

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', function (event) {
        const hoverImage = document.querySelector('.hover-image img');
        const hoverContainer = document.querySelector('.hover-image');

        hoverImage.src = this.getAttribute('data-hover');
        hoverContainer.style.display = 'block';

        // Positionner l'image près de l'icône
        const iconRect = this.getBoundingClientRect();
        hoverContainer.style.top = `${iconRect.top + window.scrollY - hoverContainer.offsetHeight - 10}px`; // Ajuste la position au-dessus de l'icône
        hoverContainer.style.left = `${iconRect.left + window.scrollX + (this.offsetWidth / 2) - (hoverContainer.offsetWidth / 2)}px`; // Centre l'image horizontalement
    });

    icon.addEventListener('mouseleave', function () {
        document.querySelector('.hover-image').style.display = 'none';
    });
});
