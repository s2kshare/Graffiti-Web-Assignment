var bar = document.getElementById('bar');
var body = document.body.innerHTML;
var creds = document.getElementById('creds');

const timeOut = setTimeout(growBar, 1500);
const timeOut2 = setTimeout(growBarOpacity, 1450);

function growBar() {
    bar.style.width = "75%";
    creds.style.flex = "12";
}

function growBarOpacity() {
    bar.style.opacity = "100%";
    creds.style.opacity = "100%";
}