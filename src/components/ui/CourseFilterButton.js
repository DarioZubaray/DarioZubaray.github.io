import React from 'react'

export const CourseFilterButton = ({ name, filterName, active, activeAndFilter }) => {
    const outline = active === filterName ? 'outline-' : '';
    const styleClass = (filterName.includes('spanish') || filterName.includes('english'))
        ? `btn btn-${outline}secondary mx-1 my-1` 
        : `btn btn-${outline}info mx-1 my-1`;

    return (
        <button
            className={styleClass}
            onClick={ () => activeAndFilter(filterName) }
        >
            {name}
        </button>
    )
}
