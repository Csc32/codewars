<?php
function divisors($n)
{
  $divisors = 0;
  for ($i = 1; $i <= $n; $i++) {
    $n % $i == 0 ? $divisors++ : null;
  }
  return $divisors;
}

echo divisors(1);
echo divisors(10);
echo divisors(11);
echo divisors(54);
