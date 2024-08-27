// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', function() {
        this.classList.toggle('open');
    });
});
