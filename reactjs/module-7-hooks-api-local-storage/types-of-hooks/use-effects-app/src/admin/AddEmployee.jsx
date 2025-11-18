import React,{useState,useRef} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FlashMessage from 'react-flash-message';
export default function AddEmployee() {
const [showMessage, setShowMessage] = useState(false);
const [messageContent, setMessageContent] = useState("");
const [messageType, setMessageType] = useState("");

const empphoto=useRef("");
const empname=useRef("");
const empage=useRef("");
const phone=useRef("");
const address=useRef("");
const navigate=useNavigate();
// create function to add data 
const addEmployeeData=async(e)=>{
e.preventDefault();
var insert={
empphoto:empphoto.current.value,
empname:empname.current.value,
empage:empage.current.value,
phone:phone.current.value,
address:address.current.value

}
// add data via axios or post data via axios in api
axios.post(`http://localhost:3000/addemployee`,insert).then(()=>{
// pass add data messages
//alert('Data successfully addedd')
// set react-flash messages
setTimeout(() => {
setMessageContent('Employee added successfully!');
setMessageType('success');
setShowMessage(true);
// Automatically hide the message after a few seconds
setTimeout(() => setShowMessage(false), 4000);
}, 500);

navigate('/admin-login/add-employee');
e.target.reset();

})

}    
return (
<>
<Header />
<div className='p-0 w-full flex flex-row'>
<div className='w-65 bg-black p-10'>
<Sidebar />
</div> 
<div className='w-full p-5 mt-32'>
<h1 className='text-3xl ms-5 p-5 mt-10'>Add Your Employee</h1>
<hr className='border-1 w-55 ms-15' />

{showMessage && (
<div className="bg-green-500 text-xl text-white p-2 mt-10 w-1/2 {`flash-message ${messageType}`}">
{messageContent}
</div>
)}

<form onSubmit={addEmployeeData} className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Upload Employee Photo
</label>
<input
type='text'
id='ProductName' ref={empphoto}
className='w-full border px-3 py-2 rounded' required />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee Name
</label>
<input
type='text'
id='Price'
className='w-full border px-3 py-2 rounded'  ref={empname} required />
</div>




<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee age
</label>
<input
type='text'
id='Price'
className='w-full border px-3 py-2 rounded' required ref={empage} />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Phone
</label>
<input
type='text'
id='ProductName'
className='w-full border px-3 py-2 rounded'  ref={phone} required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='description'>
Address
</label>
<textarea
id='description'
className='w-full border px-3 py-2 rounded'  ref={address}
rows={3}
/>
</div>
<button
type='submit'
className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
>
Add Employee
</button>
</form>
</div>
</div>

</>
)
}
