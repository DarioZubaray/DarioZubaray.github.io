import React, { useState } from "react";
import { CourseFilterButton } from "./CourseFilterButton";
import { CourseSortingButton } from "./CourseSortingButton";

const tagsFilters = [
    'all', 'java', 'spring', 'angular', 'react', 'vuejs', 'others', 'spanish', 'english', 'fernando herrera'
]
const activeSortingButtonInitialValue = 'Older first';

export const CourseFilter = ({ filterCourse, sortedCourses }) => {

    const [active, setActive] = useState('all');
    const [activeSortingButton, setActiveSortingButton] = useState(activeSortingButtonInitialValue);

    const activeAndFilter = (param) => {
        setActive(param);
        filterCourse(param);
    }

    const activeAndSorting = (param) => {
        setActiveSortingButton(param);
        sortedCourses(param);
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
        <div className="display-block">
            <label>Sorted by:</label>
            <CourseSortingButton
                activeSortingButton={activeSortingButton}
                activeAndSorting={activeAndSorting}
                filterName='Older first'
            />
            <CourseSortingButton
                activeSortingButton={activeSortingButton}
                activeAndSorting={activeAndSorting}
                filterName='Newest first'
            />
        </div>
        <hr/>
    </>
  );
};
