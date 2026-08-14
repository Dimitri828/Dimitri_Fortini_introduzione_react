import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import List from './components/List'

const NAMES=["Fabrizio","Nicola","Matteo","Valerio"]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <List  names={NAMES} />
    </>
  )
}

export default App
