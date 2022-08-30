import React from 'react'
import './CartButton.css'
import {useDispatch, useSelector} from 'react-redux'
import { UiActions } from '../Store/UI-slice'

function CartButton() {
    const dispatch=useDispatch()
    const cartNumber=useSelector(state=>state.cart.totalQuantity)
    const toggleClickHandler=()=>
    {
      dispatch(UiActions.toggle())
    }
  return (
    <div>
       <button className='button'onClick={toggleClickHandler}>
      <span>My Cart</span>
      <span className='badge'>{cartNumber}</span>
    </button>
    </div>
  )
}

export default CartButton
