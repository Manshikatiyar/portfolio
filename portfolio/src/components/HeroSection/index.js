import TypeRoles from "./TypeRoles"; 
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero-section">
      <div className="hero__container">
        <div className="hero__intro">
          <p>Hi! my name is Manshi, I love</p>
          <h1>
            building <span className="hero__color">products</span> and{" "}
            <span className="hero__color">experiences</span>.
          </h1>
          <div className="hero__intro-type"><h2><TypeRoles /></h2></div> 
          <div className="hero__short-intro">
            <p>
              Computer Science and Engineering currently pursuing B.Tech from G.L Bajaj Institute of Technology and Management(2023-2027) , mastering Data Structures and Algorithms,
              and exploring the world of Web Development.
            </p>
          </div>
        </div>
        <div className="hero__CTA">
          <a href="https://github.com/Manshikatiyar" className="hero__CTA-button-link" target="blank">
            <button>Check out my works!</button>
          </a>

        </div>
      </div>
     
    </div>
  );
};

export default HeroSection;
