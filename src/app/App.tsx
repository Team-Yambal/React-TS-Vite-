import { x } from '@xstyled/styled-components'
import { Routes, Route } from 'react-router-dom'
import { Counter } from './features/samples/counter/Counter'
import WeatherContainer from './features/samples/weather/WeatherContainer'
import { SampleHome } from './features/samples/home/SampleHome'

function App() {
  return (
    <x.div>
      <Routes>
        <Route path="/" element={<SampleHome />}>
          <Route path="/counter" element={<Counter />} />
          <Route path="/weather" element={<WeatherContainer />} />
        </Route>
      </Routes>
    </x.div>
  )
}

export default App
