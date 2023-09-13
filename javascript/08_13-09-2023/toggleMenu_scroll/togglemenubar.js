// target class = menubar 
// perform class = button = tbtn 
// for change icon = id=> icon
let toggbtn = document.querySelector(".tbtn");
let navbar = document.querySelector(".menubar");
let closebtn = document.querySelector(".cbtn")
toggbtn.addEventListener("click", function () {
    navbar.classList.add("menu-bar");
})
closebtn.addEventListener("click", function () {
    navbar.classList.remove("menu-bar");
})