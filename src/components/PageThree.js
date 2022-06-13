import React from 'react';
// import '../PageTwo.css';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const PageThree = () => {

    const [inputs, setInputs] = useState([]);

    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");

    const [ExpenseItems, setExpenseItem] = useState();

    let inputArray = inputs;



    const [salaryOne, setSalaryOne] = useState();
    const [salaryAfterTaxOne, setSalaryAfterTaxOne] = useState();

    
    const [salaryTwo, setSalaryTwo] = useState();
    const [salaryAfterTaxTwo, setSalaryAfterTaxTwo] = useState();


    const salaryValOne = (e) => {
        const value = e.target.value;
        setSalaryOne(value);
        // console.log(value);
        // console.log("This is my Salary: R" + value);


        if (salaryOne <= 226000) {

            let salaryDeduction = value * 0.18;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket One");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne > 226000 && salaryOne < 353100) {

            let salaryDeduction = value * 0.26;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Two");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne > 353100 && salaryOne < 488700) {

            let salaryDeduction = value * 0.31;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Three");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne > 488700 && salaryOne < 641400) {

            let salaryDeduction = value * 0.36;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Four");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne > 641400 && salaryOne < 817600) {

            let salaryDeduction = value * 0.39;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Five");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne > 817600 && salaryOne < 1731600) {

            let salaryDeduction = value * 0.41;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Six");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryOne >= 1731600) {

            let salaryDeduction = value * 0.45;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxOne(salaryLeft);

            // console.log("Bracket Seven");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }

    }

    const salaryValTwo = (e) => {
        const value = e.target.value;
        setSalaryTwo(value);
        // console.log(value);
        // console.log("This is my Salary: R" + value);


        if (salaryTwo <= 226000) {

            let salaryDeduction = value * 0.18;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket One");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo > 226000 && salaryTwo < 353100) {

            let salaryDeduction = value * 0.26;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Two");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo > 353100 && salaryTwo < 488700) {

            let salaryDeduction = value * 0.31;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Three");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo > 488700 && salaryTwo < 641400) {

            let salaryDeduction = value * 0.36;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Four");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo > 641400 && salaryTwo < 817600) {

            let salaryDeduction = value * 0.39;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Five");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo > 817600 && salaryTwo < 1731600) {

            let salaryDeduction = value * 0.41;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Six");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salaryTwo >= 1731600) {

            let salaryDeduction = value * 0.45;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTaxTwo(salaryLeft);

            // console.log("Bracket Seven");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }

    }


    const expenseNameVal = (e) => {
        const value = e.target.value;
        setExpenseName(value);
        console.log(inputs);
    }

    const expenseAmountVal = (e) => {
        const value = e.target.value;
        setExpenseAmount(value);
        // console.log(inputs);
    }

    const addExpense = () => {

        console.log(inputs);

        let newInputs = [...inputs, { expenseName, expenseAmount }]


        const ExpenseItem = newInputs.map((item) => {
            const list = (
                <div className='expense-con render' key={item.expenseName + " R" + item.expenseAmount}>
                    <div className='expense-split no'>
                        <p className='tag'>#</p>
                    </div>
                    <div className='expense-split'>
                        <p className='tag'>{item.expenseName}</p>
                    </div>
                    <div className='expense-split'>
                        <p className='tag'>R{item.expenseAmount}</p>
                    </div>
                    <div className='expense-split r-btn'>
                        <button className='remove-expense'>Remove</button>
                    </div>
                </div>
            );
            return list;
        });

        setInputs(newInputs)

        setExpenseItem(ExpenseItem)


        const result = inputs.map(element => {
            return element;
        });

        console.log(result);


    }









    return (
        <div>
            <h1 className='main-heading-pg2'>Expenses</h1>


            <div className='left-side'>

                <div className='salary-con'>

                    <h3 className='add-salary-heading'>Add Salary</h3>

                    <div className='expense-con'>
                        <div className='salary-split'>
                            <h3 className='salary-heading'>Salary Input</h3>
                        </div>
                        <div className='salary-split-input'>
                            <input className='salary' placeholder='eg R15000' name="salary" aria-label="salaryInput" onChange={salaryValOne} />
                        </div>

                    </div>

                </div>


                <h3 className='add-salary-heading'>Salary One</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryOne}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryAfterTaxOne}</p>
                    </div>
                </div>




                <h3 className='add-expense-heading'>Add Expense</h3>
                <div className='add-expense-con'>
                    <p className='tag '>Name</p>
                    <input className='name-input' onChange={expenseNameVal}></input>
                </div>
                <div className='add-expense-con two'>
                    <p className='tag'>Amount</p>
                    <input className='name-input' onChange={expenseAmountVal}></input>
                </div>
                <button className='submit-expense' onClick={addExpense}>Add</button>


                <h3 className='overview-heading-two'>Overview</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryOne}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryAfterTaxOne}</p>
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



            <div className='right-side'>


                <div className='salary-con-two'>

                    <h3 className='add-salary-heading'>Add Salary Two</h3>

                    <div className='expense-con'>
                        <div className='salary-split'>
                            <h3 className='salary-heading'>Salary Input</h3>
                        </div>
                        <div className='salary-split-input'>
                            <input className='salary' placeholder='eg R15000' name="salary" aria-label="salaryInput" onChange={salaryValTwo} />
                        </div>

                    </div>

                </div>


                <h3 className='add-salary-heading'>Salary Two</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryTwo}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryAfterTaxTwo}</p>
                    </div>
                </div>


                <h3 className='expense-heading-two'>Expenses</h3>

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

                    {ExpenseItems}
                </div>



                <div className='chart-con-two'>
                    <h3 className='expense-chart-heading'>Expenses Chart</h3>
                    <div className="chart">
                        <Bar
                            data={{
                                labels: ["Unknown"],
                                datasets: [{
                                    label: 'Expenses',
                                    data: [1, 2, 3, 4, 5],
                                    backgroundColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={400}
                            width={700}
                            options={{
                                maintainAspectRatio: false, scales: {
                                    x: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    },
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    }
                                }
                            }
                            }
                        />

                    </div>
                </div>

            </div>



        </div>
    );
}

export default PageThree;