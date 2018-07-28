/*
    header scroll
*/
var header = document.querySelector(".page_nav");

// Function scroll
function scroll(){
    if(document.body.scrollTop > 50|| document.documentElement.scrollTop > 50){
        header.classList.add('float');
    } else {
        header.classList.remove('float');
    }
}
// Checkit it's time to change image
function chckImage(){
    let img = document.querySelector(".bg-img");

    let scTop = document.body.scrollTop % (2 * window.innerHeight);
    let dc = document.documentElement.scrollTop % (2 * window.innerHeight);

    if(document.body.scrollTop < scTop || document.documentElement.scrollTop > dc){
        img.src = "/img/logo.png";
    } else {
        img.src = "/img/viva.png";
    }
}
window.addEventListener("scroll", function(){
    scroll();
    chckImage();
});
