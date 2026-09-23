
const track = document.querySelector('.carousel-track');
let x = 0; 
let slideRun = setInterval(function() {
    x++;
    if (x >= 3) {
        x = 0;
    }
    
    track.style.transform = "translateX(" + (-100 / 3) * x + "%)";
}, 1200);
track.addEventListener('mouseenter', () => {
    clearInterval(slideRun);
});
track.addEventListener('mouseleave', () => {
    slideRun = setInterval(arguments.callee, 2500); 
});