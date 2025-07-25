
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"

export default function Checkout() {

    const {cartProduct} = useSelector<RootState, any>((state)=> state.cart)

  return (
    <div>
        <h1>Checkout</h1>
        {
            cartProduct?<div>
                <h2>Cart Details</h2>
                <p>Product Id: {cartProduct.id}</p>
                <p>Product Title: {cartProduct.title}</p>
                <p>Product Category: {cartProduct.category}</p>
                <p>Product price: {cartProduct.price}</p>
            </div>:<p>Cart is Empty</p>
        }
    </div>
  )
}
