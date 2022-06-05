// Assignment Code
// this variable targets the generate id line 28 on html
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
// generatePassword() function will be stored in the variable password
function writePassword() {

  // there is no generatePassword function 
  var password = generatePassword();

  // this variable targets the password id line 22 on html
  var passwordText = document.querySelector("#password");

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
  var criteriaLowerCase = confirm("Press 'OK' for lower case letters 'abc' ");

  var criteriaUpperCase = confirm("Press 'OK' for Upper Case letters 'ABC' ");

  var criteriaNumeric = confirm("Press 'OK' for numbers from '0-9' ");

  var criteriaSpecial = confirm("Press 'OK' for special characters '!@#$' ");

  // 4. validate the input, user choices to add into char variable
  if (criteriaLowerCase) {
    char += lowerLetters
  }
  if (criteriaUpperCase) {
    char += upperLetters
  }
  if (criteriaNumeric) {
    char += numbers
  }
  if (criteriaSpecial) {
    char += specialChar
  }

  // if all the criteria is not true alert message will show up
  if (!criteriaLowerCase && !criteriaUpperCase && !criteriaNumeric && !criteriaSpecial) {
    alert("Please choose at least one option, re-generate password"); {
    }
  }

  // 5. for loop, for vairable i = 0; i is less than  or equal to passMsg(saved user input, will increment by 1)
  // variable randomNumber = math.floor(rounds down to nearest whole number) math.random(get random number * max of what is given, char.length)
  // variable password plus or equals to variable char .substring(extracts a part of a string )
  for (var i = 0; i < passMsg; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
  }
  console.log(password)
  return password;
}