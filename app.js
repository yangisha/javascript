
// // alert("Hello Js");
//   console.log(4);
//   console.error("this is error");
//   console.warn("this is warning");

// //   Variable in Js(var let and const)
// // Variable declare
// var age;// var declaration;
// age=20;
// console.log(age);
// var age=20;
// // datatypes in Js
// // 1.Primitive date types

// // a.Number
// var number=10.10;
// console.log(number);
// console.log(typeof number);


// // b. String
// var name= " ram ";
// console.log(name);
// console.log( typeof name);
 
// var name1='20';
// console.log(name1);
// console.log(typeof name1);

// // c.Undefined
// var person;
// console.log(person);
// console.log(typeof person);

// // d.boolean
// var bool= true ;
// console.log(bool);
// console.log(typeof bool);

// // e.Null is case sensetive
// var Nul=null;
// console.log(Nul);
// console.log(typeof Nul);

// // f.Symbol
// var sym=Symbol();
// console.log(sym);
// console.log(typeof sym);


// //Math object
// var value=Math.PI;
// // value=Math.random(); value generate garcha 0-1 ko bichama
// // value=Math.round(2.8); use to round off a number
// value=Math.floor(2.8);
// value=Math.floor(Math.random()*6);
// value=Math.ceil(2.1);
// value=Math.pow(2,3);
// value=Math.abs(-5);
// value=Math.sqrt(16);
// value=Math.min(1,4,-5,6);
// value=Math.max(1,4,-5,6);
// // var number=prompt("enter your marks?");
// console.log(number);
// console.log(value);

// // object literal
// var car={
//     wheel:4,
//     color:'white',
//     start:function(){}

// }
// console.log(car);
// console.log(car.wheel);
// console.log(typeof car.wheel);
// console.log(car.start());


// //  String concatenation in Js
console.log('Hello'+ 'Js'); //old way
var str1="hello" ;
var str2="world" ;
console.log(str1+str2);
var str3="34";
var str=2;
console.log(str3+str);


var str5=str1.concat(str2);
console.log(str5);

// template literal
console.log (`${str1} ${str2} `);


// condition in JS
var job="developer";



if (job=="designer"){
  console.log('he is Designer')
}else{
  console.log('he is developer');

}

// Double equal to and single wquaal to difference
var x=5;
if (x=="5"){
  console.log(x)
  
}

// === This checks equal and also if the data type is similar or not 

// Ternary Operator

x==5 ? console.log("5"):console.log("NAN");

// Switch case
switch(x){
  case 1:
    console.log(1);
    break;

    case 2:
      console.log(2);
      break;

      case 3:
        console.log(3);
        break;

case 4:
        console.log(4);
        break;
        
        case 5:
        console.log(5);
        break;


  default:
console.log('hello');
      
}
// Loop
for(var i=0;i<5;i++){
  console.log(i);

}

for(var j=5;j>0;j--){
  console.log(j);
  
}
// while loop js
var k=0;
while(k<5){
  console.log(j);
  j++;
}

// Do while in JS(runs atleast once and checks condition later)
var a=11;
do{
  console.log(a);
  a++;
}

while(a<10)

// Function declaration in Js
function person(name,age){
console.log(`He is ${name}`);
console.log(`His age is ${age}`);
}

person("Hari",20);
     
// var, let and const(let and const are block scope ) 
// (var is a functional scope)
// function loopDataThrough //yesari naya letter start huda capital letter use huncha vane yeslai CamelData vanincha

function loopData(){
  for (let b=0; b<10; b++){
    console.log(b);
  }
}
 
loopData();
