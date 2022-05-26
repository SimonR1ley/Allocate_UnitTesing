import React from 'react';
import '../Calculator.css';

const Calculator = () => {
    return (
        <div>
            <h1 className='calculator-heading'>Calculator</h1>

            <div className='calculator-con'>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Value One</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input'></input>
                    </div>
                </div>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Value One</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input'></input>
                    </div>
                </div>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Value One</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input'></input>
                    </div>
                </div>

                <button className='calculate'>Calculate</button>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Equals</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input'></input>
                    </div>
                </div>
               
            </div>
        </div >
    );
}

export default Calculator;
