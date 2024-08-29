document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            const hoverImage = document.querySelector('.hover-image img');
            const hoverContainer = document.querySelector('.hover-image');

            hoverImage.src = this.getAttribute('data-hover');
            hoverContainer.style.display = 'block';

            // Positionner l'image près de l'icône
            const rect = this.getBoundingClientRect();
            hoverContainer.style.top = `${rect.top + window.scrollY + 60}px`; // Ajuste la position
            hoverContainer.style.left = `${rect.left + window.scrollX - 50}px`; // Ajuste la position
        });

        icon.addEventListener('mouseleave', function () {
            document.querySelector('.hover-image').style.display = 'none';
        });
    });
});
