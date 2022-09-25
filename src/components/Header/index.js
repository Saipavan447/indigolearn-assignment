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
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {showRoutingSection: false}

  showBottomBar = () => {
    this.setState(prevState => ({
      showRoutingSection: !prevState.showRoutingSection,
    }))
  }

  render() {
    const {showRoutingSection} = this.state
    return (
      <div className="nav-container">
        <nav className="navbar-container">
          <div className="nav-start">
            <button className="nav-button" type="button">
              <GoThreeBars size={25} onClick={this.showBottomBar} />
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
        <nav className={showRoutingSection ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={this.showBottomBar}>
            <li className="navbar-toggle">
              <h1>Indigolearn</h1>
              <ArrowBackIcon className="menu-bars" />
            </li>
            <AccountCircleIcon size={30} className="icon3" />
            <p>Login/Signup</p>

            <li className="slider-li">
              <ImFilesEmpty className="slider-icons" />
              <span>Buy Courses</span>
              <ChevronRightIcon />
            </li>
            <li className="slider-li">
              <ForwardIcon className="slider-icons" />
              <span>Programs</span>

              <ChevronRightIcon />
            </li>
            <li className="slider-li">
              <SiGooglescholar className="slider-icons" />
              <span>Scholarship</span>
            </li>
            <li className="slider-li">
              <SubscriptionsIcon className="slider-icons" />
              <span>Free Courses</span>
            </li>
            <li className="slider-li">
              <FolderSpecialIcon className="slider-icons" />
              <span>Free Resources</span>
            </li>
            <li className="slider-li">
              <DateRangeIcon className="slider-icons" />
              <span>Study Planner</span>
            </li>
            <li className="slider-li">
              <AssignmentIcon className="slider-icons" />
              <span>MCQs</span>
            </li>
            <li className="slider-li">
              <ForumOutlinedIcon className="slider-icons" />
              <span>Formus</span>
            </li>
            <li className="slider-li">
              <BusinessOutlinedIcon className="slider-icons" />
              <span>Firm Reviews</span>
            </li>
            <li className="slider-li">
              <PlayCircleOutlineOutlinedIcon className="slider-icons" />
              <span>Free Videos</span>
            </li>
            <li className="slider-li">
              <NewspaperOutlinedIcon className="slider-icons" />
              <span>News Updates</span>
            </li>
            <li className="slider-li">
              <ModeEditIcon className="slider-icons" />
              <span>Course Guides</span>
            </li>
            <li className="slider-li">
              <LiveHelpOutlinedIcon className="slider-icons" />
              <span>FAQ</span>
            </li>
            <li className="slider-li">
              <DescriptionIcon className="slider-icons" />
              <span>Blogs</span>
            </li>
            <li className="slider-li">
              <LiveTvIcon className="slider-icons" />
              <span>Youtube Live</span>
            </li>
            <li className="slider-li">
              <StayPrimaryPortraitIcon className="slider-icons" />
              <span>APP 1FIN</span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Header
