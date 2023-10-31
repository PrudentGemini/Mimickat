
window.addEventListener("beforeunload",(e)=>{
    e.returnValue = "close";
    alert("you are about to leave this page ");
});

var timeout = setTimeout(function() {
    console.log(5)
}, 10000);
var hour = document.querySelector(".digital-box .hours strong"), minutes = document.querySelector(".digital-box .minutes strong"),seconds = document.querySelector(".digital-box .seconds strong");

console.log(hour.style)

var sec = "0",min = "0",hours = 0;
var interval = setInterval(()=>{
    sec = Number(sec) + 1;
    if(sec == 60) min = Number(min) + 1;
    sec = String(sec);
    min = String(min);
    if(sec.length == 1) sec = 0 + sec;
    if(min.length == 1) min = 0 + min;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    
    
},1000)