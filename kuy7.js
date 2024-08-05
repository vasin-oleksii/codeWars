// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(a) {
  return +(a + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  return (
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("") + 0
  );
}
console.log(descendingOrder(213213));
