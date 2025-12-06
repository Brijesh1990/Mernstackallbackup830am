/*

array functions :

 1. Array.isArray(): Checks if a value is an array.

function isArray(value) {
    return Array.isArray(value);
}

function isArray(value) {
    return Array.isArray(value);
}

2. Array.from(): Creates a new array from an array-like or iterable object.
function fromArray(arrayLike) {
    return Array.from(arrayLike);
}

3. Array.of(): Creates a new array with a variable number of arguments.
function ofArray(...elements) {
    return Array.of(...elements);
}


4. Array.prototype.concat(): Merges two or more arrays.
function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}


5. Array.prototype.join(): Joins all elements of an array into a string.

function joinArray(arr, separator = ',') {
    return arr.join(separator);
}


6. Array.prototype.slice(): Returns a shallow copy of a portion of an array into a new array object.

function sliceArray(arr, start, end) {
    return arr.slice(start, end);
}



7. Array.prototype.splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
function spliceArray(arr, start, deleteCount, ...items) {


    arr.splice(start, deleteCount, ...items);
    return arr;

}
8. Array.prototype.push(): Adds one or more elements to the end of an array and returns the new length of the array.
function pushArray(arr, ...elements) {  
    arr.push(...elements);
    return arr.length;
}


9. Array.prototype.pop(): Removes the last element from an array and returns that element.

function popArray(arr) {
    return arr.pop();
}

10. Array.prototype.shift(): Removes the first element from an array and returns that element.

function shiftArray(arr) {
    return arr.shift();
}   

11. Array.prototype.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

function unshiftArray(arr, ...elements) {

    arr.unshift(...elements);

    return arr.length;

}

12. Array.prototype.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

function indexOfArray(arr, element) {
    return arr.indexOf(element);
}   


13. Array.prototype.lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

function lastIndexOfArray(arr, element) {
    return arr.lastIndexOf(element);
}

14. Array.prototype.forEach(): Executes a provided function once for each array element.

function forEachArray(arr, callback) {
    arr.forEach(callback);
}

function forEachArray(arr, callback) {
    arr.forEach(callback);
}

15. Array.prototype.map(): Creates a new array with the results of calling a provided function on every element in the calling array.

function mapArray(arr, callback) {
    return arr.map(callback);
}

function mapArray(arr, callback) {
    return arr.map(callback);
}

16. Array.prototype.filter(): Creates a new array with all elements that pass the test implemented by the provided function.

function filterArray(arr, callback) {
    return arr.filter(callback);
}

function filterArray(arr, callback) {
    return arr.filter(callback);
}   


17. Array.prototype.reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
function reduceArray(arr, callback, initialValue) {
    return arr.reduce(callback, initialValue);
}

function reduceArray(arr, callback, initialValue) {
    return arr.reduce(callback, initialValue);
}   

18. Array.prototype.reduceRight(): Executes a reducer function on each element of the array, from right to left, resulting in a single output value.

function reduceRightArray(arr, callback, initialValue) {

    return arr.reduceRight(callback, initialValue);
}   

function reduceRightArray(arr, callback, initialValue) {
    return arr.reduceRight(callback, initialValue);
}

// 19. Array.prototype.some(): Tests whether at least one element in the array passes the test implemented by the provided function.

function someArray(arr, callback) {
    return arr.some(callback);
}
*/
