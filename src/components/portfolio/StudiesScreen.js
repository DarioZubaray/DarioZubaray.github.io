import React, { useEffect, useState } from "react";

import { getAllCourses } from "../../services/coursesApi";
import { CourseFilter } from "../ui/CourseFilter";
import { CourseTimeline } from "../ui/CourseTimeline";

const initialState = {
  data: { courses: [], establishment: {}, tags: []},
  shown: { courses: [], establishment: {}, tags: []}
}

export const StudiesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coursesCompleted, setCoursesCompleted] = useState(initialState);

  useEffect(() => {
      const fetchData = async () => {
          const allCourses = await getAllCourses();
          setCoursesCompleted((prev) => {
            return {
              data: allCourses,
              shown: allCourses
            }
          });
          setIsLoading(false);
      }
      fetchData();
  }, []);

  const filterCourse = (parameter) => {
    setCoursesCompleted((prev) => {
      return {
        ...prev,
        shown: {
          courses: coursesCompleted.data.courses.filter(c => {
            return c.tags.includes(parameter) 
          })
        }
      }

    })
  }

  const sortedCourses = (parameter) => {
    setCoursesCompleted((prev) => {
      return {
        ...prev,
        shown: {
          courses: prev.shown.courses.sort((a, b) => {
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
      }
    })

  }

  if(isLoading) {
    return <div>
      Cargando...
    </div>
  }

  return (
    <div className="card container animate__animated animate__fadeIn">
      <div className="page-header">
        <h1 id="timeline" className="text-center my-4">Courses { (coursesCompleted.shown?.courses?.length > 0) ? `(${coursesCompleted.shown.courses.length})` : ''}</h1>
        <CourseFilter filterCourse={ filterCourse } sortedCourses={ sortedCourses } />
      </div>
      <ul className="timeline">
          {
              (coursesCompleted.shown.courses) && coursesCompleted.shown.courses.map((c, i) => (
                  <li key={ 'courses-carried-out-' + i } className={c.organization === 'EducacionIt' || c.organization === 'Platzi' ? 'timeline-inverted' : ''}>
                      <CourseTimeline course={c} />
                  </li>
              ))
          }
      </ul>
    </div>
  );
};
