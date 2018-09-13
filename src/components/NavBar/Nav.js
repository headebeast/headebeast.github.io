import React, { Component } from 'react';
import Link from 'gatsby-link';
import 'tachyons';
import './NavSideBar.css';

export default class NavBarMobile extends Component {

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
          <div className="margin">
            <div id="Burger" className="f3" onClick={this.show}>☰</div>
          </div>
            <aside id="Invisibile" className={this.state.isHidden ? 'visibile' : null}>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-1/">Home</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-2/">About</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-3/">Contact</Link>
              <Link className={this.state.isHidden ? 'nav' : null} to="/page-4/">Github</Link>
            </aside>
          </nav>
        </header>
      </div>
    );
  }
}
