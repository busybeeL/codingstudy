function palindrome1(word){
  const reversed = word.split('').reverse().join('');
  console.log(word === reversed);
}

function palindrom2(word){
  return word.split('').every((char, index)=> {
    return char === word[word.length - index - 1];
  });
}