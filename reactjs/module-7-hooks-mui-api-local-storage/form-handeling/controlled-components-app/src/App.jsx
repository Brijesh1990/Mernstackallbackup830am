import React,{useState} from 'react'
import { Container,Row } from 'react-bootstrap'
export default function App() {
  // destructured data in state 

  const[name,setName]=useState({
    id:1,
    name:"brijesh"
  })
  // create a formHandeling function 
  const addFormData=(e)=>{
    // add data without form refresh
    e.preventDefault();
    // get values of input via controlled components
    alert('The user data is :'+name)
    e.target.reset();
     // reset the state as well
    // setName(e.target.value);
    setName({...name,name:""})

  }
  return (
    <>
      <form className='mt-5' onSubmit={addFormData}>
        <div className='form-group mt-5'>
          <input type='text' placeholder='Name *' value={name.name} onChange={(e)=>setName(e.target.value)} className='form-control' />
        </div>
        <div className='form-group mt-5'>
          <input type='submit' value="Send" className='btn btn-sm btn-danger' />
        </div>
        
      </form>
    </>
  )
}
