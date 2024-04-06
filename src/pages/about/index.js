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
              <img src="images/img/_image_.png" alt="about-img" />
            </div>
          </div>

          <div className="about-text">
            <p>
              <b>Summary:</b> - Skilled React Developer with 3+ years of
              experience building performant and user-focused web applications.
              Proven ability to architect scalable and maintainable React
              codebases, implement robust error handling, and collaborate
              effectively with cross-functional teams. Committed to remaining
              abreast of cutting-edge React advancements and contributing to a
              culture of continuous improvement.
              <br />
              <br />
              <b>Languages and Frameworks:</b> JavaScript, React.JS, Next.JS,
              Typescript, Node.JS, HTML, CSS, SCSS, Bootstrap, Tailwind CSS,
              Git, MongoDB.
              <br />
              <br /> <b>API and Data Integration:</b> - Skilled in integrating
              RESTful APIs with React applications using Node.JS to optimize
              data retrieval and enhance application performance. - Proficient
              in handling asynchronous requests with a focus on diverse response
              types (JSON, text).
              <br />
              <br /> <b>Performance Optimization:</b> - Experienced in
              implementing performance optimization techniques such as lazy
              loading and code-splitting, resulting in a 20% reduction in page
              load time (Figtec project).
              <br />
              <br />
              <b>State Management:</b> - Extensive experience with Redux and
              Context in managing complex application states efficiently across
              multiple React projects.
            </p>
            <a
              href="/contact"
              rel="noreferrer"
              className="btn btn-green link-item"
            >
              Contact Me
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
