import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import ReactRotatingText from 'react-rotating-text';
import '../ui/introduceCard.css';

import { biographyKeys, linkedinUrl } from '../../data/biography';
import nomalProfile from '../../static/circle-cropped.png';
import pixelartProfile from '../../static/cropped_circle_pixelart.png';
import cartoonProfile from '../../static/cropped_circle_cartoon.png';
import mspaintProfile from '../../static/cropped_circle_ms-paint.png';

const profiles = [
  { type: nomalProfile, weight: 60 },
  { type: pixelartProfile, weight: 25 },
  { type: cartoonProfile, weight: 10 },
  { type: mspaintProfile, weight: 5 }
];

function getRandomProfile(profiles) {
  const totalWeight = profiles.reduce((sum, p) => sum + p.weight, 0);
  let random = Math.random() * totalWeight;

  for (const p of profiles) {
    if (random < p.weight) return p.type;
    random -= p.weight;
  }
}

export const IntroduceCard = () => {
    const { t } = useTranslation();
    const profileImage = getRandomProfile(profiles);

    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light rounded-left border-bottom">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={profileImage}
                                alt="selfie of the author"
                                className="img-fluid"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="py-2">Dario Zubaray</h1>

                            <h3 className="pb-4">
                                <ReactRotatingText 
                                    items={[t('home.roles.softwareEngineer'), t('home.roles.developer'), t('home.roles.programmer'), t('home.roles.coder')]}
                                />
                            </h3>

                            { biographyKeys.map( (key, i) => {
                                const text = t(key);
                                return (
                                    <div className="text-justify" key={i}>
                                        {
                                            (text.includes('AGE')) 
                                            ? text.replace('AGE', moment().diff('1989-01-16', 'years'))
                                            : text
                                        }
                                    </div>
                                );
                            }) }
                            <a 
                                href={linkedinUrl}
                                className="btn btn-primary my-2"
                                target="_balnk"
                                rel="noopener noreferrer">{t('home.linkedin')}</a>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
