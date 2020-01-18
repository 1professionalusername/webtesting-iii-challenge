// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';


test("Controls renders correctly", () => {
    expect(render(<Controls />)).toMatchSnapshot();
    render(<Controls />);
});

test("toggles 'Closed' and 'Locked' states", () => {
    const { getByText } = render(
        <Controls />
    );
    getByText(/Lock Gate/)
    getByText(/Close Gate/)
})