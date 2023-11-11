function calcTip(bill, tip, people){
    let tipEach = bill * (tip / 100);
    return tipEach / people;
}
