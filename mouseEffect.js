const cursorSmall = document.querySelector('.cursorSmall');

const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  console.log(mouseX, mouseY)
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)