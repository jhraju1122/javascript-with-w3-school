// let x = Number.EPSILON;
// document.getElementById("demo").innerHTML = x;
// Changing an Array Element))
const cars = ["Saab","Vovo","BMW"];
cars.push(["opal"]);
// cars[0] = "opal";

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// cars[3]= "BMW";
// document.getElementById("demo").innerHTML = cars;

// Converting an Array to a String))
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo").innerHTML = person.firstName;
 

// The length Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;

// Accessing the Last Array Element 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits[fruits.length-1];