// write a function which takes in a string and returns counts of each character in the string.

function charCountTemp(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be
}

// solution 1.
// this works but does not strip out symbols etc...
function charCount1(str) {
  const trimmedString = str.replace(/\s/g, '').toLowerCase();
  const result = {};

  for (let i = 0; i < trimmedString.length; i++) {
    if (result[trimmedString[i]]) {
      result[trimmedString[i]] += 1;
    } else {
      result[trimmedString[i]] = 1;
    }
  }

  return result;
}

// solution 2.
function charCount2(str) {
  var obj = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  return obj;
}

// solution 3 - look back and refactor
function charCount3(str) {
  var obj = {};

  for (var char of str) {
    var char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      //   obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

// solution 4 - look back and refactor
function charCount4(str) {
  var obj = {};

  for (var char of str) {
    if (isAlphaNumeric(char)) {
      var char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

// using this is more faster the the above using the regex
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric (0 - 9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a - z)
  ) {
    return false;
  }

  return true;
}

console.log(charCount4('Hello this is @sample info!'));
