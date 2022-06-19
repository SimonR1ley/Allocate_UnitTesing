import { render, screen } from "@testing-library/react"
import PageOne from './PageOne'

describe("Testing Page One", () => {
    
    beforeEach(() => {

        render(<PageOne />);

    })

    
    test("Testing To see if the heading is in the document", () => {

        const Heading = screen.getAllByText(/Welcome to Allocte/i)

    })

})