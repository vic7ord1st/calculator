// The getValue function to receive all click events
function getValue(value) {
    //Checking for systax error in the calculator display
    if (document.querySelector('.display').textContent == 'syntax error') {
        document.querySelector('.display').style.color = "rgb(0, 0, 0)";

        if (value = 'clear') {
            document.querySelector('.display').textContent = '0'
        }
        else {
            document.querySelector('.display').textContent = value;
        }
    }

    else {
        //if the button pushed is the clear button call the clear function
        if (value == 'clear') {
            clearDisplay();
        }
        //if the button clicked is the equals button call the calculate function
        else if (value == 'equals') {
            let query = document.querySelector('.display').textContent;
            calculate(query);
        }
        //if sqrt is clicked call the squareroot function on the value from the display and pass the result to calculate
        else if (value == 'sqrt') {
            let sqrtQuery = document.querySelector('.display').textContent;
            let query = squareroot(sqrtQuery);
            calculate(query);
        }
        //if the decimal is clicked add it to the existing items on the display
        else if (value == '.') {
            let query = document.querySelector('.display').textContent + value;
            document.querySelector('.display').textContent = query;
        }
        else {
            if (document.querySelector('.display').textContent !== '0') {
                document.querySelector('.display').textContent += value;
            }
            else {
                document.querySelector('.display').textContent = value;
            }
        }
    }
};

//the clearDisplay function
function clearDisplay() {
    document.querySelector('.display').textContent = '0';
};

//the calculate function
function calculate(value) {

    let result;
    try {
        result = eval(value);
    }
    catch (err) {
        document.querySelector('.display').style.color = "red";
        document.querySelector('.display').textContent = "syntax error";
    }
    document.querySelector('.display').textContent = result.toFixed(2);
}

//the squareroot function
function squareroot(value) {
    return `Math.sqrt(${value})`
}