function capitalize(string) {
  if (string == null) {
    return "No string entered";
  }

  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

export { capitalize };
