var menuBar = document.getElementById("bar");
var nav = document.querySelector(".data-menu-content");

document.body.addEventListener("click",(e)=>{
    if(document.body.contains(e.target) && nav.style.height != "0px"){
        nav.style.height = "0px";
        nav.style.borderTop = "none";
        nav.padding = "0px";
    }
});


menuBar.addEventListener("click",function(e){
    var navStyle = window.getComputedStyle(nav);
    if(navStyle.height == "0px"){
        nav.style.height = "auto";
        nav.style.borderTop = "2px solid #0082FF";
        nav.padding = "1.2rem 1rem .3rem";
    }else{
        nav.style.height = "0px";
        nav.style.borderTop = "none";
        nav.padding = "0px";
    }
    e.stopPropagation();
});