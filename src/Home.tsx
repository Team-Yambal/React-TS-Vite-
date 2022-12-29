import { Link } from "react-router-dom"

export const Home =  () => {
  return (
    <div>
      Home
      <Link to="/about">about</Link>
      <Link to="/counter">Counter (Redux & RTK)</Link>
    </div>
  )
}