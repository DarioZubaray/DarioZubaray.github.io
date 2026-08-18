import React from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../../data/skills';
import './skillsCard.css';

export const SkillsCard = () => {
    const { t } = useTranslation();
    return (
        <div className="card bg-light h-100">
            <div className="card-body">
                <h1>{t('home.skills')}</h1>
                {
                    skills.map(({skillKey, percentage}, i) => (
                        <div className="py-2" key={ 'percentage-' + i }>
                            <h5>{t(skillKey)}</h5>
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
