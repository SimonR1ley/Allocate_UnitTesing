import React from 'react';
import '../Calculator.css';
import { useState } from "react";

const Calculator = () => {

    let valOne;
    let valTwo;
    let valThree;

    const [answer, setAnswer] = useState();


    const ValueOne = (e) => {

        const value = e.target.value;
        valOne = value;
        console.log(valOne)

    }


    const ValueThree = (e) => {

        const value = e.target.value;
        valThree = value;
        console.log(valThree)
    }

    // const Calc = () => {
    //     let answer = (valOne) (valTwo) (valThree);
    //     console.log(answer)
    // }


    const Add = () => {
        setAnswer((+valOne) + (+valThree));
        console.log(answer);
    }

    const Sub = () => {
        setAnswer((+valOne) - (+valThree));
         console.log(answer);
    }

    const Multiply = () => {
        setAnswer((+valOne) * (+valThree));
         console.log(answer);
    }

    const Divide = () => {
        setAnswer((+valOne) / (+valThree));
         console.log(answer);
    }





    return (
        <div>
            <h1 className='calculator-heading'>Calculator</h1>

            <div className='calculator-con'>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Value One</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input' onChange={ValueOne} type='number'></input>
                    </div>
                </div>

                <div className='value-con'>
                    <div className='calc-split-name'>
                        <p className='tag'>Value Two</p>
                    </div>
                    <div className='calc-split-input'>
                        <input className='value-input' onChange={ValueThree} type='number'></input>
                    </div>
                </div>

                <div className='value-con'>
                    <div className='calc-split-char'>
                        {/* <input className='value-input' onChange={ValueTwo} type='text'></input> */}
                        <div className='special-char-con'>
                            <button className='special-char left' onClick={Add}>+</button>
                            <button className='special-char' onClick={Sub}>-</button>
                            <button className='special-char' onClick={Multiply}>*</button>
                            <button className='special-char' onClick={Divide}>/</button>
                        </div>
                    </div>
                </div>

              

                {/* <button className='calculate'>Calculate</button> */}

                <div className='value-con answer-con'>
                    <div className='calc-split-answer'>
                        <p className='answer'>{answer}</p>
                    </div>
                    {/* <div className='calc-split-input'>
                        <input className='value-input'></input>
                    </div> */}
                </div>

            </div>
        </div >
    );
}

export default Calculator;
