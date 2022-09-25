import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {ImFilesEmpty} from 'react-icons/im'
import ForwardIcon from '@mui/icons-material/Forward'
import {SiGooglescholar} from 'react-icons/si'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import {GoThreeBars} from 'react-icons/go'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import DateRangeIcon from '@mui/icons-material/DateRange'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DescriptionIcon from '@mui/icons-material/Description'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {navBarSection: false}

  leftSideBar = () => {
    this.setState(prevState => ({
      navBarSection: !prevState.navBarSection,
    }))
  }

  render() {
    const {navBarSection} = this.state
    return (
      <div className="nav-container">
        <nav className="navbar-container">
          <div className="nav-start">
            <button className="nav-button" type="button">
              <GoThreeBars size={25} onClick={this.leftSideBar} />
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
            <AccountCircleIcon className="profile-icon" /> Log In/Sign Up
          </button>
          <button className="buy-button" type="button">
            <ShoppingCartIcon />
          </button>
        </nav>
        <nav className={navBarSection ? 'nav-bar active' : 'nav-bar'}>
          <ul className="nav-bar-items" onClick={this.leftSideBar}>
            <li className="navbar-logo">
              <h1 className="nav-heading">Indigolearn</h1>
              <ArrowBackIcon className="close-icon" />
            </li>
            <AccountCircleOutlinedIcon
              fontSize="large"
              className="profile-nav-icon"
            />
            <p className="login-nav">Login/Signup</p>
            <hr className="line-break" />
            <li className="nav-description">
              <ImFilesEmpty className="nav-icons" />
              <span>Buy Courses</span>
              <ChevronRightIcon />
            </li>
            <li className="nav-description">
              <ForwardIcon className="nav-icons" />
              <span>Programs</span>
              <ChevronRightIcon />
            </li>
            <li className="nav-description">
              <SiGooglescholar className="nav-icons" />
              <span>Scholarship</span>
            </li>
            <li className="nav-description">
              <SubscriptionsIcon className="nav-icons" />
              <span>Free Courses</span>
            </li>
            <li className="nav-description">
              <FolderSpecialIcon className="nav-icons" />
              <span>Free Resources</span>
            </li>
            <li className="nav-description">
              <DateRangeIcon className="nav-icons" />
              <span>Study Planner</span>
            </li>
            <li className="nav-description">
              <AssignmentIcon className="nav-icons" />
              <span>MCQs</span>
            </li>
            <li className="nav-description">
              <ForumOutlinedIcon className="nav-icons" />
              <span>Formus</span>
            </li>
            <li className="nav-description">
              <BusinessOutlinedIcon className="nav-icons" />
              <span>Firm Reviews</span>
            </li>
            <li className="nav-description">
              <PlayCircleOutlineOutlinedIcon className="nav-icons" />
              <span>Free Videos</span>
            </li>
            <li className="nav-description">
              <NewspaperOutlinedIcon className="nav-icons" />
              <span>News Updates</span>
            </li>
            <li className="nav-description">
              <ModeEditIcon className="nav-icons" />
              <span>Course Guides</span>
            </li>
            <li className="nav-description">
              <LiveHelpOutlinedIcon className="nav-icons" />
              <span>FAQ</span>
            </li>
            <li className="nav-description">
              <DescriptionIcon className="nav-icons" />
              <span>Blogs</span>
            </li>
            <li className="nav-description">
              <LiveTvIcon className="nav-icons" />
              <span>Youtube Live</span>
            </li>
            <li className="nav-description">
              <StayPrimaryPortraitIcon className="nav-icons" />
              <span>APP 1FIN</span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Header
