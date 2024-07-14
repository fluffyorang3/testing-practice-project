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

export { capitalize, reverseString, calculator };
