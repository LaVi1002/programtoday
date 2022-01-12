7.
let person = [{
  firstName : 'Lavi',
  age     : 22,
  sex: 'Female'
}, 
{
    firstName : 'Arun',
    age     : 16,
    sex: "male"
},
{
    firstName : 'Sasi',
  age     : 42,
  sex: 'Female'
},
{
    firstName : 'Nagarajan',
  age     : 52,
  sex: 'male'
},
{
    firstName : 'aadhi',
  age     : 4,
  sex: 'male'
},
{
    firstName : 'nalan',
  age     : 2,
  sex: 'male'
},
{
    firstName : 'raghul',
  age     : 24,
  sex: 'male'
},
{
    firstName : 'sebi',
  age     : 27,
  sex: 'male'
},
{
    firstName : 'kowshi',
  age     : 22,
  sex: 'Female'
},
{
    firstName : 'jeya',
  age     : 22,
  sex: 'Female'
},
{
    firstName : 'shan',
  age     : 22,
  sex: 'Female'
},
{
    firstName : "vishnu",
  age     : 22,
  sex: "male"
},
{
    firstName : "tharani",
  age     : 22,
  sex: "Female"
},
{
    firstName : "Maliga",
  age     : 42,
  sex: "Female"
},
{
    firstName : "sakthivel",
  age     : 52,
  sex: "male"
},
{
    firstName : "saro",
  age     : 62,
  sex: "Female"
},
{
    firstName : "nata",
  age     : 72,
  sex: "male"
},
{
    firstName : "kums",
  age     : 40,
  sex: "male"
},
{
    firstName : "gayu",
  age     : 32,
  sex: "Female"
},
{
    firstName : "kavi",
  age     : 52,
  sex: "Female"
}];

const v = person.filter((data,index) => {
    return(data.age >18)
});
console.log(v)


OUTPUT:
[ { firstName: 'Lavi', age: 22, sex: 'Female' },
  { firstName: 'Sasi', age: 42, sex: 'Female' },
  { firstName: 'Nagarajan', age: 52, sex: 'male' },
  { firstName: 'raghul', age: 24, sex: 'male' },
  { firstName: 'sebi', age: 27, sex: 'male' },
  { firstName: 'kowshi', age: 22, sex: 'Female' },
  { firstName: 'jeya', age: 22, sex: 'Female' },
  { firstName: 'shan', age: 22, sex: 'Female' },
  { firstName: 'vishnu', age: 22, sex: 'male' },
  { firstName: 'tharani', age: 22, sex: 'Female' },
  { firstName: 'Maliga', age: 42, sex: 'Female' },
  { firstName: 'sakthivel', age: 52, sex: 'male' },
  { firstName: 'saro', age: 62, sex: 'Female' },
  { firstName: 'nata', age: 72, sex: 'male' },
  { firstName: 'kums', age: 40, sex: 'male' },
  { firstName: 'gayu', age: 32, sex: 'Female' },
  { firstName: 'kavi', age: 52, sex: 'Female' } ]
