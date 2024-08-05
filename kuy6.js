// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
function solution(str) {
  const string = str.split("");
  let res = [];

  for (let i = 0; i <= string.length; i = i + 2) {
    if (i === 0) {
      res.push(`${string[i]}${string[i + 1]}`);
    } else {
      res.push(
        `${string[i - 1]}${string[i] === undefined ? "_" : string[i + 1]}`
      );
    }
  }

  // if (res[res.length - 1][1] === undefined) {
  //   res[res.length - 1][1] = "_";
  // }
  return res;
}
console.log(solution("abcdef1232"));
