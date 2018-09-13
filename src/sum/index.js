/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  /* your logic here...*/
  if(typeof(a) === 'number' && typeof(b) ==='number') {
    return a + b;
  } else if (isNaN(a) || isNaN(b)) {
    return error;
  } else if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    return error;
  } else if (a === null || b === null) {
    return error;
  }
  else {
    return error;    
  }
};

sum(1, 2);
sum(0, 5);
sum(-1, 13);

export default sum;
