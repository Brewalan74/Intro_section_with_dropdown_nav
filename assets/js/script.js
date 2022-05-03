function toggle() {
    let menuBurger = document.querySelector(".containerHeaderLinks");
    if (menuBurger.style.display === "flex") {
        menuBurger.style.display = "none";
    } else {
        menuBurger.style.display = "flex";
    }
}