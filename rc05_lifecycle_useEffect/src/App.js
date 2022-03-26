import React from 'react'
import ClassComponent from './components/ClassComponent'
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className="App">
      {/* <h2>LifeCycles</h2> */}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Comp</button>
      {isVisible && <ClassComponent />}
    </div>
  )
}

export default App
