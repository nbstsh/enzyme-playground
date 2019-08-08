import React from 'react';

import { shallow } from 'enzyme';

import Count from './Count.component';

describe('<Count />', () => {
	it('shloud render span and button', () => {
		const wrapper = shallow(<Count />);
		expect(wrapper.find('span').length).toBe(1);
		expect(wrapper.find('button').length).toBe(1);
	});

	it('should display number of the count', () => {
		const wrapper = shallow(<Count />);
		expect(wrapper.find('span').text()).toEqual('0');
		wrapper.find('button').simulate('click');
		expect(wrapper.find('span').text()).toEqual('1');
	});
});
