// Lecture : let and const


// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6= 'Jane Smith';
// let age6 =23;
// name6 = 'Jane Miller';
// console.log(name6);


// ES5
// function driversLicence(passedTest){
    
//     if(passedTest){
//         console.log(firstName);
//         var firstName='John';
//         var yearOfBirth= 1990;
//     }
//         console.log(firstName + ', born in ' 
//         + yearOfBirth + ' is officially allowed to drive');
//     }

// driversLicence(true);

// //ES6
// function driversLicence6(passedTest){
//     console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;

//     if(passedTest){
//         firstName='John';
        
//     }
//         console.log(firstName + ', born in '
//         + yearOfBirth + ' is officially allowed to drive');
    
// }
// driversLicence6(true);

let firstName='John';
let lastName='Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2016 - year;

}
//console.log(' this is ' +firstName +lastName + ' born in '+yeaarOfBirth);
//ES6
console.log(`this is ${firstName} ${lastName} born in ${yearOfBirth} whose age is ${calcAge(yearOfBirth)}` );
