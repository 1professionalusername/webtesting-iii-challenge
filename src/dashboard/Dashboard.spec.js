// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each'

// Dashboard

// - shows the controls and display


describe('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<Dashboard />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Dashboard />);
        const closedbutton = getByText(/closed/i)
        expect(closedbutton).toBeInTheDocument();
    });
});
