import React, { useState } from "react";

export const CourseFilter = ({ filterCourse }) => {

    const [active, setActive] = useState('all');

    const activeAndFilter = (param) => {
        setActive(param);
        filterCourse(param);
    }

  return (
    <>
        <label>Filter:</label>
            <button
                className={`btn btn-info mx-1 ${active === "all" ? "active" : ""}`}
                onClick={ () => activeAndFilter("all") }
            >
            All
            </button>
            <button
                className={`btn btn-info mx-1 ${active === "java" ? "active" : ""}`}
                onClick={ () => activeAndFilter("java") }
            >
            Java
            </button>

            <button
                className={`btn btn-info mx-1 ${active === "spring" ? "active" : ""}`}
                onClick={ () => activeAndFilter("spring") }
            >
            Spring
            </button>

            <button
                className={`btn btn-info mx-1 ${active === "angular" ? "active" : ""}`}
                onClick={ () => activeAndFilter("angular") }
            >
            Angular
            </button>

            <button
                className={`btn btn-info mx-1 ${active === "react" ? "active" : ""}`}
                onClick={ () => activeAndFilter("react") }
            >
            React
            </button>

            <button
                className={`btn btn-info mx-1 ${active === "others" ? "active" : ""}`}
                onClick={ () => activeAndFilter("others") }
            >
            Others
            </button>

            <button
                className={`btn btn-secondary mx-1 ${active === "spanish" ? "active" : ""}`}
                onClick={ () => activeAndFilter("spanish") }
            >
            Spanish
            </button>

            <button
                className={`btn btn-secondary mx-1 ${active === "english" ? "active" : ""}`}
                onClick={ () => activeAndFilter("english") }
            >
            English
            </button>

            <button
                className={`btn btn-info mx-1 ${active === "fernando herrera" ? "active" : ""}`}
                onClick={ () => activeAndFilter("fernando herrera") }
            >
            FH
            </button>
    </>
  );
};
