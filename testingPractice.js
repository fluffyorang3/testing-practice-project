function capitalize(string) {
  if (string == null) {
    return "No string entered";
  }

  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

function reverseString(string) {
  if (string == null) {
    return "No string entered";
  }
  string = string.split("").reverse().join("");
  return string;
}

function calculator(num1 = null, num2 = null) {
  if (num1 === null || num2 === null) {
    return "You have entered an invalid number";
  }
  function add() {
    return num1 + num2;
  }
  function subtract() {
    return num1 - num2;
  }
  function divide() {
    return num1 / num2;
  }
  function multiply() {
    return num1 * num2;
  }
  return {
    add,
    subtract,
    divide,
    multiply,
  };
}
function caesarCipher(string, key) {
  let charSpace = "abcdefghijklmnopqrstuvwx";
  let charSpaceArray = charSpace.split("");
  let shiftedCharSpace = "abcdefghijklmnopqrstuvwx";
  let shiftedCharSpaceArray = shiftedCharSpace.split("");

  let stringArray = string.split("");

  let finalMessageArray = [];

  for (let i = 0; i < key; i++) {
    let firstElement = shiftedCharSpaceArray.shift();
    shiftedCharSpaceArray.push(firstElement);
  }

  for (let i = 0; i < stringArray.length; i++) {
    if (shiftedCharSpaceArray.includes(stringArray[i])) {
      let currentCharacter = stringArray[i];
      let normalIndex = charSpaceArray.indexOf(currentCharacter);
      let outputCharacter = shiftedCharSpaceArray[normalIndex];
      finalMessageArray.push(outputCharacter);
      continue;
    }
    finalMessageArray.push(stringArray[i]);
  }

  let finalString = finalMessageArray.join("");
  console.log(finalString);
  return finalString;
}

caesarCipher("This is a message", 4);

export { capitalize, reverseString, calculator, caesarCipher };
