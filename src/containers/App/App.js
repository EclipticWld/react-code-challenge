import React, { Component } from 'react';
import { Sidebar } from '../../components';
import './App.css';

class App extends Component {
  render() {
    const { routes } = this.props;
    const nameOfPage = routes[routes.length - 1].name;

    return (
      <div className="App">
        <Sidebar />
        <main className="App-Body">
          <div className="App-Topbar">
            <div>{nameOfPage}</div>
          </div>
          <div className="App-Content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
