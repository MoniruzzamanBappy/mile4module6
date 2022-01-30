function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 1544;
feet = inchToFeet(myInches);
console.log('feet=', feet);

function mileToKilo(mile) {
    var km = mile * 1.61;
    return km;
}

var myMile = 50;
km = mileToKilo(myMile);
console.log('km=', km);