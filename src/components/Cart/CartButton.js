import React from 'react'
import './CartButton.css'

function CartButton() {
  return (
    <div>
       <button className='button'>
      <span>My Cart</span>
      <span className='badge'>1</span>
    </button>
    </div>
  )
}

export default CartButton
