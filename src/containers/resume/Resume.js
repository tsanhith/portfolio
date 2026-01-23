import React, {useContext} from "react";
import "./Resume.scss";
import {resumeSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Resume() {
  const {isDark} = useContext(StyleContext);

  if (!resumeSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main resume-margin-top" id="resume">
        <div className="resume-div-main">
          <div className="resume-header">
            <h1 className="heading resume-title">{resumeSection.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode resume-subtitle"
                  : "subTitle resume-subtitle"
              }
            >
              {resumeSection.subtitle}
            </p>
            <div className="resume-button-div">
              <a
                href={resumeSection.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={isDark ? "dark-mode resume-button" : "resume-button"}
              >
                Download / View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
