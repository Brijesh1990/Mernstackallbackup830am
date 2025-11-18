import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa'
import { FaStar,FaCartShopping,FaUser,FaPowerOff } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
// create a firebase after login set logged In userName and logout as user
import { getAuth } from "firebase/auth";
import app from '../firebase'
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);
export default function Navbar()  { 
//get currentuser name
const [currentUser, setCurrentUser] = useState(null);
// Listen for authentication state changes for logout and login
const navigate=useNavigate();
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    setCurrentUser(user);
  });
  return () => unsubscribe();
}, []);



// Base link styling for reusability and consistent animation
const linkClasses = "hover:text-yellow-300 transition-all duration-300 ease-in-out font-medium p-2 rounded-lg hover:bg-blue-700/50";
// destructuring of data via state 
const[data,setData]=useState("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data]) 
return (
<>
 <nav className='bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-xl transition-shadow duration-300'>
      <ul className='flex items-center justify-between mx-auto max-w-7xl'>
        
        {/* 1. Logo (Hover Scale Animation) */}
        <li className="flex-shrink-0">
          <Link 
            to="/" 
            className='flex items-center space-x-1 transition-all duration-300 transform hover:scale-105'
          >
            <span className='text-3xl font-black hidden sm:inline'>Walmart</span> 
            <FaStar className='text-3xl text-yellow-400' />
          </Link>
        </li>

        {/* 2. Search Bar (Takes up most space, hidden on smallest screens) */}
        <li className='flex-grow mx-4 hidden md:block'>
          <div className="relative">
            <input 
              type='search' 
              placeholder='Search thousands of Walmart products...' 
              // Added focus ring animation for a professional look
              className='rounded-full w-160 ms-25 p-2.5 pl-4 text-black bg-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/70 shadow-inner' 
            />
          </div>
        </li>

        {/* 3. Right-Side Links (Flex items) */}
        <div className='flex items-center space-x-2 sm:space-x-6'>

            {/* Account Link (Subtle Icon animation on hover) */}

            {/* set if else to show Account or Login    */}
            {currentUser ? (
          
            
                <>
              <li>
                <Link to="/profile" className='flex items-center space-x-1 font-medium'>
                  <FaUser className='text-xl transition-transform duration-300 group-hover:rotate-12' />
                  <span className="text-white">{currentUser && currentUser.email}</span>
                </Link>
              </li>

              <li>
                <button type='button' onClick={()=>navigate('/logout-here')}>
                  <FaPowerOff className='text-xl transition-transform duration-300 group-hover:rotate-12' />
                  <span className="text-white" onClick={()=>{currentUser==false}}>Logout</span>
                </button>
              </li>
              
              </>

            ) : (
                 <li>
                <Link to="/register" className='flex items-center space-x-1 font-medium'>
                  <FaUser className='text-xl transition-transform duration-300 group-hover:rotate-12' />
                  <span className={`hidden sm:inline ${linkClasses}`}>Account</span>
                </Link>
              </li>
            )}

         

            {/* Cart Link (Bounce animation on item count) */}
            <li>
                <Link to="/view-cart" className='flex items-center space-x-1 font-medium'>
                    <FaShoppingCart className='text-xl transition-transform duration-300 hover:scale-110' />
                    <span className='relative'>
                        <span className={`hidden sm:inline ${linkClasses}`}>Cart</span>
                        {/* Cart count badge with absolute positioning and subtle animation */}
                        <span className='absolute -top-3 -right-4 inline-flex items-center justify-center h-5 w-5 bg-red-500 text-xs font-bold rounded-full transition-all duration-500 transform hover:scale-125 hover:bg-red-400'>
                            {data.length}
                        </span>
                    </span>
                </Link>
            </li>
        </div>
      </ul>
    </nav>
</>
)
}
