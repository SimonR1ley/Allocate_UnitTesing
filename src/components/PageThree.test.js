import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import  PageThree from "./PageThree"

describe("Testing Page Three", () => {


    beforeEach(() => {

        render(<PageThree />);

    })

    const typeInputOne = (inputOne) => {

        // console.log(inputOne);

        const SalaryElementOne = screen.getByLabelText(/salaryOne/i)

        if (inputOne) {
            userEvent.type(SalaryElementOne, inputOne)
        }
        return {
            SalaryElementOne,
        }
    }

    test("Testing Salary Input One", () => {

        const  {SalaryElementOne} = typeInputOne("15000")
        expect(SalaryElementOne.value).toBe("15000");

    })


    const typeInputTwo = (inputTwo) => {

        const SalaryElementTwo = screen.getByLabelText(/salaryTwo/i)

        if (inputTwo) {
            userEvent.type(SalaryElementTwo, inputTwo)
        }
        return {
            SalaryElementTwo,
        }
    }

    test("Testing Salary Input Two", () => {

        const  {SalaryElementTwo} = typeInputTwo("20000")
        expect(SalaryElementTwo.value).toBe("20000");

    })

    test("Testing Salary One After Tax", () => {

        const  {SalaryElementOne} = typeInputOne("15000");
        const SalaryOneAfterTax = screen.getByLabelText("salary1AfterTax");
        expect(SalaryOneAfterTax.textContent).toBe("R12300")
    })

    test("Testing Salary Two After Tax", () => {

        const  {SalaryElementTwo} = typeInputTwo("20000");
        const SalaryTwoAfterTax = screen.getByLabelText("salary2AfterTax");
        expect(SalaryTwoAfterTax.textContent).toBe("R16400")
    })


    test("Testing Combined Salary", () => {
        
        const  {SalaryElementOne} = typeInputOne("15000");
        const  {SalaryElementTwo} = typeInputTwo("30000");
        const CombinedSalary = screen.getByLabelText("combinedSalary");

       expect(CombinedSalary.textContent).toBe("R36900")

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


    test("Testing Number Of Expenses", () => {
        
        const  {ExpenseName} = typeInputOne("Rent");
        const  {ExpenseAmount} = typeInputTwo("7000");
            
        const AddButton = screen.getByRole('button', {name: /add/i});

        
        userEvent.click(AddButton);
        // console.log(ExpenseName)

        const NoExpenses = screen.getByLabelText(/numberOfExpenses/i)
        
        expect(NoExpenses.textContent).toBe("1")


    })

    test("Testing Sum Of Expenses", () => {

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