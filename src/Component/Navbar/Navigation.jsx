import React, { useState, useEffect } from "react";
import "../Navbar/Navigation.css";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isNavOpen ? "navbar-expanded" : ""}>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid first" style={{ maxWidth: "1164px" }}>
          <a className="navbar-brand" href="/">
            <img src="/Assests/Logo.png" alt="" className="logoimg" />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            {isNavOpen ? <span className="close-icon">&times;</span> : <span className="navbar-toggler-icon"></span>}
          </button>

          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:'auto'}}>
              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  BMS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  Assurance
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle poppins-regular color-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Industries
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item poppins-regular color-black" href="#">
                      Employers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item poppins-regular color-black" href="#">
                      Insurance Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item poppins-regular color-black" href="#">
                      Government Healthcare
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item poppins-regular color-black" href="#">
                      Providers (Hospitals, Labs, <br /> Pharmacies)
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  POS System
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active poppins-regular" aria-current="page" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="get-started-container">
            <button className="btn btn-primary poppins-regular get-started">Get Started</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
