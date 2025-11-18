// spread is merging more than two arrays into one array

var arr1 = ['brijesh', 'kaushik', 'kumar', 'singh'];

var arr2 = ['jimil', 'sharma', 'kumar'];

var arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: ['brijesh', 'kaushik', 'kumar', 'singh', 'jimil', 'sharma', 'kumar']

// The spread operator (...) is used to merge multiple arrays into one array.
// It allows you to expand the elements of an array into another array or function call.

// In this example, arr1 and arr2 are merged into a new array arr3 using the spread operator.

// The resulting arr3 contains all elements from both arr1 and arr2.
