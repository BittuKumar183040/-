let ani = document.querySelectorAll('.bounce');
// const backgroundReact=document.querySelector('body');

let aniAct='animate__animated';
let aniIntrence='animate__jackInTheBox'
let aniIntrenceSpeed='animate__slow';

const startingAni=(i)=>{
    setInterval(function(){
        ani[i].style.visibility='visible';
    },130*i);   
}
const textAni = () =>{
    for (let i = 0; i < ani.length; i++) {
        startingAni(i);
        ani[i].addEventListener('mouseover',function(){
            ani[i].classList.add(aniAct, aniIntrence);
        });
        ani[i].addEventListener('animationend',function(){
            ani[i].classList.remove(aniIntrence);
        });
    }
    
}
textAni();

// page scroll event track scroll position
const buildElement=(DOMElement, parentElement, style)=>{
    const element=document.createElement(DOMElement);
    element.style.cssText=style
    parentElement.appendChild(element)
    return element
}
scrollElement=buildElement("div",document.body,`
        height:3px;
        width:0%;
        background:white;
        border-radius:0 5px 5px 0;
        position:fixed;
        top:0;
        z-index:999`
    )

const scrollable=(document.documentElement.scrollHeight - document.documentElement.clientHeight)
const sendToTop=document.querySelector(".toTop")
sendToTop.addEventListener('click',()=>{
    scrollTo({top:0, behavior:"smooth"})
})
window.addEventListener("scroll",()=>{
    if(scrollY>scrollable-document.documentElement.clientHeight){
        sendToTop.classList.add("toShow")
    } 
    else{
        sendToTop.classList.remove("toShow")
    }
    
    scrollElement.style.width=(Math.ceil(scrollY/scrollable*100))+"%";
})


const contact = () =>{
    console.log("hallo");
}

// tab version menu icon color change
// const menuIcons=document.getElementsByTagName('svg');
// const menuPaths=document.getElementsByTagName('path');

// blogGlass animation adding class
/*
screen touch gesture

let start;
let threshold=30
document.addEventListener('touchstart',(e)=>{
   start=e.targetTouches[0].screenX
})
document.addEventListener('touchend',(e)=>{
    end=e.changedTouches[0].screenX
    if(start-end>threshold){
        window.open("./3dShowCase/index.html", "_self")
    }else if(start-end < -threshold){
        window.open("https://linktr.ee/_Bittu_Kumar_", "_self")
    }
})

*/