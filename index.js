const boxContent = document.querySelector(".box-content");
const imgDoctor = document.querySelector(".bg-imagenuno");
const boxImguno = document.querySelector(".box-imguno")
const boxImgdos = document.querySelector(".box-imgdos")
const boxTextouno = document.querySelector(".box-textouno")
const boxTextdos = document.querySelector(".box-textdos")
const boxImagenes = document.querySelectorAll(".box-imagenes")
const boxPersonajes = document.querySelectorAll(".box-personajes")
const boxEnlance = document.querySelector(".box-enlancejuego")
const boxTrajes = document.querySelectorAll(".box-trajes")


window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    let pos = window.scrollY;
    if(pos <=700){
        boxContent.style.opacity= 1;
        boxContent.style.marginLeft="0px";
        imgDoctor.style.top = "0px";
        imgDoctor.style.opacity = 1;
    }else if( pos >= 40){
        boxContent.style.opacity= 0;
        boxContent.style.marginLeft="100px";
        imgDoctor.style.top = "100px";
        imgDoctor.style.opacity = 0;
    }
})

setTimeout(() => {
        boxContent.style.opacity= 1;
        boxContent.style.marginLeft="0px";
        imgDoctor.style.marginTop = "0px";
        imgDoctor.style.opacity = 1;
  }, "1000");

window.addEventListener("scroll", function(){
    let poss = window.scrollY;
    if(poss <=400){
        boxImguno.style.opacity= 0;
        boxImguno.style.marginLeft="100px";
       
    }else if( poss >= 300){
        boxImguno.style.opacity= 1;
        boxImguno.style.marginLeft="0px";
    }

    if(poss >=500){
        boxImgdos.style.opacity= 1;
        boxImgdos.style.marginRight="0px";
    }else if( poss >= 400){
        boxImgdos.style.opacity= 0;
        boxImgdos.style.marginRight="100px";
    }

    if(poss >=500){
        boxTextouno.style.opacity= 1;
        boxTextouno.style.left="0px";
    }else if( poss >= 400){
        boxTextouno.style.opacity= 0;
        boxTextouno.style.left="-100px";
    }

    if(poss >=500){
        boxTextdos.style.opacity= 1;
        boxTextdos.style.marginLeft="0px";
    }else if( poss >= 400){
        boxTextdos.style.opacity= 0;
        boxTextdos.style.marginLeft="100px";
    }
})

window.addEventListener("scroll", function(){
    let poss = window.scrollY;
    
    if(poss >=800){
        boxImagenes[0]. style.marginTop ="0px";
        boxImagenes[0].style.opacity= 1;
        boxImagenes[0].style.transitionDelay = "1.2s";
        boxImagenes[0].style.transitionDuration = "1s";

        boxImagenes[1]. style.marginTop ="0px";
        boxImagenes[1].style.opacity= 1;
        boxImagenes[1].style.transitionDelay = "1.4s";
        boxImagenes[1].style.transitionDuration = "1s";

        boxImagenes[2]. style.marginTop ="0px";
        boxImagenes[2].style.opacity= 1;
        boxImagenes[2].style.transitionDelay = "1.6s";
        boxImagenes[2].style.transitionDuration = "1s";
        
       
    }else if(poss <=113){
        boxImagenes[0]. style.marginTop ="100px";
        boxImagenes[0].style.opacity= 0;
        boxImagenes[0].style.transitionDuration = "0s";
        boxImagenes[0].style.transitionDelay = "0s";
        
        

        boxImagenes[1]. style.marginTop ="100px";
        boxImagenes[1].style.opacity= 0;
        boxImagenes[1].style.transitionDuration = "0s";
        boxImagenes[1].style.transitionDelay = "0s";
        

        boxImagenes[2]. style.marginTop ="100px";
        boxImagenes[2].style.opacity= 0;
        boxImagenes[2].style.transitionDuration = "0s";
        boxImagenes[2].style.transitionDelay = "0s";
      
        
    }
})

window.addEventListener("scroll", function(){
    let poss = window.scrollY;
    
    if(poss >=1900){
        
        boxPersonajes[0].style.opacity= 1;
        boxPersonajes[0].style.transitionDelay = "1.2s";
        boxPersonajes[0].style.transitionDuration = "1s";

        
        boxPersonajes[1].style.opacity= 1;
        boxPersonajes[1].style.transitionDelay = "1.4s";
        boxPersonajes[1].style.transitionDuration = "1s";

       
        boxPersonajes[2].style.opacity= 1;
        boxPersonajes[2].style.transitionDelay = "1.6s";
        boxPersonajes[2].style.transitionDuration = "1s";
        
        boxPersonajes[3].style.opacity= 1;
        boxPersonajes[3].style.transitionDelay = "1.2s";
        boxPersonajes[3].style.transitionDuration = "1s";

        
        boxPersonajes[4].style.opacity= 1;
        boxPersonajes[4].style.transitionDelay = "1.4s";
        boxPersonajes[4].style.transitionDuration = "1s";

       
        boxPersonajes[5].style.opacity= 1;
        boxPersonajes[5].style.transitionDelay = "1.6s";
        boxPersonajes[5].style.transitionDuration = "1s";
        
        boxPersonajes[6].style.opacity= 1;
        boxPersonajes[6].style.transitionDelay = "1.2s";
        boxPersonajes[6].style.transitionDuration = "1s";

        
        boxPersonajes[7].style.opacity= 1;
        boxPersonajes[7].style.transitionDelay = "1.4s";
        boxPersonajes[7].style.transitionDuration = "1s";

       
        boxPersonajes[8].style.opacity= 1;
        boxPersonajes[8].style.transitionDelay = "1.6s";
        boxPersonajes[8].style.transitionDuration = "1s";
        
       
    }else if(poss <=113){
        
        boxPersonajes[0].style.opacity= 0;
        boxPersonajes[0].style.transitionDuration = "0s";
        boxPersonajes[0].style.transitionDelay = "0s";
        
        

        
        boxPersonajes[1].style.opacity= 0;
        boxPersonajes[1].style.transitionDuration = "0s";
        boxPersonajes[1].style.transitionDelay = "0s";
        

        
        boxPersonajes[2].style.opacity= 0;
        boxPersonajes[2].style.transitionDuration = "0s";
        boxPersonajes[2].style.transitionDelay = "0s";


        boxPersonajes[3].style.opacity= 0;
        boxPersonajes[3].style.transitionDuration = "0s";
        boxPersonajes[3].style.transitionDelay = "0s";
        
        

        
        boxPersonajes[4].style.opacity= 0;
        boxPersonajes[4].style.transitionDuration = "0s";
        boxPersonajes[4].style.transitionDelay = "0s";
        

        
        boxPersonajes[5].style.opacity= 0;
        boxPersonajes[5].style.transitionDuration = "0s";
        boxPersonajes[5].style.transitionDelay = "0s";

        boxPersonajes[6].style.opacity= 0;
        boxPersonajes[6].style.transitionDuration = "0s";
        boxPersonajes[6].style.transitionDelay = "0s";
        
        

        
        boxPersonajes[7].style.opacity= 0;
        boxPersonajes[7].style.transitionDuration = "0s";
        boxPersonajes[7].style.transitionDelay = "0s";
        

        
        boxPersonajes[8].style.opacity= 0;
        boxPersonajes[8].style.transitionDuration = "0s";
        boxPersonajes[8].style.transitionDelay = "0s";
      
        
    }
})

 window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    let posss = window.scrollY;
    if(posss >=3578){
        boxEnlance.style.marginTop = "100px";
        boxEnlance.style.opacity = 1;
    }else if( posss <= 3003){
        boxEnlance.style.marginTop = "200px";
        boxEnlance.style.opacity = 0;
    }
}) 

console.log(boxImguno.offsetTop)