function getValue(value) {
    console.log(value);
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
        if (value == 'clear') {
            console.log('it is clear!')
            clearDisplay();
        }
        else if (value == 'equals') {
            console.log('equals');
            let query = document.querySelector('.display').textContent;
            calculate(query);
        }
        else if (value == 'sqrt') {
            let sqrtQuery = document.querySelector('.display').textContent;
            let query = squareroot(sqrtQuery);
            calculate(query);
        }
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

function clearDisplay() {
    document.querySelector('.display').textContent = '0';
};

function calculate(value) {
    console.log(value);

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

function squareroot(value) {
    return `Math.sqrt(${value})`
}