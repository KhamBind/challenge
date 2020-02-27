import React from 'react'
import renderer from 'react-test-renderer'
import Health from './Health'

describe('Health', () => {
    let component = null;

    it('renders correctly', () => {
        component = renderer.create(<Health />);
    });

    it('matches snapshot', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});