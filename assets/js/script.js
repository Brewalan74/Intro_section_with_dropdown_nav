function featuresToggle() {
    let features = document.querySelector(".featuresLinks");
    if (features.style.display == "block" ) {
        features.style.display = "none";
    } else {
        features.style.display = "block";
    }
}

function toggleBurger() {
    let menuBurger = document.querySelector(".containerHeaderLinks");
    if (menuBurger.style.display === "flex") {
        menuBurger.style.display = "none";
        document.querySelector("#burgerPic").src="./assets/images/icon-menu.svg";
    } else {
        menuBurger.style.display = "flex";
        document.querySelector("#burgerPic").src="./assets/images/icon-close-menu.svg";
    }
}