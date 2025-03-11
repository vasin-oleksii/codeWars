function countLettersAndDigits(input) {
  return input.replace(/[^a-z0-9]/gi, "").length;
}

function goodVsEvil(good, evil) {
  const worthGood = [1, 2, 3, 3, 4, 10];
  const worthEvil = [1, 2, 2, 2, 3, 5, 10];

  const goodTotal = good
    .split(" ")
    .reduce((sum, value, index) => sum + worthGood[index] * Number(value), 0);

  const evilTotal = evil
    .split(" ")
    .reduce((sum, value, index) => sum + worthEvil[index] * Number(value), 0);

  console.log(goodTotal, evilTotal);
  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilTotal > goodTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
console.log(goodVsEvil("1 0 0 0 1 0", "0 0 0 0 0 1 10"));
