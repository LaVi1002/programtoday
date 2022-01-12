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
const L = V.find((data, index) => {
  return data.name ==='aadhi'
});
console.log(L)

OUTPUT:
{ name: 'aadhi', age: 4, work: 'student' }