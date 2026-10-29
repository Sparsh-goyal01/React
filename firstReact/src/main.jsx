import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = (
  <a href="https://portfolio.sparshgoyal.xyz" target='_blank'>visit webpage</a>
)
//ejecting variable
const anotherUser = "Chai or code";

const ReactElement = React.createElement(
  'a', {href: "https://google.com", target: '_blank'}, 'Click me to google', anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // ReactElement
)

