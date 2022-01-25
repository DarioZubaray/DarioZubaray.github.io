import React from 'react'

export const CourseFilterButton = ({ filterName, active, activeAndFilter }) => {
    const outline = active === filterName ? 'outline-' : '';
    const styleClass = (filterName === 'spanish' || filterName === 'english')
        ? `btn btn-${outline}secondary mx-1 my-1` 
        : `btn btn-${outline}info mx-1 my-1`;

    return (
        <button
            className={styleClass}
            onClick={ () => activeAndFilter(filterName) }
        >
            {filterName}
        </button>
    )
}
