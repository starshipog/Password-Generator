// Assignment code here
// first ask prompt

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  document.getElementById("generate").innerHTML = prompt("How long would you like your password to be?");
  
  document.getElementById("generate").innerHTML = confirm("Would you like to use upper cased letters?");

  document.getElementById("generate").innerHTML = confirm("Would you like to use lower cased letters?");

  document.getElementById("generate").innerHTML = confirm("Would you like to use numbers?");

  document.getElementById("generate").innerHTML = confirm("Would you like to use special characters?");
}



var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']', "^", '_', "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria (MIGHT BE DONE DOUBLE CHECK)

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password (MIGHT BE DONE DOUBLE CHECK)



// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters (3)






// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters (4)

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected (5)

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria (6)

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page (7)