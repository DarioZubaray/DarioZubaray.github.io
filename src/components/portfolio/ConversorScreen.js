import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const ConversorScreen = () => {
  const { t } = useTranslation();
  const [ numbers, setNumber ] = useState({
    decimal: 0,
    binary: 0,
    octal: 0,
    hexa: 0
  });

  const onChangeHandleDecimal = (event) => {
    const number = Number(event.target.value);
    convertFromDecimal(number);
  }

  const convertFromDecimal = (num) => {
    const binary = num.toString(2);
    const octal = num.toString(8);
    const hexa = num.toString(16);
    setNumber({
      decimal: num,
      binary,
      octal,
      hexa
    });
  }

  const onChangeHandleBinary = (event) => {
    const newValue = event.target.value;
    if (!newValue.includes('0') || !newValue.includes('1')) return;
    const number = Number(newValue);
    const decimal = parseInt(number, 2);
    convertFromDecimal(decimal);
  }

  const onChangeHandleOctal = (event) => {
    const newValue = event.target.value;
    if (newValue.includes('8') || newValue.includes('9')) return;
    const number = Number(event.target.value);
    const decimal = parseInt(number, 8);
    convertFromDecimal(decimal);
  }

  const onChangeHandleHexa = (event) => {
    const number = event.target.value;
    const regex = /^[0-9A-Fa-f]+$/;
    if(!regex.test(number)) return;
    const decimal = parseInt(number, 16);
    convertFromDecimal(decimal);
  }

  const onClearHandle = () => {
    setNumber({
      decimal: 0,
      binary: 0,
      octal: 0,
      hexa: 0
    });
  }

  return (
    <div className='card'>
      <div className='card-body'>

        <h3>{t('conversor.title')}</h3>
        <hr/>

        <div className="form-group">

          <label htmlFor="decimalInput">{t('conversor.decimal')}</label>
          <input type="number"
                 onChange={ onChangeHandleDecimal }
                 value={ numbers.decimal }
                 className="form-control"
                 id="decimalInput"
                 aria-describedby="decimalHelp"
                  placeholder={t('conversor.decimalPlaceholder')}
          />
          <small id="decimalHelp" className="form-text text-muted">{t('conversor.decimalHelp')}</small>
        </div>
        <hr/>

        <div className="form-group">
          <label htmlFor="binaryOutput">{t('conversor.binary')}</label>
          <input type="number"
                 className="form-control"
                 id="binaryOutput"
                  placeholder={t('conversor.binaryPlaceholder')}
                 value={numbers.binary}
                 onChange={onChangeHandleBinary}
          />
        </div>

        <div className="form-group">
          <label htmlFor="octalOutput">{t('conversor.octal')}</label>
          <input type="number"
                 className="form-control"
                 id="octalOutput"
                  placeholder={t('conversor.octalPlaceholder')}
                 value={numbers.octal}
                 onChange={onChangeHandleOctal}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hexaOutput">{t('conversor.hexadecimal')}</label>
          <input type="text"
                 className="form-control"
                 id="hexaOutput"
                  placeholder={t('conversor.hexadecimalPlaceholder')}
                 value={numbers.hexa}
                 onChange={onChangeHandleHexa}
          />
        </div>

        <div>
          <Link to="/demo">
            <button className="btn btn-secondary mx-2">{t('conversor.back')}</button>
          </Link>
          <button type="button" className="btn btn-primary" onClick={onClearHandle}>{t('conversor.clear')}</button>
        </div>
        <hr/>
      </div>
    </div>
  )
}
