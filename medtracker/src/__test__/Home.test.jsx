import {render, screen, fireEvent, getByTestId} from '@testing-library/react'
import {expect} from '@jest/globals';
import Home from '../pages/Home'
import '@testing-library/jest-dom'


describe("Should render the compnents passed to the Home", ()=>{
    test('All Comonents are rendered',async () => { 
        
        const { getByTestId } = render(<Home />);
        const hero = getByTestId("hero")
        const service = getByTestId("services")
        // const news = getByTestId("news")
        const order = getByTestId("order")
        const hd = getByTestId("hero-card")

        // expect(news).toBeInTheDocument();
        expect(hero).toBeInTheDocument();
        expect(service).toBeInTheDocument();
        expect(order).toBeInTheDocument();
        expect(hd).toBeInTheDocument();
        

     })
})