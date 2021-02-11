import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      var multipleskill = this.props.sharedSkills.map( function (skils, i) {
        //console.log(skils)
        var icons = skils.icons.map(function (icons, i) {
          //console.log(icons)
          return (
              <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={icons.class} style={{ fontSize: "220%" }}>
                  <p
                      className="font-europa text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
              </li>
          );
        });

        return(
            <div className="text-white pt-3" key={i}>
              <h4>{skils.name}</h4>
              <ul className="list-inline mx-auto skill-icon">{icons}</ul>
            </div>
        )
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white font-weight-bold">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            {multipleskill}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
