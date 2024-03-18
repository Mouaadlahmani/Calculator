//Varibales
let firstNumber = 0;
let totalvalue = 0;
let step = 0;
let operation;
let result = 0;
let display = document.getElementById("input");
let screen = document.getElementById("output");

//functions
function getNumber(num){
    if(step == 0){
        firstNumber = num;
        display.value += firstNumber;
        totalvalue += firstNumber;
    }else if(step >= 1){
        firstNumber = num;
        switch (operation){
            case '+':  totalvalue += firstNumber;
                break;
            case '-': totalvalue -= firstNumber;
                break;
            case '/': totalvalue /= firstNumber;
                break;
            case '%': totalvalue %= firstNumber;
                break;
            case 'x': totalvalue *= firstNumber;
                break;
        }
        display.value = firstNumber;
        screen.value = totalvalue;
    }
}
function del() {
}
function getOperator(op) {
    display.value += op; 
    screen.value +=op
    step ++;
    operation = op;
}
function Clear() {
    display.value = 0;
    firstNumber = null;
    totalvalue = 0;
    step = 0;
    operation = null;
    result = 0;
    fNumber = [];
    total = [];
}
function calculat () {
    display.value = totalvalue;
    
}