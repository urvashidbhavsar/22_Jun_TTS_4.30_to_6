// target = window 
// perform = header 

window.addEventListener("scroll", function () {
    let fixh = document.querySelector("header")
    let current = window.scrollY;
    if (current > 0) {
        fixh.classList.add("header-fixed")
    } else {
        fixh.classList.remove("header-fixed")
    }
})