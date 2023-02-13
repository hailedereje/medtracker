import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import {expect} from '@jest/globals';
import Business from '../pages/Business'
import '@testing-library/jest-dom'


describe("Should render the compnents passed to the Business page", ()=>{
    it('All the components  are rendered',async () => { 
        
        const { getByTestId } = render(<Business />);
        const top = getByTestId("top-business")
        const middle = getByTestId("middle-business")
        const bottom = getByTestId("bottom-business")

        expect(top).toBeInTheDocument();
        expect(middle).toBeInTheDocument();
        expect(bottom).toBeInTheDocument();

     })
})