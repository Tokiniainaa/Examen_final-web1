

window.onscroll=()=>{
  /*  sections.forEach(sec =>{
        let top =window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>= offset && top < offset +height){
            link.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        
    })*/
    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}