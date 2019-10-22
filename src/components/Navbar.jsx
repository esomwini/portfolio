import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header>
            <div className="navbar-fixed">
    <nav className="nav-wrapper navbar">
      <div className="container">
        <a href="" className="brand-logo">Techstria</a>
        <a href="" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a className='navlinks' href="#projects">Projects</a></li>
          <li><a className='navlinks' href="#services">Services</a></li>
          <li><a className='navlinks'href="#resume">Resume</a></li>
          <li><a className='navlinks' href="#contact">Contact</a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small transparent darken-4" data-tooltip="Instagram">
            <i className="fab fa-instagram"></i>
          </a></li>
          <li><a href="#" className="tooltipped btn-floating btn-small transparent darken-4" data-tooltip="Facebook">
              <i className="fab fa-facebook"></i>
            </a></li>
            <li><a href="#" className="tooltipped btn-floating btn-small transparent darken-4" data-tooltip="Twitter">
                <i className="fab fa-twitter"></i>
              </a></li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>

    <div className='content'>
                <div className='content-text-bold'>
                <p>Web Developer with</p><p>excellent services.</p>
                </div>
                <div className='content-text-normal'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p>alit. soluta veritatis in tenetur doloremque, maiores</p>
                    <p>doloribus officia iste. Dolores.</p>
                </div>
                <button className='content-button'><a href="mailto:techstria@world.com" style={{color:'white'}}>Get in touch</a></button>
            </div>
  </header>
        </div>
    )
}

export default Navbar
