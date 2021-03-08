import React from 'react';
import { experiences } from '../../data/experiences';

export const ExperienceCard = () => {
    return (
        <div className="card-body">
            <h1>Experience</h1>

            <ul className="list-group">
                {
                    experiences.map((exp, i) => (
                        <li className="list-group-item my-2" key={i}>
                            <h3>{ exp.company }: { exp.title }</h3>
                            <h5>
                                <small>{ exp.from_month}</small> { exp.from_year } - 
                                <small> { exp.to_month === undefined ? '' : exp.to_month }</small> { exp.to_year === undefined ? 'Actually' : exp.to_year }
                            </h5>
                            <hr />
                            <div>
                                { 
                                    exp.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
