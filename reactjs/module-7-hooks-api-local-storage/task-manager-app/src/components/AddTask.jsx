import React,{useState,useEffect,useRef} from 'react'
import NavbarApp from './NavbarApp'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// fetch data of assign-to from http://localhost:8000/assign-to 
/*
what is REST API ? 
. REST stands for representational state transfer application programming interface
. REST api is always make in backend (node js | laravel | python | asp.net) and check status via postman
check status code of REST API.... 
200 => api status is ok and get resposne via server
201 => api status is ok and get resposne via server
301=> server authentication problems
404=>server error or page not fount

what is API ? 
API stands for application programming interface
API data get .json formate

what is json ? 
json stands for javascript object notations 
ex: 
{ 
"users":[

{
name:"brijesh"
}

]
}   


REST API data get via some method that method is called  ...

POST :insert data or stored data
GET : fetch data or retrive data
PUT : update data 
DELETE : delete data 

what is axios ?

axios is an package or libraries used to get | post | put | delete data in api.
axios is used to fetch api and used in react js or backend language

examples : 
axios.post()
axios.get()
axios.put()
axios.delete()

*/
export default function AddTask() {
// fetch api data of http://localhost:8000/assign-to inside of assign-to select box in dropdown
// configure with all backend language using axios 
// destructuring of data
const[user,setUser]=useState("");

// fetch data via axios 
useEffect(()=>{
// fetch data 
axios.get(`http://localhost:8000/assign-to`).then((response)=>{
setUser(response.data);
});
},[]);

// custome hook
//   fetch(`http://localhost:8000/assign-to`)
//     .then(response => response.json())
//     .then(data => setUser(data))

// });

// stored data via useRef
const taskname=useRef("");
const users=useRef("");
const taskdate=useRef("");
const taskstatus=useRef("");
const Navigate=useNavigate();
//store data to crete a function 
const addDataForm=(e)=>{
   e.preventDefault();
   var insertdata={
     taskname:taskname.current.value,
     users:users.current.value,
     taskdate:taskdate.current.value,
     taskstatus:taskstatus.current.value,     
   }

//create  an api or call api to store data 
axios.post(`http://localhost:8000/add-task`,insertdata).then(()=>{
// pass a message for stored data successfuly
Swal.fire({
  title: "Suuccess!",
  text: "Task Addedd successfully",
  icon: "success"
});
Navigate('/create-task');
e.target.reset();
});  

}



return (
<>
<NavbarApp />

<div className='p-15 mt-16 w-1/2 mx-auto'>
<h1 className='text-2xl'>Add Task</h1>
<hr className='w-25' / >
{/* Add  task */}
<form onSubmit={addDataForm}>
<div className='py-1'>
<input type='text' ref={taskname}  placeholder="Enter taskName *" className=' border-1 border-gray-800 p-2 w-125' required />
</div>
<div className='py-1'>
<select  ref={users}  className=' border-1 border-gray-800 p-2 w-125' required>
<option value="">-select employee-</option>
{/* fetch data */}
{user && user.map((items)=>{
return(<>

<option value={items.users}>{items.users}</option>

</>)
})}

</select>
</div>
<div className='py-1'>
<input type='date'  ref={taskdate}  placeholder="Enter Date *" className=' border-1 border-gray-800 p-2 w-125' required />
</div>


<div className='py-1'>
<select  ref={taskstatus}  className=' border-1 border-gray-800 p-2 w-125' required>
<option value="">-select status-</option>
<option value='completed'>completed</option>
<option value='incompleted'>incmpleted</option>
</select>
</div> 
<div className='py-1 mt-3'>
<input type='submit' value="AddTask" className='border-0 border-gray-800 p-3 bg-black text-white' />
</div>


</form>

</div>


</>
)
}
