document.addEventListener("DOMContentLoaded",function(){
    const menu=document.getElementById("menu");
    
    menu.addEventListener('click',function(tag){
        if(tag.target.tagName=='A'){
            const name=tag.target.textContent.toLowerCase();
            tag.target.setAttribute('href','#'+name );
        }
    })
})







