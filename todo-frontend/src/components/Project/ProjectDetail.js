import React from "react";
import { dateParser } from "../../utilities/helpers";

function ProjectDetail({project}) {
  return (
    <div>
      <h4 className="project-name">{project.name}</h4>
      <ul className="project-details-list">
        <li className="project-detail-item">
          <div className="project-detail-deadline">
            Deadline: {dateParser(project.deadline)}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ProjectDetail;
