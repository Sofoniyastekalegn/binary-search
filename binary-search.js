/* Typical comparison function */

let defaultCompare = (a, b) => 
a > b ? 1 : (a < b ? -1 : 0);


let binarySearchWithLoops = (array, element, compare = defaultCompare) => {

  let left = 0;
  let right = array.length -1;
  return -1;
};

export default binarySearchWithLoops;