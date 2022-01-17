//DOM ELEMENTS
const resultEl = document.getElementById('password');

const lengthEl = document.getElementById('quantity');

const upperCaseEl = document.getElementById('addUppercase');

const lowerCaseEl = document.getElementById('addLowercase');

const symbolsEl= document.getElementById('addSpecialChar');

const numbersEl = document.getElementById('addNumbers');

const generateEl = document.getElementById('generate');

// --------------------------------------------


//These four functions are going to generate random numbers, letters and symbols
const getLowerCase = ()  => {
  return String.fromCharCode(Math.floor(Math.random () * 26) + 97);
}

const getUpperCase = ()  => {
  return String.fromCharCode(Math.floor(Math.random () * 26) + 65);
}

const getNumber = ()  => {
  return String.fromCharCode(Math.floor(Math.random () * 10) + 48);
}

const getSymbol= ()  => {
  const symbols = '!@#$%^&*()';
 return symbols[Math.floor(Math.random () * symbols.length)];
}


const randomFunc =  {
  lower: getLowerCase,
  upper: getUpperCase, 
  symbols: getSymbol,
  numbers: getNumber,
};
//This function is for the button being clicked to generate a password
 generateEl.addEventListener("click", () => {
   const length = +lengthEl.value;
   const hasLower = lowerCaseEl.checked;
   const hasUpper= upperCaseEl.checked;
   const hasSymbols = symbolsEl.checked;
   const hasNumbers = numbersEl.checked;
   resultEl.innerText = generatePassword (hasLower, hasUpper, hasSymbols, hasNumbers, length);
 });




generatePassword =  (lower, upper, symbol, number, length) => {
let generatedPassword = ' ';
// typesCount is the number of checked boxes
const typesCount = lower + upper + symbol + number;
//This piece of code checks to see if a section is checked or not. If it is  checked, it is set to true. If it is unchecked, it is set to false. If  any section is set to false, then it will filter those elements out.
const typesArr = [{lower}, {upper},{symbol}, {number}].filter (item => Object.values(item)[0]);
////If there is no boxes checked, we want to return nothing. 
if (typesCount === 0 ){
  return ' ';
}
for ( let i = 0; i < length; i+= typesCount)
{
  typesArr.forEach(type => {
    const funcName = Object.keys(type) [0] ;
    generatedPassword += randomFunc[funcName]();
  });
}
const finalPassword= generatedPassword.slice(0, length );
return finalPassword;
}



