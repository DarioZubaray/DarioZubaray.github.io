import React from 'react';

export const CourseSortingButton = ({filterName, activeSortingButton, activeAndSorting}) => {
    const outline = (activeSortingButton === filterName) ? 'outline-' : '';

    return (
    <button
        className={`btn btn-${outline}info mx-1 my-1`}
        onClick={ () => activeAndSorting(filterName) }
    >
        { filterName }
    </button>
    )
};
