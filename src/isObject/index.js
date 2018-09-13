/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  /* your logic here...*/
  if( data instanceof Array) {
    return false;
  } else if (data === null) {
    return false;
  } else if (typeof(data)==='boolean' || typeof(data) === 'number' || typeof(data) === 'string') {
    return false;
  }
  else if (data instanceof Object) {
    return true;
  }
};

isObject({});
isObject([]);
isObject(null);

export default isObject;
