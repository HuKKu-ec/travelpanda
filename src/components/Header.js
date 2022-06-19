import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header-container'>
      <img src='logo.png' className='logo-panda' alt='logo panda' />
      <div className='search-container'>
        <p className='experience'><Link style={{all:'unset'}} to="/experiences">Experience</Link></p>
        <p className='location'><Link style={{all:'unset'}} to="/Location">Location</Link></p>
        <p className='dates'><Link style={{all:'unset'}} to="/Dates">Dates</Link></p>
        {/* <input className='search-bar' placeholder='Experience               |             Location                  |                        Dates' type='text' /> */}
        <button className="search-button"><img src='search.png' className='search-logo' alt='search bar' /></button>
      </div>
      <div className='right-header'>
        <img src='language.png' className='language-logo' alt='language logo' />
        <div className="profile-button">
          <img src='lines.png' className='profile-line-logo' alt='line bars' />
          <img src='nullimg.png' className='profile-logo' alt='null img' />
        </div>
      </div>
    </div>
  )
}

export default Header