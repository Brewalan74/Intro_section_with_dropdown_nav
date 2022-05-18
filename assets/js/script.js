function toggleFeatures() {
    let features = document.querySelector(".featuresLinks");
    if (features.style.display == "block" ) {
        features.style.display = "none";
        document.querySelector(".arrowFeatures").innerHTML = "&#9660;";
    } else {
        features.style.display = "block";
        document.querySelector(".arrowFeatures").innerHTML = "&#9650;";
    }
}

function toggleCompany() {
    let company = document.querySelector(".companyLinks");
    if (company.style.display == "block" ) {
        company.style.display = "none";
        document.querySelector(".arrowCompany").innerHTML = "&#9660;";
    } else {
        company.style.display = "block";
        document.querySelector(".arrowCompany").innerHTML = "&#9650;";
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