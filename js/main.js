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
window.addEventListener("scroll", function(){
    scroll();
});
