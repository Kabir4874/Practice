let menu=  document.querySelector('#menu-icon');
let navbar= document.querySelector('nav');

menu.addEventListener("click", function(){
    navbar.classList.toggle('active');
})
window.onscroll=()=>{
    navbar.classList.remove('active')
}
function toggleNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("show");
  }