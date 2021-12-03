import React from 'react';
import './App.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
</style>

function App() {
  return (
    <section className='hero-container'>
      <div className='header'>
        <h1><KeyboardBackspaceIcon className='icons' color='white' />ORDER INFORMATION</h1>
      </div>
      <div className='delievery'>
        <h3>Delievery Address</h3>
        <p>Please Choose Destination Address</p>
      </div>
    </section>
  )
}

export default App
