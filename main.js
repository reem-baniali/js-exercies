/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobTitle, location, partnerName, numOfChild) {
  console.log(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      " and marrid to " +
      partnerName +
      " with " +
      numOfChild +
      " kids"
  );
}
tellFortune("software engineer", "Jordan", "Alice", 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(dogAge) {
  let humanYear = 7;
  dogAge *= humanYear;
  document.write(dogAge);
}
console.log(calculateDogAge(1));
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amountPerDay) {
  let restOfLife = 100 - age;
  let restAmountPerDay = restOfLife * 365 * amountPerDay;
  console.log(restAmountPerDay);
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  console.log("Hello " + name);
}
greet("Adam");
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
x not defined

function double(7) {
  return 2 * 7;
}
argument should be a variable not a static value.

function double('7') {
  return 2 * 'x';
}
*/
// argument should be a variable not a static value.

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}



function (x) double3 {
  return 2 * x;



*/
function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num) {
  let cubeNum = num * num * num;
  console.log(cubeNum);
}
cube(4);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(num1, num2) {
  let ans = num1 * num2;
  console.log(ans);
}
multiply(5, 4);
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
  let ageDiff = 20 - age;
  if (age > 20 || age == 20) {
    return "yes you can";
  } else {
    return "please come back after " + ageDiff + " years to get one";
  }
}
console.log(canIGetADrivingLicense(15));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(firstStr, secondStr) {
  firstStrLength = firstStr.length;
  secondStrLength = secondStr.length;
  if (firstStrLength === secondStrLength) {
    return true;
  } else {
    return false;
  }
}
console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "car"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(num1, num2) {
  numDiff = num1 - num2;
  if (numDiff > 0) {
    return num1;
  } else if (numDiff < 0) {
    return num2;
  } else {
    return "equal";
  }
}
console.log(largerNubmer(5, 6));
console.log(largerNubmer(5, 3));
console.log(largerNubmer(7, 7));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) return num1;
  if (num2 < num3) return num2;
  return num3;
}

//   numDiff1 = num1 - num2;
//   numDiff2 = num2 - num3;
//   numDiff3 = num1 - num3;

//   if (
//     (numDiff1 > 0 && numDiff2 < 0) ||
//     (numDiff1 == 0 && numDiff2 < 0) ||
//     (numDiff2 == 0 && numDiff1 > 0) ||
//     (numDiff3 == 0 && numDiff2 < 0)
//   ) {
//     return num2;
//   } else if (
//     (numDiff3 > 0 && numDiff2 > 0) ||
//     (numDiff1 == 0 && numDiff2 > 0) ||
//     (numDiff2 == 0 && numDiff3 > 0) ||
//     (numDiff3 == 0 && numDiff1 < 0)
//   ) {
//     return num3;
//   } else if (
//     (numDiff1 < 0 && numDiff3 < 0) ||
//     (numDiff1 == 0 && numDiff3 < 0) ||
//     (numDiff2 == 0 && numDiff1 < 0) ||
//     (numDiff3 == 0 && numDiff2 > 0)
//   ) {
//     return num1;
//   } else {
//     return "equal";
//   }
// }
console.log(smallerNubmer(8, 6, 7));
console.log(smallerNubmer(5, 99, 34));
console.log(smallerNubmer(5, 99, 3));
console.log(smallerNubmer(2, 2, 2));
console.log(smallerNubmer(5, 3, 3));
console.log(smallerNubmer(3, 5, 3));
console.log(smallerNubmer(3, 3, 5));
console.log(smallerNubmer(5, 3, 3));
/*
/*
/*
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
  const firstStrLength = str1.length;
  const secondStrLength = str2.length;
  const thirdStrLength = str3.length;
  const fourthStrLength = str4.length;
  const fifthStrLength = str5.length;

  if (firstStrLength < secondStrLength &&firstStrLength < thirdStrLength &&firstStrLength < fourthStrLength && firstStrLength < fifthStrLength)return str1;
   if(secondStrLength<thirdStrLength && secondStrLength<fourthStrLength && secondStrLength<fifthStrLength) return str2;
   if(thirdStrLength<fourthStrLength && thirdStrLength<fifthStrLength) return str3;
   if (fourthStrLength<fifthStrLength) return str4;
   return str5;
}
console.log(shorterString("air","tr","car","github","by"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
    const firstStrLength = str1.length;
    const secondStrLength = str2.length;
    const thirdStrLength = str3.length;
    const fourthStrLength = str4.length;
    if (firstStrLength > secondStrLength &&firstStrLength > thirdStrLength && firstStrLength > fourthStrLength )return str1;
     if(secondStrLength>thirdStrLength && secondStrLength>fourthStrLength ) return str2;
     if(thirdStrLength>fourthStrLength ) return str3;
     return str4;
  }
  console.log(longerString("air","schoo","car","github"));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven (num){
if (num%2 === 0) return true;
return false;
}
console.log(isEven(2));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num){
    if (num%2 !== 0) return true;
    return false;
    }
console.log(isOdd(4));
console.log( isOdd(5));
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive (num){
    if (num > 0) return num;
    return num * -1;
}
console.log( positive(-5));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName (firstName, lastName){
return (`${firstName} ${lastName} `)
}
console.log( fullName("Alex", "Mercer"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average (num1,num2,num3,num4,num5){
let sum = num1+num2+num3+num4+num5;
return (sum/5)
}
console.log(average(5,7,9,3,5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber (){
return Math.random(); 
}
console.log(randomNumber());
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
 function randomBetweenNumbers (min,max){ 
    return (Math.random() * (max - min + 1) + min)
  }
  console.log(randomBetweenNumbers(1,8));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score){
    if (100>score && score >=95 ) return 'A';
    if (94>score && score >=85 ) return 'B';
    if (84>score && score >=70) return 'C';
    if (69>score && score >=50) return 'D';
    if (49>score && score >=0) return 'F';
}
console.log(scoreInUniversty(95));
console.log(scoreInUniversty(85));
console.log(scoreInUniversty(75));
console.log(scoreInUniversty(55));
console.log(scoreInUniversty(5));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=0;
function counter (){
    count++;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());

/*/*
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
    counterCount=count;
    count=0;
    return (`${counterCount} and the counter reset now `)
}




console.log(counter());
console.log(counter());
console.log(counter());
console.log( resetCounter());
