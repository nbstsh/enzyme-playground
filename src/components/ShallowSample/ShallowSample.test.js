import React from 'react';

import { shallow } from 'enzyme';

import ShallowSample from './ShallowSample.component';
import Foo from '../Foo/Foo.component';
import Count from '../Count/Count.component';

describe('<ShallowSample />', () => {
	it('shold render h1 with text', () => {
		const wrapper = shallow(<ShallowSample />);

		expect(wrapper.contains(<h1>shallow rendering test sample</h1>)).toBe(
			true
		);
	});

	it('should render default message when name porp is not provided', () => {
		const wrapper = shallow(<ShallowSample />);
		expect(wrapper.find('.name').text()).toEqual('name was not provided!');
	});

	it('shloud render name provided as prop', () => {
		const name = 'dummy';
		const wrapper = shallow(<ShallowSample name={name} />);
		expect(wrapper.find('.name').text()).toEqual(name);
	});

	it('should render 4 <Foo />', () => {
		const wrapper = shallow(<ShallowSample />);
		expect(wrapper.find(Foo).length).toBe(4);
	});

	it('should contain <Count />', () => {
		const wrapper = shallow(<ShallowSample />);
		expect(wrapper.contains(<Count />)).toBe(true);
	});
});
