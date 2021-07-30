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
              about <span>Me</span>
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="about-img">
            <div className="img-box">
              <img src="images/img/about-img.svg" alt="about-img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              Hello, I’m Goke Adekanye, a professional Frontend Web Developer
              based in Lagos State, Nigeria. As a graduate of Computer Science
              (BSc.), I am passionate about leveraging my solid background in
              Information Technology to decipher challenging problems and create
              innovative solutions that contribute positively to the IT
              ecosystem.
              <br /> Being an inquisitive individual, I am constantly exploring
              the latest technologies that empower me to discover new and better
              ways to do things. I am independent, innovative, full of energy,
              and highly motivational. Not only am I well organized, but I am
              also a team player with enthusiasm for reaching completion stages
              and finishing tasks at hand.
              <br /> I collaborate effectively to implement and transform ideas
              into finished products. Due to my work demands, I enjoy traveling,
              but I also work remotely. I sometimes work alone, but I also
              collaborate with other professionals or tech companies for
              Outsourced Projects and Partnerships. I’m a Goal-Oriented
              individual with excellent communication skills coupled with
              strategic thinking, Time Keeping, and Project Management.
            </p>
            <a
              href="https://drive.google.com/file/d/15rvZqjUou261stawj4T3Aj-JNpidAe3E/view?usp=sharing"
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
              <span>my work</span> process
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
