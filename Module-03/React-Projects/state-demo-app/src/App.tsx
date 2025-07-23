import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FriendsList from './components/FriendsList'
import Movie from './components/Movie'

function App() { 

  // console.log(useState("Click the above button"))

  // let message = "Click the above button"

  const [message, setMessage] = useState("Click the above button")
  
  const clickHandler = () =>{    
    setMessage("Button clicked")
    // message = "Button clicked"
    // alert("Click works: "+ message)
  }
  return (
    <>
     <h1>Working with State in React</h1>
     <button onClick={clickHandler}>Click me</button>
     <p>{message}</p>
     <hr />
     <FriendsList />
     <hr/>
     <Movie />
    </>
  )
}

export default App
