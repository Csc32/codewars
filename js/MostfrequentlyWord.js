function topThreeWords(text) {
  const validWords = /\b(?:\w+(?:'\w+)?|\w+)(?=\W|$)/g

  const words = text.match(validWords);

  let objWords = {};

  if (!words) {
    return []
  }

  for (let i = 0; i < words.length; i++) {
    !objWords.hasOwnProperty(`${words[i].toLowerCase()}`) ? objWords[`${words[i].toLowerCase()}`] = 1 : objWords[`${words[i].toLowerCase()}`]++;
  }

  const keys = Object.keys(objWords);

  //start bubble sort algorithm
  for (let i = 0; i < keys.length; i++) {

    for (let j = 0; j < keys.length - i - 1; j++) {
      let temp;
      if (objWords[keys[j]] < objWords[keys[j + 1]]) {
        //swap elements
        temp = keys[j];
        keys[j] = keys[j + 1];
        keys[j + 1] = temp;
      }
    }
  }
  return keys.length > 3 ? keys.slice(0, 3) : keys;
}
console.log(topThreeWords("A frog saw from the CD into the dresser for a monster among a CD "))

console.log(topThreeWords("a a c b b"))

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords("  //wont won't won't "))
console.log(topThreeWords("  '  "))
