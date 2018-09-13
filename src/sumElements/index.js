/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  let rez = 0;
  for(let i = 0; i< arr.length; i++) {
    if (isNaN(parseInt(arr[i]))) {
      continue;
    } else {
      rez += parseInt(arr[i]);
    }    
  }
  return rez;
};

sumElements([1, 2, 3]);
sumElements(['1', 'hi', 3]);
sumElements([Infinity, NaN, 1]);

export default sumElements;
