document.getElementsByClassName('rotate-btn-up')[0].addEventListener('click', function () {
    var canvas = document.getElementsByClassName('flex-space-around')[0];
    var top = +canvas.offsetTop;
    if (
        (canvas.offsetWidth >= 330*6) ||
        (top < -200 && canvas.offsetWidth >= 1420) ||
        (top < -500 && canvas.offsetWidth >= 990 && canvas.offsetWidth < 1420) ||
        (top < -1000 && canvas.offsetWidth >= 660 && canvas.offsetWidth < 990) ||
        (top < -2700 && canvas.offsetWidth < 660)) {
        return
    }
    top = top - 275 - 43;
    canvas.style.top = top + 'px';
});

document.getElementsByClassName('rotate-btn-down')[0].addEventListener('click', function () {
    var canvas = document.getElementsByClassName('flex-space-around')[0];
    var top = +canvas.offsetTop;
    if (top > 30) {
        return
    }
    top = top + 275 - 43;
    canvas.style.top = top + 'px';
});

window.addEventListener('resize', function () {
    document.getElementsByClassName('flex-space-around')[0].style.top = '0';
});
