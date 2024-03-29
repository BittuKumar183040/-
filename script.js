let ani = document.querySelectorAll('.bounce');
let subHeading = document.querySelector('.subheadline');
// const backgroundReact=document.querySelector('body');

let aniAct='animate__animated';
let aniIntrence='animate__jackInTheBox'
let aniIntrenceSpeed='animate__slow';


function TypingEffect(str, DOMElement){
    let textArray=str.split("");
    let i=0;
    let text=""
    const closeText=(eInt)=>{
        text=text.substring(0,text.length-1)
        DOMElement.innerHTML=text
        if(text.length<1){
            text="";
            i=0;
            startText()
            clearInterval(eInt)
        }
    }
    const addText=(sInt)=>{
        text=text+textArray[i++]
        DOMElement.innerHTML=text
        if(i==textArray.length){
            clearInterval(sInt)
            endText();
        }
    }
    const endText=()=>{var eInt=setInterval(()=>closeText(eInt),50)}
    const startText=()=>{var sInt=setInterval(()=>addText(sInt),150)}
    startText()
}
TypingEffect("Front End Developer / 3D Modelling", subHeading)

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
const buildElement=(DOMElement, parentElement, className, style)=>{
    const element=document.createElement(DOMElement);
    element.style.cssText=style
    element.classList.add(className)
    parentElement.appendChild(element)
    return element
}
scrollElement=buildElement("div",document.body, "pageScrollInfo",`
        height:4px;
        width:0%;
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
let topThreshold=scrollable-document.documentElement.clientHeight
window.addEventListener("scroll",()=>{
    if(scrollY>topThreshold)
        sendToTop.classList.add("toShow")
    else
        sendToTop.classList.remove("toShow")
    scrollElement.style.width=(Math.ceil(scrollY/scrollable*100))+"%";
})


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
