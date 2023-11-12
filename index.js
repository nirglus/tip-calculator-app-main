document.addEventListener("DOMContentLoaded", () =>{
    const billInput = document.getElementById("billInput");
    const tipBtns = document.querySelectorAll(".tip-btns button");
    const customTipInput = document.getElementById("tip-input");
    const pplNumInput = document.getElementById("pplNum");
    const displayTip = document.getElementById("tipDisp");
    const displayTotal = document.getElementById("totalDisp");
    const errorPpl = document.getElementById("errorPpl");
    const resetBtn = document.getElementById("resetBtn");
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
    
    function calculate() {
        const billValue = parseFloat(billInput.value) || 0;
        const tipPercentage = lastChangedInput.id === "tip-input" ? parseFloat(customTipInput.value) || 0 : parseFloat(lastChangedInput.innerHTML);
        const pplNumValue = parseFloat(pplNumInput.value) || 1;
        errorPpl.innerHTML = "";
        const tipAmountPerPerson = calcTip(billValue, tipPercentage, pplNumValue);
        const totalAmountPerPerson = calcTotal(billValue, tipPercentage, pplNumValue);
    
        displayTip.innerHTML = `${tipAmountPerPerson.toFixed(2)}`;
        displayTotal.innerHTML = `${totalAmountPerPerson.toFixed(2)}`;
    }
    
    function handleInputChange(event){
        lastChangedInput = event.target;
        if(pplNumInput.value == 0 && pplNumInput.value !== ""){
            errorPpl.innerHTML = "Can't be zero";
        }else {
            calculate();
        }
    }

    billInput.addEventListener("input", handleInputChange);
    tipBtns.forEach(btn => btn.addEventListener("click", handleInputChange));
    customTipInput.addEventListener("input", handleInputChange);
    pplNumInput.addEventListener("input", handleInputChange);
    resetBtn.addEventListener("click", () =>{
        displayTip.innerHTML = "0.00";
        displayTotal.innerHTML = "0.00";
    });
});



