import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PaymentComponent from '../../components/paycomponent/PaymentComponent';
import paymentData from './paymentData.json';
import accountData from './accountData.json';

function Payment() {
  const [paymentResult, setPaymentResult] = useState(null);
  const [shopName, setShopName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  // Use the account balance from the JSON file
  const [accountBalance, setAccountBalance] = useState(accountData.accountBalance);

  const handlePaymentRequest = async () => {
    if (
      paymentData.validShopNames.includes(shopName) &&
      paymentData.validInvoiceNumbers.includes(invoiceNumber) &&
      parseFloat(amount) > 0
    ) {
      if (accountBalance >= parseFloat(amount)) {
        const updatedAccountBalance = accountBalance - parseFloat(amount);
        setAccountBalance(updatedAccountBalance);
        setPaymentResult('Payment successful!');

        // Update the JSON file with the new balance
        updateAccountData(updatedAccountBalance);
      } else {
        setPaymentResult('Insufficient account balance.');
      }
    } else {
      setPaymentResult('Payment failed. Please check your inputs.');
    }
  };

  // Function to update the JSON file with the new account balance
  const updateAccountData = (newAccountBalance) => {
    const updatedAccountData = { ...accountData, accountBalance: newAccountBalance };
    localStorage.setItem('accountData', JSON.stringify(updatedAccountData));
  };

  useEffect(() => {
    // Account balance state should already be updated when the payment is successful
    // Update the JSON file when the component mounts and in case of any changes
    updateAccountData(accountBalance);
  }, [accountBalance]);

  return (
    <div>
      <div className="z-40">
        <Navbar />
      </div>
      <div className="min-h-screen bg-green-400 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-green-300 -bottom-15 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-green-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Online Payments</h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Everyday Payments Simplified!
            </p>
          </div>
          <div className="space-y-4">
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
            />
          </div>
          <div className="text-center mt-6">
            <div>
              <PaymentComponent />
            </div>
            <button className="py-3 w-64 text-xl text-white bg-green-400 rounded-2xl" onClick={handlePaymentRequest}>
              Pay Here
            </button>
          </div>
          <div className="text-center mt-4 text-green-500">
            <div className="text-center mt-4 text-green-500">
              {paymentResult}
            </div>
            <p>Account Balance: ${accountBalance.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
