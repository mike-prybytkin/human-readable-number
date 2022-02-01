const objNumbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    const numToString = number.toString();
    const numLength = numToString.length;

    if (objNumbers.hasOwnProperty(numToString)) {
        return objNumbers[numToString];
    }

    if (numLength === 3) {
        if (objNumbers.hasOwnProperty(numToString.slice(-2))) {
            return `${objNumbers[numToString.slice(0, 1)]} hundred ${
                objNumbers[numToString.slice(-2)]
            }`;
        } else if (numToString.slice(-2) === "00") {
            return `${objNumbers[numToString.slice(0, 1)]} hundred`;
        } else if (numToString.slice(1, 2) === "0") {
            return `${objNumbers[numToString.slice(0, 1)]} hundred ${
                objNumbers[numToString.slice(-1)]
            }`;
        } else {
            return `${objNumbers[numToString.slice(0, 1)]} hundred ${
                objNumbers[numToString.slice(1, 2) + "0"]
            } ${objNumbers[numToString.slice(-1)]}`;
        }
    }

    if (numLength === 2) {
        return `${objNumbers[numToString.slice(0, 1) + "0"]} ${
            objNumbers[numToString.slice(-1)]
        }`;
    }
};
