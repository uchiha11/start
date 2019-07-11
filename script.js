// Lecture : let and const


// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //
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

// let firstName='John';
// let lastName='Smith';
// const yearOfBirth = 1990;
// function calcAge(year){
//     return 2016 - year;

// }
// //console.log(' this is ' +firstName +lastName + ' born in '+yeaarOfBirth);
// //ES6
// console.log(`this is ${firstName} ${lastName} born in ${yearOfBirth} whose age is ${calcAge(yearOfBirth)}` );

/***************************************************************/
/*************************  Arrow function **************************************/
/***************************************************************/
/***************************************************************/




// Arrow function
//  const years =[2016, 2010,2000,2005];

//  var age5=years.map(function(el){
//      return 2016-el;
//  });
//  console.log(age5);

//  let age6 = years.map(el => 2016-el);
//  console.log(age6);
//  age6=years.map((el,index) => `Age element ${index+1} : ${2016-el}.`);
//  console.log(age6);

//  age6=years.map((el,index) => {
//      const now = new Date().getFullYear();
//      const age = now - el;
//      return `Age element ${index+1} : ${age}.`})
//  console.log(age6);

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click',
//             function () {
//                 var str = ' this is box number ' + self.position + ' and it is ' + self.color;
//                 // alert(str);
//             });

//     }
// }
// box5.clickMe();

// const box6 = {
//     color: 'green',
//     position:1,
//     clickMe:function(){
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = ' this is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });

// }
// }
// // box6.clickMe();
// function Person(name){
//     this.name = name;
// }
// Person.prototype.myFriends5 = 
// function(friends) {
// var arr = friends.map(el =>`${this.name }is friends with  ${el}`);

// console.log(arr);
// }
// new Person('mike').myFriends6(friends);


/***************************************************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/
/************ **************** ******************* *********/



// const [name,age]=['John',26];
// // console.log(name,age);
// const obj={
//     firstName:"hi",
//     lastName: "ji"
// }

// // console.log(obj);
// // const {firstName, lastName}=obj;
// // console.log(obj);
// const {
//     firstName: a,
//     lastName: b
// } = obj;
// console.log(a);
// console.log(b);


/***************************************************************/
/***************************************************************/
/*******************  Destructing  *************************/
/***************************************************************/
/************ **************** ******************* *********/

// function calcAgeRetirement(year) {
//     const age = new 
//     Date().getFullYear() - year;
//     return [age,65-age];

// }
// const[age2,retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);
// const boxes= document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'yellow');

// const boxesArr5 = Array.from(boxes);
// for(var i=0;i < boxesArr5.length;i++){
//     if(boxesArr5[i].className == 'box blue')
//     {
//         break;
//     }
//     boxesArr5[i].textContent = 'I changed to blue !';
// }
/***************************************************************/
/***************************************************************/
/*******************  Array  *************************/
/***************************************************************/
/************ **************** ******************* *********/
// var ages=[12,10,8,21,16,15]
// var full=ages.map(function(cur){
//     return cur >=18;
// });
// console.log(full);
// console.log(ages.findIndex(cur => cur >=18));
// console.log(ages.find(cur => cur >=18));

/***************************************************************/
/***************************************************************/
/*******************  spread  - use when we need to pass the array as single values ,considers the values equal to the arguments only  *************************/
/***************************************************************/
/************ **************** ******************* *********/

// function addFourAges(a, b, c, d) {

//     return a + b + c + d;
// }
// var ages = [10, 10, 10, 10, 20]
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['john', 'jane'];
// const familyMiller = ['mary', 'mike'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h =
//     document.querySelector('h1');
// const boxes =
//     document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');


/***************************************************************/
/***************************************************************/
/******************* rest parameters - by using limit keyword.   *************************/
/***************************************************************/
/************ **************** ******************* *********/
// function isFUllAge5(limit) {
//     var argsArr = Array.prototype.slice.call(arguments,1);
//     argsArr.forEach(function (cur) {
//         console.log(2019 - cur >= limit)
//     })
// }
// isFUllAge5(20,2000, 1997, 1994);

// function isFUllAge6(limit,...years) {
//     years.forEach(cur => console.log((2019 - cur) >= limit));
// }
// isFUllAge6(18,2001, 1997,1999,2000);  
/***************************************************************/
/***************************************************************/
/******************* Default parameters   *************************/
/***************************************************************/
//*********directly write the undefined values as arguments, no need of ternary operator** */
/************ **************** ******************* *********/

// function SmithPerson5(firstName,yearOfBirth,lastName,nationality){

// lastName === undefined?lastName="Smith" : lastName = lastName;
// nationality===undefined?nationality='american': nationality=nationality;

//     this.firstName=firstName;
//     this.yearOfBirth=yearOfBirth;
//     this.lastName=lastName;
//     this.nationality=nationality;




//     function SmithPerson6(firstName,yearOfBirth,lastName='Smith',nationality='american')
//     {
//             this.firstName=firstName;
//             this.yearOfBirth=yearOfBirth;
//             this.lastName=lastName;
//             this.nationality=nationality;

// }
// var john=new SmithPerson6('John',1990);
// var emily =new SmithPerson6('Emily',1983,'Diaz','spanish');
// console.log(john,emily);

/***************************************************************/
/***************************************************************/
/*******************  MAP  *************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/
// const question = new Map();
// question.set('a Question','What is the official name of the latest major JS version');
// question.set(1,'ES5');
// question.set(2,'ES6');
// question.set(3,'ES2015');
// question.set(4,'ES7');
// question.set('correct',3);
// question.set(true,"correct answer!!");
// question.set(false, 'Wrong. Please try again');

// console.log(question.get('a Question'));


// // if(question.has(4)) {
// //     question.delete(4);  // deleted the 4th option 



// // }
// // question.clear() //// deletes all 
// // question.forEach((value,key) =>

// for(let [key,value] of question.entries()){
//     if(typeof(key)=== 'number')
//     console.log(`answers ${key} is ${value}`);
// }
// const ans= parseInt(prompt('Write the correct answers'));

//    console.log(question.get(ans === question.get('correct')));

/***************************************************************/
/*************************** implement class first ************************************/
/*******************  classes  ******--
 *  only add methods to class but not properties
 * , can use static *******************/
/***************************************************************/
/***************************************************************/
/***************************************************************/

//ES5

// var Person5 = function(firstName,dateofBirth,job){

//     this.firstName=firstName;
//     this.dateofBirth=dateofBirth;
//     this.job=job;}

//    Person5.prototype.calculateAge=function() {
// var age= new Date().getFullYear- this.dateofBirth;
// console.log(age);

//  }


// var John = new Person5('John',1997,'teacher');

// //ES6
// class Person6 {
//     constructor(name,dateofBirth,job){
//         this.name = name;
//         this.dateofBirth=dateofBirth;
//         this.job=job;

//     }
//     calculateAge(){

//         var age = new Date().getFullYear-this.dateofBirth;
//         console.log(age);

//     }

//     static greetings(){
//         console.log("hello there !!");
//     }
// }
// const john6 =new Person6('John',1998,'journalist');

// Person6.greetings();
/***************************************************************/
/***************************************************************/
/*******************  sub- class *************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/
// class Person6 {
//     constructor(name, dateofBirth, job) {
//         this.name = name;
//         this.dateofBirth = dateofBirth;
//         this.job = job;

//     }
//     calculateAge() {

//         var age = new Date().getFullYear() - this.dateofBirth;
//         console.log(age);

//     }


// }
// class Athlete6 extends Person6{
//     constructor(name,dateofBirth,job,olympicGames,medals){
//         super(name,dateofBirth,job); // calls the super class. automatically
//     this.olympicGames = olympicGames;
//     this.medals=medals;
//     }
//     wonMedals(){
//         this.medals++;
//         console.log(this.medals);

//     }
// }
// const johnAthlete6 = new Athlete6('John',1997,'swimmer',3,10)
// johnAthlete6.wonMedals();
// johnAthlete6.calculateAge();



/***************************************************************/
/***************************************************************/
/*******************  QUIZ *************************/
/***************************************************************/
/***************************************************************/
/***************************************************************/

console.log("----PARKS REPORT----");
let parkTotal = 0;
let age1, age2, age3;
class Town {
    constructor(park) {
        this.park = park;

    }

    calculatePark() {
        parkTotal += this.park;
        console.log(`Total number of parks : ${parkTotal}`);
        return parkTotal;
    }


}
class Element {
    constructor(name, builtYear) {
        this.name = name;
        this.builtYear=builtYear;

    }
}
class Street extends Element {
    constructor(name, builtYear, length, size = 3) {
        super(name, builtYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classfication = new Map();
        classfication.set(1, 'tiny');
        classfication.set(2, 'small');
        classfication.set(3, 'normal');
        classfication.set(4, 'big');
        classfication.set(5, 'huge');
        console.log(`${this.name}, build in ${this.builtYear}, is a ${classfication.get(this.size)} street`);

    }


}







class Park extends Town {
    constructor(park, name, year, numberOfTrees, area) {
        super(park);
        this.name = name;
        this.year = year;
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }
    calculateDensity() {
        let density = this.numberOfTrees / this.area;

        console.log("The tree density of Park : " + density);
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.year;
        console.log(`Age of the park is ${age} years`);

        return age;

    }
    calculateTree() {
        if (this.numberOfTrees > 10000)
            console.log(`${this.name} has more that 10000 trees`);
        console.log(` ******************`);

    }




}

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0)
    return [sum, sum / arr.length];
}


let Park1 = new Park(1, 'Jim Corbett national Park', 1980, 170000, 10000);
Park1.calculateDensity();
let ParkT = Park1.calculatePark();
age1 = Park1.calculateAge();
Park1.calculateTree();


let Park2 = new Park(1, 'Crocodile lake Park', 1999, 890000, 350000);
Park2.calculateDensity();
ParkT = Park2.calculatePark();
age2 = Park2.calculateAge();
Park2.calculateTree();

let Park3 = new Park(1, 'Gir Park', 2005, 1700, 6900);
Park3.calculateDensity();
ParkT = Park3.calculatePark();
age3 = Park3.calculateAge();
Park3.calculateTree();



const totalAgeAverage = (parseFloat(((age1 + age2 + age3) / ParkT)).toFixed(2));
console.log(`The average age of all the parks ${totalAgeAverage} years`);


const Street1 = [new Street('ocean avenue', 1990, 1.1, 4),
    new Street('Evergreen', 2008, 14, 2)
];
const allParks = [new Park(1, 'corella', 1999, 1000, 5000), new Park(1, 'liam', 2005, 20000, 5000)];


function reportStreets(s) {

    console.log('------STREET REPORT------');

    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength}km.`);

    s.forEach(el => el.classifyStreet());



}
reportStreets(Street1);
// function reportParks(p){
//     console.log("park report !!!!!!");
//     p.forEach(el => el.calculateDensity());



// 