import React, { useState } from "react";
import { CourseFilterButton } from "./CourseFilterButton";

const tagsFilters = [
    'all', 'java', 'spring', 'angular', 'react', 'others', 'spanish', 'english', 'fernando herrera'
]

export const CourseFilter = ({ filterCourse }) => {

    const [active, setActive] = useState('all');

    const activeAndFilter = (param) => {
        setActive(param);
        filterCourse(param);
    }

  return (
    <>
        <label>Filter:</label>
        {
            tagsFilters.map(t => (
                <CourseFilterButton
                    active={active}
                    activeAndFilter={activeAndFilter}
                    filterName={t}
                    key={t}
                />
            ))
        }
        <hr/>
    </>
  );
};
