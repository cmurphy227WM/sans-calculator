//Global Variables

var num1 = ""; //store first # for math
var num2 = ""; //store second # for math
var operator; //stores the value for operator
var flag = false; //boolean false if we haven't used an operator yet
var equalTo = false; //bolean false if we haven't pressed the equal sign
var display = document.getElementById("display");

//Calculator

//function to set numbers into the num1 or num2 variables
function setValue(number){
    if(equalTo === true){
        clearButton();
    }
    if (flag === false){
        num1 += number;
        display.innerHTML = num1;
    }  
    if(flag === true){
        num2 += number;
        display.innerHTML += number;
    }
    if (num1.length > 8 || num2.length > 8){
        display.innerHTML = "*i think that's enough kid.";
    }
    if(num1.length === 8 && num1 === "66666666"){
        document.getElementById("containerStyle").innerHTML = 'body{ background: url(sansdefault.gif) no-repeat left}';
    }
    if(num1.length === 5 && num1 === "80085"){
        document.getElementById("containerStyle").innerHTML = 'body{ background: url(sansdance.gif) no-repeat left}';
    }
    if(num1.length === 8 && num1 === "43662433"){
        document.getElementById("containerStyle").innerHTML = 'body{ background: url(chara.png) no-repeat left;background-color: red;color: red;background-position: 10% 70% }';
        display.innerHTML = ":)"
    }
    if(num1.length === 8 && num1 === "99999999"){
        document.getElementById("containerStyle").innerHTML = 'body{ background: url(papyrus.gif) no-repeat right;}';
    }
}

//function to clear the calculator
function clearButton(){
    num1 = "";
    num2 = "";
    display.innerHTML = "";
    equalTo = false;
    flag = false;
}

//function for storing and selecting the operator value
function setOperator(number){
    operator = number;
    var opString = "";
    flag = true;
    if(operator === 4){
        display.innerHTML += " / ";
        opString = " / ";
    }
    else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";
    }
    else if(operator === 2){
        display.innerHTML += " - ";
        opString = " - ";
    }
    else{
        display.innerHTML += " + ";
        opString = " + ";
    }
    //for getting rid of multiple operators
    if(flag === true){
        display.innerHTML = num1 + opString;
    }
    //does not let us do an operation before entering a num1
    if(flag === true && num1 === ""){
        clearButton();
    }
    if(equalTo === true){
        clearButton();
    }
}

//function to solve the math equation
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";
    if(operator === 1){
        result = num1 + num2;
    }
    else if(operator === 2){
        result = num1 - num2;
    }
    else if(operator === 3){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;
    if(roundedResult === "Infinity"){
        display.innerHTML = "*dividing by 0 on a calculator?"
    }
    else if(roundedResult === "NaN"){
        display.innerHTML = "*welp, something went wrong.";
    }
}

//function to delete the last digit in the display
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        temp1 = num1.substring(0, num1.length-1);
        num1 = temp1;
        display.innerHTML = num1;
    }
    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }
    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length-1);
        num2 = temp2;
        flag = true;
        opSetString(operator);
    }
}

//function for adding decimals
function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1="0."
            display.innerHTML = num1;
        }
        if(num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1
        }
    }
    if(flag === true){
        if(num2 === ""){
            num2="0."
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            opSetString(operator);
        }
    }
}

//tell the calculator what operator you need when messing with num2
function opSetString(op){
    if(o === 1){
        display.innerHTML = num1 + " + " + num2
    }
    else if(op === 2){
        display.innerHTML = num1 + " - " + num2
    }
    else if(op === 3){
        display.innerHTML = num1 + " * " + num2
    }
    else{
        display.innerHTML = num1 + " / " + num2
    }
}

function audio(){
    document.getElementById("music").setAttribute("src","megalovania.mp3")
}