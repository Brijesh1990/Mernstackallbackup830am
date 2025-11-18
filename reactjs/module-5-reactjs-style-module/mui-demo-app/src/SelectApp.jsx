import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2';
export default function SelectApp() {
// This component renders a simple select dropdown using MUI
const [age, setAge] = React.useState('');
// form handeling function 
const addFormData=(e)=>{
e.preventDefault();
//const handleChange = (event) => {
// setAge(e.target.value);
//console.log(e.target.value); // Log the selected value
// pass a successfully messages 
//console.log(e.target.value)
//setAge(e.target.value);


// pass messages

//alert('age ' + age + ' is selected');

console.log(age + ' is selected');
// alert(e.target.value + ' is selected');
//alert(age)

// Swal.fire({
//   title: "wow your form submitted successfully?",
//   text: "That thing is still around?",
//   icon: "success"
// });


}
return (
<div>
<Box sx={{ minWidth: 120 }}>
<form onSubmit={addFormData}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Select Age</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={age} onChange={(e) => setAge(e.target.value)}
label="Age" 
>
<MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem>
</Select>

<Button variant="contained" type="submit">Contained</Button>
</FormControl>
</form>
</Box>
</div>
)
}
