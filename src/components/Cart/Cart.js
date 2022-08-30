import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'


function Cart(props) {
    const cartItems=useSelector(state=>state.cart.items)
  return (
   <div>
       <ul>
       {cartItems.map((item)=>(
        <CartItem
        key={item.id}
          item={{
             id:item.id,
             title:item.name,
             quantity:item.quantity,
             total:item.totalPrice,
             price:item.price 
             }}
        />
        ))}
      </ul>
   </div>
  )
}

export default Cart
