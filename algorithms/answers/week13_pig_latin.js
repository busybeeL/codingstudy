function pigLatin(str){
  const vowel = ['a', 'e', 'i', 'o', 'u']
  if(vowel.indexOf(str[0]) !== -1) {
    str += 'way';
  } else {
      while(vowel.indexOf(str[0]) == -1) {
        str += str[0];
        str = str.slice(1); 
      }
      str += 'ay';
  }
  return str;
}

function pigLatin2(str) {
  let matchConsonants = str.match(/^[^aeiou]+/);
  return matchConsonants !== null 
  ? str.replace(/^[^aeiou]+/, '')
  .concat(matchConsonants).concat('ay') : str.concat('way');
}