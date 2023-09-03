function squareDigits(num) {
  const result = num.toString().split("").map((digit) => Number(digit) ** 2).join("");

  return Number(result);
}

console.log(squareDigits(9119)) // => 811181;
