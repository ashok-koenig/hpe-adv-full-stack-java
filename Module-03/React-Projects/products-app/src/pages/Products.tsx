import axios from "axios"
import { useEffect, useState } from "react"

interface Product{
    id: number
    title: string
    category: string
    price: number
}

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('auth-token')
        axios.get("http://localhost:8080/api/products", {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then((response)=>{
            console.log(response.data)
            setProducts(response.data)
        })
    },[])
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
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product: Product)=> <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}
