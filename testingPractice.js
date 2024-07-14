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

export { capitalize, reverseString };
