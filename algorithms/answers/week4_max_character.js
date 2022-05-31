function maxChar(str) {
  // Define default variables for character map, max number and max character
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // While looping through the string
  // Save each character onto the charMap object as a key and give it 1 as a value 
  // If the same character is existing in the charMap object, add 1 to its value
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Loop charMap object 
  // If each value is higher than max, replace it with the higher value 
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  // Return max character 
  return maxChar;
}
