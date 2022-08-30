import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../Store/Cart-slice';
import './CartItem.css'

function CartItem(props) {
    const { title, quantity, total, price,id } = props.item;
    const dispatch=useDispatch()
    const removeHandler=()=>
    {
        dispatch(cartAction.removeItemToCart(id))
    }
    const addHandler=()=>
    {
        dispatch(cartAction.addItemToCart(
            id,
            title,
            price,
        ))
    }

    return (
      <li className='item'>
      <header>
        <h3>{title}</h3>
        <div className='price'>
          ${total.toFixed(2)}{' '}
          <span className='itemprice'>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className='details'>
        <div className='quantity'>
          x <span>{quantity}</span>
        </div>
        <div className='actions'>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
