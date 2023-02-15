import {render} from '@testing-library/react'
import {expect} from '@jest/globals';
import Home from '../pages/Home'
import '@testing-library/jest-dom'


describe("Should render the compnents passed to the Home", ()=>{
    test('All Comonents are rendered',async () => { 
        
        const { getByTestId } = render(<Home />);
        const hero = getByTestId("hero")
        const service = getByTestId("services")
        const order = getByTestId("order")
        const hd = getByTestId("hero-card")

        expect(hero).toBeInTheDocument();
        expect(service).toBeInTheDocument();
        expect(order).toBeInTheDocument();
        expect(hd).toBeInTheDocument();
        

     })
})