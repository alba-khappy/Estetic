document.getElementsByClassName('rotate-btn-up')[0].addEventListener('click', function () {
    var canvas = document.getElementsByClassName('reviews-flex')[0];
    var top = +canvas.offsetTop;
    if (
        (canvas.offsetWidth >= 253*13) ||
        (top < -380 && canvas.offsetWidth >= 253*7) ||
        (top < -800 && canvas.offsetWidth >= 253*5 && canvas.offsetWidth < 253*7) ||
        (top < -1200 && canvas.offsetWidth >= 253*4 && canvas.offsetWidth < 253*5) ||
        (top < -1600 && canvas.offsetWidth >= 253*3 && canvas.offsetWidth < 253*4) ||
        (top < -2500 && canvas.offsetWidth >= 253*2 && canvas.offsetWidth < 253*3) ||
        (top < -5200 && canvas.offsetWidth < 253*2)) {
        return
    }
    top = top - 453 - 54;
    canvas.style.top = top + 'px';
});

document.getElementsByClassName('next-review')[0].addEventListener('click', function () {
    var canvas = document.getElementsByClassName('reviews-flex')[0];
    var top = +canvas.offsetTop;
    if (top > 30) {
        return
    }
    top = top + 453 - 54;
    canvas.style.top = top + 'px';
});

window.addEventListener('resize', function () {
    document.getElementsByClassName('reviews-flex')[0].style.top = '0';
});

