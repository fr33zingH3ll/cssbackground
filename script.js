// ...

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Sélectionnez la zone des bulles
const bullesContainer = document.querySelector('.bulles-container');
const largeurConteneur = bullesContainer.clientWidth;
const hauteurConteneur = bullesContainer.clientHeight;

// Fonction pour créer une bulle avec taille, position et couleur aléatoires
function creerBulle() {
    const bulle = document.createElement('div');
    bulle.classList.add('bulle');

    // Générez des tailles aléatoires (entre 10px et 100px de diamètre)
    const taille = getRandomInRange(10, 100);
    bulle.style.width = `${taille}px`;
    bulle.style.height = `${taille}px`;

    // Générez des positions initiales aléatoires en pixels
    const positionLeft = getRandomInRange(0, window.innerWidth - taille);
    const positionTop = getRandomInRange(0, window.innerHeight - taille);
    bulle.style.left = `${positionLeft}px`;
    bulle.style.top = `${positionTop}px`;

    // Générez une couleur de fond aléatoire
    const couleur = `rgb(${Math.random() * 256}, ${Math.random() * 256}, 0.5)`;
    bulle.style.backgroundColor = couleur;

    var vitesse = getRandomInRange(3, 7); // Vitesse de déplacement réduite
    var directionX = getRandomInRange(-1, 1); // Direction horizontale aléatoire
    var directionY = getRandomInRange(-1, 1); // Direction verticale aléatoire

    // Ajoutez la bulle à la zone des bulles
    bullesContainer.appendChild(bulle);

   function deplacerBulle() {
        

        let left = parseFloat(bulle.style.left);
        let top = parseFloat(bulle.style.top);

        // Vérifiez et ajustez la position pour les collisions avec les bords du conteneur des bulles
        if (left < 0 || left + taille > largeurConteneur) {
            directionX *= -1; // Inversez la direction horizontale en cas de collision
            vitesse = getRandomInRange(3, 7); // Vitesse de déplacement réduite
        }
        if (top < 0 || top + taille > hauteurConteneur) {
            directionY *= -1; // Inversez la direction verticale en cas de collision
            vitesse = getRandomInRange(3, 7); // Vitesse de déplacement réduite
        }

        // Mettez à jour la position en fonction de la direction et de la vitesse
        left += directionX * vitesse;
        top += directionY * vitesse;

        

        bulle.style.left = `${left}px`;
        bulle.style.top = `${top}px`;

        // Appelez récursivement la fonction pour créer une animation fluide
        requestAnimationFrame(deplacerBulle);
   } 
   
    // Commencez le déplacement de la bulle
    deplacerBulle();
}

// Créez 10 bulles avec taille, position et couleur aléatoires
for (let i = 0; i < 20; i++) {
    creerBulle();
}


// Sélectionnez tous les boutons du menu
const buttons = document.querySelectorAll('header ul li a');

// Ajoutez un gestionnaire d'événements au clic sur chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Ajoutez la classe "clicked" au bouton
        button.classList.add('clicked');

        // Supprimez la classe "clicked" après un certain délai (par exemple, 500ms)
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 500); // 500ms
    });
});

// Sélectionnez le bouton de défilement vers le haut
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Ajoutez un gestionnaire d'événements au bouton pour le clic
scrollToTopBtn.addEventListener("click", () => {
    // Faites défiler la page vers le haut en utilisant smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Ajoutez un gestionnaire d'événements pour détecter la position de défilement
window.addEventListener("scroll", () => {
    // Affichez/masquez le bouton en fonction de la position de défilement
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Sélectionnez tous les liens du menu
const menuLinks = document.querySelectorAll('header ul li a');

// Parcourez chaque lien du menu
menuLinks.forEach(link => {
    // Ajoutez un gestionnaire d'événement pour le clic
    link.addEventListener('click', e => {
        // Empêchez le comportement de lien par défaut
        e.preventDefault();

        // Récupérez l'ID de la section cible depuis l'attribut href du lien
        const targetID = link.getAttribute('href').substring(1);

        // Sélectionnez la section cible par son ID
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            // Faites défiler la page jusqu'à la section cible avec un effet de défilement en douceur
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});