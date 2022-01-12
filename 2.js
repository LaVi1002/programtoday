5.
const numbers = [1, 2, 3, 4, 3, 9, 7, 6, 9, 6];
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
console.log(duplicates);

OUTPUT:
[ 3, 9, 6 ]