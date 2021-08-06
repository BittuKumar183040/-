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

const contact = () =>{
    console.log("hallo");
}




// tab version menu icon color change
// const menuIcons=document.getElementsByTagName('svg');
// const menuPaths=document.getElementsByTagName('path');

