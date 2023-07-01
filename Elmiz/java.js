let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.addEventListener("click", function(){
    navlist.classList.toggle('active');
})