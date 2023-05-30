// Bouton grisé
let validButton = document.getElementsByClassName("validButton")[1];


validButton.style.backgroundColor = "grey";

//booléens// on initialise les variables pour vérifier par la suite si elles sont true ou false

let validText = false;

let validMail = false;

let validComment = false;

//on récupère les input 

let getText = document.getElementById("textForm");


let mailText = document.getElementById("mailText");


let messText = document.getElementById("messgae");



let getForm1 = document.getElementsByClassName("form")[0];

let messErreur1 = document.createElement('p');

messErreur1.style.fontSize = "100%";
messErreur1.style.color = "red";    
messErreur1.style.marginTop = "0px";

getForm1.insertAdjacentElement("afterend",messErreur1);

// quand l'utilisateur va rentrer ses données, on va vérifier si il respecte bien le format demandé

getText.addEventListener("change", function (){

    //si le message contient bien 2 mots
    if(getText.value.split(" ").length == 2){
        validText = true;
        messErreur1.innerHTML = "";
    }
    else{
        validText = false;
        messErreur1.innerHTML = "Le format n'est pas correct";
    }
    //si les conditions sont bien vérifiées on passe le bouton est bleu, sinon il reste grisé
    if(validComment==true && validMail==true && validText==true){
        validButton.style.backgroundColor = "#2D2BA4";
    }
    else{
        validButton.style.backgroundColor = "grey";
    }


});

let getForm2 = document.getElementsByClassName("form")[1];

let messErreur2 = document.createElement('p');

messErreur2.style.fontSize = "100%";
messErreur2.style.color = "red";    
messErreur2.style.marginTop = "0px";

getForm2.insertAdjacentElement("afterend",messErreur2);




mailText.addEventListener("change", function (){

    let atMail = mailText.value.includes("@");
    
    let dotMail = mailText.value.includes(".");
    //si le message contient bien un "@" et un "."
    if(atMail && dotMail){
        validMail = true;
        messErreur2.innerHTML = "";
    }
    else{
        validMail = false;
        messErreur2.innerHTML = "Le format n'est pas correct";
    }

    //si les conditions sont bien vérifiées on passe le bouton est bleu, sinon il reste grisé    
    if(validComment==true && validMail==true && validText==true){
        console.log("i");
        validButton.style.backgroundColor = "#2D2BA4";
    }

    else{
        validButton.style.backgroundColor = "grey";
    }


});

let getForm3 = document.getElementsByClassName("form")[2];

let messErreur3 = document.createElement('p');

messErreur3.style.fontSize = "100%";
messErreur3.style.color = "red";    
messErreur3.style.marginTop = "0px";

getForm3.insertAdjacentElement("afterend",messErreur3);


messText.addEventListener("change", function (){
    let sizeText = messText.value.length;


    // si la taille du message est bien comprise entre 20 et 1000
    if(sizeText >= 20 && sizeText <= 1000){
        validComment = true;
        messErreur3.innerHTML = "";
    }

    else{
        validComment = false;
        messErreur3.innerHTML = "Le format n'est pas correct";
    }

    //si les conditions sont bien vérifiées on passe le bouton est bleu, sinon il reste grisé
    if(validComment==true && validMail==true && validText==true){
        validButton.style.backgroundColor = "#2D2BA4";
    }
    else{

        validButton.style.backgroundColor = "grey";
    }
});


// Jeu //

// fonction qui renvoie un nombre aléatoire entre min et max(exclu)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let buttonV = document.getElementById("confirmButton");

//quand l'utilisateur va cliquer sur le bouton valider, le jeu va apparaître
buttonV.addEventListener("click",function (){

    let imgChoice = document.getElementById("imgDe");
    imgChoice.style.display = "block";

    let angle = 0;

    //rotation de l'image lorsque l'utilisateur à valider ses valeurs
    let rotation = setInterval(function() {
        imgChoice.style.transform = "rotateZ("+ angle++ +"deg)";
    },30);


    setTimeout(function (){

        clearInterval(rotation);
        let divChoice = document.getElementById("choice");

        let valueChoice1 = document.getElementsByClassName("choixV")[0].value;
        let valueChoice2 = document.getElementsByClassName("choixV")[1].value;
        let valueChoice3 = document.getElementsByClassName("choixV")[2].value;
        
    
        let randomNumber = getRandomInt(1,7);
        
        //si l'une des valeurs correspondent au nombre généré aléatoirement, alors on envoie le message, sinon on reset la page et le form 
        let closeModal = document.getElementsByClassName("close-modal")[0];
        if(valueChoice1 == randomNumber || valueChoice2== randomNumber || valueChoice3 == randomNumber){
            alert("Vous avez gagné, le numéro tiré était : " + randomNumber);
            alert("Le message a été envoyé avec succès");

            closeModal.style.display = "block";
        }

        
        else{
            alert("Vous avez perdu, le numéro tiré était : " + randomNumber);
            alert("Votre formulaire va être réintialisé.");
            closeModal.style.display = "block";
            getText.value= "";
            mailText.value = "";
            messText.value = "";
        }
    
    },4000);

});



//jeu sous forme de modal lorsque l'utilisateur cliquer sur le bouton "Envoyer"

let modalContainer = document.getElementsByClassName("modal-container")[0];
let modalTriggers = document.getElementsByClassName("modal-trigger");

let size3 = modalTriggers.length;

for(let i=0;i<size3;i++){
    modalTriggers[i].addEventListener("click",toggleModal);
}

function toggleModal(){
    if(validComment==true && validMail==true && validText==true){
        modalContainer.classList.toggle("active");  
    }
}