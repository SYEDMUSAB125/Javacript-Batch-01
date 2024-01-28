// create object with three keys consist of name id and age
// var obj = {
//     name: "Ali",
//     id: 123,
//     age: 20
// };

// write constructor function for the object
function Person(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
   
  }
Person.prototype.greeting = function() {
    console.log("Hello");
}
// student.greeting() note:run only on browser
var student = new Person("Ali", 123, 20);
var student1 = new Person("Ali", 123, 20);


console.log(student,student1 );


// primitive value and non-primitive value
// primitive value
// string  boolean number  undefined  null
// var a = 10;
// var b = a;
// b++;
// console.log(a,b);
// // non-primitive value
// // object  array
// var obj1 = {
//     name: "Ali",
//     age: 20
// };
// var obj2 = obj1;
// obj2.age = 30;
// console.log(obj1,obj2);
// var array = [1,2,3,4,5];
// var array1 = array;
// array1[0] = 100;
// console.log(array,array1);


 
