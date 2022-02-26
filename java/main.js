var dot = document.getElementById('dot');
document.body.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 25}px)`;
    dot.style.transform += `translateX(${e.clientX - 25}px)`;
    dot.style.opacity = 1;
}, false);

//create shortcut constants
const demo  = document.querySelector('.demo');
const point = document.querySelector('#point');

//detect mousedown events and handle them.
demo.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});
