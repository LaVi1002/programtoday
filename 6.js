const a =[3,30,34,5,9]
const c = a.reverse();
c.splice(3,2,3,30);
const b = c.join("");
const d = JSON.stringify(b)
console.log(d);

OUTPUT:
9534330