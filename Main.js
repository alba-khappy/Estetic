
// send email
// document.getElementsByClassName('input-sent')[0].addEventListener('click', function () {
//     // call rest to send email
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'mail.php', false);
//     xhr.send(JSON.stringify({
//         phone: document.getElementsByName('phonenumber')[0].value,
//         name: document.getElementsByName('firstname')[0].value
//     }));
//     if (xhr.status == 200) {
//         var popup = document.getElementsByClassName('popup-call-me')[0];
//         popup.classList.add('show-part2');
//     }
//
// });

//toggle burger-menu
document.getElementsByClassName('burger')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName('burger-menu')[0];
    menu.classList.toggle('close-burger-menu');
});

