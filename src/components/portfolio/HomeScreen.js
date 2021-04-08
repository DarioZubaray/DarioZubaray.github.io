import React from 'react';
import { ExperienceCard } from '../ui/ExperienceCard';
import { IntroduceCard } from '../ui/IntroduceCard';
import { SkillsCard } from '../ui/SkillsCard';

export const HomeScreen = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <IntroduceCard />

            <div className="row py-2">
                <div className="col-md-4">
                    <SkillsCard />
                </div>
                <div className="col-md-8">
                    <div className="card bg-light h-100">
                        <ExperienceCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
