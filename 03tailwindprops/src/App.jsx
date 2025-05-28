import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  return (
   <>
    <h2 className="bg-green-400 py-2.5 px-4 rounded-xl text-2xl m-2">Tailwind</h2>
    <Card usrname = "chaiorcode" btnText="click me" />
    <Card usrname = "hitesh" btnText="read more" />
   </>
  )
}

export default App

