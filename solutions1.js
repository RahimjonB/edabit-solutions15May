// 41. Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
function yeah_nope(bool) {
    return bool ? "yeah" : "nope";
  
  }


//   42. 
  function checkNum(x) {
	if (x > 0) return "positive";
	if (x < 0) return "negative";
	return true;
	}
checkNum(5);

// 43. Given a string, return true if its length is even or false if the length is odd.
function oddOrEven(s) {
	if(s.length % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}

// 44. You can assign variables from arrays like this:
// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]
// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
const arr = [1, 2, 3, 4, 5, 6];
const [a,b] = arr;
console.log(arr);

// 45. Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
function inchesToFeet(inches) {
	if(inches<12) return 0;
	return inches/12;
}
inchesToFeet(274);

// 46. I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.
function howManyWalls(n, w, h) {
	return Math.floor(n / (w*h));
}howManyWalls(100,2,4);

// 47. Create a function that takes a base number and an exponent number and returns the calculation.
function calculateExponent(num, exp) {
	return num**exp;
}
calculateExponent(5,5);


// 48. Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
	return arr[arr.length-1];
}

// 49. You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
function intToString(num) {
	return toString(num);
}


function stringToInt(num) {
	return parseInt(num);
}

// 50. Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?
function posCom(num) {
	return 2**num;
}
posCom(5);

// 51. Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
function imposterFormula(i, p) {
    if (i > 3 || p > 10 || i < 0 || p < 0) {
      return "Invalid input";
    }
    var percent = Math.round((i / p) * 100);
    return percent + "%";
  }

//   52. A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
//   Write a function that determines if the year is a leap year or not.
function leapYear(year) {
	if(year % 4 == 0) return true;
	if(year / 100 !== 0) return false;
	if(year / 400 !== 0) return false;
	return false;
}

// 53. I'd like to calculate how long on average I've lived in a single house.
// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.
function yearsInOneHouse(age, moves) {
	return Math.round(age/(moves+1));
}

// 54. Write a function that returns true if a year is a leap, otherwise return false.
// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.
// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.
// Look at the examples, and if you need help, look at the resources panel.
function leapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

//   55. Create a function that takes a word and returns the new word without including the first character.
function newWord(str) {
	return str.slice(1);
}

// 56. Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
// Create a function that returns the opposite of the given boolean, as a number.
function flipBool(b) {
	if(b == true) return 0;
	if(b == false)return 1;
}

// 57. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
const helloName = name => {return "Hello "+name+"!"};

// 58. Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
var isEvenOrOdd = num => {
	if(num%2 == 0) return "even";
	return "odd";
} 

// 59. Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
function isOdd(num) {
	return num % 2 != 0;
}

// 60. Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
function stackBoxes(n) {
	return n*n;
}

// 61. Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base, height, shape) {
	if (shape === "triangle") return 0.5 * base * height;
	if (shape === "parallelogram") return base * height;
  return "Invalid shape";
  }

//   62. Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
	return arr.join('');}
