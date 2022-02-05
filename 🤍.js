/// Fri Feb 4 video 50 


for (let i = 0; 1 < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tip, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[1];
    }
    return sum / arr.length;
}
console.log(calcAverage[2, 3, 7]);
console.log(calcAverage[totals]);
console.log(calcAverage[tips]);