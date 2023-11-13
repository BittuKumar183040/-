const loader=document.querySelector(".loader")
document.onreadystatechange = function(e) {
    console.log(e)
    scrollTo({top:0, behavior:"smooth"})
    loader.style.position="relative"
    if (document.readyState === "complete") 
    {
        loader.classList.add("loaderDone")
    }
};