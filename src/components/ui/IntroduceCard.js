import React from 'react';
import moment from 'moment';
import ReactRotatingText from 'react-rotating-text';
import '../ui/introduceCard.css';

import { biography, linkedinUrl } from '../../data/biography';
import circleCropped from '../../static/circle-cropped.png';

export const IntroduceCard = () => {
    return (
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light rounded-left border-bottom">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={circleCropped}
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
                                    items={['Software Engineer', 'Developer', 'Programmer', 'Coder']}
                                />
                            </h3>

                            { biography.map( (b, i) => (
                                <div className="text-justify" key={i}>
                                    {
                                        (b.includes('AGE')) 
                                        ? b.replace('AGE', moment().diff('1989-01-16', 'years'))
                                        : b
                                    }
                                </div>
                            )) }
                            <a 
                                href={linkedinUrl}
                                className="btn btn-primary my-2"
                                target="_balnk"
                                rel="noopener noreferrer">Add me on LinkedIn</a>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
