import React from 'react'
const Header = () => {
  return (
    <div className='header-container'>
      <img src='logo.png' className='logo-panda' alt='logo panda' />
      <div className='search-container'>
        <p className='experience'>Experience</p>
        <p className='location'>Location</p>
        <p className='dates'>Dates</p>
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