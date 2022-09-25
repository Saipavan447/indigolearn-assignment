import {Component} from 'react'
import {BsDot} from 'react-icons/bs'
import {MdOutlineMenuBook} from 'react-icons/md'
import AlarmOnIcon from '@mui/icons-material/AlarmOn'
import LaptopIcon from '@mui/icons-material/Laptop'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone'
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue'
import NextWeekIcon from '@mui/icons-material/NextWeek'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkIcon from '@mui/icons-material/Work'
import GppGoodIcon from '@mui/icons-material/GppGood'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'
import DoneIcon from '@mui/icons-material/Done'
import Header from '../Header'
import './index.css'

class Body extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="register-container">
          <div className="reg-container">
            <h1 className="bg-heading">Get Ready to be Global CA</h1>
            <p className="bg-paragraph">
              Acquire the ACCA qualification to join the league of Global
              Accounting & <br /> Finance Professionals
            </p>
            <div className="desktop-brochure-buttons">
              <button className="button brochure" type="button">
                Download Brochure
              </button>
              <img
                src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
                alt="ACCA"
                className="acca-image"
              />
            </div>
          </div>
          <div className="top-image-container">
            <img
              className="top-image"
              src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg"
              alt="amazon"
            />
          </div>
          <div className="request-form-outside">
            <div className="request-form-inside">
              <p className="request-paragraph">
                Aspiring to be an ACCA? Get in touch with us!
              </p>
              <input className="input" placeholder="Email ID" />
              <input className="input" placeholder="Phone Number" />
              <button className="button request" type="button">
                Request Call Back
              </button>
            </div>
          </div>
          <div className="mobile-brochure-buttons">
            <button className="button mobile-brochure" type="button">
              Download Brochure
            </button>
            <img
              src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
              alt="ACCA"
              className="mobile-acca-image"
            />
          </div>
        </div>
        <div className="side-buttons-top">
          <button className="button brochure" type="button">
            Download Brochure
          </button>
          <button className="button brochure" type="button">
            Request Call Back
          </button>
        </div>
        <div className="acca-container">
          <div className="acca-heading-container">
            <p className="acca-heading">What is ACCA?</p>
            <div className="acca-heading-down">.</div>
            <div className="acca-description">
              <div className="acca-desc">
                <BsDot size={25} />
                <p className="description-acca">
                  ACCA (Association of Chartered Certified Accountants) is a
                  globally recognized accounting qualification offered by ACCA
                  Global, UK
                </p>
              </div>
              <div className="acca-desc">
                <BsDot size={25} />
                <p className="description-acca">
                  It provides unlimited career opportunities with MNCs and Big4s
                </p>
              </div>
              <div className="acca-desc">
                <BsDot size={25} />
                <p className="description-acca">
                  A course which you can complete along with your graduation
                </p>
              </div>
              <div className="acca-desc">
                <BsDot size={25} />
                <p className="description-acca">
                  It has 2 lakh + members & 5 lakh + students across 180+
                  countries
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="levels-container">
          <div className="levels-container1">
            <div className="levels">
              <h1 className="levels-heading">Levels</h1>
              <div className="levels-description">
                <MdOutlineMenuBook className="levels-icon" />
                <p className="levels-paragraph">Three (13 papers)</p>
              </div>
            </div>
            <div className="levels">
              <h1 className="levels-heading">Duration</h1>
              <div className="levels-description">
                <AlarmOnIcon className="levels-icon" />
                <p className="levels-paragraph">6-30 months</p>
              </div>
            </div>
          </div>
          <div className="levels-container2">
            <div className="levels">
              <h1 className="levels-heading">Exams</h1>
              <div className="levels-description">
                <LaptopIcon className="levels-icon" />
                <p className="levels-paragraph">Quarterly (Online)</p>
              </div>
            </div>
            <div className="levels">
              <h1 className="levels-heading">Exemptions</h1>
              <div className="levels-description">
                <EventAvailableIcon className="levels-icon" />
                <p className="levels-paragraph">Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-acca-container">
          <div className="why-acca-heading-container">
            <p className="why-acca-heading">Why ACCA @ 1FIN?</p>
            <div className="acca-heading-down">.</div>
          </div>
          <div className="acca-syllabus-container">
            <div className="acca-syllabus">
              <div className="acca-syllabus-top">
                <EmojiObjectsIcon sx={{fontSize: 32}} color="#ffff" />
                <h1 className="conceptual-heading">Conceptual</h1>
              </div>
              <div className="acca-syllabus-description-container">
                <div className="acca-syllabus-down">
                  <div className="acca-syllabus-descriptions">
                    <LaptopIcon />
                    <p className="acca-syllabus-description">
                      Regular Live Classes
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <PeopleOutlineTwoToneIcon />
                    <p className="acca-syllabus-description">Expert Faculty</p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <NextWeekIcon />
                    <p className="acca-syllabus-description">
                      Exam Oriented Content
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <RemoveFromQueueIcon />
                    <p className="acca-syllabus-description">
                      Dedicated Discussions Forms
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <PermIdentityIcon />
                    <p className="acca-syllabus-description">
                      Continous Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="acca-syllabus">
              <div className="acca-syllabus-top">
                <PeopleAltIcon sx={{fontSize: 32}} color="#ffff" />
                <h1 className="conceptual-heading">Comprehensive</h1>
              </div>
              <div className="acca-syllabus-description-container">
                <div className="acca-syllabus-down">
                  <div className="acca-syllabus-descriptions">
                    <LaptopIcon />
                    <p className="acca-syllabus-description">
                      Exhaustive Q & A Bank
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <NextWeekIcon />
                    <p className="acca-syllabus-description">
                      1000s of MCQs for practice
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <TimelapseIcon />
                    <p className="acca-syllabus-description">
                      Tests at regular intervals
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <DescriptionIcon />
                    <p className="acca-syllabus-description">Mock Exams</p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <EmojiObjectsIcon />
                    <p className="acca-syllabus-description">
                      Analysis of Answer Sheets
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="acca-syllabus">
              <div className="acca-syllabus-top">
                <GppGoodIcon sx={{fontSize: 32}} color="#ffff" />
                <h1 className="conceptual-heading">Career Oriented</h1>
              </div>
              <div className="acca-syllabus-description-container">
                <div className="acca-syllabus-down">
                  <div className="acca-syllabus-descriptions">
                    <NextWeekIcon />
                    <p className="acca-syllabus-description">
                      Business Communication
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <WorkIcon />
                    <p className="acca-syllabus-description">Resume Building</p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <ThumbUpIcon />
                    <p className="acca-syllabus-description">
                      Negotiation Skills
                    </p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <SystemUpdateAltIcon />
                    <p className="acca-syllabus-description">Mock Interviews</p>
                  </div>
                  <div className="acca-syllabus-descriptions">
                    <RemoveFromQueueIcon />
                    <p className="acca-syllabus-description">
                      Placement Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="live-class">
            <p className="live-description">
              Live classes start from late September, 2022.
              <a href="https://www.indigolearn.com/acca" className="acca-tag">
                Click here to Enrol Now.
              </a>
            </p>
            <img
              src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_silver_lp_logo.png"
              alt="ACCA"
              className="acca-image-syllabus"
            />
          </div>
        </div>
        <div className="acca-eligibility-container">
          <p className="acca-eligibility-heading">ACCA - Eligibility</p>
          <div className="acca-heading-down">.</div>
          <div className="eligibility-description-container">
            <div className="eligibility-description-heading">
              <p className="eligibility-acca-heading">
                To appear for the ACCA course examination a candidate should
                have
              </p>
            </div>
            <div className="eligibility-description">
              <DoneIcon />
              <p className="description-acca">Qualified the 10+2 exams</p>
            </div>
            <div className="eligibility-description">
              <DoneIcon />
              <p className="description-acca">
                An aggregate of 65% in Mathematics / Accounts and English and a
                minimum of 50% in other subjects
              </p>
            </div>
          </div>
        </div>
        <div className="acca-learn-container">
          <p className="acca-eligibility-heading">
            What will you Learn in ACCA?
          </p>
          <div className="acca-eligibility-down">.</div>
          <div className="rank-containers">
            <div className="rank-container">
              <div className="rank-top-container">
                <h1 className="rank-heading">Knowledge Level</h1>
              </div>
              <div className="rank-down-container">
                <div className="rank-down-containers">
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Business and Technology (BT)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Management Accounting (MA)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Financial Accounting (FA)
                    </p>
                  </div>
                  <div className="enroll-button1">
                    <button className="button enroll" type="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rank-container">
              <div className="rank-top-container">
                <h1 className="rank-heading">Skill Level</h1>
              </div>
              <div className="rank-down-container">
                <div className="rank-down-containers">
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Corporate and Business Law (LW)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Performance Management (PM)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">Taxation (TX)</p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">Financial Reporting (FR)</p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">Audit and Assurance (AA)</p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Financial Management (FM)
                    </p>
                  </div>
                  <div className="enroll-button2">
                    <button className="button enroll" type="button">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rank-container">
              <div className="rank-top-container">
                <h1 className="rank-heading">Professional Level</h1>
              </div>
              <div className="rank-down-container">
                <div className="rank-down-containers">
                  <h1 className="rank-down-heading">Compulsory</h1>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      SBL - Strategic Business Leader
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      SBR - Strategic Business Reporting
                    </p>
                  </div>
                  <h1 className="rank-down-heading">
                    Two out of the following
                  </h1>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Advanced Financial Management (AFM)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Advanced Performance Management (APM)
                    </p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">Advanced Taxation (ATX)</p>
                  </div>
                  <div className="rank-down-description">
                    <BsDot size={30} />
                    <p className="rank-description">
                      Advanced Audit and Assurance (AAA)
                    </p>
                  </div>
                </div>
                <div className="enroll-button3">
                  <button className="button enroll" type="button">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="placement-container">
          <div className="why-acca-heading-container">
            <p className="acca-heading">Placement Assistance</p>
            <div className="acca-heading-down">.</div>
          </div>
          <div className="placement-description-container">
            <div className="placement-description">
              <h1 className="placement-heading">Resume Building</h1>
              <p className="placement-desc">
                1FIN provides professional guidance to help you create an
                effective resume to help you create a lasting impression.
              </p>
            </div>
            <div className="placement-description">
              <h1 className="placement-heading">Career Counselling</h1>
              <p className="placement-desc">
                We provide career counselling to conducting mock interviews and
                aptitude tests – we will assist you at every step, all the way,
                we make you job ready
              </p>
            </div>
            <div className="placement-description">
              <h1 className="placement-heading">Jobs</h1>
              <p className="placement-desc">
                We will give you an edge over others with our direct corporate
                affiliations which will ensure that you are placed right.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Body
