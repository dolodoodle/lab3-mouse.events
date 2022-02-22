var dot = document.getElementById('dot');
document.body.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 25}px)`;
    dot.style.transform += `translateX(${e.clientX - 25}px)`;
    dot.style.opacity = 1;
}, false);
