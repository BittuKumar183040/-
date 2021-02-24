// Body cursor effect

const riple=document.querySelector('#riple');
riple.style.zIndex=4;
const mouseRun=()=>{
    window.addEventListener('mousemove', (event)=>{
        riple.style.top=event.clientY+"px";
        riple.style.left=event.clientX+"px";
        riple.style.opacity=".5";
    })
    window.addEventListener('mouseout', ()=>{
        riple.style.opacity="0";
    })
}

// window.addEventListener('click',()=>{
//     riple.style.opacity=1;
// })