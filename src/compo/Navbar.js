import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">NewsHub</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <Link className="nav-link" to="/about"> About</Link> */}
                <Link className="nav-link" to="/business"> Business</Link>
                <Link className="nav-link" to="/entertainment"> Entertainment</Link>
                <Link className="nav-link" to="/general"> General</Link>
                <Link className="nav-link" to="/health"> Health</Link>
                <Link className="nav-link" to="/science"> Science</Link>
                <Link className="nav-link" to="/sports"> Sports</Link>
                <Link className="nav-link" to="/technology"> Technology</Link>
</ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
