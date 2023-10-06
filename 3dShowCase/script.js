const greet=document.getElementById("greetings")
const date=parseInt(new Date().getHours());
if(date<12 && date>0){
    greetings.innerText="Good Morning";
}
else if(date>=12 && date<=18){
    greetings.innerText="Good Afternoon";
}
else{
    greetings.innerText="Good Evening";
}
