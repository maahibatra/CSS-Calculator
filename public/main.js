const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function append(value) {
    display.value += value;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
