
let status;
let history;
var result;
var result1;
document.getElementById("plus").onclick = function() {
    status = "+";
     result =  Number(document.getElementById("num1").value);
     result1 =  Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (result + result1);
}

document.getElementById("minus").onclick = function() {
    status = "-";
    result =  Number(document.getElementById("num1").value);
    result1 =  Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (result - result1);
}

document.getElementById("times").onclick = function() {
    status = "*";
    result =  Number(document.getElementById("num1").value);
    result1 =  Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (result * result1);
}

document.getElementById("divide").onclick = function() {
    status = "/";
    result =  Number(document.getElementById("num1").value);
    result1 =  Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (result / result1);
}

document.getElementById("clear").onclick = function() {
    document.getElementById("history").innerText += result + status + result1 + "=" + document.getElementById("result").innerHTML;
    document.getElementById("num1").value = "" ;
    document.getElementById("num2").value = "" ;
    document.getElementById("result").innerHTML = "";
    
}

document.getElementById("mod").onclick = function() {
    status = "//";
    result =  Number(document.getElementById("num1").value);
    result1 =  Number(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = (result % result1);
}

document.getElementById("e").onclick = function() {
    (document.getElementById("num1").value) = Math.E;
}

document.getElementById("Pi").onclick = function() {
    (document.getElementById("num2").value) = Math.PI;
}