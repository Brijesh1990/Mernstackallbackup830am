var arr = ['brijesh', 'kaushik', 'kumar', 'singh'];
var res = arr.pop();
console.log(arr); // Output: ['brijesh', 'kaushik', 'kumar'] (last element 'singh' removed)
console.log(res); // Output: 'singh' (the element that was removed)
console.log(arr.length); // Output: 3 (length of the array after pop operation)
console.log(arr[0]); // Output: 'brijesh' (first element of the array)
console.log(arr[arr.length - 1]); // Output: 'kumar' (last element of the array after pop operation)
// console.log(arr[3]); // Output: undefined (no fourth element after pop operation)
// console.log(arr[4]); // Output: undefined (no fifth element after pop operation)
