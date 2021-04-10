import React from 'react';
import { skills } from '../../data/skills';
import './skillsCard.css';

export const SkillsCard = () => {
    return (
        <div className="card bg-light h-100">
            <div className="card-body">
                <h1>Skills</h1>
                {
                    skills.map(({skill, percentage}, i) => (
                        <div className="py-2" key={i}>
                            <h5>{skill}</h5>
                            <div
                                className="my-progress-bar">
                                    <span 
                                        className="percentage"
                                        style={{ width: `${percentage}%` }}
                                    ></span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
