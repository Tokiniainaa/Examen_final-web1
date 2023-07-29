let menuIcon =document.querySelector('.menu');
let icon=document.querySelector('.fa-bars');
let icon2=document.querySelector('#hide');


let navigation=document.querySelector('.navigationbar');
let change =0;
menuIcon.addEventListener('click', function(){
  
  
    if(change==0){
        navigation.classList.add('active')
        icon.style.display="none";
        icon2.style.display="grid";
       
        change++
        
    }
    else{
        navigation.classList.remove('active')
        icon.style.display="grid";
        icon2.style.display="none";
        change--
    }
     
})
