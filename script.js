// Assignment code here
/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = [];
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+";
 
  var temppw = [];
  var passwordLength = prompt("How many characters would you like your password to be? (please enter a number between 8 and 128)");

  if (passwordLength >= 8 && passwordLength <= 128) {
    
    var lowerCaseCheck = confirm("Would you like your password to include lowercase characters?");
    if(lowerCaseCheck === true) {
       temppw =  lowerCase;
    }else{
      // continue with the rest of the password generation
    }
    
    var upperCaseCheck = confirm("Would you like your password to include uppercase characters?");
    if(upperCaseCheck === true) {
       temppw = temppw + upperCase;
    }else{
      // continue with the rest of the password generation
    }
    
    var numericCheck = confirm("Would you like your password to include numeric characters?");
    if(numericCheck === true) {
       temppw = temppw + numeric
    }else{
      // continue with the rest of the password generation
    }
    
    var specialCheck = confirm("Would you like your password to include special characters?");
    if(specialCheck === true) {
      temppw = temppw + special;
    }else{
      // continue with the rest of the password generation
    }
    
  for(var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * temppw.length);
    password.push(temppw[randomNumber]);
  }
  console.log('The string used for password generation: \n' + temppw);
  console.log('Generated password: \n' + password.join(""));
  //return temppw;
  return password.join("");

  } else {
    alert("Please enter a number between 8 and 128");
    var restarted  = confirm("Would you like to try again?");
    if(restarted === true) {
      return generatePassword();
    }else{
      return 'You have chosen to exit the program, click Generate to restart the program';
    }
   // return 0;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

