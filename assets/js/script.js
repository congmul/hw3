///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword(){
  // Prompt a user to choose a length of the password.
  var passwordLength = prompt("How long password length do you need? (Range 8 to 128)");
  console.log(typeof passwordLength);

  // Checking the length of the password is more than 8.
  if(passwordLength < 8){
    alert("Enter at least 8");
    return generatePassword();
  }

  // Checking the length of the password is less than 128.
  if(passwordLength > 128){
    alert("Enter less than 129");
    return generatePassword();
  }

  // Declaring Variables
  var passWord = "";
  var totalLetters = "";
  var numeric = "1234567890";
  var specialChar = "!@#$%^&*()";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";

  // Selecting criteria to include in the password.
  var isNumeric = confirm("Do you want to use Numeric with?");
  var isSpecialChar = confirm("Do you want to use Special Charactors with?");
  var isUpperCase = confirm("Do you want to use Upper Case letters with?");
  var isLowerCase = confirm("Do you want to use Lower Case letters with?");
  
  // Adding Numeric to the password
  if(isNumeric){
    totalLetters += numeric;
  }

  // Adding Special Charactor to the password
  if(isSpecialChar){
    totalLetters += specialChar;
  }

  // Adding uppercases to the password
  if(isUpperCase){
    totalLetters += upperCase;
  }

  // Adding lowercases to the password
  if(isLowerCase){
    totalLetters += lowerCase;
  }

  // Checking if a user chooses one of the criteria at least. 
  if(totalLetters === ""){
    alert("You should choose one of types.");
    exit;
  }

  //Debugging - Letter Legnth
  console.log("Letter Length : " + totalLetters.length);

  // Selecting Password as the length that a user wants.
  for (let i = 0; i < passwordLength; i++){
    let index = Math.floor(Math.random() * totalLetters.length);
    passWord += totalLetters.charAt(index);

    //Debugging - Display index
    console.log("Index : " +index);
  }

  // Return final password 
  return passWord;
}



///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
