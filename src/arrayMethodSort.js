'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = this.length; i > 1; i--) {
      for(let j = 0; j < i; j++) {
        if (compareFunction(this[j], this[i]) < 0) {
          swap(this, i, j);
        }
      }
    }

    return this;
  };
}

function swap(arr, firstElementIndex, secondElementIndex) {
  const tempPlaceHolder = arr[firstElementIndex];
  arr[firstElementIndex] = arr[secondElementIndex];
  arr[secondElementIndex] = tempPlaceHolder;
}

module.exports = applyCustomSort;
