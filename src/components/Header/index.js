import {GoThreeBars} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="navbar-container">
          <div className="nav-start">
            <button className="nav-button" type="button">
              <GoThreeBars size={25} />
            </button>
            <h1 className="nav-heading">IndigoLearn</h1>
          </div>
          <ul className="nav-items">
            <ol className="nav-item">BUY COURSES</ol>
            <ol className="nav-item">PROGRAMS</ol>
            <ol className="nav-item">SCHOLARSHIPS</ol>
            <ol className="nav-item">FREE RESOURCES</ol>
          </ul>
          <button className="login-button" type="button">
            <CgProfile className="profile-icon" /> Log In/Sign Up
          </button>
          <button className="buy-button" type="button">
            <ShoppingCartIcon />
          </button>
        </nav>
      </div>
    )
  }
}
export default Header
