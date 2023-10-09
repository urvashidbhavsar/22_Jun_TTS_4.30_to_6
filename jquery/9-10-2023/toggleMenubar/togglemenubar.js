// target class = nav 
// perform class = button = tbtn 
// for change icon = id=> icon
$(document).ready(function () {
    $icon = $("#icon");
    $(".tbtn").click(function () {
        $(".nav").toggleClass("nav-bar");
        if ($(".nav").hasClass("nav-bar") == true) {
            $icon.removeClass("fa-bars");
            $icon.addClass("fa-close");
        } else {
            $icon.removeClass("fa-close");
            $icon.addClass("fa-bars");
        }
    })
})