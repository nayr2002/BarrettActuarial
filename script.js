//global variables:
var navbar;
var sticky;

$(document).ready(function(){
    navbar = document.getElementById("nav");
    sticky = navbar.offsetTop;
});

//makes the bar stick to the top of screen on scroll
window.onscroll = function() {myFunction()};

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
