import {act, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Button from './index'

test('Should not allowed click button if isDisabled is present', ()=>{
        render(<Button isDisabled></Button>);
        const spanElement = screen.getByTestId("disabled");
        expect(spanElement).toBeInTheDocument();
});

it('Should be display spinner loading if isLoading is present', ()=>{
        render(<Button isLoading></Button>);
        const spanElementSpinner = screen.getByTestId("spinnerLoading");
        const spanElementText = screen.getByTestId("textLoading");
        expect(spanElementSpinner&&spanElementText).toBeInTheDocument();
});

test('Should render tag <a> if type "link" and isExternal is present', ()=>{
        render(<Button type="link" isExternal></Button>)
        const linkElement = screen.getByTestId("linkExternal");
        expect(linkElement).toBeInTheDocument();
});

// it('Should render the <Link> element if type "link" and isExternal not present', async()=>{
//         render(<Button to="" type="link"></Button>)
//         const linkElement = await screen.findAllByTestId("linkInternal")
//         expect(linkElement).toBeInTheDocument();
// })