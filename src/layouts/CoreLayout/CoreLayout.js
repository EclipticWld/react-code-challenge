import React, { PropTypes, Component } from 'react'
import { Sidebar } from '../../components'
import './CoreLayout.css'
import logo from './logo.svg'

class CoreLayout extends Component {
  render () {
    const { routes } = this.props
    const nameOfPage = routes[routes.length - 1].name

    return (
      <div className='App'>
        <Sidebar logo={logo} />
        <main className='App-Body'>
          <div className='App-Topbar'>
            <div>{nameOfPage}</div>
          </div>
          <div className='App-Content'>
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default CoreLayout
