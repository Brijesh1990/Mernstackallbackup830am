import React from 'react'
import app from '../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function LoginApp() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Signed in
            const user = userCredential.user;
            console.log('User logged in:', user);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
            });
            navigate('/');
        } catch (error) {
            console.error('Error logging in user:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password. Please try again.',
            });
            navigate('/login');
        }
    };
  return (
    <div>
    <Navbar />
      <div className='w-1/3 mx-auto p-10'>Note: This is a demo registration. In a real application, ensure to implement proper validation and security measures.
    
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => {e.target.value}} required className='border border-gray-300 p-2 rounded-md w-full' />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => {e.target.value}} required className='border border-gray-300 p-2 rounded-md w-full' />
        </div>
        <button type="submit" className='bg-blue-600 text-white p-2 rounded-md mt-2'>Login</button>
        {/* create register */}
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </form>
      </div>
      <Footer />
    </div>
  )
}
