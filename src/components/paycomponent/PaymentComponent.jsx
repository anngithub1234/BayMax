import React from 'react';

const PaymentComponent = () => {
  const googlePayMethod = {
    supportedMethods: 'https://google.com/pay',
    data: {
      merchantId: 'your-merchant-id', // Replace with your actual merchant ID
      allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
    },
  };

  const paymentDetails = {
    id: 'order-123',
    displayItems: [
      {
        label: 'PWA Demo Payment',
        amount: { currency: 'USD', value: '0.01' },
      },
    ],
    total: {
      label: 'Total',
      amount: { currency: 'USD', value: '0.01' },
    },
  };

  const handleGooglePayClick = async () => {
    try {
      const request = new PaymentRequest([googlePayMethod], paymentDetails);
      const response = await request.show();

      console.log(response);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <button id="google-pay-button" onClick={handleGooglePayClick}>
        Google Pay
      </button>
    </div>
  );
};

export default PaymentComponent;
