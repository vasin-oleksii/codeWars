// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.

const calc = function (expression) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };
  const evaluate = function (tokens) {
    const values = [];
    const operators = [];
    for (const token of tokens) {
      if (token in precedence) {
        while (
          operators.length &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          const operator = operators.pop();
          const b = values.pop();
          const a = values.pop();
          values.push(operators[operator](a, b));
        }
        operators.push(token);
      } else if (token === "(") {
        operators.push(token);
      } else if (token === ")") {
        while (operators[operators.length - 1] !== "(") {
          const operator = operators.pop();
          const b = values.pop();
          const a = values.pop();
          values.push(operators[operator](a, b));
        }
        operators.pop();
      } else {
        values.push(Number(token));
      }
    }
    while (operators.length) {
      const operator = operators.pop();
      const b = values.pop();
      const a = values.pop();
      values.push(operators[operator](a, b));
    }
    return values[0];
  };
  const tokens = expression.match(/\d+|\S/g);
  return evaluate(tokens);
};
