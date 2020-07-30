const capitalize = (str) => {
  if (str != null && (typeof str == "string" || typeof str == "number")){
    // Process the string

    // Check if str is not a string, if so return the string form of str
    if(typeof str != "string") return str.toString()

    // Remove all non-alphabetical characters
    return str
  } else {
    return "Invalid input"
  }
  return str;
};

module.exports = { capitalize };
