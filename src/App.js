import React from 'react';
import './App.css';
// import styled from 'styled-components'
// import { UpCircleOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons';
// import { Avatar } from 'antd';
// import { Select } from 'antd';
import { Route, Link, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contacts from './Contacts';


class App extends React.Component {

  state = {
    joker: false
  }
  cover = () => {
    const {joker} = this.state;
    this.setState(
      {joker: !joker},
      () => {
        const {joker} = this.state;
        if (!joker)
          window.location.assign("/home")
          window.history.pushState(null, null, "/home");
      });
  }
  render() {
    const { joker} = this.state
    return (
      <div className="app">
             <Link to="/home">{!joker && 'My resume'}</Link>
            <button onClick={this.cover}>Details</button>
        {joker && <ul>
          <li>
              <Link to="/page1">About me</Link>
          </li>
          <li>
              <Link to="/page2">Portfolio</Link>
          </li>
          <li>
              <Link to="/page3">Contacts</Link>
          </li>
        </ul>}
        {joker && <Routes>
          <Route path="/page1" element={<AboutMe />} />
          <Route path="/page2" element={<Portfolio />} />
          <Route path="/page3" element={<Contacts />} />
        </Routes>}

      </div>
    );
  }
}

export default App;
