//creating nodes

var childNode = document.createTextNode("\nhello world\n");
var parentNode = document.body.firstChild.nextSibling;

parentNode.classList.add("data-modified")
console.log(parentNode.offsetHeight);
console.log(parentNode.offsetWidth)
console.log(parentNode.clientHeight);
console.log(parentNode.clientWidth)
console.log(parentNode.className)

var button = document.querySelector("button");
var bgs = ["#000","#333","#fff212"];
button.addEventListener("click",function(){
    var bg = Math.floor(Math.random() * (bgs.length));
    console.log(44444)
    console.log(bg)
    document.body.style.backgroundColor = bgs[bg];
});
/*console.log(document.body.textContent)
document.body.textContent = "";

addEventListener('click',function(){
    console.log("you clicked")
})

// parentNode.appendChild(childNode);
// parentNode.insertBefore(childNode,childNode.previousSibling);


// var strong = document.createElement("strong");
// var childNode = document.createTextNode("\nhello world\n");
// strong.appendChild(childNode);

// parentNode.appendChild(strong);

// var head = document.createElement("h1");
// head.appendChild(parentNode);

// document.body.insertBefore(head,document.body.firstChild);

*/