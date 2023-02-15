import {render} from '@testing-library/react'
import {expect} from '@jest/globals';
import '@testing-library/jest-dom'
import About from '../pages/About';

describe("About page components combine to make about", ()=>{
    it('All the components  are there',async () => { 
        
        const { getByTestId } = render(<About />);
        const top = getByTestId("atop")
        const middle = getByTestId("amiddle")
        const bottom = getByTestId("abottom")

        expect(top).toBeInTheDocument();
        expect(middle).toBeInTheDocument();
        expect(bottom).toBeInTheDocument();

     })
})