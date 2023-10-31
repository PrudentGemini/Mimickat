/*This line helps to control the appearace and disappearance of our side bar*/

function showBar() {
    var sidebar = document.getElementById("side").style;
    console.log(sidebar)

    sidebar.width = "70%";
}

function hideBar(){
    var sidebar = document.getElementById("side").style;
    sidebar.width = '0%';
}