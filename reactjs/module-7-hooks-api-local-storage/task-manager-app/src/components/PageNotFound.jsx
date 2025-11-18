import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <>
    <div className='w-1/2'>
    <h1 className='text-center'>Page not found(Error)</h1>
    <Link to="/"><button>Go to Home</button></Link>
    </div>
    </>
  )
}
