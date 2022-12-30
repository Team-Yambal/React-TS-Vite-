import { x } from '@xstyled/styled-components'
import { NavLink, Outlet } from 'react-router-dom'

export const SampleHome = () => {
  return (
    <x.div>
      <x.h1>Samples</x.h1>
        <x.ul>
          <x.li>
            <NavLink to="/counter" className={({ isActive }) => (isActive ? 'active' : undefined)}>Counter</NavLink>
          </x.li>
          <x.li>
            <NavLink to="/weather" className={({ isActive }) => (isActive ? 'active' : undefined)}>Weather</NavLink>
          </x.li>
        </x.ul>
      <Outlet />
    </x.div>
  )
}