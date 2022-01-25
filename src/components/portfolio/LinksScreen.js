import React from 'react';
import { publicProfile } from '../../data/links';

export const LinksScreen = () => {
    return (
        <div className="container row mb-3 animate__animated animate__fadeIn">
            <div className="card" style={{ flex: 1 }}>
                <div className='card-body'>
                    <h1 className='mb-3'>Links to my public profiles</h1>

                    <ul className="list-group">
                        {
                            publicProfile.map(pp => (
                                <li className="list-group-item" key={ pp.nombre }>
                                    <a href={ pp.url } target="_blank" rel="noopener noreferrer">
                                        <span role="img" aria-label="emoji">{ pp.emoji }</span> 
                                        <span> { pp.nombre }</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}