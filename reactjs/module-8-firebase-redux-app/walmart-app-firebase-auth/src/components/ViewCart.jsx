import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
export default function ViewCart() {
// destructuring of data via state 
const[data,setData]=useState("");
const navigate=useNavigate();
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data])  
return (
<>
<Navbar />
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">
Your Shopping Cart ({data.length} Items)
</h1>

<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-3/4 space-y-6">

{data && data.map((items)=>{
  return(<>
      
<div className="flex items-center border p-4 rounded-lg shadow-sm bg-white">
<img
className="w-20 h-20 object-cover rounded-md mr-4"
src={items.photo}
alt="Product Name 1"
/>
<div className="flex-grow">
<h2 className="text-lg font-semibold text-gray-900">
{items.productname}
</h2>
<p className="text-sm text-gray-500">
Color: Black | Seller: TechGadgets Inc.
</p>
<p className="text-xl font-bold text-gray-900 mt-1">Rs. {items.newprice}</p>
</div>
<div className="flex items-center space-x-2 mx-4">
<label htmlFor="qty-1" className="sr-only">
Quantity
</label>
<input
id="qty-1"
type="number"
defaultValue={1}
min={1}
className="w-16 p-2 border border-gray-300 rounded-md text-center focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<button type='button' onClick={()=>{navigate(`/delete-cart/${items.id}`)}}
className="text-red-500 hover:text-red-700 transition duration-150"
aria-label="Remove item"
>
<svg
className="w-6 h-6"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M6 18L18 6M6 6l12 12"
/>
</svg>
</button>
</div>

  </>)
})}

<div className="text-right mt-6">
<a
href="/"
className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-end"
>

<svg
className="w-4 h-4 mr-1"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M10 19l-7-7m0 0l7-7m-7 7h18"
/>
</svg>
Continue Shopping
</a>
</div>
</div>
<div className="md:w-1/4">
<div className="bg-gray-50 border p-6 rounded-lg shadow-lg sticky top-8">
<h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
<div className="flex justify-between text-base text-gray-700 mb-2">
<span>Subtotal (3 items)</span>
<span className="font-medium">$258.99</span>
</div>
<div className="flex justify-between text-base text-gray-700 mb-2">
<span>Shipping Estimate</span>
<span className="font-medium text-green-600">Free</span>
</div>
<div className="flex justify-between text-base text-gray-700 mb-4 border-b pb-4">
<span>Tax Estimate</span>
<span className="font-medium">$15.54</span>
</div>
<div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
<span>Order Total</span>
<span>$274.53</span>
</div>
<Link to='/checkout'><button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition duration-300 shadow-md">
Proceed to Checkout
</button></Link>
<div className="mt-4 text-center text-gray-500 text-xs">
Secure checkout guaranteed.
</div>
</div>
</div>
</div>
</div>
<Footer />
</>
)
}
