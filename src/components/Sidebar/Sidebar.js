import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import './Sidebar.css'

const sidebarStyles = {
  link: {
    active: {
      color: '#fff',
      backgroundColor: '#33B7D8'
    }
  }
}

const Sidebar = ({logo}) => (
  <nav className='AppNav'>
    <div className='Logo'>
      <IndexLink to='/'><img src={logo} alt='logo' /></IndexLink>
    </div>
    <div className='NavList'>
      <IndexLink
        to='contact-keeper'
        className='NavListItem'
        activeStyle={sidebarStyles.link.active}>
        Contacts Keeper
      </IndexLink>
    </div>
  </nav>
)

Sidebar.propTypes = {
  logo: PropTypes.any
}

export default Sidebar
