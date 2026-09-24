const track = document.querySelector('.carousel-track');
const items = track.querySelectorAll('.carousel-item');
const total = items.length; // 原始項目數量 (3)

// 複製第一個項目接在最後，做出無縫循環
const clone = items[0].cloneNode(true);
clone.setAttribute('aria-hidden', 'true');
clone.setAttribute('tabindex', '-1');
track.appendChild(clone);

let x = 0;
let slideRun;

function moveTo(index, animate) {
    track.style.transition = animate ? '' : 'none';
    track.style.transform = "translateX(" + (-100 / (total + 1)) * index + "%)";
}

function next() {
    x++;
    moveTo(x, true);
}

// 滑到複製的「運勢」後，瞬間跳回真正的第一個，看起來就是無限循環
track.addEventListener('transitionend', () => {
    if (x >= total) {
        x = 0;
        moveTo(x, false);
        track.offsetHeight; // 強制重繪，讓下一次動畫正常
        track.style.transition = '';
    }
});

function start() {
    stop();
    slideRun = setInterval(next, 1200);
}

function stop() {
    clearInterval(slideRun);
}

track.addEventListener('mouseenter', stop);
track.addEventListener('mouseleave', start);

start();
