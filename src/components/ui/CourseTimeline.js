import React from 'react';
import moment from 'moment';
import './courseTimeline.css';


import cetae from '../../static/cetae.jpg';
import educacionIt from '../../static/educacionit-bordered.jpg';
import platzi from '../../static/platzi.jpg';
import udemy from '../../static/udemy.jpg';
import udemy2021 from '../../static/udemy-2021-plus.jpg';
import devtalles from '../../static/devtalles.jpg';
import uai from '../../static/uai.png';

export const CourseTimeline = ({ course }) => {

    const getImageResource = (imageName) => {
        switch(imageName) {
            case 'cetae':
                return cetae;
            case 'educacionIt':
                return educacionIt;
            case 'udemy':
                return udemy;
            case 'udemy2021':
                return udemy2021;
            case 'platzi':
                return platzi;
            case 'devtalles':
                return devtalles;
            case 'uai':
                return uai;
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
                <a href={course.organization} target="_blank" rel="noopener noreferrer">
                    <img src={getImageResource(course.organization)} alt="organization" className="rounded" width="60" height="60"/>
                </a>
            </div>

            <div className="timeline-panel bg-light rounded">
                <div className="timeline-heading">
                    <h4 className="timeline-title">{ course.name }</h4>
                    <p>
                    <small className="text-muted">
                        { course.organization.replace(/[0-9]/g, '') }
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
