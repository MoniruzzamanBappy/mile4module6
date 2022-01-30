function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 512;
const isMyNumberEven = isEven(myNumber);
console.log('is it even= ', isMyNumberEven);