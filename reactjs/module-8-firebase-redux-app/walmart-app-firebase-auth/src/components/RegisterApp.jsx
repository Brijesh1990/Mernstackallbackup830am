import React from 'react'
import app from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function RegisterApp() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Signed in
      const user = userCredential.user;
      console.log('User registered:', user);
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'You have been registered successfully!',
        });
        navigate('/login');

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'An error occurred during registration. Please try again.',
        });
    
      console.error('Error registering user:', error);
      navigate('/register');
    }
  };
  return (
    <div>
    <Navbar />
      
      <div className='w-1/3 mx-auto p-10'>Note: This is a demo registration. In a real application, ensure to implement proper validation and security measures.
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => {e.target.value}} required className='border border-gray-300 p-2 rounded-md w-full' />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => {e.target.value}} required className='border border-gray-300 p-2 rounded-md w-full' />
        </div>
        <button type="submit" className='bg-blue-600 text-white p-2 rounded-md mt-2'>Register</button>
        {/* create a login */}
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
      </div>
    <Footer />
    </div>
  )
}
