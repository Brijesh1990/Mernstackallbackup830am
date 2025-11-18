import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function PaymentSuccess() {
const[data,setData]=useState([]);
// const navigate=useNavigate();
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data]) 

// print invoice 
const pr=()=>{
  window.print();
}
  return (
   <>
    <>
  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-full bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-green-100 text-center space-y-8">
      <div className="flex justify-center mb-6">
        <div className="relative w-24 h-24">
          <div className="w-full h-full rounded-full bg-green-100 animate-pulse-once" />
          <svg
            className="absolute inset-0 w-2/3 h-2/3 m-auto text-green-600 animate-pop-in"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-700 text-lg">
          Thank you, your order **#WM10948** has been confirmed.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          A confirmation email has been sent to your inbox.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-left space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-3">
          Order Details
        </h3>
        <div className="flex justify-between text-gray-600">
          <span>Total Items</span>
          <span className="font-medium">{data.length}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-3">
          <span>Total Paid</span>
          <span>Rs. {data.reduce((acc, item)=>acc + Number(item.newprice || 0),0).toFixed(2)}</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button type='button'
          onClick={()=>{pr()}}
          className="flex-1 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md text-base"
          aria-label="Print Invoice"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v1a2 2 0 002 2h6a2 2 0 002-2v-1m-4-10h-4"
            />
          </svg>
          Print Bill / Invoice
        </button>
        <a
          href="/shop"
          className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md text-base"
          aria-label="Continue Shopping"
        >
          Continue Shopping
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n/* Simple pulse animation for the outer circle */\n@keyframes pulse {\n    0%, 100% { opacity: 1; transform: scale(1); }\n    50% { opacity: 0.8; transform: scale(1.1); }\n}\n.animate-pulse-once {\n    animation: pulse 1.5s ease-out 1;\n}\n\n/* Simple pop-in animation for the checkmark */\n@keyframes pop-in {\n    0% { opacity: 0; transform: scale(0.5); }\n    60% { opacity: 1; transform: scale(1.1); }\n    100% { transform: scale(1); }\n}\n.animate-pop-in {\n    animation: pop-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; /* Overshoot effect */\n}\n"
    }}
  />
</>

   </>
  )
}
