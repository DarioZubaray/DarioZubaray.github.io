import React from 'react';
import './courseTimeline.css';
import cetae from '../../static/cetae.jpg';
import educacionIt from '../../static/educacionit-bordered.jpg';
import platzi from '../../static/platzi.jpg';
import udemy from '../../static/udemy.jpg';
import moment from 'moment';

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

    const endDate = (course.end !== 'at present') 
        ? moment(course.end).fromNow()
        : course.end;

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
                        course.end && (
                        <p className="text-muted">
                            <i>{course.end} (<small>{ endDate }</small>)</i>
                        </p>
                        )
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
