import React from 'react';
import '../PageTwo.css';
import { useState } from "react";


const PageTwo = () => {

    const [inputs, setInputs] = useState([]);

    const [expenseName, setExpenseName] = useState("");
    // const [expenseAmount, setExpenseAmount] = useState();

    let expenseAmount;

    const [ExpenseItems, setExpenseItem] = useState();

    // let inputArray = inputs;


    const [sum, setSum] = useState();
    const [noExpenses, setNoExpenses] = useState();
    const [leftOver, setLeftOver] = useState();

    let newInputs;

    let sumCalc = 0;



    const [salary, setSalary] = useState();
    const [salaryAfterTax, setSalaryAfterTax] = useState();


    const salaryVal = (e) => {
        const value = e.target.value;
        setSalary(value);
        // console.log(value);
        // console.log("This is my Salary: R" + value);


        if (salary <= 226000) {

            let salaryDeduction = value * 0.18;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket One");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary > 226000 && salary < 353100) {

            let salaryDeduction = value * 0.26;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Two");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary > 353100 && salary < 488700) {

            let salaryDeduction = value * 0.31;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Three");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary > 488700 && salary < 641400) {

            let salaryDeduction = value * 0.36;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Four");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary > 641400 && salary < 817600) {

            let salaryDeduction = value * 0.39;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Five");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary > 817600 && salary < 1731600) {

            let salaryDeduction = value * 0.41;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Six");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }
        if (salary >= 1731600) {

            let salaryDeduction = value * 0.45;
            let salaryLeft = value - salaryDeduction;
            setSalaryAfterTax(salaryLeft);

            // console.log("Bracket Seven");

            // console.log("Taxed Amount: R" + salaryDeduction)
            // console.log("Salary After Tax: R" + salaryLeft)
        }


    }

   

    const expenseNameVal = (e) => {
        const value = e.target.value;
        setExpenseName(value);
        // console.log(inputs);
    }

    const expenseAmountVal = (e) => {
        const value = e.target.value;
        // setExpenseAmount(value);
        expenseAmount = value;
        // console.log(expenseAmount);


    }


    const deleteItem = (index) => {
        console.log(index);
        newInputs.splice(index, 1);
        console.log(ExpenseItems);

        const ExpenseItem = newInputs.map((item, index) => {
            const list = (
                <div className='expense-con render' key={index}>
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
                        <button className='remove-expense' onClick={() => deleteItem(index)}>Remove</button>
                    </div>
                </div>
            );
            return list;
        });


        setExpenseItem(ExpenseItem)

        console.log(inputs);

    }



    const addExpense = () => {


        // console.log(inputs);

        newInputs = [...inputs, { expenseName, expenseAmount }]
        setInputs(newInputs)

        setNoExpenses(newInputs.length);

        const ExpenseItem = newInputs.map((item, index) => {
            const list = (
                <div className='expense-con render' key={index}>
                    <div className='expense-split no'>
                        <p className='tag'>#</p>
                    </div>
                    <div className='expense-split'>
                        <p className='tag' aria-label='checkingExpenseName'>{item.expenseName}</p>
                    </div>
                    <div className='expense-split'>
                        <p className='tag'>R{item.expenseAmount}</p>
                    </div>
                    <div className='expense-split r-btn'>
                        <button className='remove-expense' onClick={() => deleteItem(index)}>Remove</button>
                    </div>
                </div>
            );
            return list;
        });


        setExpenseItem(ExpenseItem)


        // const result = inputs.map(element => {
        //     return element;
        // });

        // console.log(newInputs);



        for (var i = 0; i < newInputs.length; i++) {
            sumCalc = sumCalc + (+newInputs[i].expenseAmount);
            // noExpenses = i;
        }

        console.log(sumCalc);
        // console.log(noExpenses);

        // setNoExpenses(noExpenses);
        setSum(sumCalc);

        var lOver = salaryAfterTax - sumCalc;
        setLeftOver(lOver);

        // console.log(lOver);

    }



    // onClick={()=> deleteItem(index)}
    // splice()

    // screen.getByPlaceholderText('eg R15000')
    // screen.getByPlaceholderText(/eg R15000/i)







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
                            <input className='salary' placeholder='eg R15000' name="salary" aria-label='salaryInput' onChange={salaryVal} />
                        </div>

                    </div>

                </div>

                <h3 className='add-expense-heading'>Add Expense</h3>
                <div className='add-expense-con'>
                    <p className='tag '>Name</p>
                    <input className='name-input' onChange={expenseNameVal} aria-label='expenseName'></input>
                </div>
                <div className='add-expense-con two'>
                    <p className='tag'>Amount</p>
                    <input className='name-input' onChange={expenseAmountVal} aria-label='expenseAmount'></input>
                </div>
                <button className='submit-expense' onClick={addExpense} name='add'>Add</button>


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

                        {/* {arrayOfObjects.map(({ coffee, size }) => (
                            <p key={coffee}>Coffee type {coffee} in a {size} size.</p>
                        ))} */}

                    </div>

                    {ExpenseItems}
                </div>


            </div>



            <div className='right-side'>

                <h3 className='overview-heading'>Overview</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salary}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag' aria-label='salaryAfterTax'>R{salaryAfterTax}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Total Number of Expenses</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag' aria-label='numberOfExpenses'>{noExpenses}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Sum of Expenses</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag' aria-label='sumOfExpenses'>R{sum}</p>
                    </div>
                </div>

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Amount Left Over</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{leftOver}</p>
                    </div>
                </div>



              

            </div>



        </div>
    );
}

export default PageTwo;
