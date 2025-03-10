function countLettersAndDigits(input) {
  return input.replace(/[^a-z0-9]/gi, "").length;
}
