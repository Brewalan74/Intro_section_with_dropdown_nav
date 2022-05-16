function toggle() {
    let menuBurger = document.querySelector(".containerHeaderLinks");
    if (menuBurger.style.display === "flex") {
        menuBurger.style.display = "none";
        document.querySelector("#burgerPic").src="./assets/images/icon-menu.svg";
    } else {
        menuBurger.style.display = "flex";
        document.querySelector("#burgerPic").src="./assets/images/icon-close-menu.svg";
    }
}