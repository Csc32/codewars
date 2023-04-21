/*
Return 0 or 255 depending if the number is greates that 255
or smallest 0
@param {integer} c - the color of th param in rgb
*/
function roundNumber(c) {
  return Math.min(Math.max(c, 0), 255)
}

/*
return the hex value
@param {integer} r - value of red color
@param {integer} g - value of green color
@param {integer} b - value of blue color
*/
function rgb(r, g, b) {
  return [roundNumber(r), roundNumber(g), roundNumber(b)].map(el => {
    return el < 16 ? "0" + el.toString(16) : el.toString(16);
  }).join("").toUpperCase();
}

console.log(rgb(192, 14, 94));
console.log(rgb(77, 206, 12));
console.log(rgb(0, 0, -20));
console.log(rgb(255, 255, 255));
