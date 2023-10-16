import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar'

function Transfer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Define the allowed names and email addresses
    const allowedNames = ['User', 'Ninja'];
    const allowedEmails = ['user@gmail.com', 'ninja@gmail.com'];

    if (allowedNames.includes(name) && allowedEmails.includes(email)) {
      // Valid name and email, proceed with the transfer logic here
      alert('Transfer successful');
    } else {
      // Invalid name or email, show an error message
      alert('Invalid name or email. Please enter valid credentials.');
    }
  };
  
  return (
<div>
  <Navbar/>
    <section class=" bg-green-300 flex flex-col md:flex-row h-screen items-center">
    
      <div class="bg-green-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://raw.githubusercontent.com/anngithub1234/images/main/imgmad/transfer.webp" alt="" class="w-full h-full object-cover"/>
      </div>
    
      <div class="bg-green-300 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center">
    
        <div class="w-full h-100">
    
    
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Transfer Money to a BayMax Friend</h1>
    
          <form class="mt-6" action="#" method="POST">
          <div>
              <label class="block text-gray-700">Name</label>
              <input type="name" name="" id="" placeholder="Enter Name"  onChange={(e) => setName(e.target.value)} class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"autoFocus
              autoComplete="off"
              required/>
            </div>
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input type="email" name="" id="" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
              autoComplete="off"
              requiredd/>
            </div>

            <div>
              <label class="block text-gray-700">Transfer Amount</label>
              <input type="number" name="" id="" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
              autoComplete="off"
              required/>
            </div>
    
    
            <button type="submit" onClick={ handleFormSubmit} class="w-full block bg-green-600 hover:bg-green-700 focus:bg-green-600 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">Transfer</button>
          </form>
    
          <hr class="my-6 border-black w-full"/>
    
        </div>
      </div>
    
    </section>
    </div>

  )
}

export default Transfer