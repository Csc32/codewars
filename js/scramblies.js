function scramble(str1, str2) {

  let words = []
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      words.push(str2[i]);
    }
  }
  return words.join("") == str2
=======
  let word = "";
  for (let i = 0; i <= str2; i++) {
    if (str1.includes(str2[i])) {
      word.concat(str2[i]);
    }
  }
  return word == str2;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble('cedewaraaossoqqyt', "codewars"));
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjavx', 'javascript'))

