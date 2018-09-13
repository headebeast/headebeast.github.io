import React, { Component } from 'react';
import Link from 'gatsby-link';
import 'tachyons';
import './DesktopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { fagithub } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {
  

  render() {
    return (
      <div id="sidenavbar">
        <header>
          <nav id="nav1">
            <div className="margin ">
                  

              <div id="Burger" className="f3 pa2 no-underline grow ma1"></div>
            </div>
            <aside id="Links" className="aife f3">
              <Link className="link white dim db mw5 pa2 ba b--black-10 shadow f6" to="/index.js/"><FontAwesomeIcon icon={faHome} /></Link>
              <Link className="link white dim db mw5 pa2 ba b--black-10 shadow f6" to="/page-2/">About Me</Link>
              <Link className="link white dim db mw5 pa2 ba b--black-10 shadow f6" to="/page-3/">Contact Me</Link>
              <Link className="link white dim db mw5 pa2 ba b--black-10 shadow f6" to="/page-4/">Github</Link>
            </aside>
          </nav>
        </header>
      </div>
    );
  }
}
