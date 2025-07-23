import './App.css'
import ProductList from './components/ProductList'

function App() {

  const products = [
    {id: 1, title: "Product 1", price: 1234},
    {id: 2, title: "Product 2", price: 3455},
    {id: 3, title: "Product 3", price: 6788}
  ]

  return (
    <>
      <h1>Products App</h1>
      <ProductList products = {products}/>
    </>
  )
}

export default App
