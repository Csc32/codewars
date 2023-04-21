function rgb(r, g, b) {
  return [roundRgb(r), roundRgb(g), roundRgb(b)].map(el => {
    return el < 16 ? "0" + el.toString(16) : el.toString(16);
  }).join("").toUpperCase();
}

function roundRgb(c) {
  return Math.min(Math.max(c, 0), 255);
}

console.log(rgb(192, 14, 94));
console.log(rgb(77, 206, 12));
console.log(rgb(0, 0, -20));
console.log(rgb(255, 255, 255));
