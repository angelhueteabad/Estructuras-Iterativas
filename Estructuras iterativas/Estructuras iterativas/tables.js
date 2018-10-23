
var number = document.getElementById("number"),
    square = document.getElementById("square"),
    cube = document.getElementById("cube");

function bfor() {
    for (num = 1; num < 11; num++) {
        number.innerHTML += "<td>" + num + "</td>";
    }
}

function bwhile() {
   num = 1;
    while (num >= 1 && num <= 10) {
        square.innerHTML += "<td>" + num * num + "</td>";
        num++;
    }
}

function bdowhile() {
 num = 1;
do {
        cube.innerHTML += "<td>" + num * num * num + "</td>";
        num++;
    } while (num >= 1 && num <= 10);
}

function Tabla() {
   bfor();
    bwhile();
    bdowhile();
}
function subscribe(){
     location.reload
    
    
    
}