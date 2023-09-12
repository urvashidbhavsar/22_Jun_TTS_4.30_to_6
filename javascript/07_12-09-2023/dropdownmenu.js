// target = dispmenu
// perform = showmenu

let drop = document.querySelector(".showmenu");
let showdrop = document.querySelector(".dispmenu")
drop.addEventListener("click", function () {
    showdrop.classList.toggle("menu")
})