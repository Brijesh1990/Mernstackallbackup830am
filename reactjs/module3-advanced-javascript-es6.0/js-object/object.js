/*   
what is object is javascript ?

object is an entity that is defined as a collection of properties,
where each property is defined as a key-value pair.

var person = {

id:1,
name:"John Doe",
age:30,
address:"123 Main St, Anytown, USA",
email:"a@gmail.com"


}

In the above example, 'person' is an object with properties like 'id', 'name', 'age', 'address', and 'email'.
 Objects can also contain methods, which are functions associated with the object.

console.log(person.name); // Output: John Doe

You can also add, modify, or delete properties of an object.

 person.phone = "123-456-7890"; // Adding a new property
console.log(person.phone); // Output: 123-456-7890

person.age = 31; // Modifying an existing property
console.log(person.age); // Output: 31

You can delete a property using the 'delete' operator.

 delete person.address; // Deleting the 'address' property
console.log(person.address); // Output: undefined   


*/
//stringify and parse

// JSON.stringify() converts a JavaScript object into a JSON string

var person = {
  id: 1,
  name: 'John Doe',
  age: 30,
  address: '123 Main St, Anytown, USA',
  email: 'bkpandey@gmail.com',
};
var jsonString = JSON.stringify(person);
console.log(jsonString);

// JSON.parse() converts a JSON string back into a JavaScript object
var jsonString =
  '{"id":1,"name":"John Doe","age":30,"address":"123 Main St, Anytown, USA","email":"bkpandey.pandey@gmail.com"}';

var personObject = JSON.parse(jsonString);
console.log(personObject); // Output: { id: 1, name: 'John Doe', age: 30, address: '123 Main St, Anytown, USA', email: '
