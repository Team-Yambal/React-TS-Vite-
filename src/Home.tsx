import { Link } from "react-router-dom"

export const Home =  () => {
  return (
    <div>
      Home
      <Link to="/about">about</Link>
    </div>
  )
}