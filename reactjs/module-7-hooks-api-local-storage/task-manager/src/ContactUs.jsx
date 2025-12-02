import React,{useState,useRef} from 'react'
import axios from 'axios'
//import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import FlashMessage from 'react-flash-message';
export default function ContactUs() {
const [showMessage, setShowMessage] = useState(false);
const [messageContent, setMessageContent] = useState("");
const [messageType, setMessageType] = useState("");
// add data via api 
//send email via email.js
const serviceID="";
const templateID="";
const publicKey="";

const name=useRef("");
const email=useRef("");
const phone=useRef("");
const message=useRef("");
const navigate=useNavigate();
// create function to add data 
const addContactData=async(e)=>{
e.preventDefault();
var insertcontact={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
message:message.current.value

}
// add data via axios or post data via axios in api
// send email via email js using email.send();
emailjs.sendForm(serviceID,templateID,e.target,publicKey);
axios.post(`http://localhost:3000/contactus`,insertcontact).then(()=>{
// pass add data messages
//alert('Data successfully addedd')
// set react-flash messages
setTimeout(() => {
setMessageContent('Thanks for contact with us!');
setMessageType('success');
setShowMessage(true);
// Automatically hide the message after a few seconds
setTimeout(() => setShowMessage(false), 4000);
}, 500);

e.target.reset();

})

}
return (
<>
<Navbar />
<section className='w-200 mt-15 mx-auto p-5 shadow'>
<h1 className='text-2xl'>Contact Form </h1>
{showMessage && (
<div className="bg-red-500 text-xl text-white p-2 w-1/2 {`flash-message ${messageType}`}">
{messageContent}
</div>
)}
<form onSubmit={addContactData}>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
<input
type="text" ref={name} name="name"
id="name"
className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
placeholder="Your Name"
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
<input
type="email" ref={email} name="email"
id="email"
className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
placeholder="Your Email"
/>
</div>

<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="email">Phone</label>
<input
type="text" ref={phone} name="phone"
id="email"
className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
placeholder="Your Phone"
/>
</div>
<div className="mb-4">
<label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
<textarea ref={message} name="message"
id="message"
className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
rows="4"
placeholder="Your Message"
></textarea>
</div>
<button
type="submit"
className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
Send Message
</button>
<div className="mt-8">
<h2 className="text-xl font-semibold mb-2">Our Address</h2>
<p className="mb-4">123 Main Street, City, Country, 12345</p>
<div className="w-full h-64 rounded overflow-hidden shadow">
<iframe
title="Google Map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019017859151!2d-122.41941508468144!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4c6f0c6e8e6e6e6e!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
</div>

</form>

</section>
</>
)
}
