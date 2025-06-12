import Image from "next/image";
import React from "react";
import aImg from "/public/images/about/about.png";

const About = (props) => {
  return (
    <section className="tf-about-section section-padding">
      <div className="container">
        <div className="tf-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-img">
                <Image src={aImg} alt="" />
                <div className="tf-about-img-text">
                  <div className="tf-about-icon">
                    <h3>5+</h3>
                    <span>Years Exprience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-text">
                <small>about Me</small>
                <h2>Crafting Digital Experiences, One Pixel at a Time</h2>
                <h5>
                  I have 5+ years of experiences in Software Development &
                  Graphic Designing for give you better services.
                </h5>
                <p>
                  A Creative Technologist with over 5 years of experience
                  leading IT projects for private and humanitarian sectors.
                  Expertly merges full-stack web development with high-impact
                  visual design,utilizing the Adobe Creative Suite (Photoshop,
                  Illustrator, Premiere Pro, After Effects) to buildpolished and
                  effective digital solutions.
                </p>

                <div className="tf-funfact">
                  <div className="tf-funfact-item">
                    <h3>
                      <span>50</span>+
                    </h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="tf-funfact-item">
                    <h3>
                      <span>100</span>+
                    </h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>About Me</h1>
      </div>
    </section>
  );
};

export default About;
