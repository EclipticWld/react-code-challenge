import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import './Sidebar.css';

const sidebarStyles = {
  link: {
    active: {
      color: '#fff',
      backgroundColor: '#33B7D8'
    }
  }
}
class Sidebar extends Component {

  render() {
    return (
      <nav className="AppNav">
        <div className="Logo">
          <IndexLink to='/'>logo</IndexLink>
        </div>
        <div className="NavList">
          <IndexLink
            to='contacts-keeper'
            className="NavListItem"
            activeStyle={sidebarStyles.link.active}>
              Contacts Keeper
          </IndexLink>
        </div>
      </nav>
    )
  }
}

export default Sidebar;
