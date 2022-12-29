import { Link, Outlet } from "react-router-dom"

export const About =  () => {
  return (
    <div>
      About
      <Link to="/about/1">about 1</Link>
      <Outlet />
    </div>
  )
}