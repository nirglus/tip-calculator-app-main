const billInput = document.getElementById("billInput");
const tipBtns = document.querySelectorAll(".tip-btns button");
const customTipInput = document.getElementById("tip-input");
const pplNumInput = document.getElementById("pplNum");
const displayTip = document.getElementById("tipDisp");
const displayTotal = document.getElementById("totalDisp");
let lastChangedInput;

function calcTip(bill, tip, people){
    let tipEach = bill * (tip / 100);
    return tipEach / people;
}
function calcTotal(bill, tip, people){
    let totalSum = bill * (tip / 100) + bill;
    let totalEach = totalSum / people;
    return totalEach;
}

function calculate(){
    const billValue = parseFloat(billInput.value) || 0;
    const tipPercentage = lastChangedInput.id === 'tip-input' ? parseFloat(customTipInput.value) || 0 : parseFloat(lastChangedInput.innerHTML);
    
    const pplNumValue = parseFloat(pplNumInput.value) || 1;
    const tipAmountPerPerson = calcTip(billValue, tipPercentage, pplNumValue);
    const totalAmountPerPerson = calcTotal(billValue, tipPercentage, pplNumValue);
    
    displayTip.innerHTML = `${tipAmountPerPerson.toFixed(2)}`;
    displayTotal.innerHTML = `${totalAmountPerPerson.toFixed(2)}`;
}

function handleInputChange(event){
    lastChangedInput = event.target;
    calculate();
}



