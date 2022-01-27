var screenEle = document.getElementsByClassName("screen")[0];
var screenCurrentOperation = document.getElementsByClassName("currentOperation")[0];
var screenData = "0";
var number1 = 0;
var op = "";
var shouldScreenClear = false;

function displayDataOnScreen() {
    screenEle.innerHTML = screenData;
}

function setOperation(operation) {
    op = operation;
    screenCurrentOperation.innerHTML = op + "&nbsp;";
}

function btnPress(number) {
    if (screenData == "0" && number != ".")
        screenData = "";

    if (shouldScreenClear) {
        screenData = "";
        shouldScreenClear = false;
    }

    if (number == "." && screenData.indexOf(".") > -1)
        return;

    screenData += number;
    displayDataOnScreen();
}

function btnOpPress(operation) {
    number1 = Number(screenData);
    setOperation(operation);
    shouldScreenClear = true;
}

function btnClearPress() {
    screenData = "0";
    shouldScreenClear = true;
    number1 = 0;
    number2 = 0;
    op = "";
    displayDataOnScreen();
}

function btnNegPress() {
    number1 = Number(screenData);
    screenData = "";
    btnPress(-number1);
}

function btnEqualPress() {
    if (op != "") {
        var number2 = Number(screenData);
        var result;
        switch (op) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            case '%':
                result = number1 % number2;
                break;
        }

        if (result != undefined) {
            screenData = result.toString();
            displayDataOnScreen();
        }
        setOperation("");
        shouldScreenClear = true;
    }
}
