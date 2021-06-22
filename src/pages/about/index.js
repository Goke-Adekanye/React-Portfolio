import React from "react";
import resumeData from "../../utils/resumeData";
import "./styles/about.css";

export default function About() {
  return (
    <section className="section about-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              about Tola<span>FX</span>
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="about-img">
            <div className="img-box">
              <img src="images/img/about-img.png" alt="about-img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              amet cumque quis eos? Numquam molestiae, tempore, aliquid
              consectetur cupiditate facere corrupti impedit asperiores fugit
              quae quisquam minus aliquam nulla similique! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Minima labore praesentium
              maiores pariatur cum obcaecati ipsa, exercitationem hic accusamus
              at animi, debitis, modi nobis veritatis placeat cumque beatae
              laboriosam magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum labore provident repudiandae distinctio
              accusamus, eaque pariatur cum dolor repellendus ratione doloremque
              aliquid expedita doloribus ipsam iste, rerum, quam dolores
              corporis?
            </p>
            <a
              href="https://drive.google.com/file/d/1ch2R0yHYbaKxiOqBAy-HdU03kXaiQ6hn/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="btn btn-green link-item"
            >
              download CV
            </a>
          </div>
        </div>

        <div className="row mt-30">
          <div className="row card-area-title align-items-center">
            <h3>
              <span>three (3)</span> steps to become a Pro
            </h3>
          </div>

          <div className="row card-area justify-content-around mt-30">
            {resumeData.about.map((item) => (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    {item.icon}
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <div className="steps d-none">{item.step}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
