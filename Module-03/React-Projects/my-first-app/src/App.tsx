import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const welcome = "Welcome to React JS"
  const welcome = <h1>Welcome to React JS</h1>
  let num1 = 100;
  let num2=200;
  const nameList = ["John", "Peter", "Smith"]
  
  return (
    <>
    <Header/>
    <hr/>
      {/* <h1>{welcome}</h1>        */}
      {welcome}
      <p>Sum of {num1} and {num2} is {num1 + num2}</p>
      <p>List of Names</p>
      <ol>
        {
          nameList.map((name)=> <li>{name}</li>)
        }
      </ol>
      <hr/>
      <Footer/>
    </>
  )
}

export default App
