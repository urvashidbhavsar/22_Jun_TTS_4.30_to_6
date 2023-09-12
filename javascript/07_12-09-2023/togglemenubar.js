// target class = nav 
// perform class = button = tbtn 
// for change icon = id=> icon
let toggbtn = document.querySelector(".tbtn");
let navbar = document.querySelector(".nav")
let changei = document.getElementById("icon");
toggbtn.addEventListener("click", function () {
    navbar.classList.toggle("nav-bar");

    if (navbar.classList.contains("nav-bar") == true) {
        changei.classList.remove("fa-bars");
        changei.classList.add("fa-close");
    } else {
        changei.classList.remove("fa-close");
        changei.classList.add("fa-bars");
    }
})