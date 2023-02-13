var item = document.querySelector(".item");
var headerHeight = document.querySelector("#block").scrollHeight;

block.onmousemove = function (e){
    item.style.position = 'fixed';
    item.style.left = e.clientX + -150 + 'px';
    item.style.top = e.clientY + -150 + 'px';
    if(headerHeight <= e.clientY) {
        item.style.display = "none";
    }
    else {
        item.style.display = "flex";
    }
}