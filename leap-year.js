function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    return false;
}

const inputYear = 200;
const IsThisLeapYear = isLeapYear(inputYear);
console.log('Is it Leap Year= ', IsThisLeapYear);