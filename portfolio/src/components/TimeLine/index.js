import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
   <Timeline >
      {/* <h1 style={{fontSize:"3rem", fontWeight:"800", textAlign:"center"}}>
            Work Experience
          </h1>

          <br/>
          <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          SDE Intern (January 2025-June 2025)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>
          Amazon (HYD13)
          </TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          SDE Intern (May 2024-July 2024)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>National Informatics Centre, Agartala</TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>
    
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet" style={{fontSize:"2rem",fontWeight:"800"}}>
          Web Developement Intern (January 2023-March 2023)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>Viand Research Private Limited</TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/> */}

      <h1 style={{fontSize:"3rem", fontWeight:"800", textAlign: "center"}}>
            Education
          </h1>

          <br/>
          <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          B.Tech CSE (December 2023-May 2027)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>
          G.L Bajaj Institute of technology and Management (8.44 CGPA)
          </TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          Senior Secondary (June 2021-April 2022)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>Oriental public school (84.6% in CBSE)</TimelineContent>
      </TimelineItem>
      <br/>
      <br/>
      <br/>
    
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet" style={{fontSize:"2rem",fontWeight:"800"}}>
          High School (April 2019-May 2020)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>New Delhi Public School (85% in CBSE)</TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}
