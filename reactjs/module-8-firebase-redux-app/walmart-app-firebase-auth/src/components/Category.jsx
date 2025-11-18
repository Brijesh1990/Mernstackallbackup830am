import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
export default function Category() {
// destructuring of data via state 
const[data,setData]=useState("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/category`).then((response)=>{
setData(response.data);
})
},[data])
return (
<>
<div className='p-5 bg-blue-600 text-white rounded-2xl'>
<div className="bg-white text-black text-center p-2 text-2xl rounded-2xl">Select Category</div>
<ul className='block p-3 m-2  space-y-6'>
{data && data.map((rows)=>{
return(
<>
<li><Link to='' className='text-white  text-xl'><FaArrowCircleRight className='inline-flex' />&nbsp;{rows.categoryname}</Link></li>
</>
)
})}
</ul>


<div className="bg-blue-600">
  <aside className="w-full lg:w-80 p-0 lg:p-8 bg-blue-600 shadow-xl order-1 lg:order-2">
    <div className="mb-8 p-4 bg-red-100 border-l-4 border-red-500 rounded-lg shadow-lg">
      <h2 className="text-xl font-extrabold text-red-700 mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        OFFER ZONE
      </h2>
      <div className="space-y-4">
        <div className="text-sm">
          <p className="font-semibold text-gray-800">🔥 Get 20% OFF</p>
          <p className="text-red-500 font-medium">
            Electronics Section - This Weekend Only!
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-gray-800">🛒 Buy 1, Get 1 Free</p>
          <p className="text-red-500 font-medium">
            All Bakery Goods on Friday.
          </p>
        </div>
        <a
          href="#"
          className="block mt-4 text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition duration-200"
        >
          See All Deals
        </a>
      </div>
    </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
      <h3 className="font-semibold text-gray-700 mb-2">Current Store Hours</h3>
      <p className="text-sm text-gray-600">Mon - Sat: 7:00 AM - 11:00 PM</p>
      <p className="text-sm text-gray-600">Sun: 8:00 AM - 10:00 PM</p>
    </div>
  </aside>
</div>
</div>

</>
)
}
