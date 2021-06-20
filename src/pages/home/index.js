import React from "react";
import "./styles/home.css";

export default function Home() {
  return (
    <section className="section home-section align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>
              Join several individuals trusting our signals to make impacts.
            </p>
            <h1>
              TOLA <span>FX</span>
            </h1>
            <h2>can only get better...</h2>

            <a href="#about" className="btn btn-green link-item">
              about us
            </a>
            <a href="#portfolio" className="btn link-item">
              services
            </a>
          </div>

          <div className="home-img">
            <div className="img-box">
              <img src="images/hero-section.svg" alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
