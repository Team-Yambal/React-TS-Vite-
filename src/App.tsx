import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { About1 } from './About1'
import { Counter } from './app/features/counter/Counter'
import WeatherContainer from './app/features/weather/WeatherContainer'

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
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<WeatherContainer />} />
      </Routes>
    </div>
  )
}

export default App
