

//RUL EN BOG
const vistBog = document.getElementById("rulEnBogMedKnap");
const rulEnBog = document.getElementById("rulEnBogKnap");

/*Vi bruger Math.random til at generere en tilfældig bog*/
function rul() {
  let resultat = Math.floor(Math.random() * 10) + 1;
  switch (resultat) {
    case 1:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/citronbjerget.jpg" alt="Citronbjerget af Eva Tind"></a>';
      break;
    case 2:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/deBedsteFamilier.jpg" alt="De bedste familier af Kim Blæsbjerg"></a>';
      break;
    case 3:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/deForsvundneTræersØ.jpg" alt="De forsvundne træers ø af Elif Shafak"></a>';
      break;
    case 4:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/mrLoverman.jpg" alt="Mr. Loverman af Bernardine Evaristo"></a>';
      break;
    case 5:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/detTredjeRige.jpg" alt="Det tredje rige af Karl Ove Knausgård"></a>';
      break;
    case 6:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/uniform.jpg" alt="Uniform af Thomas Rydahl"></a>';
      break;
    case 7:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/fremtidenErDer.jpg" alt="Fremtiden er der også i morgen af Kristian Leth"></a>';
      break;
    case 8:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/fyrsterneAfFinntjern.jpg" alt="Fyrsterne af Finntjern af Lars Elling"></a>';
      break;
    case 9:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/11.jpg" alt="11% af Maren Uthaug"></a>';
      break;
    case 10:
      vistBog.innerHTML =
        '<a href="bogbeskrivelse.html"><img src="bogcovers/nøjsomheden.jpg" alt="Nøjsomheden af Stine Askov"></a>';
      break;  
    default: //???
  }
}

rulEnBog.addEventListener("click", rul);

/* Fylder hjertet */
function hjerteFyldes() {
  document.getElementById("hjerteTomt").style.display = "none";
  document.getElementById("hjerteFyldt").style.display = "block";
}

/* Tømmer hjertet */
function hjerteToemmes() {
  document.getElementById("hjerteFyldt").style.display = "none";
  document.getElementById("hjerteTomt").style.display = "block";
}

/*Åbner anmeldelse op*/
function aabenAnmeldelse() {
  document.getElementById("anmeldelseKort").style.display = "block";
}

/* Lukker anmeldelse */
function lukAnmeldelse() {
  document.getElementById("anmeldelseKort").style.display = "none";
}
