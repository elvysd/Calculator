

function numberEntry(event) {
    var x = event.key;
    console.log(x);
    if (x > 31 && (x < 48 || x > 57)) {
        event.preventDefault();a
        console.log(x);
    }
}

let x = 0;
document.getElementById("s").value = "";

function buttonDown(num) {
    let s = document.getElementById("s").value;
    document.getElementById("s").innerHTML = s;
    if (num == "CE") {
        console.log("sdsd");
        document.getElementById("s").value = "";
        let x = 0;
    }
    else if (num == "Backspace") {

        document.getElementById("s").value = document.getElementById("s").value.slice(0, -1);
    }
    else if (num == '+/-') {
        document.getElementById("s").value = document.getElementById("s").value * (-1);
    }
    else if (num == '.') {
        document.getElementById("s").value = Number(s).toFixed(1);
    }
    else if (num == '+') {
        document.getElementById("s").value = s + '+';
    }
    else if (num == '-') {
        document.getElementById("s").value = s + '-';
    }
    else if (num == '*') {
        document.getElementById("s").value = s + '*';
    } 
    else if (num == '-') {
        document.getElementById("s").value = s + '-';
    }
    else if (num == '/') {
        document.getElementById("s").value = s + '/';
    }
    else if (num == '^') {
        document.getElementById("s").value = s + 'Math.sqrt()';
    }
    else if (num == '=') {
        console.log(document.getElementById("s").value);
        calculate(document.getElementById("s").value);
    }
    else {
        document.getElementById("s").value = document.getElementById("s").value += num;
    }
}

function calculate(equation) {
    document.getElementById("s").value = eval(equation);
}
