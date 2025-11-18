import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
export default function ManageEmployee() {
//display data
const[data,setData]=useState("");
const navigate=useNavigate();
// call useEffect 
useEffect(()=>{
  // call api for fetch data
  try 
  {
  axios.get(`http://localhost:3000/addemployee`).then((response)=>{
    setData(response.data);
  })
}
  catch(error)
  {
    console.log('Error Generating',error)
  }
//dependency 
}, []) // Pass empty array to run useEffect only once on mount
// Filter data to only include contacts whose name starts with an alphabetic character
const filteredData = Array.isArray(data)
  ? data.filter(row => /^[A-Za-z]/.test(row.name))
  : [];

return (
  <>
    <Header />
    <div className='p-0 w-full flex flex-row'>
      <div className='w-65 bg-black p-10'>
        <Sidebar />
      </div> 
      <div className='w-full p-5 mt-32'>
        <h1 className='text-3xl ms-5 p-5 mt-10'>Manage Employee</h1>
        <hr className='border-1 w-55 ms-15' />
        <div className='overflow-x-auto mx-5 mt-8'>
          <table className='min-w-full bg-white rounded shadow'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b'>#id</th>
                <th className='py-2 px-4 border-b'>Photo</th>
                <th className='py-2 px-4 border-b'>Name</th>
                <th className='py-2 px-4 border-b'>Age</th>
                <th className='py-2 px-4 border-b'>Phone</th>
                <th className='py-2 px-4 border-b'>Address</th>
                <th className='py-2 px-4 border-b'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row,index) => (
                <tr className='hover:bg-gray-100 text-center' key={row._id || row.id}>
                 
                  <td className='py-2 px-4 border-b'>{index+1}</td>   
                  <td className='py-2 px-4 border-b'><img src={row.empphoto} alt='photo' style={{width:"55px",height:"55px"}} /></td>
                  <td className='py-2 px-4 border-b'>{row.empname}</td>
                  <td className='py-2 px-4 border-b'>{row.empage}</td>
                  <td className='py-2 px-4 border-b'>{row.phone}</td>
                  <td className='py-2 px-4 border-b'>{row.address}</td>
                  <td className='py-2 px-4 border-b'>
                    <button type='button'
                      className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600' onClick={()=>navigate(`/admin-login/delete-employee/${row.id}`)}
                    >
                      Delete
                    </button>
                    |

                    <button type='button'
                      className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-red-600' o
                    onClick={()=>navigate(`/admin-login/edit-employee/${row.id}`)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
)
}
