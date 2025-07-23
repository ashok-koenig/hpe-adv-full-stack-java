import React from 'react'

export interface ProductProps {
    id: number;
    title: string;
    price: number
}

export default function Product(props: ProductProps ) {
  return (
    <div>
        <p>ID: {props.id}</p>
        <p>Title: {props.title}</p>
        <p>Price: {props.price}</p>
    </div>
  )
}
