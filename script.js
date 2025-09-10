let result;

function getValues(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    confirmValues(num1, num2);
}

function confirmValues(a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert("An error has occured, enter a valid number!");}
    else{doMath(a, b)}
}

function doMath(a, b) {
    let symbol = document.getElementById("operationList").value;
    switch (symbol) {
        case "addition":
            result = a + b;
            break;
        case "subtraction":
            result = a - b;
            break;
        case "division":
            result = a/b;
            break;
        case "multiplication":
            result = a*b;
            break;
    }
    showanswer(result);
}

function showanswer(answer){
    document.getElementById("input-text").innerHTML = answer;

}


document.getElementById("getoutput").addEventListener("click", getValues);
