function filtrage(){
    //récupère les données du formulaire
    let name=document.getElementById('nameauthor').value;
    let title=document.getElementById('titlepubli').value;
    let datepubli=document.getElementById('datepubli').value;
    //récupère la valuer du boutton
    let isArticle=document.getElementById('articleofcommu');
    let isComm = document.getElementById('revue');
    //réécupère les articles et les revues
    let article=document.getElementsByClassName('article');
    let comm=document.getElementsByClassName('comm');
    let both=document.getElementsByClassName('post');
    //récupère les éléments html
    let publiname=document.getElementsByTagName('name');
    let publititle=document.getElementsByTagName('span');
    let publidate=document.getElementsByTagName('date');
    //vérifie l'auteur de la publication
   
    //vérifie le titre de la publication
       //si le form n'est pas vide
    if(title.length!==0){
        //pour le nombre de publications
        for(let i=0;i<5;i++){
            //on transforme la chaine de caractère en tableau
            let words = publititle[i].innerText.split(',');
            //variable pour savoir si le titre est présent dans la publication (de base false)
            let isthatTitle=0;
            //pour le nombre d'elements dans le tableau de la publication ciblée
            for(let j=0;j<words.length;j++){
                //si l'element n'est pas égal à l'élément recherché
                if(title!==words[j]){
                    //isthatTitle ne change pas
                    isthatTitle=isthatTitle;
                }
                else{
                    //il est incrémenté
                    isthatTitle++;
                }
            }
            //si il n'existe pas , on le supprime visuellement
            if(isthatTitle==0){
                both[i].style.display='none';
            }
        }
    }
    //on refait pareil pour la date et le nom de la publication !BIEN METTRE LE BON NOM DE PUBLICATION ET DE L'AUTEUR!
    //si le form n'est pas vide
    if(datepubli.length!==0){
    //vérifie l'année de la publication
         for(let i=0;i<5;i++){
            let words = publidate[i].innerText.split(',');
            let isthatDate=0;
            for(let j=0;j<words.length;j++){
                if(datepubli!==words[j]){
                    isthatDate=isthatDate;
                }
                else{
                    isthatDate++;
                }
            }
            if(isthatDate==0){
                both[i].style.display='none';
            }
        }
    }
     //si le form n'est pas vide
     if(name.length!==0){
        for(let i=0;i<5;i++){
            let words = publiname[i].innerText.split(',');
            let isthatName=0;
            for(let j=0;j<words.length;j++){
                if(name!==words[j]){
                    isthatName=isthatName;
                }
                else{
                    isthatName++;
                }
            }
            if(isthatName==0){
                both[i].style.display='none';
            }
        }
    }
    //Vérifie quel type de publication choisir
    //si le bouton des revue est sélectionné
    if(isComm.checked){
        //on supprime tout les articles
        for(let i=0;i<article.length;i++){
            article[i].style.display='none';
        }
        
    }
    //inverse si le bouton article est sélectionné
    if(isArticle.checked){
        for(let i=0;i<comm.length;i++){
            comm[i].style.display='none';
        }
        
    }
}


function goToTheTop(){
    window.scrollTo(500, 0);//on remonte à la position : 500,0
}
//les variables ci-dessous désignent si l'image de défaut du bloc est affiché (initialement oui)
var img0=true;
var img1=true;
var img2=true;
var img3=true;
function changeImg(id){//change les images quand on clique dessus
    let img=document.getElementById(id);//on récupère l'image
    //chaque if ci dessous désigne une paire d'image et s'occupe de son changement
    if(id==0){
        if(img0==true){//si l'image 1 de la paire est affiché 
            img.src="Images/Image2cyber.jpg";//on affiche l'image 2
            img0=false;//l'image 1 n'est plus affiché
            return;
    }
        if(img0==false){//si l'image 1 n'est pas affiché
            img.src="Images/40631791164_5198362c7c_b.jpg";//on affiche l'image 1 
            img0=true;//l'image 1 est affiché
            return;
        }
    }
    //on refait pareil pour les autres publications
    if(id==1){
        if(img1==true){
            img.src="Images/processeur.jpg";
            img1=false;
            return;
    }
        if(img1==false){
            img.src="Images/fl22613353925-image-kp4w1lpp.jpg";
            img1=true;
            return;
        }
    }
    if(id==2){
        if(img2==true){
            img.src="Images/idéeecommune.avif";
            img2=false;
            return;
    }
  
        if(img2==false){
            img.src="Images/images%20(1).png";
            img2=true;
            return;
        }
    }
    if(id==3){
        if(img3==true){
            img.src="Images/idepoleemploi.jpg";
            img3=false;
            return;
    }
  
        if(img3==false){
            img.src="Images/images.png";
            img3=true;
            return;
        }
    }
}