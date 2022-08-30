import React from 'react'
import CartButton from '../Cart/CartButton'
import './Header.css'

function Header() {
  return (
    <div>
       <header className='header'>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton/>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
