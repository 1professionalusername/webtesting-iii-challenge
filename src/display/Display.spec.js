// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display'

// Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

describe('<Display/>', () => {
    it("should match snapshot", () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

test("When 'locked' or 'closed' use the red-led class", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);
    expect(locked).toHaveClass('red-led');
    expect(closed).toHaveClass('red-led');
});

test("When 'unlocked' or 'open' use the green-led class", () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked).toHaveClass('green-led');
    expect(open).toHaveClass('green-led');
});