function clearZero() {
    let value = document.getElementById("display").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("display").innerHTML = value;
    }
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "0";
}

function display(value) {
    clearZero()
    document.getElementById("display").innerHTML += value;}

    function solve() {
        clearZero()
        let equation = document.getElementById("display").innerHTML;
        let answer = eval(equation);
        document.getElementById("display").innerHTML = answer;
        console.log(answer);
   }