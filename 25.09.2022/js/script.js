let burgerMenu = document.querySelector('.burger_menu');
let menu = document.querySelector('.menu')

burgerMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})