import React from 'react'
import ProductItem from './ProductItem'
import './Products.css'

function Products(props) {
    const DummyProducts=[
        {
            id:'p1',
            price:100,
            title:'my first book',
            description:'good book'
        }
    ]
  return (
    <section className='products'>
    <h2>Buy your favorite products</h2>
    <ul>
    {DummyProducts.map((products)=>(
      <ProductItem
        key={products.id}
        id={products.id}
        title={products.title}
        price={products.price}
        description={products.description}
      />))}
    </ul>
  </section>
  )
}

export default Products
