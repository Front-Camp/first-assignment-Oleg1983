/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if (typeof(str) === 'string') {
    var newStr = '';
    var strArr = Array.from(str);
    for(var i = strArr.length-1; i>=0; i--) {
      newStr += strArr[i];
    }
    return newStr;
  } else {
    return new Error('this is not a string');
  }

};

turnMeBaby('hello');
turnMeBaby('Some text');

export default turnMeBaby;
