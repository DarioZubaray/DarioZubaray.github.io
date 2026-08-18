import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    return (
        <div className="card-body">
            <h1>{t('home.experience')}</h1>

            <ul className="list-group">
                {
                    experiences.map((exp, i) => (
                        <li className="list-group-item my-2" key={ 'experiencie-' + i }>
                            <div className="row" style={{alignItems: 'center'}}>

                                <div className="col-md-2">
                                    <div className="card" style={{alignItems: 'center'}}>
                                            <img
                                                src={getImageResource(t(exp.companyKey))}
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
                                <h6 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', marginTop: '10px' }}>{t('home.description')}</h6>
                                <br/>
                                <div>
                                {/* Resumen */}
                                <p style={{ textIndent: 10 }}>
                                    {exp.summaryKeys.map((key, idx) => (
                                        <span key={'summary-' + idx}>{t(key)}</span>
                                    ))}
                                </p>
                                
                                {/* Sección Responsabilidades */}
                                <h6 style={{ fontWeight: 'bold', fontStyle: 'italic', textDecoration: 'underline', marginTop: '10px' }}>{t('home.responsibilities')}</h6>
                                <ul style={{ paddingLeft: '20px' }}>
                                    {exp.responsibilityKeys.map((key, index) => (
                                    <li key={'resp-' + index}>{t(key)}</li>
                                    ))}
                                </ul>

                                {/* Sección Tech Stack */}
                                <p style={{ marginTop: '10px' }}>
                                    <strong style={{ fontStyle: 'italic', textDecoration: 'underline' }}>{t('home.techStack')}</strong> {t(exp.techStackKey)}
                                </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
