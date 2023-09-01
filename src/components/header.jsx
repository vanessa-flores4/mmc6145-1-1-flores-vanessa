import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import styles from '../styles/header.css'


export default function Header() {
  return (
  <header className='header'>
    <div className= 'logo'>
    <Link to={"/"}>
        <img src={logo} style={{height: '115px'}} alt="vanessa flores" />
    </Link>
    </div>
    <div className='links' >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
    </header>
  )
}
