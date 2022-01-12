3.
let array1 = [2, 4, 5, 1]
let array2 = [1, 3, 5, 7, 9];
let array3 = array1.concat(array2);
array4 = array3.filter((item,index)=>index !== array3.indexOf(item));
console.log(array4);

OUTPUT:
[ 1, 5 ]