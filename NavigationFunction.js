/*document.addEventListener("DOMContentLoaded",function(){
    const menu=document.getElementById("menu");
    
    menu.addEventListener('click',function(tag){
        if(tag.target.tagName=='A'){
            const name=tag.target.textContent.toLowerCase();
            tag.target.setAttribute('href','#'+name );
        }
    })
})*/

document.addEventListener("DOMContentLoaded",function(){
    let sections = document.querySelectorAll('section');
    let navLinks= document.querySelectorAll('#menu li a');

    window.onscroll=()=>{
        sections.forEach(sec=>{
            let top = window.scrollY + 250 ;
            let offset = sec.offsetTop;
            let height= sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top <offset + height){
                navLinks.forEach(links =>{
                    links.classList.remove('active');
                    let matchingLink = document.querySelector('#menu li a[href="#' + id +'"]');
                if (matchingLink) {
                    matchingLink.classList.add('active');
                }

                })
            }
        })
    }
})







