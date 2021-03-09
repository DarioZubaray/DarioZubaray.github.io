import React from "react";
import { courses } from "../../data/coursesCarryOut";
import { CourseTimeline } from "../ui/CourseTimeline";

export const StudiesScreen = () => {
  return (
    <div className="card container">
      <div className="page-header">
        <h1 id="timeline" className="text-center my-4">Courses Carried Out</h1>
      </div>
      <ul className="timeline">
          {
              courses.map((c, i) => (
                  <li key={i} className={c.organization.name === 'EducacionIt' || c.organization.name === 'Platzi' ? 'timeline-inverted' : ''}>
                      <CourseTimeline course={c} />
                  </li>
              ))
          }
      </ul>
    </div>
  );
};
