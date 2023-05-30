var numberOfMembers=0;//variable pour compter le nombre de membres ajouté pour créer des id personnalisées
var modeedition=false;//variable qui indique si le mode d'édition est activée






function admin(id){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(elements => elements.style.textAlign = "center");
    if(modeedition==true){
        let interrompt = window.prompt('entrez exit pour fermer le menu sinon cliquer quelque part');
        if(interrompt=='exit'){
            modeedition=false;
            document.getElementById("addmember").remove();
            document.getElementById("modeedition").style.background="white";
            inputs.forEach(elements => elements.setAttribute("readOnly","readOnly"));
            return;//cela arrête la boucle pour éviter qu'il y ait un autre prompt pour demander de rentrer l'username.
        }
    }
    if(modeedition==false){
        let username = window.prompt('entrez le nom du profil administrateur');
        if(username=='admin'){//si l'id est correct
            let password = window.prompt('entrez le mot de passe du profil administrateur');
            if(password=='admin_pwd'){//si le mot de passe est correct
                modeedition=true;
                //changement de couleur du boutton mode édition
                let button=document.getElementById('modeedition');
                button.style.backgroundColor="green";
                //ajout du boutton pour ajouter un membre
                let modif=document.getElementById('modeeditionDiv');
                modif.innerHTML='<input id="addmember" onclick="addmember(addmember)"type="submit" value="ajouter un membre ">'
                //on récupère les espaces stockant les noms 
                let ayoub=document.getElementById("ayoub");
                let maher=document.getElementById("maher");
                let salima=document.getElementById("salima");
                let sylvain=document.getElementById("sylvain");
                //On les remplaces par des inputs
                ayoub.innerHTML='<input type="text" id="name" value="Ayoub Karine" style="font-size: 12.8px;">'
                maher.innerHTML='<input type="text" id="name" value="Maher Jridi"">'
                salima.innerHTML='<input type="text" id="name" value="Salima Bourbia"0">'
                sylvain.innerHTML='<input type="text" id="name" value="Sylvain Lefebvre"">'
            }
            else{
                alert('mot de passe incorrect');
            }
            inputs.forEach(elements => elements.removeAttribute("readonly"));
        }
    }
    
}
function supprmember(id){
    id.remove();//supprime le membre ausquelles est associé l'id
}


let ish1 = false;

function addmember(id){
    numberOfMembers++;//indentation du nombre de nouveaux membres
    let body=document.getElementById("contenuMembres2");

    body.style.display = "flex";
    body.style.flexDirection = "row";
    
    if(!ish1){
        let titre = document.createElement("h1");
        body.insertAdjacentElement("beforebegin", titre);
        titre.innerHTML = "Nouveaux membres";
        ish1 = true;
    }


    //on insère une carte modifiable

    let text =`<div class="card" id="member`+numberOfMembers+`">
    <div class="imagePers">
    <input type="file" id="imgPers" class= "image-input" src="" alt="Image"  accept="image/*">
    <div id="image-preview"></div>
    </div>
    <div class="textpart">
       <div class="nomPers">
        <input type="text" id="name" value="" ;font-size: 20px;">
       </div>
       <div class="infoPers">
        <input type="text" id="name" value="Type de personne">
        <input type="text" id="name" value="lieu d'activité" >
        <input type="text" id="name" value="adresse email" >
       </div>
       <hr>
       <div class="logoPers">
          <a href="https://ayoubkarine.github.io" target="_blank"><img class="imgCard" src="Images/internet.png" alt="logoInternet"></a>
          <a href="https://www.linkedin.com/in/ayoub-karine-a01ba384" target="_blank"><img class="imgCard" src="Images/image linkdin.png" alt="logoLinkdin"></a>
          <a href="https://scholar.google.fr/citations?user=acAw9KAAAAAJ&hl=fr" target="_blank"><img class="imgCard" src="Images/google scholar.jpg" alt="logoGScholar"></a>
          <a href="https://www.researchgate.net/profile/Ayoub_Karine?ev=hdr_xprf&_sg=eJkSR2ljqVo6Ub414o2YwqTDXE2e1tV5SPoWZQv35B3oJoSgYfbNmLlZt57lBUJCiaEapS_Iz82ix5Z6XveLFdaC" target="_blank"><img class="imgCard" src="Images/researchgate.png" alt="logoResearchGate"></a>
       </div>
       <div class="keyWords">
       <input type="text" id="name" value="" >
       <input type="text" id="name" value="" >
       <input type="text" id="name" value="" >
       <input type="text" id="name" value="" >
       <input type="text" id="name" value="" >
       </div> 
    </div>
    <input id="supprmember" onclick="supprmember(member`+numberOfMembers+`)"type="submit" value="supprimer ce membre ">
 </div>`//on insère le schéma modifiable d'une carte à cette ligne avec un id propre qui dépend du nombre de membres.
    body.innerHTML = body.innerHTML + text;
    body.style.flexWrap = "wrap";
    body.style.justifyContent = "space-around";
    body.style.textAlign = "center";

    document.getElementsByClassName('image-input')[0].addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        


        reader.onload = function(e) {
          var imagePreview = document.getElementById('image-preview');
          imagePreview.innerHTML = '';
      
          var img = new Image();
          img.src = e.target.result;
          img.style.maxWidth = '100%';
          img.style.maxHeight = '100%';
      
          imagePreview.appendChild(img);

        };
      
        reader.readAsDataURL(file);
        document.getElementsByClassName('image-input')[0].remove();
    });

}