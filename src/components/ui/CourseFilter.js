import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { CourseFilterButton } from "./CourseFilterButton";
import { CourseSortingButton } from "./CourseSortingButton";

const tagsFilters = [
    'tags.all',
    'tags.programming.backend.java.name',
    'tags.programming.backend.java.framework.spring',
    'tags.programming.frontend.web.framework.angular',
    'tags.programming.frontend.web.framework.react',
    'tags.programming.frontend.web.framework.vue',
    'tags.programming.others',
    'tags.language.spanish',
    'tags.language.english',
    'tags.instructor.fernandoHerrera'
]
const activeSortingButtonInitialValue = 'Older first';

export const CourseFilter = ({ filterCourse, sortedCourses }) => {
    const { t } = useTranslation();

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

    const getName = (filterName) => {
        switch(filterName) {
            case 'tags.all': return 'all';
            case 'tags.programming.backend.java.name': return 'java';
            case 'tags.programming.backend.java.framework.spring': return 'spring';
            case 'tags.programming.frontend.web.framework.angular': return 'angular';
            case 'tags.programming.frontend.web.framework.react': return 'react';
            case 'tags.programming.frontend.web.framework.vue': return 'vue';
            case 'tags.programming.others': return 'others';
            case 'tags.language.spanish': return 'spanish';
            case 'tags.language.english': return 'english';
            case 'tags.instructor.fernandoHerrera': return 'devtalles';
            default: return '';
        }
    }

  return (
    <>
        <label>{t('studies.filter')}</label>
        {
            tagsFilters.map(filterTag => (
                <CourseFilterButton
                    active={active}
                    activeAndFilter={activeAndFilter}
                    name={getName(filterTag)}
                    filterName={filterTag}
                    key={filterTag}
                />
            ))
        }
        <div className="display-block">
            <label>{t('studies.sortedBy')}</label>
            <CourseSortingButton
                activeSortingButton={activeSortingButton}
                activeAndSorting={activeAndSorting}
                filterName={t('studies.olderFirst')}
            />
            <CourseSortingButton
                activeSortingButton={activeSortingButton}
                activeAndSorting={activeAndSorting}
                filterName={t('studies.newestFirst')}
            />
        </div>
        <hr/>
    </>
  );
};
