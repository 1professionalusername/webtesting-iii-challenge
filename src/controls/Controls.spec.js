// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';


// Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

test("Controls renders correctly", () => {
    expect(render(<Controls />)).toMatchSnapshot();
    render(<Controls />);
});

test("toggles 'Closed' and 'Locked' states", () => {
    const { getByText } = render(<Controls />);
    getByText(/Lock Gate/)
    getByText(/Close Gate/)
})

test("'Locked' button disabled if gate is 'Open'", () => {
    const { getByText } = render(
        <Controls closed={false} locked={false} />
    );
    const lockButton = getByText(/Lock Gate/);
    expect(lockButton.disabled).toBeTruthy();
})