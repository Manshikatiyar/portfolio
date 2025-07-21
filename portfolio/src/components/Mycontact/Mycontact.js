import React from "react";
import "./Mycontact.scss";
function Mycontact(){

    const formStyle = {
        padding: "10px",
        maxWidth: "400px",
        margin: "0 auto"
      };
      
      const formHeadingStyle = {
        fontSize: "40px",
        textAlign: "center",
        marginBottom: "10px",
        fontWeight: "bold"
      };
      
      const inputFieldStyle = {
        border: "1px solid #ccc",
        fontSize: "14px",
        color:"black",
        padding: "10px 8px",
        marginBottom: "10px",
        borderRadius: "5px",
        width: "100%",
        boxSizing: "border-box"
      };
      
      const buttonStyle = {
        padding: "10px",
        border: "unset",
        textTransform: "uppercase",
        backgroundColor: "#117ca6",
        color: "#ffffff",
        width: "100%",
        cursor: "pointer"
      };
      
   
    
      return (

        <div className="details__section">

<h2>Feel Free to Contact Me</h2>
<br></br>
<br></br>

         <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3507.240047278017!2d77.48633832549498!3d28.472316625752597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgl%20bajaj%20institute%20of%20technology%20and%20management!5e0!3m2!1sen!2sin!4v1753028330022!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <React.Fragment>

      <form
       action="https://formspree.io/f/mgvzokeo"
       method="POST"
        style={formStyle}
        name="contactForm"
        autoComplete="off"
      >
        <p style={formHeadingStyle}>Contact Form</p>
        {/* //name */}
        <input
          required={true}
          style={inputFieldStyle}
          type="text"
          name="name"
          placeholder="Enter your name."
        />
        {/* email */}
        <input
          required={true}
          style={inputFieldStyle}
         type="email"
          name="email"
          placeholder="Enter your email."
        />
        {/* textarea */}
        <textarea
          rows={5}
          required={true}
          style={inputFieldStyle}
          name="message"
          placeholder="Enter your message."
        ></textarea>

        {/* submit */}

          <input type="submit" value="send" style={buttonStyle}/>
     
      </form>

     
    </React.Fragment>

     </div>
      );
}
export default Mycontact;