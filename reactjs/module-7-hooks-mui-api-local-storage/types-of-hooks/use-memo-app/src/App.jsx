import React,{useMemo,useState} from 'react'
// use memo is type of react hooks 
// use memo will only recompute the memorized value when one of the deps has changed 
// use memo is memorized expensive computations

export default function App() {
   //const[number,setNumber]=useState({});
   var number=3;
   const square=useMemo(()=>{
    console.log('computing square of a numbers');
    return number*number;
   },[number]);
  return (
    <div>
    <p>{'THe square of numbers is : '+square}</p>
    </div>
  )
}
