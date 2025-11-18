import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'
export default function Content(props) {
  return (
    <div>
     <Container className='p-5 mt-5 mx-auto'>
        <h1>Get big deals here</h1>
        <h3>Get offers on every products discount is {props.discount}</h3>

        <Row>

           
             {/* <h3 className='fs-3 mt-5'>
             {props.categories ? `${props.categories}`:'no categories is found'}</h3> */}

             {props.categories && props.categories.length > 0
                ? props.categories.map((cat, idx) => (
                    <div className='col-md-3 bg-dark text-white p-3 m-3 fs-4' key={idx}>{cat}</div>
                  ))
                : <b className='fs-4 mt-5'>no categories is found</b>}
            
        
        </Row>

     </Container>

      
    </div>
  )
}
