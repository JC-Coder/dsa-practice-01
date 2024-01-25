/**
 * Keys and their meaning
 * TC - Time Complexity
 * SC - Space Complexity
 */

/**
 * TC - O(n)
 */
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/**
 * TC - O(1)
 */
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/**
 * TC - O(n)
 */
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('At the top!\nGoing down...');
  console.log('n', n);
  console.log('n-1', n - 1);

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log('Back down. Bye!');
}

// countUpAndDown(20);

/**
 * TC - O(n2)
 */
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// printAllPairs(10)

/**
 * TC - O(n)
 * note : we look at the worst case scenario where n grows
 */
function logAtLeast5(n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
}

/**
 * TC - O(1)
 * because it would remain constant as n grows
 */
function logAtLeast5(n) {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
}

/**
 * SC - O(1)
 * TC - O(n)
 */
function sum(arr) {
  let total = 0;
  for (let i = 1; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/**
 * SC - O(n)
 * TC - O(n)
 */
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
