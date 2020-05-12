/ open popup
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

// send email
document.getElementsByClassName('input-sent')[0].addEventListener('click', function () {
    // call rest to send email
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', false);
    xhr.send(JSON.stringify({
        phone: document.getElementsByName('phonenumber')[0].value,
        name: document.getElementsByName('firstname')[0].value
    }));
    if (xhr.status == 200) {
        var popup = document.getElementsByClassName('popup-call-me')[0];
        popup.classList.add('show-part2');
    }

});

// toggle burger-menu
document.getElementsByClassName('hamburger')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('burger-menu')[0];
    menu.classList.toggle('open-burger-menu');
});

// close popup on choose menu item
document.querySelectorAll('.part-of-menu').forEach(function (x) {
    x.addEventListener('click', function () {
        var menu = document.getElementsByClassName('burger-menu')[0];
        menu.classList.toggle('open-burger-menu');
    })
});