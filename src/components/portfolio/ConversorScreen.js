import React, { useState } from 'react';

export const ConversorScreen = () => {
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

        <h3>Numeric Conversor</h3>
        <hr/>

        <div className="form-group">

          <label htmlFor="decimalInput">Decimal</label>
          <input type="number"
                 onChange={ onChangeHandleDecimal }
                 value={ numbers.decimal }
                 className="form-control"
                 id="decimalInput"
                 aria-describedby="decimalHelp"
                 placeholder="Enter a decimal number"
          />
          <small id="decimalHelp" className="form-text text-muted">Input a regular number in base ten.</small>
        </div>
        <hr/>

        <div className="form-group">
          <label htmlFor="binaryOutput">Binary</label>
          <input type="number"
                 className="form-control"
                 id="binaryOutput"
                 placeholder="Binary" 
                 value={numbers.binary}
                 onChange={onChangeHandleBinary}
          />
        </div>

        <div className="form-group">
          <label htmlFor="octalOutput">Octal</label>
          <input type="number"
                 className="form-control"
                 id="octalOutput"
                 placeholder="Octal"
                 value={numbers.octal}
                 onChange={onChangeHandleOctal}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hexaOutput">Hexadecimal</label>
          <input type="text"
                 className="form-control"
                 id="hexaOutput"
                 placeholder="Hexadecimal"
                 value={numbers.hexa}
                 onChange={onChangeHandleHexa}
          />
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={onClearHandle}>Clear</button>
        </div>
        <hr/>
      </div>
    </div>
  )
}
