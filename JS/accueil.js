//Zoom survol image accueil//

let image = document.getElementById("competences");

let basicScale = image.style.scale;

image.addEventListener("mouseover",function (){
    image.style.scale = basicScale + 1.2;
});

image.addEventListener("mouseout",function (){
    image.style.scale = basicScale;
});

// Effets sur le texte Qui Sommes-nous ?//

window.addEventListener("load",function (){

    setTimeout(function (){
        function repeating(){
            let i =0;
            let pos = document.getElementById("description").children[0];
            pos.innerHTML = "";
            let str = "Qui sommes nous ?";
            let words = str.split(' ');
            let size = words.length;
        
            setTimeout(function () {
                let actualiser = setInterval(function (){  
                    pos.innerHTML = pos.innerHTML + words[i] + " ";
                    i++;
                },1000);
                setTimeout(function (){
                    clearInterval(actualiser);
                    setTimeout(function (){
                        pos.style.textAlign = "right";
                    },1000);
                    setTimeout(function (){
                        pos.style.textAlign = "left";
                    },2000);
                    setTimeout(function (){
                        pos.style.textAlign = "center";
                    },3000);
        
                    setTimeout(function (){
                        pos.innerHTML = "";
                    },4000);
        
        
                },4000);
        
            },0000);
    
        }
    
        repeating();
        setInterval(repeating,8000);
    },2000);


});