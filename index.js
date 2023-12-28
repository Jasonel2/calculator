function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b == 0) {
        alert('cannot divide by zero!')
        return "error";
    }
    return a/b;
}

function operate(operator, num1, num2) {
    if (operator == "+") 
        return add(num1, num2)
    else if (operator == "-") 
        return subtract(num1, num2);
    else if (operator == "*") 
        return multiply(num1, num2);
    else if (operator == "/") 
        return divide(num1, num2);
}


const display = document.querySelector("h3");
const digitBtns = document.querySelectorAll(".digit");

let num1 = ""
let num2 = ""
let operator = ""

for (const btn of digitBtns) {
    btn.addEventListener("click", () => {
        if (operator == "") {
            num1 += `${btn.textContent}`;
            console.log(num1)
            display.textContent =  display.textContent + `${btn.textContent}` 
        }
        else {  
            num2 += `${btn.textContent}`
            console.log(num2)
            display.textContent = "";
            display.textContent = num2;
        }
        
        
    })
}

const operatorBtns = document.querySelectorAll(".operator");

for (const btn of operatorBtns) {
    btn.addEventListener("click", () => {
        if (num1 != "" && num2 != "") {
            let num = operate(operator, parseFloat(num1), parseFloat(num2))
            display.textContent = Math.round(num * 100) / 100
            num1 = String(Math.round(num * 100) / 100);
            num2 = "";
        }
        if (btn.textContent == "×") {
            operator = "*";
        }
        else if (btn.textContent == "÷") {
            operator = "/";
        }
        else if (btn.textContent == "+") {
            operator = "+";
        }
        else if (btn.textContent == "-") {
            operator = "-";
        }
        console.log(operator);
    })
}

const equalBtn = document.querySelector(".equals");
equalBtn.addEventListener("click", () => {
    if (num1 != "" && num2 != "") {
        let num = operate(operator, parseFloat(num1), parseFloat(num2))
        display.textContent = Math.round(num * 100) / 100
        num1 = String(Math.round(num * 100) / 100);
        num2 = "";
    }
})

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "";
})

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    if (!num1.includes(".") && operator == "") {
        num1 += ".";
        display.textContent += ".";
    }
    else if (!num2.includes(".")) {
        num2 += ".";
        display.textContent = "";
        display.textContent += ".";
    }
})


