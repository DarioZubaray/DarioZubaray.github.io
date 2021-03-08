import React from 'react';
import { biography } from '../../data/biography';

export const IntroduceCard = () => {
    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light rounded-left border-bottom">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src="/circle-cropped.png"
                                alt="Picture of the author"
                                className="img-fluid"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="py-2">Dario Zubaray</h1>
                            <h3 className="pb-4">Software Developer</h3>
                            { biography.map( (b, i) => (
                                <div className="text-justify" key={i}>{b}</div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
