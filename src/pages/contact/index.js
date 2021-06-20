import React from "react";
import "./styles/contact.css";
import { CustomButton } from "../../components";
import { Grid, TextField, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";

export default function Contact() {
  return (
    <section className="section contact-section sec-padding ">
      <div className="container">
        <div className="row contact-hero align-items-center">
          <div className="contact-text">
            <h1>
              We Love to <br /> hear your <span>feedback</span>
            </h1>
            <h5>
              let us know what we can do to provide you with better solutions
            </h5>
          </div>

          <div className="contact-img">
            <div className="img-box">
              <img src="images/img/i-contact-hero.png" alt="profile-img" />
            </div>
          </div>
        </div>

        <Grid container className="row">
          <Grid item xs={12} md={7} lg={7} className="contact-form">
            <form action="">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth type="text" name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="text"
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton type={"submit"} text={"Submit"} />
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={5} lg={5} className="contact-info">
            <Grid container>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Location:</span> {resumeData.location}
                </Typography>
                <Typography className="contactInfo_item">
                  <span>Phone:</span> {resumeData.phone}
                </Typography>
                <Typography className="contactInfo_item">
                  <span>Email:</span> {resumeData.email}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container className="contactInfo_socialsContainer">
                  {Object.keys(resumeData.socials).map((key) => (
                    <Grid item className="contactInfo_social">
                      <a
                        href={resumeData.socials[key].link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {resumeData.socials[key].icon}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
