import './about.scss'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <h2>We are in about page</h2>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default About