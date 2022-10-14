
function forclear() {
    
    document.getElementById("output").innerHTML = ""; 
}

function rad(){
    var value = document.getElementById("output").innerHTML;
    value = Math.sqrt(value);
    document.getElementById("output").innerHTML = value;
}


function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}


function fordisplay(myvalue) { 
    document.getElementById("output").innerHTML += myvalue;
}

function solve(){
   
    var equation = document.getElementById('output').innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
   
}



