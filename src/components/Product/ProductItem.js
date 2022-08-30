import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../Store/Cart-slice';
import'./ProductItem.css'

function ProductItem(props) {
    const dispatch=useDispatch()
    const { title, price, description ,id} = props;
    const addToCartHandler=()=>{
    dispatch(cartAction.addItemToCart(
        {
            id,
            title,
            price,
        }
    ))
    }
  return (
    <div>
     <li className='item'>
      
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='actions'>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      
    </li>
      
    </div>
  )
}

export default ProductItem
