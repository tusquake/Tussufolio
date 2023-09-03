let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings : ['Developer', 'Programmer', 'Leaner', 'Teacher'],
    loop : true,
    typeSpeed : 200
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});