import React,{useState,useCallback} from 'react'
// useCallback is a type of hooks 
// usecallback is used to memoizes function to prevent unnecessary re-creations 

function Button({onClick})
{
  return <button onClick={onClick}>Click Me</button>

}

function App()
{
  const[count,setCount]=useState(0);
  const handelClick=useCallback(()=>{

    setCount(c=>c+1);
    // alert('hi')

  },[]);

 
return (
    <div>

     <p>{count}</p> 
      <Button onClick={handelClick} />
    </div>
  )
}

export default App
