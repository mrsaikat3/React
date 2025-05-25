import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";

function myApp () {
    return (
        <h1>Hello There</h1>
    )
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://www.google.com",
//     target: "_blank",
//   },
//   children: "ClickMe",
// };

const aditional = " here"

const reactElement = React.createElement(
  "a",
  {
    href: "http://www.google.com",
    target: "_blank"
  },
  "clickMe",
  aditional
)

const anotherElement = (
  <a href='http://www.google.com' target='_blank'>Click to go google{aditional}</a>
) 

createRoot(document.getElementById('root')).render(
 
    App()
    // myApp()

    // ReactElement
    // anotherElement
    // reactElement
)
