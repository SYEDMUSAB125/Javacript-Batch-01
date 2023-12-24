var userName = "Musab";
var resp ="Sir" 
// console.log("hi" + resp +" " + userName + " " + "good morning");
// syed+musab = syedmusab concatenation 
// console.log(a = 1+2) ;
// console.log("Thanks, " + userName + " !");
// thanks, musab!
// advance Math operator
// greater than, less than, greater less equall, equalls to 
// = assign 
// equalls to  (==), (===) condition + type
// gretaer equls to  >=
// Comparison operator 1==1
// if(condition){code}
// var num = "1";
// console.log(1<=1);

// if(condition){code}
// var course = "HTML"
// var course = "html" 
// if("html"==course){
//  console.log("you are egligible")
// }
// else{
//     console.log("you are not egligible")
// }


// if else ladder
// var course = "html1"
// var course1 = "css1"
// var course2 = "bootstrap"
// if("html"==course){
//     console.log("you are egligible")
//    }
//    else if("css"==course1){
//     console.log("you are egligible1")
//    }else if ("bootstrap" === course2){
//     console.log("you are egligible2")
//    }else{
//     console.log("you are not egligible")
//    }
// and &&, not !=, or ||, logic gate
//  a and b both true And gate
//  a and b anyone true Or gate
//  a not b Not gate
// And
// var course = "html"
// var course1 = "css1"
// if("html"=== course && "css"=== course1){
//     console.log("you are studing java script")
// }else{
//     console.log("youb are not studying")
// }
// Or
// var course = "html"
// var course1 = "css1"
// if("html"=== course || "css"=== course1){
//     console.log("you are studing java script")
// }else{
//     console.log("youb are not studying")
// }
// Not
// var course = "html"
// var course1 = "css1"
// if("html"!==course){
//     console.log("you are studing java script")
// }else{
//     console.log("youb are not studying")
// }
// Jacket reminder TASK
//  if else ladder logic
// 20 "don't jacket carry"
// 15 "carry single jACKET"
// 10 "carry double jacket"
// 5 "carry blanket"
// 0 " don't go outside
var temp = prompt("Enter your city temperature in range of 0 to 20" );
console.log(temp)
if("20">=temp &&  temp > "15" ){
 console.log( "Don't carry jacket")
}
else if("15"<= temp && "10"> temp ){
    console.log( "carry single jaclet")
   }
   else if("10"<= temp && "5" < temp ){
    console.log( " carry double jaclet")
   }
   else if(temp <= "5"){
    console.log( "carry blanket")
   }
   else if("0" == temp){
    console.log("Dont go outside")
   }
   else {
    console.log("Enter valid temperature")
   }