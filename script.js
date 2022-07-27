function onClickMenu(){
    document.getElementById("menu").classList.toggle("change"); // Hamburger to X. toggle changes class when clicked//
    document.getElementById("nav").classList.toggle("change"); // Hamburger Links appear on click//
    document.getElementById("menu-bg").classList.toggle("change-bg"); // Hamburger Background appears on click//
}

// Gallery Clicks //
var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}