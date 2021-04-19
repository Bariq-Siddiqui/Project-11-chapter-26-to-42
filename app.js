//    *** *** *** Chapter # 26-to-30  ( MATH METHODS ) *** *** *** 

//  TASK # 01
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  SOLUTION:

// var num=+prompt("Enter the positive number",3.45214);
// if(num < 0){
//     alert("Please enter a positive integer")
// }
// else{
//     var round= Math.round(num);
//     var floor= Math.floor(num);
//     var ceil= Math.ceil(num);
//     document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 02
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  SOLUTION:

// var num=+prompt("Enter the positive number",-2.673);
// if(num > 0){
//     alert("Please enter a negative integer")
// }
// else{
//     var round= Math.round(num);
//     var floor= Math.floor(num);
//     var ceil= Math.ceil(num);
//     document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);
// }


// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//  SOLUTION:


// var value =+prompt("Enter a number");
// var num = Math.abs(value);
// document.write("The absolute value of  " + value + "  is  " + num);


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

//  SOLUTION:

// var random = Math.floor(Math.random() * 4);
// var random1 = Math.floor(Math.random() * 6);
// document.write("random dice value:  " + random + "<br>" + "random dice value:  " + random1);

// ___________________________________//-*-\\________________________________________________


//  TASK # 05

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//  SOLUTION:

// var input =+prompt("Enter heads username");
// var loor = Math.floor(Math.random() * 2);
// if(loor === 0){
//     alert(input+ "\n" + "random coin value:  " + "Head")
// }
// else{
//     alert(input+ "\n" +"random coin value:  " + "Tail")
// }


// ___________________________________//-*-\\________________________________________________



//  TASK # 06

// Write a program that shows a random number between 1
// and 100 in your browser.

//  SOLUTION:

// var value=Math.floor((Math.random() * 100) + 1);
// document.write(" random number between 1 and 100:  " + value);

// ___________________________________//-*-\\________________________________________________


//  TASK # 07

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//  SOLUTION:

// var user=prompt("Enter your weight in kilograms");
// document.write("The weight of user is  " + user + "  kilograms");

// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

//  SOLUTION:

// var user=+prompt("Enter a number between 1 to 10");
// var random = (Math.random()*10)+1;
// if(user === random){
//     alert("Congratulate the user");
// }else{
//     alert("Try again.")
// }


// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 31-to-34  ( DATE METHODS ) *** *** *** 


//  TASK # 01

// Write a program that displays current date and time in
// your browser.

//  SOLUTION:

// var nowDate = new Date();
// document.write(nowDate)


// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// Write a program that alerts the current month in words.
// For example December.

//  SOLUTION:

// var d =new Date();
// var monthName =["January","February","March","April","May","June","July","August","September","October","November","December"]
// var nowMonth =d.getMonth();
// document.write("Current month: "+monthName[nowMonth])

// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

//  SOLUTION:

// var d = new Date();
// var b = d.toString();
// var n = b.slice(0,3);
// document.write(n);

// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// . Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


//  SOLUTION:


// var a = new Date();
// var b =["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"]
// var c = a.getDay();
// var d = b[c];
// if(d=== "Saturday" || d=== "Sunday"){
//     alert("It’s Fun day")
// }else{
// alert("Today is  " + n);
// }

// ___________________________________//-*-\\________________________________________________

//  TASK # 05

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

//  SOLUTION:

// var a = new Date();
// var b =a.getDate();
// if( b >=1 && b<=15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 06

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

//  SOLUTION:

// var d = new Date();
// var t = d.getTime();
// var m = t/(1000*60);
// document.write("Current Date:  " + d + "<br>" + "Elapsed milliseconds since january 1, 1970:  " + t + "<br>" + "Elapsed minutes since january 1, 1970:  " + m);


// ___________________________________//-*-\\________________________________________________

//  TASK # 07

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

//  SOLUTION:

// var d = new Date();
// var a = d.getHours();
// if(a >=0 && a <= 11 ){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


//  SOLUTION:

// var d = new Date(2020, 11, 31);
// document.write("Later Date:  " + d);

// ___________________________________//-*-\\________________________________________________

//  TASK # 09

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//  SOLUTION:

// var dob = new Date(2015, 05, 18);
// var dobmili=dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/(1000*60*60*24))
// var day=Math.floor(day);
// document.write(day + "  day have passed since 1st Ramdan, 2015");

// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

//  SOLUTION:

// var dob = new Date(2015);
// var dobmili=dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/1000)
// var day=Math.floor(day);
// document.write("On reference date  " + today + "<br>" + day + "  seconds had passed since begining of 2015");

// ___________________________________//-*-\\________________________________________________

//  TASK # 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//  SOLUTION:

// var d = new Date();
// var a = new Date(86400000*18432);
// document.write("Current date:  " + d  + "<br>" + "1 hour ago,it was  " + a);

// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

//  SOLUTION:

// ___________________________________//-*-\\________________________________________________

//  TASK # 13

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

//  SOLUTION:

// var dob = new Date(prompt("Enter your birthday","Apr 4, 2000"));
// var dobmili=dob.getTime();
// var a = dob.toString();
// var d = a.slice(10,15);
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili-dobmili;
// var day=(diff/(1000*60*60*24*30*12))
// var age=Math.floor(day);
// document.write("Your age is  " + age + "<br>" + "Your birth Year is  " + d);


// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//  SOLUTION:

// var cname = prompt("Enter the customer name");
// var cmonth = prompt("Enter the current month");
// var units = +prompt("Enter the units");
// var Charges = 16;
// var amount = units*Charges;
// var latechrges = 350;
// var gamount =latechrges+amount;
// document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer Name:  " + cname + "  Customer" + "<br>" + "Month:  " + cmonth + "<br>" + "Number of units:  " + units + "<br>" + "Charges per unit:  " + Charges + "<br>" +"<br>" + "Net Amount Payable (within Due Date):  " + amount + "<br>" + "late payment surcharge:  " + latechrges + "<br>" +"Gross Amount Payable (after Due Date):  " +gamount);



// ___________________________________//-*-\\________________________________________________



//    *** *** *** Chapter # 35-to-38  ( FUNCTION ) *** *** *** 


//  TASK # 01

// Write a function that displays current date & time in your
// browser.

//  SOLUTION:

// function date(){
//     var date = new Date();
//     document.write(date);
// }
// date();

// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// Write a function that takes first & last name and then it
// greets the user using his full name.

//  SOLUTION:

// function fullName(){
//     var fName = prompt("Enter the first name");
//     var lName = prompt("Enter the last name");
//     var fulLname = fName.concat(" ", lName);
//     document.write(fulLname);
// }
// fullName();

// ___________________________________//-*-\\________________________________________________

//  TASK # 03

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

//  SOLUTION:


// function add(){
//     var a=+prompt("Enter a first number");
//     var b=+prompt("Enter a second number");
//     var z = a + b;
//     return z;
// }

// var g = add()
// alert(g);


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


//  SOLUTION:

// function calc(){
//     var num1 =+prompt("Enter the first number");
//     var opr =prompt("Enter the operator");
//     var num2 =+prompt("Enter the second number");
//     if(opr === "+"){
//        return num1 + num2
//     }
//     else if(opr === "-"){
//        return num1 - num2
//     }
//     else  if(opr === "*"){
//       return num1 * num2
//     }
//     else  if(opr === "/"){
//        return num1 / num2
//     }
//     else  if(opr === "%"){
//        return num1 % num2
//     }
//     else{
//        return "Incorrect Operator!"
//     }
// }
// var result=calc();
// document.write("<h1>Calculator</h1>" + "<br>"+ result );


// ___________________________________//-*-\\________________________________________________


//  TASK # 05

// Write a function that squares its argument.

//  SOLUTION:

// function square(){
//     var a =prompt("Enter a number")
//     var b = a*a;
//     return b;  
//    }
//    var c =square();
//    alert(c);

// ___________________________________//-*-\\________________________________________________


//  TASK # 06

// Write a function that computes factorial of a number.

//  SOLUTION:

// function factorial(){
//     var num = +prompt("Enter the factorial of a number");
//     var fact = 1;
//     for(var i=num; i>=1;i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// var result = factorial();
// alert(result);

// ___________________________________//-*-\\________________________________________________

//  TASK # 07

// Write a function that take start and end number as inputs
// & display counting in your browser.


//  SOLUTION:

// function counting(){
//     var sNum = +prompt("Enter the start number");
//     var lNum = +prompt("Enter the end number");
//     for(var i=sNum; i<=lNum;i++){
//         document.write(i+"<br>")
//     }
// }
// var result = counting();



// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

//  SOLUTION:

// function calculateHypotenuse(){
//     function calculateSquare(){  
//     var b = +prompt("Enter the base");
//     var p = +prompt("Enter the perpendicular");
//         var base = b*b;
//         var per = p*p;
//         var h=base+per;
//         var hypotenuse =h*h;
//         return hypotenuse; 
//        }
//        var result=calculateSquare();
//        return result;
// }
// var result1=calculateHypotenuse();
// alert(result1);

// ___________________________________//-*-\\________________________________________________


//  TASK # 09

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

//  SOLUTION:


// function area(){
//     var width =+prompt("Enter the width");
//     var height=+prompt("Enter the height");
//     a = width * height;
//     return a;
// }
// var result = area();
// alert(result);

// ___________________________________//-*-\\________________________________________________


//  TASK # 10

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

//  SOLUTION:

// function palindrome(){
//     var name =prompt("Enter the name");
//     var split = name.split("").reverse().join("");
//     if(name===split){
//         alert("It is palindrome");
//     }
// else{
//     alert("It is not palindrome");
// }
// }
// var result = palindrome();



// ___________________________________//-*-\\________________________________________________

//  TASK # 11

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//  SOLUTION:

// function uppercase(str) 
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

// ___________________________________//-*-\\________________________________________________


//  TASK # 12

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


//  SOLUTION:



// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

// ___________________________________//-*-\\________________________________________________


//  TASK # 13

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


//  SOLUTION:


// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o'));

// ___________________________________//-*-\\________________________________________________


//  TASK # 14

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

//  SOLUTION:

// function Geometrizer(){
//     function calcCircumference(){
//         var pi = 3.14;
//         var r=prompt("Enter the radius");
//         var circum = 2*pi*r;
//         document.write("Circumference of circle  " + circum);
//     }
//     function calcArea(){
//         var rr = r*r;
//         a=pi*rr;
//         document.write("Area of circle  " + a);
//     }
//     return calcCircumference + calcArea;
//     }
//     var result=Geometrizer(); 

// ___________________________________//-*-\\________________________________________________


//    *** *** *** Chapter # 38-to-42  (FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  ) *** *** *** 


//  TASK # 01

// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

//  SOLUTION:

// function myFunction() {
//     var a =+prompt("Enter the base;");
//     var b=+prompt("Enter the power");
//     value=Math.pow(a, b); 
//     document.write("Power is"+" "+a +"<br>");
//     document.write("Base is"+" "+b+"<br>");
//     document.write("a raised to b :"+" "+value);
// }
// myFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 02

// . Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

//  SOLUTION:


// var a =+prompt("Enter any year");
//     b=a%4;
// switch (b){
    
//     case 0:
//         document.write("This year is a Leap year:")
//         break;
    
//     default:
//         document.write("This year is not a Leap year:")
    
//     }

// ___________________________________//-*-\\________________________________________________


//  TASK # 03

// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

//  SOLUTION:

// function firstFunction(){
//     var a =+prompt("Enter the first side of triangle");
//     var b =+prompt("Enter the second side of triangle");
//     var c =+prompt("Enter the third side of triangle");
//     var d = a+b+c;
//     var S= d/2;
//     var e =S-a;
//     var f=S-b;
//     var g=S-c;
    
//     function secondFunction(){
//         var area = S*e*f*g;
//     alert("The Area of Triangle is:   "+ area);
//     }
//     secondFunction();
//     }
//     firstFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 04

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

//  SOLUTION:

// function mainFunction(){
//     var marks1 =+prompt("Enter the marks of first student");
//     var marks2 =+prompt("Enter the marks of second student");
//     var marks3  =+prompt("Enter the marks of third student");
//     function average(){
//         total=marks1+marks2+marks3;
//         avg=total/3;
//         document.write("The average of marks  " + avg+"<br>");
//     }
//     function percentage(){
//         per=total/3;
//         document.write("The percentage of marks  "+per+"%");
//     }
//     average();
//     percentage();
// }
// mainFunction();    


// ___________________________________//-*-\\________________________________________________

//  TASK # 05

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

//  SOLUTION:

// function myFunction() {
//     var str = "Hello world, welcome to the universe.";
//     var n = str.indexOf("welcome");
//     alert(n);
//   }
//   myFunction();


// ___________________________________//-*-\\________________________________________________


//  TASK # 08

// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

//  SOLUTION:

// function mainFunction() {
//     var km =+prompt("Enter distance between two cities in km");
//     function meTer(){
//        var meter = km *1000;
//        document.write("The distance between two cities in meters  :" + meter + "<br>");
//     }
//     function feEt(){
//         var feet = km *3280.8;
//         document.write("The distance between two cities in feets  :" + feet +"<br>");
//     }
//     function incHes(){
//         var inche = km *39370;
//         document.write("The distance between two cities in inches  :" + inche + "<br>");
//     }
//     function centiMeter(){
//         var centimeter = km /0.00001;
//         document.write("The distance between two cities in centimeters  :" + centimeter);
//     }
//     meTer();
//     feEt();
//     incHes()
//     centiMeter()
//   }
//   mainFunction();  



// ___________________________________//-*-\\________________________________________________

//  TASK # 09

// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

//  SOLUTION:

// function currEncy(){
//     var a =+prompt("Enter amount to withdraw:");
//     var b =Math.floor( a/100);
//     var c = b*100;
//     var d = a-c;
//     var e=Math.floor( d/50);
//     var f = e*50;
//     var g = c+f;
//     var h = a-g;
//     var i = Math.floor( h/10);
//     document.write("You will have  " + b + "  hundred notes  " + e + "  fifty notes  " + i + "  ten notes")

// }
// currEncy();
