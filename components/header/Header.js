import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-scroll";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "/public/images/logo.png";
import NavLink from "next/link";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={props.topbarNone}>
      <div className={`tp-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/"
                  >
                    <Image src={Logo} alt="MyImg" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-95}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="service"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-95}
                      >
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-95}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-95}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <NavLink href="/components" className="nav-link">
                        Components
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
