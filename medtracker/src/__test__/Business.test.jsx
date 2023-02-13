import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import {expect} from '@jest/globals';
import Business from '../pages/Business'
import '@testing-library/jest-dom'


describe("Should render the compnents passed to the Business page", ()=>{
    it('All the components  are rendered',async () => { 
        
        const { getByTestId } = render(<Business />);
        const top = getByTestId("btop")
        const middle = getByTestId("bmiddle")
        const bottom = getByTestId("bbottom")

        expect(top).toBeInTheDocument();
        expect(middle).toBeInTheDocument();
        expect(bottom).toBeInTheDocument();

     })
})