import React, { Component } from 'react'
import NavBar from '../components/NavBar/DesktopNav'
import 'tachyons'

// import SideNavBar from '../components/SideNavBar'

class IndexPage extends Component {
  
  
  render() {
    return (
      <div className="bg-black">
         
        <nav>          
          <NavBar></NavBar>
        </nav>
        
      </div>
  )
    }
  
}


export default IndexPage;
