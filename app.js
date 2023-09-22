const inputsArea = document.getElementById("numbersArea");
let numberFirst = [];
let numberSec = [];
let wheatherFirstOrSec = 0;
let results;
let w;
let proccess;
function changeTheNumber(i) {
    if (wheatherFirstOrSec == 0 && numberFirst.length < 16) {
        numberFirst.push(i);
        inputsArea.innerHTML = numberFirst.join("");
        console.log(numberFirst, "numberFir");
    } else if (wheatherFirstOrSec == 1 && numberSec.length < 14) {
        numberSec.push(i);
        inputsArea.innerHTML = numberSec.join("");
        console.log(numberSec, "numberSec");
    }
}   
function adding() {
    if (wheatherFirstOrSec === 0) {
        proccess = "add";
        wheatherFirstOrSec++;
        console.log(wheatherFirstOrSec);
    } else if ( wheatherFirstOrSec === 1) {
        
        console.log(wheatherFirstOrSec, results, numberFirst, numberSec);
    }
}
function equal() {
    if (numberFirst.length == 0) {
        numberFirst.push(0);
        console.log(numberFirst);
    }
    if (proccess === "add") {
        results = parseInt(numberFirst.join("")) + parseInt(numberSec.join(""));
        numberFirst = [];
        numberSec = [];
        numberFirst.push(results);
        inputsArea.innerHTML = numberFirst.join("");
    }
    if (proccess === "div") {
        results = parseInt(numberFirst.join("")) / parseInt(numberSec.join(""));
        numberFirst = [];
        numberSec = [];
        numberFirst.push(results);
        inputsArea.innerHTML = numberFirst.join("");
    }
    if (proccess === "sub") {
        results = parseInt(numberFirst.join("")) - parseInt(numberSec.join(""));
        numberFirst = [];
        numberSec = [];
        numberFirst.push(results);
        inputsArea.innerHTML = numberFirst.join("");
    }
    if (proccess === "mul") {
        results = parseInt(numberFirst.join("")) * parseInt(numberSec.join(""));
        numberFirst = [];
        numberSec = [];
        numberFirst.push(results);
        inputsArea.innerHTML = numberFirst.join("");
    }
    if (wheatherFirstOrSec === 0) {
        
        wheatherFirstOrSec++;
        console.log(wheatherFirstOrSec);
    } else if ( wheatherFirstOrSec === 1) {
        
        wheatherFirstOrSec--;
        console.log(wheatherFirstOrSec);
    }
    
}
function dividing() {
    if (wheatherFirstOrSec === 0) {
        proccess = "div";
        wheatherFirstOrSec++;
        console.log(wheatherFirstOrSec);
    } else if ( wheatherFirstOrSec === 1) {
        
        console.log(wheatherFirstOrSec, results, numberFirst, numberSec);
    }
}

function subtracting() {
    if (wheatherFirstOrSec === 0) {
        proccess = "sub";
        wheatherFirstOrSec++;
        console.log(wheatherFirstOrSec);
    } else if ( wheatherFirstOrSec === 1) {
        
        console.log(wheatherFirstOrSec, results, numberFirst, numberSec);
    }
}
function multiplying() {
    if (wheatherFirstOrSec === 0) {
        proccess = "mul";
        wheatherFirstOrSec++;
        console.log(wheatherFirstOrSec);
    } else if ( wheatherFirstOrSec === 1) {
        
        console.log(wheatherFirstOrSec, results, numberFirst, numberSec);
    }
}

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "1":
        changeTheNumber(parseInt(e.key));
        break;
        case "2":
        changeTheNumber(parseInt(e.key));
        break;
        case "3":
        changeTheNumber(parseInt(e.key));
        break;
        case "4":
        changeTheNumber(parseInt(e.key));
        break;
        case "5":
        changeTheNumber(parseInt(e.key));
        break;
        case "6":
        changeTheNumber(parseInt(e.key));
        break;
        case "7":
        changeTheNumber(parseInt(e.key));
        break;
        case "8":
        changeTheNumber(parseInt(e.key));
        break;
        case "9":
        changeTheNumber(parseInt(e.key));
        break;
        case "0":
        changeTheNumber(parseInt(e.key));
        break;
    }
});

function clearEverything() {
    inputsArea.innerHTML = "";
    numberFirst = [];
    numberSec = [];
    console.log(numberFirst);
    console.log(numberSec);
}


