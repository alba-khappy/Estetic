// open popup
document.querySelectorAll('.show-call-me').forEach(function (x) {
    x.addEventListener('click', function () {
        var popup = document.getElementsByClassName('pop-up')[0];
        popup.classList.add('show-popup');
    })
});

// close popup
document.getElementsByClassName('close-popup')[0].addEventListener('click', function () {
    var popup = document.getElementsByClassName('pop-up')[0];
    popup.classList.remove('show-popup');
});


//pop up sign up
document.getElementById('confirm-call-me').addEventListener('click', function () {
    var part1 = document.getElementsByClassName('pop-up-part1')[0];
    part1.classList.add('pop-up-none');

    var part2 = document.getElementsByClassName('pop-up-part2')[0];
    part2.classList.remove('pop-up-none');
});