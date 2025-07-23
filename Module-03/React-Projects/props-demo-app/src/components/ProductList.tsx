import React from 'react'
import Product, { type ProductProps } from './Product'

interface ProductListProps {
    products: ProductProps[]
}

export default function ProductList(props: ProductListProps) {
    const {products} = props
  return (
    <div>
        <h2>List of Products</h2>
        {
            products.map((product )=> <Product 
                                        key={product.id} 
                                        id={product.id}  
                                        title={product.title} 
                                        price={product.price} />)
        }
        {/* <Product id={1} title="Product 1" price={1234}/>
        <Product id={2} title="Product 2" price={4567}/> */}
    </div>
  )
}
