import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import  PageTwo from "./PageTwo"




describe("Testing Page Two", () => {

    beforeEach(() => {

        render(<PageTwo />);

    })

    const typeInput = (inputOne) => {

        const SalaryElement = screen.getByLabelText(/salaryInput/i)

        if (inputOne) {
            userEvent.type(SalaryElement, inputOne)
        }
        return {
            SalaryElement,
        }
    }

    test("Testing Salary Input", () => {
       
        const  {SalaryElement} = typeInput("2")
        expect(SalaryElement.value).toBe("2");

    })


    const salaryVal = require('./PageTwo');

    // salaryVal();

    
    test("Testing Tax Calculation", () => {
        
        const  {SalaryElement} = typeInput("15000");
        const TaxElement = screen.getByLabelText("salaryAfterTax");

       expect(TaxElement.textContent).toBe("R12300")

    })


    const ExpenseInputOne = (inputOne) => {

        const ExpenseName = screen.getByLabelText(/expenseName/i)

        if (inputOne) {
            userEvent.type(ExpenseName, inputOne)
        }
        return {
            ExpenseInputOne,
        }
    }

    const ExpenseInputTwo = (inputTwo) => {

        const ExpenseAmount = screen.getByLabelText(/expenseAmount/i)

        if (inputTwo) {
            userEvent.type(ExpenseAmount, inputTwo)
        }
        return {
            ExpenseInputTwo,
        }
    }

    // test("Testing Tax Calculation", () => {
        
        

    // })
    
    test("Testing Number Of Expenses", () => {
        
        const  {ExpenseName} = typeInput("Rent");
        const  {ExpenseAmount} = typeInput("7000");
            
        const AddButton = screen.getByRole('button', {name: /add/i});

        
        userEvent.click(AddButton);
        // console.log(ExpenseName)

        const NoExpenses = screen.getByLabelText(/numberOfExpenses/i)
        
        expect(NoExpenses.textContent).toBe("1")


    })

    test("Testing Sum Of Expenses", () => {
        
        // const  {ExpenseName} = typeInput("Coffee");
        // const  {ExpenseAmount} = typeInput("180");
            
        // const AddButton = screen.getByRole('button', {name: /add/i});

        
        // userEvent.click(AddButton);
        // // console.log(ExpenseName)

        const SumExpenses = screen.getByLabelText(/sumOfExpenses/i)
        
        expect(SumExpenses.textContent).toBe('R')


    })

    test("Testing Amount Left Over", () => {

        const  {SalaryElementOne} = typeInputOne("15000");
        const  {SalaryElementTwo} = typeInputTwo("30000");
        const CombinedSalary = screen.getByLabelText("combinedSalary");

        const  {ExpenseAmount} = typeInputTwo("7000");
            
        const AddButton = screen.getByRole('button', {name: /add/i});

        
        userEvent.click(AddButton);
        // console.log(ExpenseName)

        const NoExpenses = screen.getByLabelText(/numberOfExpenses/i)

        expect( CombinedSalary.textContent - ExpenseAmount).toBe('R39000')

        // expect(CombinedSalary.textContent).toBe("R36900")

    })

})