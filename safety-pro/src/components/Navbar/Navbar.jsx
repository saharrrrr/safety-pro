
import logo from "../../assets/colored-logo.png"
import "./Navbar.css"

 const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src={logo}/>
        </div>
        <ul className="nav-list">
        <li><a href="/">About us</a></li>
        <li><a href="/about">Services</a></li>
        <li><a href="/about">Projects</a></li>
        <li><a href="/about">Safety equipments</a></li>
        <li><a href="/about">Partners</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </div>
  )
}

export default Navbar