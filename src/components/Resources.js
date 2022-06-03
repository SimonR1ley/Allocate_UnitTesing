import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div>
            <h1 className='resource-heading'>Resources</h1>
            <div className='resource-con'>
                <h2 className='tax-info-heading'>Tax Brackets</h2>
                <p className='tax-info'>1 - 226 000	18% of taxable income</p>
                <p className='tax-info'>226 001 - 353 100 | 40 680 + 26% of taxable income above 226 000</p>
                <p className='tax-info'>353 101 - 488 700 | 73 726 + 31% of taxable income above 353 100</p>
                <p className='tax-info'>488 701 - 641 400 | 115 762 + 36% of taxable income above 488 700</p>
                <p className='tax-info'>641 401 - 817 600 | 170 734 + 39% of taxable income above 641 400</p>
                <p className='tax-info'>817 601 - 1 731 600 | 239 452  + 41% of taxable income above 817 600</p>
                <p className='tax-info'>1 731 601 and above |	614 192 + 45% of taxable income above 1 731 600</p>
            </div>
        </div>
    );
}

export default Resources;
