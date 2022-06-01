import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import  PageTwo from "./PageTwo"

describe("Testing Page Two", () => {

    beforeEach(() => {

        render(<PageTwo />);

    })

    const typeInput = (inputOne) => {

        const SalaryElement = screen.getByLabelText(/salary/i)

        if (inputOne) {
            userEvent.type(SalaryElement, inputOne)
        }
        return {
            SalaryElement,
        }
    }

    test("Testing Salary Input", () => {

        const  SalaryElement = typeInput(inputOne = "2")
        expect(SalaryElement.value).toBe("");

    })

    // test("test if values are updated correctly", () => {
    //     //2)select our components
    //     const SalaryElement = typeInput({ inpuOne: "2", inputTwo: "4" })

    //     // 4) check if it behaved as expected
    //     expect(SalaryElement.value).toBe("2");

    // })


})