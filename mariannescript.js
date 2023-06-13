//Opret konstant, der er lig med getElementById på de enkelte billeder.
const side1 = document.getElementById("side1");
const side2 = document.getElementById("side2");

//Putter konstanterne i array i kronologisk rækkefølge.
const sider = [side1, side2];

//Skjuler alle andre end indeks 0 med display block og none.
sider[0].style.display = "block";
sider[1].style.display = "none";

//Eventlistener på den venstre pil, der trigger funktionen ”forrigeSide”
const venstre = document.getElementById("gulPilVenstre");
venstre.addEventListener("click", forrigeSide);

//Sæt en eventlistener på den højre pil der trigger funktionen ”naesteSide”.
const hoejre = document.getElementById("gulPilHoejre");
hoejre.addEventListener("click", naesteSide);

//Funktionen forrigeBillede skal:
function forrigeSide() {
    //Skjule elementet på indeks 0
    sider[0].style.display = "none";
  
    //Putte det sidste element ind i starten
    sider.unshift(sider[sider.length - 1]);
  
    //Tage det sidste element i arrayet ud
    sider.pop();
  
    //Vise det nye element, der er på indeks 0
    sider[0].style.display = "block";
  }

//Funktionen naesteSide skal:
function naesteSide() {
    //Skjule elementet på indeks 0
    sider[0].style.display = "none";
  
    //Putte det element, der er på indeks 0 ind i slutningen af arrayet
    sider.push(sider[0]);
  
    //Fjerne det første element i arrayet og flytte alle de andre en plads ned med ”shift”
    sider.shift();
  
    //Vise det element, der nu er på indeks 0
    sider[0].style.display = "block";
  }