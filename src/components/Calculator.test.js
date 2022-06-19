import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Calculator from "./Calculator"

describe("Testing Page Two", () => {

    beforeEach(() => {

        render(<Calculator />);

    })

    const typeInputOne = (valueOne) => {

        const CalcElementOne = screen.getByLabelText(/valueOne/i)

        if (valueOne) {
            userEvent.type(CalcElementOne, valueOne)
        }
        return {
            CalcElementOne,
        }
    }

    const typeInputTwo = (valueTwo) => {

        const CalcElementTwo = screen.getByLabelText(/valueTwo/i)

        if (valueTwo) {
            userEvent.type(CalcElementTwo, valueTwo)
        }
        return {
            CalcElementTwo,
        }
    }

    const typeInputThree = (valueThree) => {

        const CalcElementThree = screen.getByLabelText(/answer/i)

        if (valueThree) {
            userEvent.type(CalcElementThree, valueThree)
        }
        return {
            CalcElementThree,
        }

    }

    test("Testing Value One Input", () => {

        const { CalcElementOne } = typeInputOne("2")
        expect(CalcElementOne.value).toBe("2");

    })

    test("Testing Value Two Input", () => {

        const { CalcElementTwo } = typeInputTwo("2")
        expect(CalcElementTwo.value).toBe("2");

    })

})