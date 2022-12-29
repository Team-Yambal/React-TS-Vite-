import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { About1 } from './About1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Hello React Router v6
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="1" element={<About1 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
