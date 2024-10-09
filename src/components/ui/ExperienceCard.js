import React from 'react';
import { experiences } from '../../data/experiences';

import noImage from '../../static/no-image.png';
import tultix from '../../static/tultix.jpg';
import imagosur from '../../static/imagosur.jpg';
import globant from '../../static/globant.jpg';
import accelone from '../../static/accelone.jpg';
import number8 from '../../static/number8.png';
import accenture from '../../static/Accenture.png';
import botmaker from '../../static/botmaker.jpg';

import { ExperienceDescriptionHeader, ExperienceDescriptionBody } from './ExperienceDescription';

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
        case 'Number 8':
            return number8;
        case 'Accenture':
            return accenture;
        case 'Botmaker':
            return botmaker;
        default:
            return noImage;
    }
}

export const ExperienceCard = () => {
    return (
        <div className="card-body">
            <h1>Experience</h1>

            <ul className="list-group">
                {
                    experiences.map((exp, i) => (
                        <li className="list-group-item my-2" key={ 'experiencie-' + i }>
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

                                <ExperienceDescriptionHeader exp={ exp } />

                            </div>


                            <hr />
                            <div>
                                <ExperienceDescriptionBody exp={ exp } />
                            </div>
                            <hr />

                            <div>
                                <h6>
                                    <small>
                                        <span role="img" aria-label="description">📜</span>
                                    </small>
                                   <span> Description:</span>
                                </h6>
                                <br/>
                                { 
                                    exp.description.map((desc, index) => (
                                        <p style={{ textIndent: 10 }} key={ 'description-' + index }>{desc}</p>
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
