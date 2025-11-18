import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import NavbarApp from './Navbar'
const Home=({count,increment,decrement})=> 
{
  return (
    <>
     <NavbarApp />
     <Container className='w-50 mx-auto mt-5 p-5'>
      <h1>Counter App via Redux</h1>
      <hr/>
      <span className='fs-3'>The count Initial state value is : {count}</span>

      <h2><button type='button' className='btn btn-sm btn-success fs-1 w-25' onClick={increment}>+</button>
      <button type='button' className='btn btn-sm btn-danger fs-1 ms-5 w-25' onClick={decrement}>-</button></h2>
     </Container>
     </>
  )
}

const mapStateToProps=state=>({
  count:state.count
})

const mapDispatchToProps=dispatch=>({
 increment:()=>dispatch({type:'INCREMENT'}),
 decrement:()=>dispatch({type:'DECREMENT'}),
})



export default connect(mapStateToProps,mapDispatchToProps)(Home);