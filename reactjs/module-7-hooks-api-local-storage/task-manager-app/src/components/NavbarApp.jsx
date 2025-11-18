import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
/* useEffect()
   1) is a type of hooks
   2) useEffect is used to fecth data applied effects inside of react js app 
   3) useEffect provides some dependancy that are .. 
      a) no dependency : render data again and again 
      b) [] blank array : render data one times 
      c) pass props and state values : render once times data and update data at times(without page refresh data will be updated) 

*/
export default function NavbarApp() {
  // destructured for total count task
  const[task,setTask]=useState(0  );
  // fetch data via axios 
  useEffect(()=>{
  // fetch data 
  axios.get(`http://localhost:8000/add-task`).then((response)=>{
  setTask(response.data);
  });
  },[task]); // pass a props or state as dependancy it update a fetch data at a time without page reload or refersh

  return (
    <nav className='p-5 bg-gray-600 text-white flex flex-row'>
    <Link to="/" className='text-2xl ms-5'>Task Mange App</Link>
    <ul className='inline-flex space-x-15 ms-125'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/create-task">AddTask</Link></li>
    <li><Link to="/">ManageTask<button type="button" className="bg-red-600 rounded-xl ms-2 p-0">Total Task : {task.length}
    <span className="position-absolute top-0 text-lg ms-2">
    
  </span>
</button> </Link></li>
    <li><Link to="/logout-here">Logout</Link></li>    
    </ul>    
    </nav>
  )
}
