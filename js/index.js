const menuIkon = document.getElementById("menu-ikon");
const menuLink = document.querySelector(".menu-linkleri");

menuIkon.addEventListener("click" , function(){
    menuLink.classList.toggle("aktif");
})