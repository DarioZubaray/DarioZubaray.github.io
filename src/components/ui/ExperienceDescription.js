import React from 'react'

export const ExperienceDescriptionHeader = ({ exp }) => {
    return (
        <div className="col">
            <h4>
                <span role="img" aria-label="company">🏢</span> 
                <span> { exp.company } </span>
            </h4>
            <h4>
                <span role="img" aria-label="title">👷‍♂️</span> 
                <span> { exp.title } </span>
            </h4>
        </div>
    )
}


export const ExperienceDescriptionBody = ({ exp }) => {
  return (
    <div>
        <h5>
            <small>
                <span role="img"  aria-label="period">⌛</span> 
            </small>
            <small> { exp.from_month}</small> { exp.from_year } - 
            <small> { exp.to_month === undefined ? '' : exp.to_month }</small> { exp.to_year === undefined ? 'Actually' : exp.to_year }
        </h5>
        <h6>
            <small>
                <span role="img" aria-label="language">🗨</span> 
            </small>
            <span> { exp.language } </span>
        </h6>
        <h6>
            <small>
                <span role="img" aria-label="location">🌐</span> 
            </small>
            <span> { exp.location } </span>
        </h6>
        <h6>
            <small>
                <span role="img" aria-label="contract-type">🎲</span> 
            </small>
            <span> { exp.contract } </span>
        </h6>
    </div>
  )
}
