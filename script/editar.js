const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
 
const updateValue = () => {
    value.innerHTML = "Gols " + count;
}
 
let count = 0;
let intervalId = 0;
 
plusButton.addEventListener('click', () => {
        count += 1;
        updateValue();
        console.log
});
 
minusButton.addEventListener('click', () => {
        count -= 1;
        updateValue();
});
 
const valueAssist = document.getElementById("valueAssist");
const plusButtonAssist = document.getElementById("plusAssist");
const minusButtonAssist = document.getElementById("minusAssist");
 
 
const updateValueAssist = () => {
    valueAssist.innerHTML = countAssist +  " assistências";
}
 
let countAssist = 0;
let intervalIdAssist = 0;
 
plusButtonAssist.addEventListener('click', () => {
        countAssist += 1;
        updateValueAssist();
});
 
minusButtonAssist.addEventListener('click', () => {
        countAssist -= 1;
        updateValueAssist();
});