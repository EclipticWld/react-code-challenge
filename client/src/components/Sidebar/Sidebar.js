import React, { PropTypes } from 'react'
import { IndexLink } from 'react-router'
import './Sidebar.css'

const sidebarStyles = {
  link: {
    active: {
      color: '#fff',
      backgroundColor: '#6F8496',
      boxShadow: 'inset 5px 0px 0px 0px #33B7D8'
    }
  }
}

const Sidebar = ({logo}) => (
  <nav className='App-Nav'>
    <div className='Logo'>
      <IndexLink to='/'><img src={logo} alt='logo' /></IndexLink>
    </div>
    <div className='NavList'>
      <IndexLink
        to='contact-keeper'
        className='NavListItem'
        activeStyle={sidebarStyles.link.active}>
        Contact Keeper
      </IndexLink>
    </div>
    <div className='Author-Info'>
      <div className='Author-InfoItem'>
        <a
          href='https://github.com/EclipticWld/react-code-dashboard'
          target='_blank'
          >
          <span className='fa-stack'>
            <i className='fa fa-2x fa-github' aria-hidden='true' />
          </span>
          Repository
        </a>
      </div>
      <div className='Author-InfoItem'>
        <a href='https://github.com/EclipticWld' target='_blank'>
          <span className='fa-stack'>
            <i className='fa fa-2x fa-user' aria-hidden='true' />
          </span>
           EclipticWld
        </a>
      </div>
    </div>
  </nav>
)

Sidebar.propTypes = {
  logo: PropTypes.any
}

export default Sidebar
