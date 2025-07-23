import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProductsList() {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            console.log(response.data)
            setProducts(response.data.products)
        })
    })

  return (
    <div>
        <h1>Products List</h1>
        <ol>
            {
                products.map((product: {id:number, title:string})=> <li key={product.id}>{product.title}</li>)
            }
        </ol>
    </div>
  )
}
