// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
  return a ** b;
}
var a1 = 4;
var b1 = 3;
power(a1, b1);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
function leapYear(year) {
  if (year % 400 == 0) {
    return "leap year";
  } else if (year % 100 == 0) {
    return "not leap year";
  } else if (year % 4 == 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
}
leapYear(2040);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// var i=5;
// var j=2;
// var k=7;
function side(a, b, c) {
  return (a + b + c) / 2;
}
// var aa=side(i,j,k);
function area(a, b, c) {
  var ee = side(3, 5, 7);
  return ee * (ee - a)(ee - b)(ee - c);
}
area(3, 5, 7);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
var mksa = +prompt("Enter your mks : 1");
var mksb = +prompt("Enter your mks : 2");
var mksc = +prompt("Enter your mks : 3");
function aver(a, b, c) {
  var avg = (a + b + c) / 2;
  return avg;
}
function perc(a, b, c) {
  var per = ((a + b + c) / 150) * 100; //total marks assume is 150
  return per;
}
function main() {
  console.log("average is :", aver(mksa, mksb, mksc));
  console.log("Percentage is :", perc(mksa, mksb, mksc));
}
main();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
function find(str, aa) {
  for (var i = 0; i == str.length; i++) {
    if (str.charAt(i) === aa) {
      return i;
    } else {
      return -1;
    }
  }
}

// 6.Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
function delVow(str) {
  if (str.length <= 25) {
    var arr = str.split("");
    for (var i = 0; i == arr.length; i++) {
      if (arr[i] === "a") {
        arr.splice(i, 1);
      } else if (arr[i] === "o") {
        arr.splice(i, 1);
      } else if (arr[i] === "i") {
        arr.splice(i, 1);
      } else if (arr[i] === "e") {
        arr.splice(i, 1);
      } else if (arr[i] === "u") {
        arr.splice(i, 1);
      }
    }
  } else {
    return "can't proceed as the length of string is more than 25";
  }
}

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

function findVowel(str){
  var count=0;
  var str=str.split('');
  for ( var i = 0 ;i==str.length;i++){
    if (str[i]==""){
      i++;
    }
    switch(str[i]+str[i+1]){
      case "ae":
        count++;
        break;
      case "ea":
        count++;
        break;
      case "ai":
        count++;
        break;
      case "ia":
        count++;
        break;
      case "ao":
        count++;
        break;
      case "oa":
        count++;
        break;
      case "ei":
        count++;
      break;
      case "ie":
        count++;
      break;
      case "eo":
        count++;
      break;
      case "oe":
        count++;
      break;
      case "eu":
        count++;
      break;
      case "ue":
        count++;
      break;
      case "io":
        count++;
      break;
      case "oi":
        count++;
      break;
      case "iu":
        count++;
      break;
      case "uo":
        count++;
      break;
      case "ou":
        count++;
      break;
      }
  }
  return count;
}


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
var inp=+(prompt("enter the distance between two cities in (km)"));
function metre(inp){
  return inp*1000;
}
function centimetre(inp){
  return inp*100000;
}
function feet(inp){
  return inp*3280.84;
}
function centimetre(inp){
  return inp*39370.1;
}


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.
var hr=+(prompt("enter the total hour do u work ??"));
var emp=+(prompt("Enter the no. of emplyess for which the overtime to be calculated!"));
var over=0;
for (var i =0;hr==emp;i++){
  if (hr>40){
    var oer=hr-40;
    var over=over+(12*oer);
  }
}
console.log("the total over pay is::", over);