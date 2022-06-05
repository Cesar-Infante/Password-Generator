// Assignment Code
// this variable targets the generate id line 28 on html
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// generatePassword() function will be stored in the variable password
function writePassword() {
  var password = generatePassword(); // there is no generatePassword function 
  var passwordText = document.querySelector("#password"); // this variable targets the password id line 22 on html

  // recieves the value of the generated password and displays it on the screen (placeholder)
  passwordText.value = password;

}

// Add event listener to generate button
// when a user clicks it will call the writePassword function 
generateBtn.addEventListener("click", writePassword);

// function to generate password
function generatePassword() {

  // all variables, let for variables later being filled in, const for ones that wont be changed
  let char = "";
  let password = "";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // 1. prompt the user for the password criteria
  var passMsg = prompt("How many characters will your password include? (8-128)");


  // 2. a password between 8-128 characters 
  //while loop, while passMsg is less than 8 or while passMsg is greater than 128,
  // alert password must be between 8-128 char, our var passmsg will be shown again.
  while (passMsg < 8 || passMsg > 128) {
    alert("Password must be between 8-128 characters"); {
      var passMsg = prompt("How many characters will your password include? (8-128)");
    }
  }

  // 3. lowercase, uppercase, numbers, special char
  var criteriaLowerCase = confirm("Press 'OK' for lower case letters");
  // console.log(criteriaLowerCase);

  var criteriaUpperCase = confirm("Press 'OK' for Upper Case letters");
  // console.log(criteriaUpperCase);

  var criteriaNumeric = confirm("Press 'OK' for numbers from 0-9");
  // console.log(criteriaNumeric);

  var criteriaSpecial = confirm("Press 'OK' for special characters !@#$");
  // console.log(criteriaSpecial);

  // 4. validate the input
  if (criteriaLowerCase) {
    char = char.concat(lowerLetters)
    console.log(criteriaLowerCase)
  }
  if (criteriaUpperCase) {
    char = char.concat(upperLetters)
  }
  if (criteriaNumeric) {
    char = char.concat(numbers)
  }
  if (criteriaSpecial) {
    char = char.concat(specialChar)
  }
  
  // if all the criteria is not true alert message will show up, prompt message after alert
  if (!criteriaLowerCase && !criteriaUpperCase && !criteriaNumeric && !criteriaSpecial) {
    alert("Please choose at least one option"); {
      var passMsg = prompt("How many characters will your password include?") 
    }
  }

}