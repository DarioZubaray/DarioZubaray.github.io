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
    setCoursesCarriedOut((prev) => {
      return {
        ...prev.courses,
        shown: courses.filter(c => c.tags.indexOf(parameter) >= 0)
      }

    })
  }

  const sortedCourses = (parameter) => {
    setCoursesCarriedOut((prev) => {
      return {
        ...prev.courses,
        shown: prev.shown.sort((a, b) => {
          if (parameter === 'Older first') {
            if (a.id > b.id) { return 1;}
            if (a.id < b.id) { return -1;}
          } else {
            if (a.id < b.id) { return 1; }
            if (a.id > b.id) { return -1; }
          }

          // a must be equal to b
          return 0;
        })
      }
    })
  }

  return (
    <div className="card container animate__animated animate__fadeIn">
      <div className="page-header">
        <h1 id="timeline" className="text-center my-4">Courses Carried Out ({ coursesCarriedOut.shown.length })</h1>
        <CourseFilter filterCourse={ filterCourse } sortedCourses={ sortedCourses } />
      </div>
      <ul className="timeline">
          {
              coursesCarriedOut.shown.map((c, i) => (
                  <li key={ 'courses-carried-out-' + i } className={c.organization.name === 'EducacionIt' || c.organization.name === 'Platzi' ? 'timeline-inverted' : ''}>
                      <CourseTimeline course={c} />
                  </li>
              ))
          }
      </ul>
    </div>
  );
};
