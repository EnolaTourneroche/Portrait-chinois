//PORTRAIT
var listeAnalogiesContainer = document.querySelector(".liste-analogies");
//var valeursAnalogies 
var numCase = 0;
data.forEach(function (data) {
    listeAnalogiesContainer.innerHTML = listeAnalogiesContainer.innerHTML + '<section id="' + data.id + '" class="AA"><section class="A1"><h2>Si j’étais ' + data.analogie + ', je serais ' + data.valeurAnalogie + '.</h2></section>' + ' <section class="A2">' + data.url + '<p>' + data.text + '</p</section><section>'
    console.log("Si j'étais " + data.analogie + numCase);
    numCase = numCase + 1
})



// Sélectionne tous les champs de formulaire nécessaires
let analogieInput = document.querySelector("#Analogie");
let valeurAnalogieInput = document.querySelector("#valeurAnalogie");
let justificationInput = document.querySelector("#Justification");
let imageInput = document.querySelector("#Image");
let emailInput = document.querySelector("#Email");

// Sélectionne le bouton de validation
let validerButton = document.querySelector(".Valider");

// Écoute l'événement clic sur le bouton de validation
validerButton.addEventListener("click", function () {
    // Récupère les valeurs des champs du formulaire
    let analogieValue = analogieInput.value;
    let valeurAnalogieValue = valeurAnalogieInput.value;
    let justificationValue = justificationInput.value;
    let imageUrlValue = imageInput.value;
    let emailValue = emailInput.value;

    // Crée une nouvelle catégorie avec les données du formulaire
    let listeAnalogiesContainer = document.querySelector(".liste-analogies");
    listeAnalogiesContainer.innerHTML += '<section class="AA"><section class="A1"><h2>Si j’étais ' + analogieValue + ', je serais ' + valeurAnalogieValue + '.</h2></section><section class="A2"><img src="' + imageUrlValue + '" alt="Image"><p>' + justificationValue + '</p></section></section>'; 

    // Envoi de la requête vers l'API de Philippe Gambette via l'URL
    let url = 'http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=tourneroche&courriel=' + emailValue + '&message=Si j\'étais ' + analogieValue + ' je serais ' + valeurAnalogieValue + ' car ' + justificationValue + ' UrlImage:' + imageUrlValue;
    console.log(url);

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log("Réponse reçue : ");
            console.log(data);
        })
    });
});

//FORMULAIRE
// document.addEventListener('keyup', function(analogie){
//     console.log("Touche relachée")

//     document.querySelector('#analogie').value;
//     console.log(document.querySelector('#analogie').value)
// })

//MENU
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//CARROUSEL
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

//POP UP Mentions légales 
var overlay = document.getElementById("overlay");
document.querySelector("#show-modal").addEventListener("click", () => {
    overlay.style.display = "block";
});

document.querySelector("#close-modal").addEventListener("click", () => {
    overlay.style.display = "none";
}); 

//POP UP Crédits 
var overlay2 = document.getElementById("overlay2");
document.querySelector("#show-crédits").addEventListener("click", () => {
    overlay2.style.display = "block";
});

document.querySelector("#close-crédits").addEventListener("click", () => {
    overlay2.style.display = "none";
}); 



