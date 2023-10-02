import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PaymentComponent from '../../components/paycomponent/PaymentComponent';



function Payment() {
  const [paymentResult, setPaymentResult] = useState(null);
  const [shopName, setShopName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePaymentRequest = async () => {
    // Define valid shop names and invoice numbers
    const validShopNames = ['Miniso', 'Nolimit', 'Aldo', 'KFC'];
    const validInvoiceNumbers = ['I001', 'I002', 'I003'];

    // Check if the entered values are valid
    if (
      validShopNames.includes(shopName) &&
      validInvoiceNumbers.includes(invoiceNumber)
     
    ) {
      setPaymentResult('Payment successful!');
    } else {
      setPaymentResult('Payment failed. Please check your inputs.');
    }
  };


      
       



  return (
    <div>
     <div className='z-40'>
    <Navbar/>
    </div>
    <div class="min-h-screen bg-green-400 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-green-300 -bottom-15 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-green-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Online Payements</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Everyday Payemts Simplified!</p>
		</div>
		<div class="space-y-4">
			  <input
          type="text"
          placeholder="Name of the shop"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
			<input
          type="text"
          placeholder="Invoice number"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
		

			<input
          type="number"
          placeholder="Amount"
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /></div>
        <div><PaymentComponent/></div>
			<div class="text-center mt-6">
			<button
          className="py-3 w-64 text-xl text-white bg-green-400 rounded-2xl"
          onClick={handlePaymentRequest}>Pay Here</button>
				
			</div>
			{paymentResult && (
        <div className="text-center mt-4 text-green-500">{paymentResult}</div>
      )}
		</div>
		
		
	</div>
  </div>
    
  )
}

export default Payment