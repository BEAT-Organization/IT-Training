//let Myname = "Mohamed";
//let age = 15;
//let University = "Cairo";
//let variable;
//let nullVar = null;
//let BigINT = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;
//let myNumber = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
//const pi = 3.14;
//const myTrue = true;
//console.log(variable, typeof variable);
//console.log(Myname, typeof Myname);
//console.log(age, typeof age);
//console.log(myTrue, typeof myTrue);
//console.log(variable, typeof variable);
//console.log(nullVar, typeof nullVar);
//
//let h = {
//  prop1: 250,
//  prop2: function () {
//    console.log("Hello");
//  },
//};
//h.prop2();
//
//console.log(7 / 3); // 2.33333333
//console.log(0 == "0"); //true
//console.log(0 === "0"); //false
//console.log(0 == 15); // false
//
//console.log(5 ** 2); // 25
//
//console.log(5 == 5 ? 10 : 20);
//console.log(5 == 6 ? 10 : 20);
//x();
//function x() {
//  console.log("x");
//}
//
//const y = function () {
//  console.log("y");
//};
//
//const calcArea = (radius) => {
//  const PI = 3.14;
//  return 2 * PI * radius;
//};
//console.log(calcArea(5));
//
//const squareRoot = (data, sqrt) => {
//  sqrt(data);
//};
//const printSqrt = (number) => {
//  console.log(Math.sqrt(number));
//};
//squareRoot(9, printSqrt);
//
//const book = {
//  name: "My JS Book",
//  quantity: 5,
//  printPage: (number) => {
//    console.log(number);
//  },
//};
////Access  object prop
//let bookName = book.name;
////Access  object prop (method)
//book.printPage(10);
//// add new prop
//book.author = "Mohamed Ibrahim";
//console.log(book);
//
//let myArr2 = [5, true, "Mohamed", { prop: 15 }, (x) => 2 * x];
//console.log(myArr2[4](3));
//console.log(myArr2.length);
//

//let myArr = ["Mohamed", "Ali", "Omar"];
//console.log(myArr.length);
//console.log(myArr.indexOf("Mohamed"));
//console.log(myArr.includes("Ali"));
//console.log(myArr.push("Ahmed", "Anas"));
//console.log(myArr.pop("Omar"));
//
//let me = "Mohamed" + "Ibrahim";
//let mail = `${me}@gmail.com `;
//
//console.log(mail.length);
//console.log(mail.toUpperCase());
//console.log(mail.slice(0, mail.indexOf("@")));
//console.log(mail.replace("Mohamed", "Ali"));
//console.log(mail.includes("Mohamed"));
//console.log(mail);
//const h1 = document.querySelector("h1");
//const Allh1 = document.querySelectorAll("h1");
//const IDh1 = document.getElementById("myID");
//const Tagh1 = document.getElementsByTagName("myID");
//h1.style.color = "Blue";
//h1.style = "font-size:15px; color:red; font-family:Arial;";

const myDiv = document.querySelector(".myClass");
console.log(myDiv);
myDiv.innerHTML = "<h3>BEAT</h3>";
myDiv.children.item(0).style.color = "Red";

const myLink = document.createElement("a");
myLink.innerText = "MYLINK";
myLink.setAttribute("href", "sdfd");
myDiv.appendChild(myLink);

myDivCLass = myDiv.getAttribute("class");
console.log(myDivCLass);
myDiv.classList.add("BEAT");
myLink.style.fontFamily = "Arial";
myLink.style = `
text-decoration : none;
color: red;
`;
