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

  const calculateMonthsEmployeed = ({ fromYear, fromMonth, limitDate }) => {
    const expFrom = new Date(fromYear, fromMonth - 1);

    let expTo;
    if(limitDate) {
        expTo = new Date(limitDate.year, limitDate.month -1);
    } else {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() +1;
        expTo = new Date(currentYear, currentMonth - 1);
    }

    const differenceYears = expTo.getFullYear() - expFrom.getFullYear();
    const differenceMonths = expTo.getMonth() - expFrom.getMonth();
    return differenceYears * 12 + differenceMonths;
  }

  const monthsEmployeed = calculateMonthsEmployeed({
    fromYear: exp.from.year,
    fromMonth: exp.from.month,
    limitDate: exp.to
  });

  const calculatePorcentage = () => {
    const totalMonths = calculateMonthsEmployeed({fromYear: 2016, fromMonth: 3});
    const porcentageResult = monthsEmployeed * 100 / totalMonths;
    return porcentageResult.toFixed(2);
  }

  return (
    <div>
        <h5>
            <small>
                <span role="img"  aria-label="period">⌛</span> 
            </small>
            <small> { exp.from.monthName }</small> { exp.from.year } - 
            <small> { exp.to?.monthName === undefined ? '' : exp.to.monthName }</small> { exp.to?.year === undefined ? 'Actually' : exp.to.year }
            <span className='white'> ({monthsEmployeed}m - {calculatePorcentage()}%)</span>
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
