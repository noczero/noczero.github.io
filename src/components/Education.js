import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo){
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var educations = this.props.resumeEducation.map( function (education,i) {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={education.year}
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="fas fa-university experience-icon m-2"></i>}
                        key={i}
                    >

                        <h3
                            className="vertical-timeline-element-title"
                            style={{ textAlign: "left" }}
                        >
                            {education.name}
                        </h3>

                        <h5
                            className="vertical-timeline-element-subtitle"
                            style={{ textAlign: "left" }}
                        >
                            <hr/>
                            <small><i className="fas fa-map-pin m-2" aria-hidden="true"></i>
                            </small>
                            {education.university}
                        </h5>
                    </VerticalTimelineElement>
                )
            })
        }

    return(
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title font-weight-bold" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {educations}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon m-2"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    )
    }
}

export default Education;