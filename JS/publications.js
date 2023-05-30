function filtrage(){
    let name=document.getElementById('nameauthor').value;
    let title=document.getElementById('titlepubli').value;
    let datepubli=document.getElementById('datepubli').value;
    let isArticle=document.getElementById('articleofcommu');
    let isComm = document.getElementById('revue');
    let isboth=document.getElementById('all');
    let article=document.getElementsByClassName('article');
    let comm=document.getElementsByClassName('comm');
    let both=document.getElementsByClassName('post');
    console.log(name);
    if(isComm.checked){
        article.style="display:'none'";
        for(let i=0;i<=comm.length;i++){
            //if(comm[i].innerText.includes(name) && comm[i].innerText.includes(title)){
            console.log(comm[i].innerText);
            //}else{
            comm[i].remove();
            //}
        }
    }
    if(isArticle.checked){
        comm.style="display:'none'";
        for(let i=0;i<=article.length;i++){
            console.log(article[i].innerHTML);
            if(article[i].innerText.includes(name) && article[i].innerText.includes(title)){
                console.log("perfect programmer");
            }else{
                article[i].style="display:'none'";
            }
        }
    }
    if(isboth.checked){
        for(let i=0;i<=4;i++){
            both[i].remove();
        }
    }
}