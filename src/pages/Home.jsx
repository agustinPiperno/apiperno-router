import { Link } from '../Link.jsx'

export default function HomePage () {
  return ( 
    <>
      <h1>Home</h1>
      <p>Welcome to my page!</p>
      <Link to='/about' >About Us</Link>
    </>
  )
}
