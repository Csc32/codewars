function rgb(r, g, b) {
  const rgb = [r, g, b];
  const hex = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  };
  const rgbToEx = rgb.map((el) => {
    if (el > 255) {
      el = 255;
      console.log(el);
      return el;
    }

    if (el < 0) {

      console.log(el);
      el = 0;
    }
    let hexIndex = Math.floor(el / 16)
    return hexIndex;
  })

  let result = rgbToEx.map(el => {
    return [hex[el], hex[el]]
  })
  return result.join().trim().split(",").join("");
}
rgb(0, 0, 0);
console.log(rgb(300, 255, 255));
console.log(rgb(255, 255, 255))
