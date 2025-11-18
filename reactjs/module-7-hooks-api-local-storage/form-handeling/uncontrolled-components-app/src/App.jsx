import React,{useState,useRef} from 'react'
// 
export default function App() {
  // destructured 
  // const[data,setName]=useState("");
  // used useRef to stored data inside of varibales
  const name=useRef("");
  const email=useRef("");
  const phone=useRef("");
  // create a formHandeling function
  const addFormData=(e)=>{
    e.preventDefault(); 
    var insert={
         
      name:name.current.value,
         
      email:email.current.value,
         
      phone:phone.current.value,
      
    }

    // pass a messages 

    console.log('Thanks for adding data',insert);
    e.target.reset();

  } 
  return (
    <div>
      <form className='w-50 mx-auto mt-5' onSubmit={addFormData}>
        <div className='form-group mt-2'>
          <input type='text' ref={name} placeholder='Name *' className='form-control' />
        </div>

        
        <div className='form-group mt-2'>
          <input type='text' ref={email} placeholder='Email *' className='form-control' />
        </div>

        
        <div className='form-group mt-2'>
          <input type='text' ref={phone} placeholder='Phone *' className='form-control' />
        </div>

        
        <div className='form-group mt-2'>
          <input type='submit'  value="submit" className='btn b tn-sm btn-danger' />
        </div>
      </form>
      
    </div>
  )
}
