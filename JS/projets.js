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
