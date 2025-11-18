import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DeleteContact() {
    // const[data,setData]=useState("");
    const navigate=useNavigate();
    const {id}=useParams();
//     useEffect(()=>{
//      try 
//      {      
//      axios.delete(`http://localhost:3000/contactus/${id}`).then(()=>{
//         Swal.fire({
//   title: "Good job!",
//   text: "Your data successfully deleted!",
//   icon: "success"
//   });
//  navigate('/admin-login/manage-contact');
     
// })
//      }
//      catch(error)
//      {
//         console.log('error generating',error)
//      }
    
// })

useEffect(()=>{
   
Swal.fire({
  title: "Do you want to delete Data ?",
  showDenyButton: true,
  confirmButtonText: "yes",
  denyButtonText: `no`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
       axios.delete(`http://localhost:3000/contactus/${id}`).then(()=>{
        Swal.fire("Your data successfully deleted", "", "success");
         navigate('/admin-login/manage-contact');
    });
  } else if (result.isDenied) {
    navigate('/admin-login/manage-contact');
  }

      })   
})
  return (
    <div>
      
    </div>
  )
}
