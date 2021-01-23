
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";
import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#c9cbff" };
  let schoolIconStyles = { background: "#fdffbc" };

  return (
    <div>

    <div className="title">
      <h1>">Timeline</h1>
      </div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
          element.buttonText !== undefined &&
          element.buttonText !== null &&
          element.buttonText !== "";
          
          return (
            <VerticalTimelineElement
            key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;