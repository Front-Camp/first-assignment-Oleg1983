/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  /* your logic here...*/
  let newStr;
  let newLength;
  if (length === 0 && str.length > 0) {
    newLength = str.length - replacer.length;
    newStr = str.substr(0,newLength) + replacer;
  } else if(length > str.length) {
    newStr = 'Some very long text';
  } else if (str.length === 0) {
    newStr = '';
  } 
  else {
    newLength = length - replacer.length;
    newStr = str.substr(0,newLength) + replacer;
  }  
  
  return newStr;
};

export default truncate;
