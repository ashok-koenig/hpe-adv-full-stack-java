import React from 'react'

export interface ProductProps {
    id: number;
    title: string;
    price: number
}

export default function Product(props: ProductProps ) {
    const {id, title, price} = props
  return (
    <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
    </div>
  )
}
