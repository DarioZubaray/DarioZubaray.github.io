import React from 'react'
import { useTranslation } from 'react-i18next';

export const ExperienceDescriptionHeader = ({ exp }) => {
    const { t } = useTranslation();
    return (
        <div className="col">
            <h4>
                <span role="img" aria-label="company">🏢</span> 
                <span> { t(exp.companyKey) } </span>
            </h4>
            <h4>
                <span role="img" aria-label="title">👷‍♂️</span> 
                <span> { t(exp.titleKey) } </span>
            </h4>
        </div>
    )
}


export const ExperienceDescriptionBody = ({ exp }) => {
  const { t } = useTranslation();

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
            <small> { t(exp.from.monthNameKey) }</small> { exp.from.year } - 
            <small> { exp.to?.monthNameKey === undefined ? '' : t(exp.to.monthNameKey) }</small> { exp.to?.year === undefined ? t('experience.actually') : exp.to.year }
            <span className='white not-selectable'> ({monthsEmployeed}m - {calculatePorcentage()}%)</span>
        </h5>
        <h6>
            <small>
                <span role="img" aria-label="language">🗨</span> 
            </small>
            <span> { t(exp.languageKey) } </span>
        </h6>
        <h6>
            <small>
                <span role="img" aria-label="location">🌐</span> 
            </small>
            <span> { t(exp.locationKey) } </span>
        </h6>
        <h6>
            <small>
                <span role="img" aria-label="contract-type">🎲</span> 
            </small>
            <span> { t(exp.contractKey) } </span>
        </h6>
    </div>
  )
}
