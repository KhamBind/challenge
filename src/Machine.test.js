import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import Machine from './Machine'

const mockStore = configureStore([]);
describe('Machine React-Redux Component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            machine: {
            machine: {
                name: "Machine1",
                health: 50,
                ip_address: "127.0.0.1"
            },
        },
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <Machine match={{params: {machineid: "123456789"}}} />
            </Provider>
        );
    });
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});