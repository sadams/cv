import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css';
import Contact from './Contact.js'
import Skills from './Skills.js'
import About from './About.js'
import Role from './Role.js'
import History from './History.js'
import LCARSListItem from './LCARSListItem.js'

const Nav = () => {
  const nav = [
    {
      name: 'About CV',
      path: '/',
      component: About,
      num: 31,
    },
    {
      name: 'Skills',
      path: '/skills',
      component: Skills,
      num: 111,
    },
    {
      name: 'History',
      path: '/history',
      component: History,
      num: 58,
    },
    {
      name: 'Role',
      path: '/role',
      component: Role,
      num: 9,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
      num: 41,
    },
  ]

  return <Router>
    <app>
      <nav className="upper">
        <img alt="yak" src="yak.svg"/>
        <br></br>
        {nav.map(page => (
          <NavLink exact key={page.name} to={page.path}>
            <LCARSListItem num={page.num} name={page.name}>{page.name}</LCARSListItem>
          </NavLink>
        ))}
      </nav>
      <content>
        {nav.map(page => (
          <Route key={page.name} exact path={page.path} component={page.component}/>
        ))}
      </content>
    </app>
  </Router>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;
