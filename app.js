// console.log ("Functions Lab")
// Used google for reference
// Mary helped me as well

// #1
const maxOfTwoNumbers = (x, y) => {
  if (3 >= 9) {
    return 3;
  } else {
    return 9;
  }
}

console.log(maxOfTwoNumbers(3, 9));

  
//  #2
function isAdult(age) {
    if (age < 18 ) {
      return "Minor";
    } else {
      return "Adult";

    }
  }  

console.log( isAdult (21));


//  #3
function isCharAVowel(character) {

  if (character === "a"|| character === "e" || character === "i" || character === "o" || character === "u") {
    return true;
  } else {
    return false;
  }
}

console.log(isCharAVowel("e"));


//  #4
function generateEmail(name, domain) {

  return (name + "@" + domain)

}

console.log(generateEmail("alicesmith" , "gmail.com"));


// #5
function greetUser(user, timeOfDay){

    return ( `Good ${timeOfDay}, ${user} how was your day?`)
    
  }

console.log(greetUser("Nadia", "evening"));


// #6
const maxOfThree = (x, y, z) => {
   return Math.max (9, 42, 23);
  }

console.log( maxOfThree(5, 10, 8));


// #7
function calculateTip(billAmount, tipPercentage) {

 const tipAmount = (tipPercentage * billAmount) / 100;

 return tipAmount
}
console.log(calculateTip(70, 20));


// #8
function convertTemperature(C, F) {

  const temp = (F = C * 9/5) + 32
  
  return temp 
}

console.log(convertTemperature(32 , 89.6));


// #9
function basicCalculator(numA, numB, operator ) {
  if (operator === "add") {

    return numA + numB

  } else if (operator === "subtract") {

    return numA - numB
    
  } else if (operator === "multiply") {

    return numA * numB

  } else if (operator === "divide") {
    if (numB !==0) {
      
      return num1/num2

    }else {

      return "invalid"
    }
  }
}  

console.log(basicCalculator(5, 4, "multiply"));
