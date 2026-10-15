function check(desc, actual, expected) {
  const pass = actual === expected;
  console.log(`${desc} => actual: ${actual} | expected: ${expected} ${pass ? "✅ PASS" : "❌ FAIL"}`);
  return pass;
}
const myName = "Hannah Wanjiku";
const myAge = 24;
const isStudent = true;
const favouriteColours = ["blue", "black", "white"];
const todayDate = new Date();
// Small Functions
function calculateArea(width, height) {
  return width * height;
}
const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const isEven = (number) => number % 2 === 0;
const reverseString = (str) => str.split("").reverse().join("");

check("calculateArea(5, 10)", calculateArea(5, 10), 50);
check("celsiusToFahrenheit(0)", celsiusToFahrenheit(0), 32);
check("fahrenheitToCelsius(32)", fahrenheitToCelsius(32), 0);
check("isEven(4)", isEven(4), true);
check("isEven(5)", isEven(5), false);
check("reverseString('hello')", reverseString("hello"), "olleh");

// Control Flow
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}
check("getGrade(95)", getGrade(95), "A");
check("getGrade(85)", getGrade(85), "B");

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day";
  }
}
check("getDayName(1)", getDayName(1), "Monday");
check("getDayName(8)", getDayName(8), "Invalid day");

// Loops and Shopping
function applyDiscount(amount) {
  if (amount > 1000) return amount * 0.9;
  return amount;
}
check("applyDiscount(2000)", applyDiscount(2000), 1800);
check("applyDiscount(500)", applyDiscount(500), 500);

// Calculator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/":
      if (num2 === 0) return "Cannot divide by zero";
      return num1 / num2;
    case "%": return num1 % num2;
    case "^": return num1 ** num2;
    default: return "Invalid operator";
  }
}

check("10 + 5", calculate(10, "+", 5), 15);
check("10 - 5", calculate(10, "-", 5), 5);
check("10 * 5", calculate(10, "*", 5), 50);
check("10 / 5", calculate(10, "/", 5), 2);
check("10 / 0", calculate(10, "/", 0), "Cannot divide by zero");
check("10 % 3", calculate(10, "%", 3), 1);
check("2 ^ 3", calculate(2, "^", 3), 8);
check("10 $ 3", calculate(10, "$", 3), "Invalid operator");

// Guessing Game
const secret = 7;
const checkGuess = (guess) => {
  if (guess > secret) return "Too high";
  if (guess < secret) return "Too low";
  return "Correct!";
};
check("checkGuess(5)", checkGuess(5), "Too low");
check("checkGuess(7)", checkGuess(7), "Correct!");
check("checkGuess(9)", checkGuess(9), "Too high");