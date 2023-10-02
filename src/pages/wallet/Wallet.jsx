import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';


function Wallet() {
  const [balance, setBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  

  function deposit() {
    if (depositAmount <= 0) {
      setErrorMsg("Deposit amount must be greater than 0");
      return;
    }

    setBalance((prevBalance) => prevBalance + depositAmount);

    // Add the deposit transaction to the transaction history.
    setTransactionHistory((prevTransactionHistory) => [
      ...prevTransactionHistory,
      {
        type: 'deposit',
        amount: depositAmount,
        date: new Date(),
      },
    ]);

    // Clear the input field after a successful deposit.
    setDepositAmount(0);
  }

  function withdraw() {
    if (withdrawAmount <= 0 || withdrawAmount > balance) {
      setErrorMsg("Invalid withdrawal amount");
      return;
    }

    setBalance((prevBalance) => prevBalance - withdrawAmount);

    // Add the withdraw transaction to the transaction history.
    setTransactionHistory((prevTransactionHistory) => [
      ...prevTransactionHistory,
      {
        type: 'withdraw',
        amount: withdrawAmount,
        date: new Date(),
      },
    ]);

    // Clear the input field after a successful withdrawal.
    setWithdrawAmount(0);
  }

  // Sort the transaction history in reverse chronological order.
  transactionHistory.sort((a, b) => b.date - a.date);

  return (
   
    <div>
    <Navbar/>

<h1 class="max-w-screen-xl  flex-wrap justify-between mx-auto p-4 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-600">E-WALLET </span>Name</h1>
<p class="max-w-screen-xl justify-between mx-auto text-lg font-normal text-gray-800 lg:text-xl dark:text-gray-400">Manage your e-Wallet with comfort, check balance, withraw, and get the transaction history</p>

<div class="max-w-screen-xl  flex-wrap justify-between mx-auto p-4 mb-4" >
      <h2 className="mt-4 text-xl font-semibold">Balance: ${balance}</h2>
      <input class="mb-4 w-50 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Depositing Amount" 
        value={depositAmount}
        onChange={(e) => setDepositAmount(parseInt(e.target.value))}
      />
      <button onClick={deposit} class="text-white bg-green-600 hover:bg-green-700 mr-10 ml-3 mt-2 p-3 rounded-lg" >Deposit</button>
      <input class="w-50 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Witdrawing Amout" 
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(parseInt(e.target.value))}
      />
      <button onClick={withdraw}class="text-white bg-green-600 hover:bg-green-700  ml-3 mt-2 p-3 rounded-lg" >Withdraw</button>

      {errorMsg && <p className="error">{errorMsg}</p>}

      <h2 className="mt-4 text-xl font-semibold">Transaction History</h2>
      <ul className="bg-gray-100 p-4 rounded-lg">
        {transactionHistory.map((transaction) => (
          <li
            key={transaction.date}
            className="flex justify-between items-center py-2 border-b border-gray-300"
          >
            <div>
              {transaction.type} {transaction.amount} on{' '}
              {transaction.date.toLocaleDateString()}
            </div>
            <div>

            </div>
          </li>
        ))}
      </ul>
    
      </div>
    </div>
  );
}

export default Wallet