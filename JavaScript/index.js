//console.log("I'M DOCTOR STRANGE");
// console.log("I'M DOCTOR STRANGE");
// var a = 10;
// if(a >5){
//     console.log("a is greater than 5");
// }else{
//     console.log("a is less than 5");
// }

// const a = 23;
// a = 50;
// console.log(a)

// function fun(msg){
//     return "heyyuuu"+msg;
// }
// const data = fun("bsdk");
// console.log(data);


//arrow function

// const data = (msg)=>{
//     console.log("Hy I just want to hug you " +msg)
// }
// data("Rajeev mujhse shadi karoge");

//IIFE
// const data = msg->msg;
// const output = data("GReeting of the day")

// (function(){
//     console.log("Phone utha le bhai")
// })();

// setTimeout(()=>{
//     console.log("heuheuheu")
// },100);

// function greet(msg="Java"){
//     console.log(msg+" is a good language");
// }
// greet("Anaconda");

// function selectlanguage(lang) {
//     let result;
//     if (lang == "java") {
//         function cCompiler() {
//             return "using c compiler";
//         }
//         result = cCompiler();
//     } else if (lang == "python") {
//         result = "using python interpreter";
//     } else if (lang == "javascript") {
//         result = "using JS engine (like V8)";
//     } else {
//         result = "NO compiler found";
//     }
//     return result;
// }

// console.log(selectlanguage("java"));
// console.log(selectlanguage("python"));
// console.log(selectlanguage("javascript"));
// console.log(selectlanguage("ruby"));

// const div = getElementByTagName('div');
// div[0].innertext = "Hello World";
// div[0].style.color = "red";
// div[0].style.backgroundColor = "black";
// div[0].style.textAlign = "center";
// div[0].style.padding = "20px";
// div[0].style.fontSize = "30px";
// console.log(div);

const container = document.getElementById('container');
const h2 = document.createElement('h2');
h2.innerText = "ABES Engineering College";
h2.style.color = "blue";
h2.style.textAlign = "center";
h2.style.padding = "10px";
container.appendChild(h2);