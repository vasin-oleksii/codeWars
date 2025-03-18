// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  const digits = String(n).split("");
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) i--;
  if (i === 0) return -1;
  const pivot = i - 1;
  let j = digits.length - 1;
  while (digits[j] <= digits[pivot]) j--;
  [digits[pivot], digits[j]] = [digits[j], digits[pivot]];
  const left = digits.slice(0, i);
  const right = digits.slice(i).sort((a, b) => a - b);
  return Number([...left, ...right].join(""));
}
