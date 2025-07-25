import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../redux/store"
import { buyNow } from "../redux/CartSlice"

export interface Product{
    id: number
    title: string
    category: string
    price: number
}

export default function Products() {
    const [products, setProducts] = useState([])

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    useEffect(()=>{
        const token = localStorage.getItem('auth-token')
        axios.get(API_BASE_URL +"/products", {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
    },[])

    const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
        <h1>List of Products</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Buy Now</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product: Product)=> <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>
                            <button className="btn btn-success" onClick={()=> dispatch(buyNow(product))}>Buy Now</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}
