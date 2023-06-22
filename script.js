// Assignment code here
// first ask prompt

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

var criteriaInputs = {
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  numbersOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],

  special: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "^", '_', "`", "{", "|", "}", "~"]

};




function generatePassword() {
  var length = prompt("How long would you like your password to be?");

  if(!length) {
    return null;
  }
  if (length != criteriaInputs.numbersOptions)
  // does pw meet critera?
  if (length < 8) {
    alert('Password must be between 8 and 128 characters.')
    return null
  }

  if (length > 128) {
    alert('Password must be between 8 and 128 characters.')
    return null
  }




  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters (DONE)

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected (DONE)

  var uppercaseChoice = confirm("Press OK if you would you like to use upper cased letters.");

  var lowercaseChoice = confirm("Press OK if you would you like to use lower cased letters.");

  var numbers = confirm("Press OK if you would you like to use numbers.");

  var specialChoice = confirm("Press OK if you would you like to use special characters.");

  if(!uppercaseChoice || !lowercaseChoice || !numbers || !specialChoice) {
    return null;
  }

  // if statement 
  if (uppercaseChoice === false && lowercaseChoice === false && numbers === false && specialChoice === false) {
    alert('Must choose a criteria.')
    return null;
   } // else if ( 
  //   (uppercase === true) ||
  //   (lowercaseChoice === true) ||
  //   (numbers === true) ||
  //   (specialChoice === true)
  // ) 
  // {}

// return null;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");

   password = Math.floor(Math.random() * criteriaInputs.uppercase.length);
   password = Math.floor(Math.random() * criteriaInputs.lowercase.length);
   password = Math.floor(Math.random() * criteriaInputs.numbersOptions.length);
   password = Math.floor(Math.random() * criteriaInputs.special.length);


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// WHEN prompted for password criteria
// THEN I select which criteria to include in the password (MIGHT BE DONE DOUBLE CHECK)



// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters (DONE)







// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria (6)

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page (7)