import React from "react";
import contact from "../assets/Social media/contact.webp";
import GoTop from "../components/GoTop";

import "../styles/Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xgtz1k7",
        "template_x3b86gm",
        form.current,
        "r6VvuCEY7ttkN8VgO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section className="contact">
      <p id="contact">Contact</p>
      <p id="git">Get in touch</p>
      <div className="container">
        <div id="socialInfo">
          <img src={contact} alt="work" id="laptop" />
          <p id="myName">Katam Mahidhar Reddy</p>
          <p id="Profession">Full Stack Web Developer </p>
          <span id="tag">
            I am available for Full-time positions in the field of web
            development. If you have any queries, contact me using the form or
            thorugh social media.
          </span>
          <div className="location">
            <span>
              <LocationOnIcon />
            </span>
            Hyderabad, Telangana
          </div>
          <div className="Links">
            <a href="https://www.instagram.com/mahi2307_/">
              <InstagramIcon className="Icon" />
            </a>
            <a href="https://www.linkedin.com/in/mahidhar-reddy-katam-a2b35a24a/">
              <LinkedInIcon className="Icon" />
            </a>
            <a href="mailto:mahireddy.katam@gmail.com">
              <EmailIcon className="Icon" />
            </a>
            <a href="https://github.com/mahi-2307">
              <GitHubIcon className="Icon" />
            </a>
          </div>
        </div>
        <div id="contactForm">
          <form onSubmit={sendEmail} ref={form}>
            <div className="input">
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" name="from_name" required />
            </div>
            <div className="input">
              <label htmlFor="phoneNumber">Phone Number</label>
              <br />
              <input
                type="number"
                name="from_number"
                required
                className="input"
              />
            </div>

            <div className="input">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" name="email" required className="input" />
            </div>
            <div className="input">
              <label htmlFor="response">Response</label>
              <br />
              <textarea
                id="response"
                name="message"
                required
                rows={10}
                cols={85}
                className="input"
              ></textarea>
            </div>
            <button type="submit" id="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <GoTop />
    </section>
  );
}

export default ContactForm;
