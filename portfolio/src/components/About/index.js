import "./About.scss";
import Me from "../../assets/manshi.jpg";

const About = () => {
  return (
    <div className="details__section">
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
          <div className="about__info">
            <p>
              I'm a self-taught Software Developer and a Competitive Programmer.
               I am currently pursuing a Bachelor's Degree in Computer Science and Engineering from the G.L Bajaj Institute of Tehnology and Management (Dec 2023 - May 2027).
            </p>
          
            <p>
           I do problem solving on online platform like 
           Codeforces, CodeChef and Leetcode and have solved more than
           1000+ problem combined.
           I am rated (max 1591) on <a href="https://leetcode.com/u/manshikatiyar/" target="_blank"><strong>Leetcode</strong></a>,
             Pupil(max 1204) on <a href="https://codeforces.com/profile/nishukatiyar97 " target="_blank"><strong>Codeforces</strong></a> and 
             3 star (max 1421) on <a href="https://www.codechef.com/users/manshikatiyar" target="_blank"><strong>CodeChef</strong></a>.
          </p>
          <p>
            I like to pariticipate in hackathons and coding competitions.
            My team "Team Techno" comes in Top 10 in Hack with delhi hackathon.
          </p>
            <p>
             I have been the DSA Lead of Google Developer Student Club (GDSC) at G.L Bajaj Institute of Technology and Management.
            </p>
            <p></p>
          </div>
          

          <div className="about__image">
            <img src={Me} alt=" " />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skill__cards">
            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Languages</h2>
              <p>C/C++</p>
              <p>Java</p>
              <p>Javascript</p>
              <p>TypeScript</p>
              <p>SQL</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Framework</h2>
              <p>React Js</p>
              <p>Express Js</p>
              <p>Node Js</p>
             
              <p>REST API</p>
              
             
            </div>

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Developer Tools</h2>
              
              <p>Git</p>
              <p>Github</p>
              
              <p>Firebase</p>
              
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            </div>
            
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Coursework</h2>
              
              <p>Computer </p>
              <p>Networks</p>
              <p></p>
              <p>OOP</p>
              
              <p>DBMS</p>
              <p>Operating</p>
              <p>System</p>
              <p></p>
              <p>Algorithms</p>
             
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Database</h2>
              
              <p>MySQL</p>
              <p>MongoDB</p>
             
            </div>
           
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
