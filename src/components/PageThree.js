import React from 'react';
// import '../PageTwo.css';
import { useState } from "react";


const PageThree = () => {

    const [inputs, setInputs] = useState([]);

    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");

    const [ExpenseItems, setExpenseItem] = useState();

    let inputArray = inputs;

    let newInputs;

    let sumCalc = 0;

    const [sum, setSum] = useState();
    const [noExpenses, setNoExpenses] = useState();
    const [leftOver, setLeftOver] = useState();


    const [salaryOne, setSalaryOne] = useState(0);
    const [salaryAfterTaxOne, setSalaryAfterTaxOne] = useState(0);

    
    const [salaryTwo, setSalaryTwo] = useState(0);
    const [salaryAfterTaxTwo, setSalaryAfterTaxTwo] = useState(0);


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

        setInputs(newInputs)

        setNoExpenses(newInputs.length);


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


        // const result = inputs.map(element => {
        //     return element;
        // });

        // console.log(result);



        for (var i = 0; i < newInputs.length; i++) {
            sumCalc = sumCalc + (+newInputs[i].expenseAmount);
            // noExpenses = i;
        }

        console.log(sumCalc);
        // console.log(noExpenses);

        // setNoExpenses(noExpenses);
        setSum(sumCalc);

        var lOver = combinedSalary - sumCalc;
        setLeftOver(lOver);

        // console.log(lOver);


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


    let combinedSalary = (parseInt(salaryAfterTaxOne)) + (parseInt(salaryAfterTaxTwo));

console.log(parseInt(combinedSalary));



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
                            <input className='salary' placeholder='R15000' name='salaryInputOne'  onChange={salaryValOne} aria-label='salaryOne'/>
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
                        <p className='tag' aria-label='salary1AfterTax'>R{salaryAfterTaxOne}</p>
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
                <button className='submit-expense' onClick={addExpense}>Add</button>


                <h3 className='overview-heading-two'>Overview</h3>

                <div className='overview-con'>
                    <div className='overview-split'>
                        <p className='tag'>Combined Salary</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag' aria-label='combinedSalary'>R{combinedSalary}</p>
                    </div>
                </div>

                {/* <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Salary After Tax</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'>R{salaryAfterTaxOne}</p>
                    </div>
                </div> */}

                <div className='overview-con ov-top'>
                    <div className='overview-split'>
                        <p className='tag'>Total Number of Expenses</p>
                    </div>
                    <div className='overview-split ov-right'>
                        <p className='tag'aria-label='numberOfExpenses'>{noExpenses}</p>
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



            <div className='right-side'>


                <div className='salary-con-two'>

                    <h3 className='add-salary-heading'>Add Salary Two</h3>

                    <div className='expense-con'>
                        <div className='salary-split'>
                            <h3 className='salary-heading'>Salary Input</h3>
                        </div>
                        <div className='salary-split-input'>
                            <input className='salary' placeholder='eg R15000' name='salary' onChange={salaryValTwo} aria-label='salaryTwo'/>
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
                        <p className='tag' aria-label='salary2AfterTax'>R{salaryAfterTaxTwo}</p>
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

            </div>



        </div>
    );
}

export default PageThree;
