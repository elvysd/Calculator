function numberEntry(event) {
    var x = event.key;
    console.log(x);
    if (x > 31 && (x < 48 || x > 57)) {
        event.preventDefault();
        console.log(x);
    }
}



function buttonDown(num) {
    let s = document.getElementById("s").value;
    document.getElementById("s").innerHTML = s;
    console.log(s);

    document.getElementById("s").value =  num +=document.getElementById("s").value;


}


console.log(s);

