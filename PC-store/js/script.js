let compactMenu = false;
let menuOpened = false;

function MenuToCompact() {
    var nav = document.querySelector("nav");
    nav.classList.add("compact");
    document.querySelector(".burger").style.display = "block";
    compactMenu = true;
}

function MenuToNormal() {
    var nav = document.querySelector("nav");
    menuOpened = false;
    nav.style.animation = "none";
    nav.classList.remove("compact");
    document.querySelector(".burger").style.display = "none";
    compactMenu = false;
}

function OnResize() {
    //menu
    var scrwidth = document.body.clientWidth;
    
    if(scrwidth <= 1045 && !compactMenu)
        MenuToCompact();
    else if(scrwidth > 1045 && compactMenu)
        MenuToNormal();
}

document.querySelector('.burger').onclick = function() {
    var nav = document.querySelector("nav");
    var menu = document.querySelector(".menu");
    if(menuOpened) {
        nav.style.animation = "close 0.3s ease-in-out both";
        menu.style.borderBottomRightRadius = "20px";
    }
    else {
        nav.style.animation = "open 0.3s ease-in-out both";
        menu.style.borderBottomRightRadius = "0px";
    }
    menuOpened = menuOpened? false : true;
};

function Alert(text) {
    var alertText = document.querySelector(".alert");
    alertText.textContent = text;
    alertText.style.animation = "none";
    void alertText.offsetWidth;
    alertText.style.animation = "alertAnimation 1.9s ease-in-out both";
}

window.onresize = OnResize;
OnResize();

