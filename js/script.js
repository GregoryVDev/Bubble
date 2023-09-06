const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleMarker = () => { // La variable BubbleMarker, est dans une fonction
    const bubble = document.createElement("span"); // On créé un élement "span"
    bubble.classList.add("bubble"); // On ajoute une class "bubble"
    document.body.appendChild(bubble); // L'enfant de body c'est bubble

    const size = Math.random() * 200 + 100 + "px"; // Variable size pour mettre un height et un width random pour avoir des bulles qui sont entre 100 et 200px
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%"; // Ca monte vers le haut un peu aléatoirement
    bubble.style.left = Math.random() * 100 + "%"; // Ca part de gauche à droite aléatoirement

    const plusMinus = Math.random() > 0.5 ? 1 : -1; // Variable plusMinus pour mettre aléatoirement l'apparition des bulles avec un if else pour que si c'est positif, ça part de gauche à droite, si c'est négatif ça part de droite à gauche (1/2)
    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%"); // tu te ballade ou sur la gauche ou sur la droite aléatoirement

    bubble.addEventListener("click", () => {
        counter++; // Chaque clique ça donne 1 
        counterDisplay.textContent = counter; // Permet d'afficher sur le h3 du HTML le nombre en direct
        bubble.remove(); // On ajoute un event click chaque fois qu'on clique sur une bulle la bulle disparait
    });

    setTimeout(() => { // Tu éclates les bulles automatiquement toutes les 8 secondes
        bubble.remove();
    }, 8000);
};

setInterval(bubbleMarker, 1000); // Toutes les 300ms il y a une bulle qui apparait