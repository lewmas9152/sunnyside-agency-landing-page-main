let  menuIcon = document.getElementById("menuIcon");
let  Navigation = document.getElementById("navigation");

function menu() {
    if (Navigation.style.display === "flex") {
        Navigation.style.display = "none";
    } else {
        Navigation.style.display = "flex";
    }
}