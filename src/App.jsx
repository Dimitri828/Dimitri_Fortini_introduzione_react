import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>REACT</h1>
      <form action="" className='formName'>
        <label htmlFor="userName" className='nameLabel'>Name</label>
        <input type="text" id='userName' className='nameInput' />
      </form>

    </>
  )
}

export default App
