import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_J9cwMwWr5aQ3EvhSRADm5w8j002jsB6nuG';

  const onToken = token => {
    console.log(token);
    alert("Paymeent Successful");
  }



  return (
    <StripCheckout
    label='Pay Now'
    name='Crown Clothing LTD'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}/>
  );
};

export default StripCheckoutButton;
