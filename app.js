// PDF 14-16
// var studentName = [];
// var stringsArray = ["john", "sebastian", "joseph"];
// var numberArray = [1, 2, 3];
// var boolenArray = [true, false, true];
// var mixedArray = ["john", 2, true, "sebastian", false]
// var qualification = ["ssc", "hsc", "bcs", "bs", "bcom", "ms", "mphil"];
// document.write("<h2>Qualification in Pakistan</h2>");
// document.write("<ol>");
// for (var i = 0; i < qualification.length; i++) {
//   document.write("<li>" + qualification[i] + "</li>");
// }
// document.write("</ol>");
// Q2
// var studentName = ["john", "sebastian", "joseph"];
// var marks = [400, 460, 340];
// var Total = (400 / 500) * 100;
// // var totalScore = [score / total];
// document.write("Student Scores and Percentages:" + "<br>");
// for (var i = 0; i < studentName.length; i++) {
//   document.write(
//     "Score of " + studentName[i] + "is" + marks[i] + "percentage is" + Total[i]
//   );
// }
// Q3
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// document.write(colorName);
// var newColor = prompt("Enter a color name");
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// colorName.unshift(newColor);
// document.write(colorName);
// Q4;
// vCar newColor = prompt("Enter a color name");
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// colorName.push(newColor);
// document.write(colorName);
// Q5;
// var newColor = prompt("Enter a color name");
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// colorName.unshift(newColor);
// document.write(colorName);
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// colorName.shift(0);
// // console.log(colorName);
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// colorName.pop(4);
// console.log(colorName);
// var questions = +prompt("At which index you want to add a color");
// var Names = prompt("enter a color name");
// var colorName = ["yellow", "blue", "red", "purple", "orange"];
// var index = 0 < 5;
// colorName.splice(index, 0, Names);
// document.write(colorName);
// Q10
// var scores = [320, 230, 480, 120];
// scores.sort(function (a, b) {
//   return a - b;
// });
// console.log(scores);
// // Q11
// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var selectedCities = cities.slice(2, 4);
// console.log(selectedCities);
// Q12
// var names = ["this", "is", "my", "cat"];
// var result = names.join("  ");
// console.log(result);
// Q13
// var gadgets = ["keyboard", "mouse", "printer", "monitor"];
// gadgets.forEach(function (element) {
//   console.log(element);
// });
// // Q14
// var gadgets = ["keyboard", "mouse", "printer", "monitor"];
// while (gadgets.length > 0) {
//   let value = gadgets.pop();
//   console.log(value);
// }
// Q15
// var phones = ["Apple", "samsung", "motorola", "nokia", "sony", "haier"];
// phones.forEach(function (element) {
//   document.write("<select>", "<option>", element, "</option>", "</select>");
// });
// document.write("<select>", "<option>",  "</option>", "</select>");

// PDF 17-20
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }
// // Q2
// var num = +prompt("enter a number for multiplication");
// var range = +prompt("Enter length for table");
// for (var i = 1; i <= range; i++) {
//   document.write(num + "x" + i + "=" + num * i + "<br>");
// }
// // Q3
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }
// // Q4
// document.write("Counting: " + "<br>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i);
//   if (i < 15) {
//     document.write(", ");
//   }
// }
// document.write("<br>" + "Reverse Counting: " + "<br>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i);
//   if (i > 1) {
//     document.write(", ");
//   }
// }
// document.write("<br>" + "Even Counting: " + "<br>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i);
//   if (i < 20) {
//     document.write(", ");
//   }
// }

// document.write("<br>" + "Odd: " + "<br>");
// for (let i = 1; i <= 19; i += 2) {
//   document.write(i);
//   if (i < 19) {
//     document.write(", ");
//   }
// }
// document.write("<br>" + "Series: " + "<br>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k");
//   if (i < 20) {
//     document.write(", ");
//   }
// }
// // // Q7
// var order = prompt("welcome to pie in the sky! what you like to have?");
// var ingredients = ["cookie", "cake", "apple pie", "chips", "patties"];
// var flag = false;
// for (var i = 0; i < order.length; i++) {
//   if (order === ingredients[i]) {
//     flag = "true";
//     alert(order + " yes it is available");
//   }
// }
// if (order != ingredients[i]) {
//   flag === "false";
//   alert(order + " is not in our menu");
// }
// // Q8
// document.write("<br>");
// for (var i = 5; i <= 100; i += 5) {
//   document.write(i);
//   if (i < 100) {
//     document.write(",");
//   }
// }
// Q9
// document.write("<br>");

// Array of numbers
// const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number
// let largest = A[0];

// Iterate through the array to find the largest number
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }

// Print the largest number
// document.write("The largest number in the array is:", largest);
// PDF 14-20
// Q1
var question = +prompt("Enter a password");
var flag = false;
if (question > 5) {
  flag = "true";
  alert("great");
}
if (question < 5) {
  flag = "false";
  alert("it must be greater than 5");
}
