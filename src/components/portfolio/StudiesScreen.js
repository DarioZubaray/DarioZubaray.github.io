import React, { useState } from "react";
import { courses } from "../../data/coursesCarryOut";
import { CourseFilter } from "../ui/CourseFilter";
import { CourseTimeline } from "../ui/CourseTimeline";

const initialState = {
  courses,
  shown: courses
}

export const StudiesScreen = () => {
  const [coursesCarriedOut, setCoursesCarriedOut] = useState(initialState);

  const filterCourse = (parameter) => {
    console.log(`filter course by ${parameter}`)
    setCoursesCarriedOut((prev) => {
      return {
        ...prev.courses,
        shown: courses.filter(c => c.tags.indexOf(parameter) >= 0)
      }

    })
  }

  return (
    <div className="card container animate__animated animate__fadeIn">
      <div className="page-header">
        <h1 id="timeline" className="text-center my-4">Courses Carried Out ({ coursesCarriedOut.shown.length })</h1>
        <CourseFilter filterCourse={ filterCourse } />
      </div>
      <ul className="timeline">
          {
              coursesCarriedOut.shown.map((c, i) => (
                  <li key={i} className={c.organization.name === 'EducacionIt' || c.organization.name === 'Platzi' ? 'timeline-inverted' : ''}>
                      <CourseTimeline course={c} />
                  </li>
              ))
          }
      </ul>
    </div>
  );
};
