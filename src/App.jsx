import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Create a landing page to show site under maintence */}
      <div>
      <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" size="2xl" style={{color: "#74C0FC",}} />
      <p style={{fontSize:"2rem"}}>App en maintenance! Veuillez réessayer plus tard</p>
      </div>
    </>
  )
}

export default App
