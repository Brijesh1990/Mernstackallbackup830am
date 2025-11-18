import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams,Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';
export default function Checkout() {
const[data,setData]=useState([]);

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
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
<h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b pb-2">
Secure Checkout
</h1>
<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-3/5 space-y-10">
<section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
<h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
<svg
className="w-6 h-6 mr-2 text-blue-500"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M17.657 16.727A8 8 0 016.343 4.273 8.001 8.001 0 0117.657 16.727zm0 0l-1.042 1.042m1.042-1.042l-1.042 1.042m0 0a2 2 0 100 2.828 2 2 0 000-2.828z"
/>
</svg>
Shipping Address
</h2>
<form className="space-y-4">
<div>
<label
htmlFor="fullName"
className="block text-sm font-medium text-gray-700"
>
Full Name
</label>
<input
type="text"
id="fullName"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="address1"
className="block text-sm font-medium text-gray-700"
>
Address Line 1
</label>
<input
type="text"
id="address1"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="address2"
className="block text-sm font-medium text-gray-700"
>
Address Line 2 (Optional)
</label>
<input
type="text"
id="address2"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label
htmlFor="city"
className="block text-sm font-medium text-gray-700"
>
City
</label>
<input
type="text"
id="city"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="state"
className="block text-sm font-medium text-gray-700"
>
State / Province
</label>
<input
type="text"
id="state"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="zip"
className="block text-sm font-medium text-gray-700"
>
ZIP / Postal
</label>
<input
type="text"
id="zip"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
</div>
</form>
</section>
<section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
<h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
<svg
className="w-6 h-6 mr-2 text-green-500"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
/>
</svg>
Payment Method
</h2>
<form className="space-y-4">
<div>
<label
htmlFor="cardNumber"
className="block text-sm font-medium text-gray-700"
>
Card Number
</label>
<input
type="text"
id="cardNumber"
placeholder="**** **** **** 1234"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="cardName"
className="block text-sm font-medium text-gray-700"
>
Name on Card
</label>
<input
type="text"
id="cardName"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label
htmlFor="expiry"
className="block text-sm font-medium text-gray-700"
>
Expiration Date (MM/YY)
</label>
<input
type="text"
id="expiry"
placeholder="12/25"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
<div>
<label
htmlFor="cvc"
className="block text-sm font-medium text-gray-700"
>
CVC
</label>
<input
type="text"
id="cvc"
placeholder="***"
className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
</div>
<div className="pt-4 space-y-3">
<div className="flex items-center">
<input
id="creditCard"
name="paymentMethod"
type="radio"
defaultChecked=""
className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
/>
<label
htmlFor="creditCard"
className="ml-3 block text-sm font-medium text-gray-700"
>
Credit / Debit Card
</label>
</div>
<div className="flex items-center">
<input
id="paypal"
name="paymentMethod"
type="radio"
className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
/>
<label
htmlFor="paypal"
className="ml-3 block text-sm font-medium text-gray-700"
>
PayPal
</label>
</div>
</div>
</form>
</section>
</div>
<div className="md:w-2/5">
<div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 sticky md:top-8">
<h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
Order Summary
</h2>
<div className="space-y-3 text-sm text-gray-600 mb-6">
<div className="flex justify-between">
<span>Items Subtotal ()</span>
<span className="font-medium text-gray-900">{data.reduce((acc, item)=>acc + Number(item.newprice || 0),0).toFixed(2)}</span>
</div>
<div className="flex justify-between">
<span>Shipping &amp; Handling</span>
<span className="font-medium text-green-600">FREE</span>
</div>
<div className="flex justify-between">
<span>Taxes (Estimated)</span>
<span className="font-medium text-gray-900">NIL</span>
</div>
</div>
<div className="flex justify-between text-2xl font-bold text-gray-900 pt-4 border-t border-dashed">
<span>Order Total</span>
<span>Rs.<label>{data.reduce((acc, item)=>acc + Number(item.newprice || 0),0).toFixed(2)}</label></span>
</div>
<div className="mt-6">
<input
id="terms"
type="checkbox"
className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
/>
<label htmlFor="terms" className="ml-2 text-sm text-gray-600">
I agree to the{" "}
<a
href="#"
className="text-blue-600 hover:text-blue-800 font-medium"
>
Terms of Service
</a>
</label>
</div>
<Link to='/payment-success'><button
type="button"
className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-3 rounded-full transition duration-300 shadow-xl text-lg uppercase tracking-wider"
>
Place Your Order
</button></Link>
<p className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center">
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
d="M12 15v2m-6-6h12a3 3 0 003-3V7a3 3 0 00-3-3H6a3 3 0 00-3 3v5a3 3 0 003 3z"
/>
</svg>
Secure payment processed by Stripe.
</p>
</div>
</div>
</div>
</div>
<Footer />
</>
)
}
