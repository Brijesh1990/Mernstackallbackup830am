import React,{useState,useRef,useEffect} from 'react'
import { useParams,Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { FaCartPlus,FaShopify } from 'react-icons/fa';

export default function ProductDetails() {
// destructuring of data via state 
const[data,setData]=useState("");
const  categoryname=useRef("");
const  imgurl=useRef("");
const  photo=useRef("");
const  productname=useRef("");
const  oldprice=useRef("");
const  newprice=useRef("");
const  addedate=useRef("");
const  qty=useRef("");
const  descriptions=useRef("");
const navigate=useNavigate();
const {id}=useParams();
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/products/${id}`).then((response)=>{
setData(response.data);
// fetch all data 
categoryname.current.value=response.data.categoryname;
imgurl.current.src=response.data.photo;
photo.current.value=response.data.photo;
productname.current.value=response.data.productname;
oldprice.current.value=response.data.oldprice;
newprice.current.value=response.data.newprice;
addedate.current.value=response.data.addedate;
qty.current.value=response.data.qty;
descriptions.current.value=response.data.descriptions;
})
},[])

// add products in cart
const addProductCarts=async(e)=>{
e.preventDefault();
// stored current data in api via object
var insert={
categoryname:categoryname.current.value,
imgurl:imgurl.current.value,
photo:photo.current.value,
productname:productname.current.value,
oldprice:oldprice.current.value,
newprice:newprice.current.value,
addedate:addedate.current.value,
qty:qty.current.value,
descriptions:descriptions.current.value,

}
// call api vai axios.post
try 
{

Swal.fire({
title: "Do you want to add in Cart ?",
showDenyButton: true,
confirmButtonText: "Yes",
denyButtonText: `No`
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
axios.post(`http://localhost:8000/cart`,insert).then(()=>{
Swal.fire("Cart added successfully", "", "success");
navigate('/view-cart');   
e.target.reset();
}); 

} else if (result.isDenied) {
Swal.fire("check something went wrong", "", "info");
}
});

}
catch(error)
{
console.log('error generating',error)
}

}
return (
<>
<Navbar />
<div className='w-full  p-5 flex flex-wrap mt-15'>
<div className='w-1/2 p-3'>
<p className='text-center'><img src={photo} ref={imgurl} alt='photo' className='w-100 h-100 mx-auto' /></p>

{/* hidden */}
<input type="hidden" ref={photo} readOnly className='border:0' />

</div>
<div className='w-1/2 p-1'>
<label className='text-xl'>CategoryName :</label>
<input type="text" readOnly ref={categoryname} className='border:0 ms-10' />
<br />
<br />
<label className='text-xl'>ProductName :</label>
<input type="text" readOnly ref={productname} className='border:0 ms-10' />

<br />
<br />

<label className='text-xl'>Old Price :Rs.</label>
<del><input type="text" readOnly ref={oldprice} className='border:0 ms-10' /></del>
<br />
<br />

<label className='text-xl'>Offer Price :</label>
Rs.<input type="text" readOnly ref={newprice} className='border:0 ms-10' />
<br />
<br />
<label className='text-xl'>Added Date</label>
<input type="text" readOnly ref={addedate} className='border:0 ms-10' />

<br />
<br />
<label className='text-xl'>Qty :</label>
<input type="text" readOnly ref={qty} className='border:0 ms-10' />
<br/>
<br/>
<label className='text-xl'>Product Descriptions</label>
<br />
<br />
<input type="text" readOnly ref={descriptions} className='border:0 ms-10' />
<br />
<br />
<p className='text-left'><Link to="/"><button type='button' className='bg-green-600 text-white rounded-4xl p-3'>Continue shopping <FaShopify className='inline-flex ms-2' /></button></Link>

<button type='button' onClick={addProductCarts} className='bg-blue-600 text-white rounded-4xl p-3 ms-3 '>AddToCart <FaCartPlus className='inline-flex ms-2' /></button>
</p>

</div>
</div>
<Footer />
</>
)
}
