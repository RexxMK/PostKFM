/* BURGER TOGGLE FUNKTION med CSS ANIMATION */

/*Har lært om følgende properties og måde at opstille CSS-animationer på i
Val Head's LinkedIn Learning kursus CSS Animation: https://www.linkedin.com/learning/css-animation-14153685?u=68595258
 og på w3schools - har selv rettet dem til JS-syntax*/

/*Forkortelser ved brug af const, fordi de er konstante*/
const burgerBog = document.getElementById("burgerBog");
const bogUnder = document.getElementById("bogUnder");
const bogVenstre = document.getElementById("bogVenstre");
const bogHoejre = document.getElementById("bogHoejre");

const burgerIkon = document.getElementById("burgerIkon");
const overlayNav = document.getElementById("overlayNav");

let synlig = false;

/*Burgerfunktionen sat op med if og else for at
#burgerIkonCirkel kan bruges som toggle til både at
åbne og lukke burgermenunen og viser CSS-animation
i overgangen*/
function burgerFunktion(){
    if (synlig == false){
        /* Åbner burgermenuen */
        overlayNav.style.width = "100%";

        /* sætter CSS-animationerne i gang */
        burgerBog.style.animationPlayState = "running";
        bogUnder.style.animationPlayState = "running";
        bogVenstre.style.animationPlayState = "running";
        bogHoejre.style.animationPlayState = "running";

        
        burgerBog.style.animationDirection = "normal"; 
        bogUnder.style.animationDirection = "normal"; 
        bogVenstre.style.animationDirection = "normal"; 
        bogHoejre.style.animationDirection = "normal"; 

        synlig = true;

    }else{
        /* Lukker burgermenuen */
        overlayNav.style.width = "0%";

        /* Siger til CSS-animationer at de skal afspilles baglæns,
        altså fra 100% til 0%*/
        burgerBog.style.animationDirection = "reverse"; 
        bogUnder.style.animationDirection = "reverse"; 
        bogVenstre.style.animationDirection = "reverse"; 
        bogHoejre.style.animationDirection = "reverse";

        synlig = false;
    }    
  }

  /* Kalder funktionen (åben eller luk) ved
  klik på div'en #burgerIkonCirkel */
  burgerIkon.addEventListener("click", burgerFunktion);

 





