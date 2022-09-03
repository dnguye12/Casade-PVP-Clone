let menuBar = document.getElementById("menu-bar");
let menuDropdown = document.getElementById("menu-mobile-dropdown");

menuBar.addEventListener("click", function() {
    if(menuBar.src.match("../images/menu-bar.png")) {
    menuBar.src = "../images/menu-close.png";
    menuDropdown.style.top = "60px";
    }else {
        menuBar.src = "../images/menu-bar.png"
        menuDropdown.style.top = "-240px";
    }
});