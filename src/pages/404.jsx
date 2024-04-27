import  thisIsFineGif  from '../assets/this-is-fine.gif'
import { Link } from '../Link.jsx'

export default function Page404 () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', 
    alignItems: 'center' }}>
      <h1>404 Not Found :_ )</h1>
      <img src={ thisIsFineGif } alt='This is fine Dog Gif' />
      <Link to='/'>Return to Home</Link>
    </div>   
  )
}