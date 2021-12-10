import React from 'react';
import { experiences } from '../../data/experiences';
import noInternetConnection from '../../static/no-internet.png';
import tultix from '../../static/tultix.jpg';
import imagosur from '../../static/imagosur.jpg';
import globant from '../../static/globant.jpg';
import accelone from '../../static/accelone.jpg';

const getImageResource = (imageName) => {
    switch(imageName) {
        case 'Tultix SRL':
            return tultix;
        case 'Imagosur SA':
            return imagosur;
        case 'Globant':
            return globant;
        case 'AccelOne':
            return accelone;
        default:
            return;
    }
}

export const ExperienceCard = () => {
    return (
        <div className="card-body">
            <h1>Experience</h1>

            <ul className="list-group">
                {
                    experiences.map((exp, i) => (
                        <li className="list-group-item my-2" key={i}>
                            <div className="row" style={{alignItems: 'center'}}>

                                <div className="col-md-2">
                                    <div className="card" style={{alignItems: 'center'}}>
                                            <img
                                                src={getImageResource(exp.company)}
                                                alt="blogger post"
                                                className="rounded"
                                                width="60" height="60"/>
                                    </div>
                                </div>

                                <div className="col">
                                    <h3><small>{ exp.company }</small></h3>
                                    <h4> { exp.title }</h4>
                                    <h5>
                                        <small>{ exp.from_month}</small> { exp.from_year } - 
                                        <small> { exp.to_month === undefined ? '' : exp.to_month }</small> { exp.to_year === undefined ? 'Actually' : exp.to_year }
                                    </h5>
                                </div>
                            </div>

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
