import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/img/rocket.jpg';

function Home() {
  return (
    <>
      <section id="header" className=" d-flex align-items-centre">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div classname="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
                  <h1>
                    Grow your skill with
                    <br />
                    <strong className="brand-name"> CodersValey </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer solving your doubts
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt=" hom img "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
