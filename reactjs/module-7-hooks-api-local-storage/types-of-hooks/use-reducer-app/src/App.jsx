import React, { useReducer } from 'react'
// useReducer : this is a type of hooks 
// useReducer is alternative of useState
// useReducer is typically used for complex stateLogic 
// useReducer is max used inside of redux (redux is used to access or manage state complex data)

const reducer=(state,action)=>{

  switch(action.type)
  {
    case 'increment':return {count:state.count+1};
    case 'decrement':return {count:state.count-1};
    case 'reset':return {count:0};
    default:return state; 
  }
}

function Counter()
{
  const[state,dispatch]=useReducer(reducer,{count:0});


  return (
    <div className='app'>
    <p>The value of count : {state.count}</p>    
    <button type='button' onClick={()=>dispatch({type:'increment'})}>Increment</button>
    <button type='button' onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    <button type='button' onClick={()=>dispatch({type:'reset'})}>Reset</button>
    
    </div>
  )
}

export default  Counter;