// transition.js

document.addEventListener('DOMContentLoaded', function() {
    barba.init({
        transitions: [{
            name: 'fade-transition',
            leave(data) {
                return new Promise(resolve => {
                    const transitionEffect = document.querySelector('.transition-effect');
                    const pageTransition = document.querySelector('.page-transition');
                    
                    if (transitionEffect) {
                        transitionEffect.classList.add('active');
                        setTimeout(() => {
                            transitionEffect.classList.remove('active');
                            resolve();
                        }, 1000); // Durée de l'animation de transition
                    } else {
                        resolve();
                    }

                    if (pageTransition) {
                        pageTransition.classList.add('active');
                        setTimeout(() => {
                            pageTransition.classList.remove('active');
                        }, 500); // Durée de la transition horizontale
                    }
                });
            },
            enter(data) {
                document.body.classList.add('fade-in');
                setTimeout(() => {
                    document.body.classList.remove('fade-in');
                }, 500); // Durée de la transition de fondu
            }
        }]
    });
});
