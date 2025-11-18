import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from './Header'
import Sidebar from './Sidebar'
export default function EditEmployee() {
// instialised data
const[data,setData]=useState("");
const empphoto=useRef("");
const empname=useRef("");
const empage=useRef("");
const phone=useRef("");
const address=useRef("");
const navigate=useNavigate();
const {id}=useParams();

// fetch data in input 
useEffect(()=>{
    axios.get(`http://localhost:3000/addemployee/${id}`).then((response)=>{
        setData(response.data);
        // create each input field of response 
        empphoto.current.value=response.data.empphoto;
        empname.current.value=response.data.empname;
        empage.current.value=response.data.empage;
        phone.current.value=response.data.phone;
        address.current.value=response.data.address
    })

},[])


// create a function for update data 
const updEmployeeData=(e)=>{
    e.preventDefault();
    var updemp={
        empphoto:empphoto.current.value,
        empname:empname.current.value,
        empage:empage.current.value,
        phone:phone.current.value,
        address:address.current.value,
    }
    // create an update api 

     axios.put(`http://localhost:3000/addemployee/${id}`,updemp).then(()=>{
        Swal.fire({
        text: "Your data successfully Updated!",
        icon: "success"
        });
        
        navigate('/admin-login/manage-employee');

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
<h1 className='text-3xl ms-5 p-5 mt-10'>Update Your Employee Data</h1>
<hr className='border-1 w-55 ms-15' />

<form  className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>   
<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Edit Upload Employee Photo
</label>
<input
type='text'
id='ProductName' ref={empphoto}
className='w-full border px-3 py-2 rounded' required />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Edit Employee Name
</label>
<input
type='text'
id='Price'
className='w-full border px-3 py-2 rounded'  ref={empname} required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Edit Employee age
</label>
<input
type='text'
id='Price'
className='w-full border px-3 py-2 rounded' required ref={empage} />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Edit Phone
</label>
<input
type='text'
id='ProductName'
className='w-full border px-3 py-2 rounded'  ref={phone} required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='description'>
Edit Address
</label>
<textarea
id='description'
className='w-full border px-3 py-2 rounded'  ref={address}
rows={3}
/>
</div>
<button
type='button' onClick={updEmployeeData}
className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
>
Update Employee
</button>
</form>
</div>
</div>

</>
)
}
