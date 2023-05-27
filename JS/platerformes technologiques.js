//Fenêtre modale//

let modalContainer = document.getElementsByClassName("modal-container")[0];
let modalTriggers = document.getElementsByClassName("modal-trigger");

let othermodalContainer = document.getElementsByClassName("modal-container")[1];

let othermodalTriggers = document.getElementsByClassName("othermodal-trigger");


let size3 = modalTriggers.length;

//Récuperer les 150 premiers caractères du texte//

let modalText = document.getElementsByClassName("modal-text")[0];

let othermodalText = document.getElementsByClassName("modal-text")[1];


let newmodalText = modalText.innerHTML.substr(0,150);

let othernewmodalText = othermodalText.innerHTML.substr(0,150);

modalText.innerHTML = newmodalText;

othermodalText.innerHTML = othernewmodalText;

for(let i=0;i<size3;i++){
    modalTriggers[i].addEventListener("click",toggleModal);
    othermodalTriggers[i].addEventListener("click",toggleModal2);
}

function toggleModal2(){
    othermodalContainer.classList.toggle("active");  
}


function toggleModal(){
    modalContainer.classList.toggle("active");  
}

//////////////////////////////////////////////////////


