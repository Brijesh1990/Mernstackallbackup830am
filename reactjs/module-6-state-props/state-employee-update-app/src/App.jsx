import React,{useState} from 'react'
export default function App() {

  const[name,setName]=useState({
      id:1,
      name:'Brijesh kumar pandey',
      email:'brijesh@example.com',
      phone:'123-456-7890',
      address:'123 Main St, City, State, 12345',
      department:'IT',
      position:'Software Engineer',
      salary:60000,
      dateOfJoining:'2023-01-01',
      status:'active'
  });

  // create a function for update employee details

  const updEmployeeDetails = ()=>{
    setName({
      ...name,
      id:2,
      name:'Divesh',
      email:'divesh@example.com',
      phone:'987-654-3210',
      address:'456 Another St, City, State, 54321',
      department:'CSE',
      position:'Senior Software Engineer',
      salary:80000,
      dateOfJoining:'2025-08-015',
      status:'active'
    }); 
  }
 

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-lg text-gray-700">
        This is a simple React application using Tailwind CSS.
      </p>
      <p className="text-sm text-gray-500">
        Edit <code>src/App.jsx</code> to get started.
      </p>
      <p className="text-sm text-gray-500">
        Check out the <code>vite.config.js</code> for configuration.
      </p>
      <p className="text-sm text-gray-500">
        Make sure to have Tailwind CSS set up correctly.
      </p> */}
      <nav className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl">State Employee Update App</h1>
      </nav>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to the App</h2>
        <p className="text-gray-700">This application allows you to manage state employee updates efficiently.</p>
        <p className="text-gray-500 mt-2">Feel free to explore the features and functionalities.</p>
        <div className="mt-6">
          <h3 className="text-lg font-medium">Employee Details</h3>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Name:</strong> {name.name}</li>
            <li><strong>Email:</strong> {name.email}</li>
            <li><strong>Phone:</strong> {name.phone}</li>
            <li><strong>Address:</strong> {name.address}</li>
            <li><strong>Department:</strong> {name.department}</li>
            <li><strong>Position:</strong> {name.position}</li>
            <li><strong>Salary:</strong> ${name.salary}</li>
            <li><strong>Date of Joining:</strong> {name.dateOfJoining}</li>
            <li><strong>Status:</strong> {name.status}</li>
          </ul>

          {/* update employee details */}
          <button type="button" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={updEmployeeDetails}>
            Update Employee Details
          </button>
        </div>




      </main>
      <footer className="bg-gray-800 text-white p-4 mt-6">
        <p className="text-center">© 2023 State Employee Update App</p>
      </footer>
      <p className="text-center text-sm text-gray-500 mt-4">Built with React and Tailwind CSS</p>
      <p className="text-center text-sm text-gray-500">Edit <code>  src/App.jsx</code> to modify this content.</p>
      <p className="text-center text-sm text-gray-500">Check <code>vite.config.js</code> for Vite configuration.</p>
    </div>
  )
}
