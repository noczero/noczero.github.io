import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Achievement extends Component {
    render() {
        if (this.props.resumeAchievement && this.props.resumeBasicInfo){
            var sectionName = this.props.resumeBasicInfo.section_name.achievement;
            var achievement = this.props.resumeAchievement.map( function (achievement,i) {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={achievement.year}
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="fas fa-trophy experience-icon "></i>}
                        key={i}
                    >

                        <h3
                            className="vertical-timeline-element-title"
                            style={{ textAlign: "left" }}
                        >
                            {achievement.name}
                        </h3>

                        <hr/>
                        <div className="font-europa" style={{ textAlign: "left", marginTop: "15px" }}>
                            {achievement.description}
                        </div>
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
                        {achievement}
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

export default Achievement