import React,{useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate,useParams } from 'react-router-dom'
export default function DeleteEmployee() {
const navigate=useNavigate();
const {id}=useParams();
useEffect(()=>{
try{
axios.delete(`http://localhost:3000/addemployee/${id}`).then(()=>{

Swal.fire({
text: "Your data successfully deleted!",
icon: "success"
});
navigate('/admin-login/manage-employee');
})

}
catch(error)
{
console.log('error generating',error)
}
})
return (
<div>DeleteEmployee</div>
)
}
