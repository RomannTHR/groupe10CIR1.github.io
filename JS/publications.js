function filtrage(){
    let name=document.getElementById('nameauthor').value;
    let title=document.getElementById('titlepubli').value;
    let datepubli=document.getElementById('datepubli').value;
    let isArticle=document.getElementById('articleofcommu');
    let isComm = document.getElementById('revue');
    let article=document.getElementsByClassName('article');
    let comm=document.getElementsByClassName('comm');
    let both=document.getElementsByClassName('post');
    let publiname=document.getElementsByTagName('name');
    let publititle=document.getElementsByTagName('span');
    let publidate=document.getElementsByTagName('date');
    //vérifie l'auteur de la publication
    if(name.length!==0){
        for(let i=0;i<5;i++){
            let words = publiname[i].innerText.split(',');
            console.log(words)
            let isthatName=0;
            for(let j=0;j<words.length;j++){
                if(name!==words[j]){
                    isthatName=isthatName;
                }
                else{
                    isthatName++;
                }
            }
            console.log(isthatName);
            if(isthatName==0){
                both[i].style.display='none';
            }
        }
    }
    //vérifie le titre de la publication
    if(title.length!==0){
        for(let i=0;i<5;i++){
            let words = publititle[i].innerText.split(',');
            console.log(words)
            let isthatTitle=0;
            for(let j=0;j<words.length;j++){
                if(title!==words[j]){
                    isthatTitle=isthatTitle;
                }
                else{
                    isthatTitle++;
                }
            }
            console.log(isthatTitle);
            if(isthatTitle==0){
                both[i].style.display='none';
            }
        }
    }
    if(datepubli.length!==0){
    //vérifie l'année de la publication
         for(let i=0;i<5;i++){
            let words = publidate[i].innerText.split(',');
            console.log(words)
            let isthatDate=0;
            for(let j=0;j<words.length;j++){
                if(datepubli!==words[j]){
                    isthatDate=isthatDate;
                }
                else{
                    isthatDate++;
                }
            }
            console.log(isthatDate);
            if(isthatDate==0){
                both[i].style.display='none';
            }
        }
    }

    //Vérifie quel type de publication choisir
    if(isComm.checked){
        for(let i=0;i<article.length;i++){
            article[i].style.display='none';
        }
        
    }
    if(isArticle.checked){
        for(let i=0;i<comm.length;i++){
            comm[i].style.display='none';
        }
        
    }
}