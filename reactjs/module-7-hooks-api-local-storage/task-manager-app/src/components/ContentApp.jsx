import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaTasks,FaEdit,FaTrash } from 'react-icons/fa'
export default function ContentApp() {
  // destructured for total count task
  const[data,setData]=useState();
  const[task,setTask]=useState(0  );
  // fetch data via axios 
  useEffect(()=>{
  // fetch data 
  axios.get(`http://localhost:8000/add-task`).then((response)=>{
  setTask(response.data);
  });
  },[task]); // pass a props or state as dependancy it update a fetch data at a time without page reload or refersh

  // fetch data or show task here
  
// fetch data via axios 
useEffect(()=>{
// fetch data 
axios.get(`http://localhost:8000/add-task`).then((response)=>{
setData(response.data);
});
},[data]);
  return (
    <div className='w-300 mx-auto p-15 mt-16'>
    <h1 className='text-2xl'>Task Manger App <button className='bg-red-700 text-white text-xl ms-25 ms-200 p-2'>Total Task {task.length}</button></h1>
    <hr className='w-25' / >
    {/* manage task */}
    <table className='px-0 py-0 mt-15 overflow-x-auto w-full border-0' border="0">
        <tr align="left">
            <th className='py-2'>TaskName</th>
            <th className='py-2'>AssignTo</th>
            <th className='py-2'>Added Date</th>
            <th className='py-2'>Status</th>
            <th className='py-2'>Action</th>
        </tr>
        {data && data.map((shwtask)=>{
          return(<>
        <tr align="left">
            <td>{shwtask.taskname}</td>
            <td>{shwtask.users}</td>
            <td>{shwtask.taskdate}</td>
            <td><button className='bg-green-200 p-1 rounded-15'>{shwtask.taskstatus}</button></td>
            <td><button className='border-0 text-green-700 text-xl'><FaEdit /></button> | <button className='border-0  text-red-700 text-xl'><FaTrash /></button></td>
        </tr>

          </>)
        })}
       
    </table>

    </div>
  )
}
