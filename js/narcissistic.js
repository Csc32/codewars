function narcissistic(value) {
  let num = value.toString();
  let power = num.length;
  let numbers = [];
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    numbers.push(num[i] ** power);
  }
  numbers.forEach(el => {
    total += el;
  })
  return total == value;
}
