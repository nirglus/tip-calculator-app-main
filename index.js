function calcTip(bill, tip, people){
    let tipEach = bill * (tip / 100);
    return tipEach / people;
}
function calcTotal(bill, tip, people){
    let totalSum = bill * (tip / 100) + bill;
    let totalEach = totalSum / people;
    return totalEach;
}
