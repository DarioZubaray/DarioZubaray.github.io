import React from 'react';
import './courseTimeline.css';
import cetae from '../../static/cetae.jpg';
import educacionIt from '../../static/educacionit-bordered.jpg';
import platzi from '../../static/platzi.jpg';
import udemy from '../../static/udemy.jpg';

export const CourseTimeline = ({ course }) => {

    const getImageResource = (imageName) => {
        switch(imageName) {
            case 'CETAE':
                return cetae;
            case 'EducacionIt':
                return educacionIt;
            case 'Udemy':
                return udemy;
            case 'Platzi':
                return platzi;
            default:
                return;
        }
    }
    return (
        <>
            <div className="timeline-badge">
                <a href={course.organization.webSite} target="_blank" rel="noopener noreferrer">
                    <img src={getImageResource(course.organization.name)} alt="organization" className="rounded" width="60" height="60"/>
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
