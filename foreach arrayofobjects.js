const V = [{
  name: "lavi",
  age:22,
  work:"IT"
},
{
  name:"Vishnu",
  age:22,
  work:"business"
},
{
  name:"kowshi",
  age:22,
  work:"IT",
},
{
  name:"aadhi",
  age:4,
  work:"student"
}]
const L = V.forEach((data, index) => {
  return data.name
});
console.log(L)

OUTPUT:
undefined