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


// Body cursor effect

const riple=document.querySelector('#riple');


window.addEventListener('mousemove', (event)=>{
    riple.style.top=event.clientY+"px";
    riple.style.left=event.clientX+"px";
    riple.style.opacity=".5";
})
window.addEventListener('mouseout', ()=>{
    riple.style.opacity="0";
})
window.addEventListener('click',()=>{
    riple.style.opacity=1;
})
