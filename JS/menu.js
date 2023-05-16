
function afficherZero(nombre){
    if(nombre<10){
        return '0' + nombre;
    }
    return nombre;
}

function horloge(){
    let dateH = new Date();
    let element = document.getElementById("horlogeid");
    element.style.marginTop = "0.5vw";
;    element.innerText = afficherZero(dateH.getHours()) + ":" + afficherZero(dateH.getMinutes()) + ":" + afficherZero(dateH.getSeconds());

}

setInterval(horloge, 1000);

let temps = 0;




function compteur(){
    let element = document.getElementById("compte"); // on récupère l'id du compteur
    element.innerHTML = '<i class="fa-sharp fa-solid fa-forward"></i> '+ ' '+ ' Timer : ' + temps;
    temps++;
}



//event onclick button member//


let memberBut = document.getElementById("memBut");

memberBut.addEventListener("click", function() {
    let confirmation = window.confirm("Veux-tu vraiment tu rendres sur la page Membres ?") // On utilise l'event confirm pour demander à l'utilisateur ce qu'il souhaite faire.
    if(confirmation == true) {
        window.open(window.location.href ="membres.html"); // si il confirme on le renvoit sur la page membres
    }
    else{ // sinon on rafraichit la page
        window.location.reload();
    }


});




// on va venir répeter la fonction compteur toutes les 1s pour qu'elle s'actualise en temps réel
setInterval(compteur,1000);

function redirect(){
    window.location.href = "accueil.html";
}

// Couleur dans la console lors d'un click//

let buttons = document.getElementsByClassName("button");

let size = buttons.length;

let colorBefore = document.getElementsByTagName("nav")[0].style.backgroundColor;



let coloronOver = "rgb(42, 42, 42)";

for(let i=0;i<size;i++){
    buttons[i].addEventListener("mouseover",function() {
        buttons[i].style.backgroundColor = coloronOver;
        


    });

    buttons[i].addEventListener("mouseout",function() {
        buttons[i].style.backgroundColor = colorBefore;
        
    });

    buttons[i].addEventListener("click",function() {
        console.log("La couleur avant le passage est " + window.getComputedStyle(document.getElementsByTagName("nav")[0]).backgroundColor); 
        console.log("La couleur lors du passage de la souris est : " + coloronOver);
    });

}

// loader //


var bodyC = document.getElementsByTagName("body")[0];

var contentC = bodyC.children[3];


window.addEventListener("load", function() {
    contentC.style.display = "none";
    setTimeout(function() {
        
        document.getElementsByClassName("loader")[0].style.display = "none";
        contentC.style.display = document.getElementsByTagName("body")[0].style.display;
        
        document.getElementsByTagName("nav")[0].style.display = "block";
        document.getElementsByTagName("footer")[0].style.display = "flex";
    }, 2000);
});



















