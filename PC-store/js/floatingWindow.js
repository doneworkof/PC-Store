let fwrapper = document.querySelector(".floating-wrapper");
let fwin = document.querySelector(".floating-window");
let opened = false;

function Toggle(state) {
    fwrapper.style.animation =  (state? "OpenFw" : "CloseFw") + " 0.35s both ease-in-out";
    opened = state;
}


function ShowContent(id) {
    var layout = document.querySelector("#" + id);
    fwin.innerHTML = layout.innerHTML;
    fwin.style.width = layout.style.width;
    fwin.style.height = layout.style.height;
}