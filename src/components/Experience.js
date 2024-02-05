import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import {experience} from '../experienceData';
import '../css/experience.css';

function Experience() {
  var work = experience.map(function (work, i) {
    const technologies = work.technologies;
    const mainTechnologies = work.mainTech;

    var mainTech = mainTechnologies.map((technology, i) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });
    var tech = technologies.map((technology, i) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={<div className='font-serif' style={{ backgroundColor:'black',color:'#BA8DF6',fontWeight:'bold',fontSize:'20px'}}>{work.years}</div>}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          {mainTech}
        </div>

        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {work.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" ,color: "darkslategray"}}
        >
          {work.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" ,display:'flex', flexWrap:'wrap'}}>{tech}</div>
      </VerticalTimelineElement>
    );
  });
  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns' id='experience'>
        <section id="resume" className="pb-5">
        <header className='text-2xl font-bold pt-10'>
          <h2>Experience</h2>
        </header>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    </section>
  );
}

export default Experience;
