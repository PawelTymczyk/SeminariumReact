import React from 'react'
import { shallow } from 'enzyme'
import ToDo from './toDo'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe("ToDo", () => {

    // Najprostszy błędny test
    // it ("fallin test", () => {
    //     expect(false).toBeTruthy();
    // })

    // Najprostszy poprawny test
    it("passing test", () => {
        expect(true).toBeTruthy();
    })

    it('render component', async () => {
        const { getByText } = render(<ToDo></ToDo>)
        expect(getByText('Lorem ipsum')).toBeInTheDocument()
    });

    it('render component', async () => {
        const { getByLabelText, getByText } = render(<ToDo></ToDo>)
        const input = getByLabelText('input-new-task')

        fireEvent.change(input, { target: { value: 'Wyporwadzić psa' } })

        const text = await waitForElement(() =>
            getByText('Wyporwadzić psa')
        )

        expect(text).toBeInTheDocument()
    });    
})
