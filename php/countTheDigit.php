<?php
/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
 *
 * */
function nbDig($n, $d)
{
  $squareNumbers = [];

  for ($i = 0; $i <= $n; $i++) {
    $result = $i ** 2;
    $result = "$result";
    array_push($squareNumbers, $result);
  }

  $totalDigits = 0;

  foreach ($squareNumbers as $value) {
    $totalDigits += substr_count($value, $d);
  }

  return $totalDigits;
}
echo nbDig(5750, 0);
