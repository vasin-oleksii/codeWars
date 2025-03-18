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

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}

console.log(towerBuilder(10));
//! https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function moveZeros(arr) {
  const zeros = arr.filter((value) => value === 0);
  const nonZeros = arr.filter((value) => value !== 0);
  return [...nonZeros, ...zeros];
}
//! https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function formatDuration(seconds) {
  // Complete this function
}
