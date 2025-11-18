import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
export default function ButtonApp() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {
    alert('clicked');
  }}>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>
    </div>
  )
}
