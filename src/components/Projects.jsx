import React from 'react';
import AuroraProject from '../container/images/AuroraProject.png';
import TpeProject from '../container/images/TpeProject.png';
import lushProject from '../container/images/lushProject.png';

const Projects = () => {
    return (
        <div>
            <section className="container section scrollspy" id="projects">
    <div className="row">
      <div className="col s12 l4">
        <img src={AuroraProject} alt="website" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 style={{color: 'rgb(173, 137, 45)'}}>Websites</h2>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4 push-l7 offset-l1">
        <img src={TpeProject} alt="Apps" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 pull-l5 right-align offset-l1">
        <h2 style={{color: 'rgb(173, 137, 45)'}}>Web Applications</h2>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l4" style={{marginTop: 30}}>
        <img src={lushProject} alt="Prototyping" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 l6 offset-l1">
        <h2 style={{color: 'rgb(173, 137, 45)'}}>Prototyping</h2>
        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation
          ullamco laboris nisi ut aliquip
          ex ea commodo consequat
        </p>
      </div>
    </div>
  </section>
        </div>
    )
}

export default Projects
