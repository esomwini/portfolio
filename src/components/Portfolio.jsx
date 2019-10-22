import React from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import laptop from '../container/images/laptop.jpg';
import Services from './Services';
import astronomy from '../container/images/astronomy.jpg';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            
  {/* photo / grid */}
  <Projects />

  {/* parallax */}
  <div className="parallax-container">
    <div className="parallax">
      <img src={laptop} alt="parallax" className="responsive-img" />
    </div>
  </div>

  {/* services */}
  <Services />

  {/* parallax */}
  <div className="parallax-container">
    <div className="parallax">
      <img src={astronomy} alt="parallax" className="responsive-img" />
    </div>
  </div>

  {/* contact */}
  <Contact />

  {/* footer */}
  <Footer />

        </>
    )
}

export default Portfolio;
