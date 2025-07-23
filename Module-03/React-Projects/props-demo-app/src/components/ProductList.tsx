import React from 'react'
import Product from './Product'

export default function ProductList() {
  return (
    <div>
        <h2>List of Products</h2>
        <Product id={1} title="Product 1" price={1234}/>
        <Product id={2} title="Product 2" price={4567}/>
    </div>
  )
}
