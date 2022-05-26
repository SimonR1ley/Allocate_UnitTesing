import React from 'react';
import '../PageTwo.css';

const PageTwo = () => {
    return (
        <div>
            <h1 className='main-heading-pg2'>Expenses</h1>

            <div className='left-side'>

                <h3 className='add-expense-heading'>Add Expense</h3>
                <div className='add-expense-con'>
                    <p className='tag'>Name</p>
                    <input className='name-input'></input>
                </div>
                <div className='add-expense-con two'>
                    <p className='tag'>Amount</p>
                    <input className='name-input'></input>
                </div>
                <button className='submit-expense'>Add</button>


                {/* Expenses */}

                <h3 className='expense-heading'>Expenses</h3>

                <div className='expenses-container'>

                    <div className='expense-con'>
                        <div className='expense-split no'>
                            <p className='tag'>#</p>
                        </div>
                        <div className='expense-split'>
                            <p className='tag'>Name</p>
                        </div>
                        <div className='expense-split'>
                            <p className='tag'>Amount</p>
                        </div>
                        <div className='expense-split r-btn'>
                            <button className='remove-expense'>Remove</button>
                        </div>

                    </div>

                </div>


            </div>



            <div className='right-side'>

                <h3 className='overview-heading'>Overview</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R15000</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R15000</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Total Number of Expenses</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R15000</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Sum of Expenses</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R15000</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Amount Left Over</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R15000</p>
                    </div>
                </div>

            </div>



        </div>
    );
}

export default PageTwo;
