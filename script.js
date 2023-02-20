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
  // firing my bonus copypassword :)
  copyPassword();
  

}

function generatePassword() {
  // Set password empty array
  var password = [];
  // lowercase characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  // uppercase characters
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // numeric characters
  var numeric = "0123456789";
  // special characters
  var special = "!@#$%^&*()_-/£~<>?/,+";
 // setting another temp array variable (not sure if this is the best way to do this) but was easier
  var temppw = [];
  // Prompt the user for the length of the password
  var passwordLength = prompt("How many characters would you like your password to be? (please enter a number between 8 and 128)");
  // Validate password length between 8 and 128 cahracters
  if (passwordLength >= 8 && passwordLength <= 128) {
    // if the password passes length validation ask the complexity question for lowercase characters
    var lowerCaseCheck = confirm("Would you like your password to include lowercase characters?");
    // checking if the user wants to include lowercase characters
    if(lowerCaseCheck === true) {
      // if the check returns true, then add the lowercase to "temppw" array
       temppw =  lowerCase;
    }else{
      // continue with the rest of the password generation
    }
    // Prompt the user for the complexity question for uppercase characters
    var upperCaseCheck = confirm("Would you like your password to include uppercase characters?");
    if(upperCaseCheck === true) {
      // if the check returns true, then take exisitng value of "temppw" and add the uppercase to it
       temppw = temppw + upperCase;
    }else{
      // continue with the rest of the password generation
    }
    // Prompt the user for the complexity question for numeric characters
    var numericCheck = confirm("Would you like your password to include numeric characters?");
    if(numericCheck === true) {
      // if the check returns true, then take exisitng value of "temppw" and add the numeric to it
       temppw = temppw + numeric
    }else{
      // continue with the rest of the password generation
    }
    // Prompt the user for the complexity question for special characters
    var specialCheck = confirm("Would you like your password to include special characters?");
    if(specialCheck === true) {
      // if the check returns true, then take exisitng value of "temppw" and add the special to it
      temppw = temppw + special;
    }else{
      // continue with the rest of the password generation
    }
  // now we loop over the length of password to know how many characters to generate  
  for(var i = 0; i < passwordLength; i++) {
    // setting up temporarty variable to hold the random character result
    var randomNumber = Math.floor(Math.random() * temppw.length);
    // Pshing the current index to the password array, it is created by grabbing the "temppw" and using the randomNumber as the index
    password.push(temppw[randomNumber]);
    // now continues the loop until hits length limit
  }
  // Just checking the string used for pw genertation
  console.log('The string used for password generation: \n' + temppw);
  // returning the password geenrated
  console.log('Generated password: \n' + password.join(""));
 // concats the password array to a string and returns it
 return password.join("");

  } else {
    // if the password length is not between 8 and 128 characters, alert the user
    alert("Please enter a number between 8 and 128");
    // give the user another chance to try again
    var restarted  = confirm("Would you like to try again?");
    if(restarted === true) {
      // if the user says yes, restart the function
      return generatePassword();
    }else{
      // if the user says no, add a nasty line of text in the box for password
      return 'You have chosen to exit the program, click Generate to restart the program';
    }
  
  }

}

// bonus function for my own amusement
function copyPassword() {
  // grabbing the password generated from the generatePassword function
  var copyText = document.querySelector("#password");
  // init browser selection of password
  copyText.select();
  // make sure to select the whole length of the password value
  copyText.setSelectionRange(0, 99999);
  // copy the password to the clipboard
  navigator.clipboard.writeText(copyText.value);
  // log it to the console
  console.log('Password "'+ copyText.value  +'"copied to clipboard');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

