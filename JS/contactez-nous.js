// Bouton grisé
let validButton = document.getElementsByClassName("validButton")[1];


validButton.style.backgroundColor = "grey";

//booléens//

let validText = false;

let validMail = false;

let validComment = false;


let getText = document.getElementById("textForm");


let mailText = document.getElementById("mailText");


let messText = document.getElementById("messgae");



let getForm1 = document.getElementsByClassName("form")[0];

let messErreur1 = document.createElement('p');

messErreur1.style.fontSize = "100%";
messErreur1.style.color = "red";    
messErreur1.style.marginTop = "0px";

getForm1.insertAdjacentElement("afterend",messErreur1);



getText.addEventListener("change", function (){

    if(getText.value.split(" ").length == 2){
        validText = true;
        messErreur1.innerHTML = "";
    }
    else{
        validText = false;
        messErreur1.innerHTML = "Le format n'est pas correct";
    }
    
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

    if(atMail && dotMail){
        validMail = true;
        messErreur2.innerHTML = "";
    }
    else{
        validMail = false;
        messErreur2.innerHTML = "Le format n'est pas correct";
    }

    
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



    if(sizeText >= 20 && sizeText <= 1000){
        validComment = true;
        messErreur3.innerHTML = "";
    }

    else{
        validComment = false;
        messErreur3.innerHTML = "Le format n'est pas correct";
    }


    if(validComment==true && validMail==true && validText==true){
        validButton.style.backgroundColor = "#2D2BA4";
    }
    else{

        validButton.style.backgroundColor = "grey";
    }
});


// Jeu //

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let buttonV = document.getElementById("confirmButton");

buttonV.addEventListener("click",function (){

    let imgChoice = document.getElementById("imgDe");
    imgChoice.style.display = "block";

    let angle = 0;

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
    
        if(valueChoice1 == randomNumber || valueChoice2== randomNumber || valueChoice3 == randomNumber){
            alert("Vous avez gagné, le numéro tiré était : " + randomNumber);
            alert("Le message a été envoyé avec succès");
            let closeModal = document.getElementsByClassName("close-modal")[0];

            closeModal.style.display = "block";
        }

        
        else{
            alert("Vous avez perdu, le numéro tiré était : " + randomNumber);
            alert("Votre page va être réintialisée.");
            window.location.reload();
        }
    
    },4000);


});

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