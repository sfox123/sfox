import React from "react";
import NavLink from "next/link";
import himg from "/public/images/slider/right-img.png";
import { Link } from "react-scroll";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="tp-hero-section-1">
      <div className="container">
        <div className="row">
          <div className="col col-xs-7 col-lg-7">
            <div className="tp-hero-section-text">
              <div className="tp-hero-title">
                <h2>Web Developer & Graphic Designer</h2>
              </div>
              <div className="tp-hero-sub">
                <p>Shagar Thangaraj</p>
              </div>
              <div className="btns">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-95}
                  className="theme-btn"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-vec">
        <div className="right-img">
          <Image src={himg} alt="" />
        </div>
      </div>
      <div className="social-link">
        <ul>
          <li>
            <NavLink
              target="_blank"
              href="https://www.linkedin.com/in/shagar-thangaraj-222b73121/"
            >
              Linked in
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="visible-text">
        <h1>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
