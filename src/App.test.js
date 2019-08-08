import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without creasing', () => {
	shallow(<App />);
});

it('renders welcome message', () => {
	const wrapper = shallow(<App />);

	const welcomeMessage = <h2>Welcome to React!!!</h2>;
	expect(wrapper.contains(welcomeMessage)).toEqual(true);

	// using jest-enzyme
	expect(wrapper).toContainReact(welcomeMessage);
});
