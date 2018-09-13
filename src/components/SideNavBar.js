import React, { Component } from 'react';
import Link from 'gatsby-link';
import './NavSideBar.css';

export default class SideNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isHidden: false 
    };
    this.show = this.show.bind(this);
  }

  show = () => {
    this.setState(() => ({
      isHidden: !this.state.isHidden
    }));
    }
  

  render() {
    return (
      <div id="sidenavbar">
        <header>
          <nav id="nav1" className={this.state.isHidden ? 'nav1' : null}>
            <aside id="Invisibile" className={this.state.isHidden ? 'visibile' : null}>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-1/">Home</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-2/">About</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-3/">Contact</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-4/">Github</Link>
            </aside>
          </nav>
          <div className="margin">
            <div id="Burger" onClick={this.show}>☰</div>
          </div>
          
        </header>
      </div>
    );
  }
}
