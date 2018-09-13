import React, { Component } from 'react';
import Link from 'gatsby-link';
import 'tachyons';
import './DesktopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {
  

  render() {
    return (
      <div id="sidenavbar">
        <header>
          <nav id="nav1">
            <div className="margin ">
                  <FontAwesomeIcon className="center" icon={faHome} />

              <div id="Burger" className="f3 pa2 no-underline grow ma1"></div>
            </div>
            <aside id="Links" className="aife f4">
              <Link className="pa2 no-underline grow ma1 white" to="/page-1/">Home<i class="fas fa-home f1 white"></i></Link>
              <Link className="pa2 no-underline grow ma1 white" to="/page-2/">About</Link>
              <Link className="pa2 no-underline grow ma1 white" to="/page-3/">Contact</Link>
              <Link className="pa2 no-underline grow ma1 white" to="/page-4/">Github</Link>
            </aside>
          </nav>
        </header>
      </div>
    );
  }
}
