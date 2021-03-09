import React from 'react';
import './courseTimeline.css';

export const CourseTimeline = ({ course }) => {
    return (
        <>
            <div className="timeline-badge">
                <a href={course.organization.webSite} target="_blank" rel="noopener noreferrer">
                    <img src={course.organization.image} alt="organization" className="rounded" width="60" height="60"/>
                </a>
            </div>

            <div className="timeline-panel bg-light rounded">
                <div className="timeline-heading">
                    <h4 className="timeline-title">{ course.name }</h4>
                    <p>
                    <small className="text-muted">
                        { course.organization.name }
                    </small>
                    </p>
                </div>
                <div className="timeline-body">
                    {
                        course.end && (<p className="text-muted"><i>{ course.end }</i></p>)
                    }
                    <p>
                    duration: {course.duration} hs
                    </p>

                    {
                        course.certification && (
                            <a href={course.certification} target="_balnk" rel="noopener noreferrer" >check it out!</a>
                        )
                    }
                </div>
            </div>
        </>
    )
}
