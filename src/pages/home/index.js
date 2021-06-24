import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

export default function Home() {
  return (
    <section className="section home-section align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>
              Hello, <img src="images/img/emoji.svg" alt="emoji" />
            </p>
            <h1>
              I'm Goke <span>Adekanye</span>
            </h1>
            <h2>
              A Frontend Web Developer with a great eye for design. Do you need
              me to build your Website or develop a Web App?
            </h2>

            <Link to="/about">
              <a href="#about" className="btn btn-green link-item">
                learn more
              </a>
            </Link>
            <a
              href="https://gokeadekanye.medium.com/"
              rel="noreferrer"
              target="_blank"
              className="btn link-item"
            >
              blog
            </a>
          </div>

          <div className="home-img">
            <div className="img-box">
              <img src="images/home.svg" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
