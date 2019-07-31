import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown" >
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        )) :
        <span className="empty-message">Your cart is empty</span>
      }
      <CustomButton onClick={ () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
          }
      }> GO TO CHECKOUT </CustomButton>
    </div>
  </div>
)

//destructuring
const mapStateToProps = createStructuredSelector ({
  cartItems:selectCartItems
});

//if we dont specify dispatch as argument, it will be still available for use in the head
export default withRouter(connect(mapStateToProps)(CartDropdown));
