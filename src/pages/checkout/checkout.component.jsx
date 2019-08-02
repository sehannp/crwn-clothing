import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, Total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>

      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>

      )
    }
    <div className='total'>
      <span>TOTAL: ${Total} </span>
    </div>
    <StripCheckoutButton price={Total}/>
  </div>
)
const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartTotal
})

export default connect(mapStatetoProps)(CheckoutPage);
