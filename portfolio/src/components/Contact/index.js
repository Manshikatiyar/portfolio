import ContactLink from "./ContactLink";

/* STYLING */
import "./ContactSection.scss";

/* ICONS */
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Element name="contact">
      <div className="contact__container">
        <div className="contact__intro">
          <h1>sold yet?</h1>
          <p>
            Thanks for stopping by, I’m currently looking to join a new team of
            creative developers. If you think we might be a good
            fit for one another, please do connect with me online.
          </p>
        </div>
        <div className="contact-links" id="contact">
          <ContactLink
            Icon={FaLinkedinIn}
            link="https://www.linkedin.com/in/manshi-katiyar-793a49279/"
          />
         
          <ContactLink Icon={FaGithub} link="https://github.com/Manshikatiyar" />
          <ContactLink Icon={FaInstagram} link="https://www.instagram.com/nishukati9878/F" />
        
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
