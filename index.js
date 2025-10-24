// --------------------------------------------------constructorlar Object, Array, String

// -------------------------------------objekt yaratish usullari

// -------------------------------------literal

// let obj = {}

// -------------------------------------class bilan

// let obj = new Object{}

// -------------------------------------constructor bilan

// let obj = Object{}

// -------------------------------------obj creat usuli

// let proto = {
//     greet: function() {
//        console.log("Hello");
//     }
// }

// let person = Object.create(proto)
// person.name = "John"
// person.age = 30

// console.log(person);

// ------------------------------------- class bilan

// ishlamadi negadir

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello");
//   }
// }

// let john = new Person("John", 30);

// ------------------------------------- Funcsiya bilan

// function person() {
//     return {
//         name: "John",
//         age: 30,
//         greet: function() {
//             console.log("Hello");
//         }
//     }
// }

// let john =person()

// // // metod va key value qo'shish

// let newPerson = person()

// newPerson.job = "Developer"

// newPerson.sayGoodbye = function () {
//     console.log("Goodbye!");
// }

// newPerson.sayGoodbye()
// console.log(newPerson);

// --------------------------------------------arrayni elon qilish usullari

// ----------------------------------------array literal
// --------------------------------------- new Array()
// ------------------------------------------ Array.of() 

// let numbers = Array.of(1, 2, 3, 4, 5)

// console.log(numbers);

// ----------------------------------------------Array.from()

// let a = +Array.from({length: 6}, () => Math.floor(Math.random() * 10)).join("")

// console.log(a);

// --------------------------------------------spread funksiyasi bilan yangi Array

// let str = "hello"
// let letters = [...str]

// console.log(letters);

// ----------------------------------------------Array.fill bilan

// let filledArray = new Array(3).fill(0)

// console.log(filledArray);

//-------------------------------------------------------- srtin elon qilish usullsri

// ----------------------------------------------string literal

// ----------------------------------------------new String()

// let str = new String("Hello World")
// console.log(str);

// ----------------------------------------------templet literal

// -----------------------------------------------string concatinetion 

// -----------------------------------------------String.fromCharCode()
// aski codlar bilan stringlar

// let str = String.fromCharCode(72, 101, 108, 108, 111)
// console.log(str);

// // stringni raqamga aylantirish

// let myString = "Hello World"

// let CharCode1 = myString.charCodeAt(1)
// console.log(CharCode1);

//-------------------------------------------------------- Number elon qilish usullari

// -----------------------------------------------Number literal

// -----------------------------------------------new Number()

// -----------------------------------------------parseInt()

// -----------------------------------------------parseFloat()

// -----------------------------------------------Number()

// -----------------------------------------------Math metodlari yordamida son elon qilish

// -----------------------------------------------Number.MAX_VALUE va Number.MIN_VALUE

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// --------------------------------------------------Boolean elon qilish usullari

// --------------------------------------------------Boolean ()

// --------------------------------------------------new Boolean ()

// --------------------------------------------------Logical operatorlari bilan

// && and

// || or

// ! not

// --------------------------------------------------comparsion operatorlari bilan

// >
// <
// ==
// ===

// --------------------------------------------------Double negation

// let truthyValue = !!1
// let falseValue = !!0
// let stringBool = !!"hello"


// console.log(stringBool);



















