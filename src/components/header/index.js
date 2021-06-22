import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  const [active, setActive] = useState(false);

  const navToggler = () => {
    setActive(!active);

    if (!active) {
      document.querySelector(".section").classList.add("fade-out");
      document.body.classList.toggle("hide-scrolling");
    } else {
      document.querySelector(".section").classList.remove("fade-out");
      document.body.classList.toggle("hide-scrolling");
    }
  };

  const gotoPage = () => {
    setActive(false);
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".section").classList.remove("fade-out");
    document.querySelector(".nav-toggler").classList.add("hide");

    setTimeout(() => {
      document.querySelector(".nav-toggler").classList.remove("hide");
      window.scrollTo(0, 0);
    }, 500);
  };

  return (
    <header className={`header ${active && "active"}`}>
      <div className="container">
        <div className="row flex-end">
          <button type="button" className="nav-toggler" onClick={navToggler}>
            <span></span>
          </button>

          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <Link to="/">
                  <li onClick={gotoPage}>
                    <a href="#home" className="nav-item link-item">
                      home
                    </a>
                  </li>
                </Link>

                <Link to="/about">
                  <li onClick={gotoPage}>
                    <a href="#about" className="nav-item">
                      about
                    </a>
                  </li>
                </Link>

                <Link to="/services">
                  <li onClick={gotoPage}>
                    <a href="#portfolio" className="nav-item">
                      services
                    </a>
                  </li>
                </Link>

                <li>
                  <a
                    href="https://github.com/Goke-Adekanye?
                    tab=repositories"
                    rel="noreferrer"
                    target="_blank"
                    className="nav-item"
                  >
                    portfolio
                  </a>
                </li>

                <Link to="/contact">
                  <li onClick={gotoPage}>
                    <a href="#contact" className="nav-item">
                      contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
